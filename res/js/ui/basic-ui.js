export class Cursor {
    constructor() {
        this.img = new Image();
        this.path = "./res/img/basic-ui/cursor.png";
        this.img.src = this.path;
        this.size = {
            width: 52,
            height: 52
        };
    }

    draw(ctx, x, y) {
        this.x = x - 2;
        this.y = y;
        ctx.drawImage(this.img, this.x, this.y, this.size.width, this.size.height);
    }
}

export class Background {
    constructor() {
        this.img = new Image();
        this.path = "./res/img/basic-ui/background.png";
        this.img.src = this.path;
    }

    draw(ctx, canvas) {
        ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height);
    }
}

export class Stats {
    constructor(name) {
        this.img = new Image();
        this.path = "./res/img/basic-ui/statsback.png";
        this.img.src = this.path;
        this.scale = 0.2;
        this.size = {
            width: 1067 * this.scale,
            height: 1280 * this.scale
        };
        this.name = name;
        this.year = 1;
        this.month = 9; 
        this.avg = 1.0;
        this.studentList = [];
        this.happ = 100;
        this.money = 100;  
    }

    draw(ctx, canvas) {
        ctx.drawImage(this.img, 50, canvas.height - this.size.height - 40, this.size.width, this.size.height);
        this.drawHapp(ctx, canvas);
        this.drawMoney(ctx, canvas);
        this.drawYear(ctx, canvas);
        this.drawStudents(ctx, canvas);
        this.drawAvg(ctx, canvas);
    }

    drawHapp(ctx, canvas) {
        ctx.font = "26px serif";
        ctx.fillStyle = "black";
        if (this.happ > 80) {
            ctx.fillText(`😊 ${this.happ}`, 100, canvas.height - this.size.height + 20);
        } else if (this.happ > 50) {
            ctx.fillText(`😐 ${this.happ}`, 100, canvas.height - this.size.height + 20);
        } else {
            ctx.fillText(`😡 ${this.happ}`, 100, canvas.height - this.size.height + 20);
        }
    }

    drawMoney(ctx, canvas) {
        ctx.font = "26px serif";
        ctx.fillStyle = "black";
        ctx.fillText(`🤑 ${this.money}`, 100, canvas.height - this.size.height + 60);
    }

    drawYear(ctx, canvas) {
        ctx.font = "26px serif";
        ctx.fillStyle = "black";
        ctx.fillText(`📅 ${this.year}:${this.month}`, 101, canvas.height - this.size.height + 100);
    }

    drawStudents(ctx, canvas) {
        ctx.font = "26px serif";
        ctx.fillStyle = "black";
        ctx.fillText(`🎓 ${this.studentList.length}`, 101, canvas.height - this.size.height + 140);
    }

    drawAvg(ctx, canvas) {
        ctx.font = "26px serif";
        ctx.fillStyle = "black";
        ctx.fillText(`📈 ${this.avg}`, 101, canvas.height - this.size.height + 180);
    }
}