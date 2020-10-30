let world
function setup() {
  createCanvas(1600,900);
world = new World()
  
let worldMap = {
  start : 0 ,
  end : width*6,
  roof : height*3,
  hell : -height*1
}

  for (let i = 0;i<1000;i++){
    if(random()<0.5)
    world.addObjects(new Box(random(worldMap.start+25,worldMap.end-25),random(worldMap.hell+25,worldMap.roof-25),50,50))
   else
    world.addObjects(new Ball(random(worldMap.start+50,worldMap.end-50),random(worldMap.hell+50,worldMap.roof-50),50))
  }
  world.addObjects(new Ball(50,height/2,50,color(255,0,0)))
  world.addObjects(new Ball(worldMap.end-50,height/2,50,color(0,255,0)))

     world.addObjects(new Box(25,worldMap.roof-25,50,50,color(255,0,0)))
     world.addObjects(new Box(worldMap.end-25,worldMap.roof-25,50,50,color(0,255,0)))
     world.addObjects(new Box(25,worldMap.hell+25,50,50,color(255,0,0)))
     world.addObjects(new Box(worldMap.end-25,worldMap.hell+25,50,50,color(0,255,0)))

}

function draw() {
  background(0);
  // if (cameraControl){
  //   cam.x+=mouseX - width/2
  //   cam.y+=height - (mouseY - height/2)
  // }
  // else{
  world.run()
  world.render()
  stroke(255,0,0)
  line(world.cam.scx,0,world.cam.scx,height)
  line(0,world.cam.scy,width,world.cam.scy)


  // rotate(PI)
}