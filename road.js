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

        ctx.beginPath();
        ctx.moveTo(this.left, this.top);
        ctx.lineTo(this.left, this.bottom);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.right, this.top);
        ctx.lineTo(this.right, this.bottom);
        ctx.stroke();
    }
}