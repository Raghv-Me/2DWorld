class Ball{
    constructor(x,y,rad,col)
    {
        if (col)
        this.col = col
        else
        this.col = color(255)
        this.x = x
        this.y = y
        this.rad = rad
    }
    computeCam(xpos,ypos,sx,sy){
        let showx =  (this.x)- xpos + sx
        let showy =height -  ((this.y) - ypos + sy)
        // console.log( showy)
        
        
        return [showx,showy]
    }
    show(xpos,ypos,sx,sy){
        // console.log(this.x - xpos,this.y - ypos,In(this.x- xpos,-this.w/2,width +this.w/2)&& In(this.y- ypos,-this.h/2,height +this.h/2))
    
        if (In(this.x- xpos+sx,-this.rad,width +this.rad)&& In(this.y- ypos+ sy,-this.rad,height +this.rad)){
        push()
        stroke(0)
        
        fill(this.col)
        let ss = this.computeCam(xpos,ypos,sx,sy)
        // console.log(this.y - ypos)
        // console.log(ss)
        circle(ss[0],ss[1],this.rad*2)
        
        // stroke(0,255,0)
        // text(round(dist(ss[0]+this.w/2+20,this.h/2+ss[1],ss[0]+this.w/2+20,sy).toString(),2),ss[0]+this.w/2+20+20,(sy+this.h/2+ss[1])/2)
        // line(ss[0]+this.w/2+20,this.h/2+ss[1],ss[0]+this.w/2+20,sy)
        // strokeWeight(5)
        // // point(ss[0]+this.w/2,this.h/2+ss[1])
        //     let p = World.worldtoscreen(this.x,this.y,xpos-sx,ypos-sy)
        //     // console.log(p)
        //     point(p[0],p[1])

        pop()
    }
    }
    update(){}
}