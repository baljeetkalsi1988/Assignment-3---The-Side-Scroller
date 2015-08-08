module objects {
    // planet Class ++++++++++++++++++++++++++++++++++++++
    export class point extends objects.GameObject {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "point";
            this.sound = "yay";
            this.dy = 5;

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if planet has left screen
            if (this.y > 600 + this.height) {
                this.reset();
            }
        }


        private reset(): void {
            this.x = Math.floor(Math.random() * 400); // start planet at random location
            this.y = -this.height; // start planet off stage
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y += this.dy; // moves island down the stage
            this.checkBounds();
        }
    }
} 