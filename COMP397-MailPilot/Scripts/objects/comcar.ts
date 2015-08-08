module objects {
    // spaceship Class ++++++++++++++++++++++++++++++++++++++
    export class comcar extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "comcar";
            this.sound = "thunder";

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if spaceship has left screen
            if (this.y > 480 + this.height) {
                this.reset();
            }
        }


        private reset(): void {
            this.x = Math.floor(Math.random() * 640); // start spaceship at random location
            this.y = -this.width; // start spaceship off stage
            this.dy = Math.floor(Math.random() * 5) + 5;
            this.dx = Math.floor(Math.random() * 4) - 2;
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            if (this.x > 605) {// height less than 

                this.x += -this.dx; // drifts cloud right and left  
                this.y += this.dy; // moves cloud down the stage
            }

            if (this.x < 65) {// height less than 
                this.x += this.dx; // drifts cloud right and left
                this.y += this.dy; // moves cloud down the stage
            }
            else {
                this.y += this.dy; // moves cloud down the stage
                this.x += this.dx;
            }
            

            this.checkBounds();
        }
    }
}  