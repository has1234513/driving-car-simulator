class Road{
    constructor (x, width, laneCount=3 ) {
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x-width/2;
        this.right = x+width/2;

        const infinnity = 1000000;
        this.top = -infinnity;
        this.bottom = infinnity;

        const topLeft = {x:this.left, y:this.top};
        const topRight = {x:this.right, y:this.top};
        const bottomLeft = {x:this.left, y:this.bottom};
        const bottomRight = {x:this.right, y:this.bottom};

        this.borders = [
            [topLeft, bottomLeft],
            [topRight, bottomRight]
        ]
    }

    getLaneCenter(laneIndex) {
        const laneWidth = this.width/this.laneCount;
        return this.left+laneWidth/2+
            Math.min(laneIndex, this.laneCount-1)*laneWidth // ensures a return of lane x-value within road canvas
    }

    draw(ctx) {
        ctx.linewidth = 5;
        ctx.strokeStyle = "white";

        for (let i=1; i<=this.laneCount-1;i++) {
            //lerp => linear interpolation (calculates x posiiton of lanes)
            const x = lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
                
            //add dotted lines 
           
            ctx.setLineDash([20, 20]);
          

            // draw road lanes
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }

        ctx.setLineDash([]);

        this.borders.forEach(border => {
            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y)
            ctx.lineTo(border[1].x, border[1].y)
            ctx.stroke();
        })
    }
}