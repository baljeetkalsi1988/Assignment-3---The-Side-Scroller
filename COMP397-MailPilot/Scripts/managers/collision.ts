module managers {
    export class Collision {
        //CONSTRUCTOR +++++++++++++++++++++++++++
        constructor() {
        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // check the distance between car and any other game object
        public check(gameObject: objects.GameObject) {
        var p1: createjs.Point = new createjs.Point();
        var p2: createjs.Point = new createjs.Point();

        p1.x = plane.x;
        p1.y = plane.y;

        p2.x = gameObject.x;
        p2.y = gameObject.y;


        if (utility.distance(p1, p2) < ((plane.height * 0.5) + (gameObject.height * 0.5))) {
            if (gameObject.isColliding == false) {
                createjs.Sound.play(gameObject.sound);
                if (gameObject.name == "cloud") {
                    scoreboard.lives--;

                    if (scoreboard.lives < 1)
                    {
                        currentState = constants.GAME_OVER_STATE;
                        gameover.gameend();
                    }
                }
                if (gameObject.name == "island") {
                    scoreboard.score += 100;
                }
                if (gameObject.name == "fuel") {
                    scoreboard.lives += 1;
                }


            }
            gameObject.isColliding = true;

        }
        else {
            gameObject.isColliding = false;
        }
    }


    }
} 