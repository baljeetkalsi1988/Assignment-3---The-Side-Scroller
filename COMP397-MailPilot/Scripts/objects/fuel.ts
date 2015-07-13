module objects {
    // Island Class ++++++++++++++++++++++++++++++++++++++
    export class fuel extends objects.GameObject {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "fuel";
            this.sound = "yay";
            this.dy = 6;

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if fuel has left screen
            if (this.x > 640 + this.height) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = Math.floor(Math.random() * 480); // start island at random location
            this.x = -this.width; // start island off stage
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

           

                this.x += this.dy; // moves island down the stage
                this.checkBounds();
            }        
    }
} 