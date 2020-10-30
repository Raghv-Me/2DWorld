class Camera{
    constructor(xs,ys,parWorld){
        this.par = parWorld
        this.xs = xs
        this.ys = ys
        this.scx = width/5
        this.scy =height - height/4
        this.x = this.scx
        this.y = this.scy
    }
    showWorld(objs){
        for (let i of objs){
            i.show(this.x,this.y,this.scx,this.scy)
        }
        // 
    }
    update(){
        this.x = this.xs.value()
        this.x = constrain(this.x,this.par.world.start+this.scx,this.par.world.end-(width-this.scx))
        this.y = this.ys.value()
        this.y = constrain(this.y,this.par.world.hell+this.scy,this.par.world.roof-(height-this.scy))

    }
}
