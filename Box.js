class Box{
    constructor(x,y,w,h,col)
    {
        if (col)
        this.col = col
        else
        this.col = color(255)
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
    computeCam(xpos,ypos,sx,sy){
        let showx =  (this.x-this.w/2)- xpos + sx
        let showy =height -  ((this.y + this.h/2) - ypos + sy)
        // console.log( showy)
        let dryc = showy+this.h/2

        let wsx = width - sx
        let hsy = height-sy
        let showw = this.w
        let showh = this.h
        let xdif = this.x - xpos
        let ydif = sy - dryc
        // console.log(ydif)
        // console.log(wsx,hsy,xdif,ydif)
        if(xdif-this.w/2<=wsx && xdif-wsx>=-this.w/2){
            showw = (this.w/2-(xdif - wsx))
            // console.log(showw,'X in')
        }
        else if(sx + xdif <= this.w/2 && sx + xdif >=-this.w/2){
            showx = 0
            showw = this.w/2 +sx + xdif
            // console.log(showw,'X in')

        }
        // console.log(-ydif - hsy,-ydif)
        if (ydif+this.h/2>=sy){
            showy = 0
            showh = this.h/2 + sy - ydif
            // console.log(showh)
        }

        else if((-ydif-this.h/2)<=hsy && ydif<0 && (-ydif - hsy)>=-this.h/2){
            // console.log('ddd')
            showh =  height - showy
        }
        
        
        return [showx,showy,showw,showh]
    }
    show(xpos,ypos,sx,sy){
        // console.log(this.x - xpos,this.y - ypos,In(this.x- xpos,-this.w/2,width +this.w/2)&& In(this.y- ypos,-this.h/2,height +this.h/2))
    
        if (In(this.x- xpos+sx,-this.w/2,width +this.w/2)&& In(this.y- ypos+ sy,-this.h/2,height +this.h/2)){
        push()
        stroke(0)
        
        fill(this.col)
        let ss = this.computeCam(xpos,ypos,sx,sy)
        // console.log(this.y - ypos)
        // console.log(ss)
        rect(ss[0],ss[1],ss[2],ss[3])
        
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
function In(x,x1,x2){
    if (x>x1 && x<x2){
        return true
    }
    else
    return false
}