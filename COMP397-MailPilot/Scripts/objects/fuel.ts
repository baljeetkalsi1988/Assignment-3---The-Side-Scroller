module objects {
    // fuel Class ++++++++++++++++++++++++++++++++++++++
    export class fuel extends objects.GameObject {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "fuel";
            this.sound = "yay";
            this.dy = 6;

           // this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if fuel has left screen
            if (this.y > 600 + this.height) {
               
                 this.reset();
            }
        }


        public reset(): void {
            if (scoreboard.checkscore())// Check socre used to find the score total
            {
                this.x = Math.floor(Math.random() * 400); // start fuel at random location
                this.y = -this.height; // start fuel off stage
            }
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y += this.dy; // moves fuel down the stage
                this.checkBounds();
            }        
    }
} 