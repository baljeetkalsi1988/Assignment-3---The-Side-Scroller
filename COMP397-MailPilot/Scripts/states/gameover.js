var states;
(function (states) {
    var gameover = (function () {
        function gameover() {
        }
        gameover.prototype.gameend = function () {
            game.removeAllChildren();
            game.removeAllEventListeners();
            galaxy = new objects.galaxy(assets.getResult("ocean"));
            game.addChild(galaxy);
            endLabel = new objects.Label("Sorry You Lost!!!! ", 380, 100, true);
            game.addChild(endLabel);
            //Adding Power image
            //game.removeChild(powerbutton);
            powerbutton = new createjs.Bitmap(assets.getResult("sg"));
            powerbutton.regX = powerbutton.getBounds().width * 0.5;
            powerbutton.regY = powerbutton.getBounds().height * 0.5;
            powerbutton.x = 350;
            ;
            powerbutton.y = 200;
            game.addChild(powerbutton);
            powerbutton.on("click", endButtonClicked, this);
            stage.addChild(game);
        };
        return gameover;
    })();
    states.gameover = gameover;
    function endButtonClicked(event) {
        stage.removeChild(game);
        //plane.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        //gameLoop();
        menus.menushow();
    }
    states.endButtonClicked = endButtonClicked;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map