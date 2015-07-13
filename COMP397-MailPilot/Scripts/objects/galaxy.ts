module objects {
    // galaxy Class ++++++++++++++++++++++++++++++++++++++
    export class galaxy extends createjs.Bitmap {
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
            if (this.x == 0) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = 0;
            this.x = -1280; // reset galaxy off screen
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x += this.dy; // moves galaxy down the stage
            this.checkBounds();
        }
    }
}  