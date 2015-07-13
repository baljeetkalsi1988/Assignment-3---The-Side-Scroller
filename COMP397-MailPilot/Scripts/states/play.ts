module states {
    export class Play {

        constructor() {
            this.main();
        }


        public update() {


            galaxy.update();
            plane.update();
            planet.update();

            var ran = Math.floor(Math.random() * 10);
            if (ran < 4) {
                fuel.update();
                collision.check(fuel);
                            }
         
            for (var attacker = 0; attacker < 5; attacker++) {
                spaceship[attacker].update();
                collision.check(spaceship[attacker]);
            }


            collision.check(planet);
            scoreboard.update();

        }

        public main() {
                       //add ocean object to stage
            galaxy = new objects.galaxy(assets.getResult("ocean"));
            game.addChild(galaxy);

            //add island object to stage
            planet = new objects.planet(assets.getResult("island"));
            game.addChild(planet);

            fuel = new objects.fuel(assets.getResult("fuel"));
            game.addChild(fuel);

            // add plane object to stage
            plane = new objects.Plane(assets.getResult("plane"));
            game.addChild(plane);

            // add 3 cloud objects to stage
            for (var cloud = 0; cloud < 5; cloud++) {
                spaceship[cloud] = new objects.spaceship(assets.getResult("cloud"));
                game.addChild(spaceship[cloud]);
            }

            //add scoreboard
            scoreboard = new objects.ScoreBoard();

            //add collision manager
            collision = new managers.Collision();

            stage.addChild(game);

        }
    }
}
