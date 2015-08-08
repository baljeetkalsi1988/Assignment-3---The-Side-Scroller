module objects {
    // galaxy Class ++++++++++++++++++++++++++++++++++++++
    export class rtrack extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        width: number;
        height: number;
        dy: number = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if galaxy has left screen
            if (this.y == 0) {
                this.reset();
            }
        }


        private reset(): void {
            this.x = 0;
            this.y = -200; // reset galaxy off screen
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y += this.dy; // moves galaxy down the stage
            this.checkBounds();
        }
    }
}  