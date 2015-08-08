module objects {
    export class Label extends createjs.Text {
        constructor(labelText: string, x: number, y: number, centered: boolean) {
            super(labelText, "10px" + " " + "Consolas", "#FFFFFF");

            if (centered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }

            this.x = x;
            this.y = y;
        }
    }
} 