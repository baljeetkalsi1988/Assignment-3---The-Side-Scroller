module states {

    export class menu
    {
        constructor() { }

        public menushow()
        {
            game.removeAllChildren();
            game.removeAllEventListeners();
           
           
            rtrack = new objects.rtrack(assets.getResult("rtrack"));
            game.addChild(rtrack);

            //add planet object to stage
            point = new objects.point(assets.getResult("point"));
            game.addChild(point);

            // add plane object to stage
            plane = new objects.Plane(assets.getResult("plane"));
            game.addChild(plane);
            menuLabel = new objects.Label("Universal War \n To Play \n Press Start", 275, 100, true); 

            game.addChild(menuLabel);

            //Adding Power image
            //game.removeChild(powerbutton);
            powerbutton = new createjs.Bitmap(assets.getResult("mm"));
            powerbutton.regX = powerbutton.getBounds().width * 0.5;
            powerbutton.regY = powerbutton.getBounds().height * 0.5;
            powerbutton.x = 275;
            powerbutton.y = 200;
            powerbutton.on("click", playButtonClicked, this);
            game.addChild(powerbutton);

            stage.addChild(game);

                    
        }

       
    }

    export function playButtonClicked(event: createjs.MouseEvent) {
        stage.removeChild(game);
        //plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
       
        play.main();
        play.update();

                                    }

}

