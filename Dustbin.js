class Dustbin{
    constructor(){
        var options = {
            isStatic: true
        }
        this.bottomBody = Bodies.rectangle(475, 640, 100, 20, options);
        this.width1 = 100;
        this.height1 = 20;
        

        this.leftBody = Bodies.rectangle(490, 490, 1, 150,options);
        this.width = 20;
        this.height = 150;

        this.rightBody = Bodies.rectangle(610, 490, 1, 150,options);
        this.width = 20;
        this.height = 150;

        this.image = loadImage("dustbingreen.png");

        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }
    display(){
        //var pos = this.body.position;
        rectMode(CENTER);
        rect(this.leftBody.position.x, this.leftBody.position.y, this.width, this.height);
        rect(this.rightBody.position.x, this.rightBody.position.y, this.width, this.height);

        image(this.image, 475, 400, 150, 170);
    }
}