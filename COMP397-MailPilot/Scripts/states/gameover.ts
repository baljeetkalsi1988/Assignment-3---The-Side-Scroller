module states {
    export class gameover {
        constructor() { }

        public gameend() {

            game.removeAllChildren();
            game.removeAllEventListeners();

            rtrack = new objects.rtrack(assets.getResult("rtrack"));
            game.addChild(rtrack);

            endLabel = new objects.Label("Sorry You Lost!!!! ", 380, 100, true);

            game.addChild(endLabel);
            //Adding Power image
            //game.removeChild(powerbutton);
            powerbutton = new createjs.Bitmap(assets.getResult("sg"));
            powerbutton.regX = powerbutton.getBounds().width * 0.5;
            powerbutton.regY = powerbutton.getBounds().height * 0.5;
            powerbutton.x = 350;;
            powerbutton.y = 200;
            game.addChild(powerbutton);
            powerbutton.on("click", endButtonClicked, this);
           

            stage.addChild(game);


        }


    }

    export function endButtonClicked(event: createjs.MouseEvent) {
        stage.removeChild(game);
        //plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        //gameLoop();
        menus.menushow();

    }

}

