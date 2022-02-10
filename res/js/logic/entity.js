export class Entity {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.size = {
            width: w,
            height: h
        };
        this.c = c;
    }

    draw(ctx) {
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.size.width, this.size.height);
    }
}