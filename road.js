class Road{
    constructor (x, width, laneCount=3 ) {
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x - width/2;
        this.right = x + width/2;

        const infinnity = 10000000;
        this.top = -infinnity;
        this.bottom = infinnity;
    }

    draw(ctx) {
        ctx.linewidth = 5;
        ctx.strokeStyle = "white";

        for (let i=0; i<=this.laneCount;i++) {
            //lerp => linear interpolation (calculates x posiiton of lanes)
            const x = lerp(
                this.left,
                this.right,
                i/this.laneCount
            );

            //add dotted lines 
            if (i>0 && i<this.laneCount) {
                ctx.setLineDash([10, 10]);
            } else {
                ctx.setLineDash([]);
            }

            // draw road lanes
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }
    }
}