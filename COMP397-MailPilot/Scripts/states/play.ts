module states {
    export class Play {

        constructor() {
            this.main();
        }


        public update() {


            rtrack.update();
            plane.update();
            point.update();

             fuel.update();
             collision.check(fuel);
                            
         
            for (var attacker = 0; attacker < 5; attacker++) {
                comcar[attacker].update();
                collision.check(comcar[attacker]);
            }


            collision.check(point);
            scoreboard.update();

        }

        public main() {
                       //add ocean object to stage
            rtrack = new objects.rtrack(assets.getResult("rtrack"));
            game.addChild(rtrack);

            //add island object to stage
            point = new objects.point(assets.getResult("point"));
            game.addChild(point);

            fuel = new objects.fuel(assets.getResult("fuel"));
            game.addChild(fuel);

            // add plane object to stage
            plane = new objects.Plane(assets.getResult("plane"));
            game.addChild(plane);

            // add 3 cloud objects to stage
            for (var cloud = 0; cloud < 5; cloud++) {
                comcar[cloud] = new objects.comcar(assets.getResult("comcar"));
                game.addChild(comcar[cloud]);
            }

            //add scoreboard
            scoreboard = new objects.ScoreBoard();

            //add collision manager
            collision = new managers.Collision();

            stage.addChild(game);

        }
    }
}
