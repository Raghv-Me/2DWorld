class World{
    constructor(){
        let worldMap = {
            start : 0 ,
            end : width*6,
            roof : height*3,
            hell : -height*1
          }
          this.world = worldMap
  let worldx = createSlider(worldMap.start,worldMap.end)
  worldx.size(400,30)
  let worldy = createSlider(worldMap.hell,worldMap.roof)
  worldy.size(400,30)
        this.cam = new Camera(worldx,worldy,this)
        this.objects =[]
    }
    render(){
        this.cam.showWorld(this.objects)
    }
    addObjects(o){
        this.objects.push(o)
    }
    run(){
        this.cam.update()
        for(let _ of this.objects){
            _.update()
        }
    }
    static worldtoscreen(x,y,x1,y2){
        return [x -x1,height - (y - y2)]
    }
}