class Drops{
    constructor(x,y){
    var options = { 
        'restitution': 1,
        'friction': 1
    }

        this.body = Bodies.circles(x,y,20,options);

    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
    }
   
    
}
