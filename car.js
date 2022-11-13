class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.angle = 0;

        this.controls = new Controls()
    }

    update() {
       this.#move()
    }

    #move() {
         // forward motion
         if (this.controls.forward) {
            this.speed += this.acceleration;
        }

        // backward motio
        if ( this.controls.reverse) {
            this.speed -= this.acceleration;
        }

        // enforce forward maxSpeed
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }

        // enforce reverse maxSpeed
        if (this.speed < -this.maxSpeed/2) {
            this.speed = -this.maxSpeed/2;
        }

        // enforce friction going forward
        if (this.speed > 0) {
            this.speed -= this.friction
        }

        // enforce friction going backward
        if (this.speed < 0) {
            this.speed += this.friction
        }

        // when no keys pressed friction still affects speed, fixed
        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0
        }
        

        if (this.speed !=0 ) {

            //if flip is negative, car won't rotate() 
            const flip = this.speed > 0 ? 1 : -1;
            
            // rotates car to left
            if (this.controls.left) {
                this.angle += 0.03*flip;
            }
            
            //rotates car to right
            if (this.controls.right) {
                this.angle -= 0.03*flip;
            }
        }

        this.x -= Math.sin(this.angle)*this.speed;
        this.y -= Math.cos(this.angle)*this.speed;
   
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        //build rectangle
        ctx.rect(  
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        )
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.restore();
    }
}