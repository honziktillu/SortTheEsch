export class Entity {
    constructor(c, name, storyLines) {
        this.mX = 900;
        this.mY = 400;
        this.x = 1280;
        this.y = 400;
        this.v = .5;
        this.name = name;
        this.storyLines = storyLines;
        this.size = {
            width: 100,
            height: 200
        };
        this.c = c;
    }

    draw(ctx) {
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.size.width, this.size.height);
    }

    enter() {
        this.interval = setInterval(() => {
            this.x--;
            if (this.x == this.mX) {
                clearInterval(this.interval);
                setTimeout(() => {
                    this.leave();
                }, 5000);
            }
        }, 1);
    }

    leave() {
        this.interval = setInterval(() => {
            this.x++;
            if (this.x == 1280) clearInterval(this.interval);
        }, 1);
    }

    showDialog() {}

    hideDialog() {}
}