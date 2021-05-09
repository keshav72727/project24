class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            density:1.5,
            friction:0.5 
        }
        this.paper = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.paper);
    }
    display(){
        var pos = this.paper.position;
        ellipseMode(RADIUS);
        push();
        translate(pos.x,pos.y);
        fill("purple");
        ellipse(0,0,this.r);
        pop();
    }
}