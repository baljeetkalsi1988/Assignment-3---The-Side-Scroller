/// <reference path="constants.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/fuel.ts" />
/// <reference path="objects/rtrack.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/point.ts" />
/// <reference path="objects/comcar.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/gameover.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
var assets;
var game;
var menus;
var play;
var gameover;
var menuLabel;
var endLabel;
var manifest = [
    { id: "rtrack", src: "assets/images/rtrack.gif" },
    { id: "plane", src: "assets/images/plane.png" },
    { id: "mm", src: "assets/images/mm.png" },
    { id: "sg", src: "assets/images/sg.png" },
    { id: "point", src: "assets/images/point.png" },
    { id: "fuel", src: "assets/images/fuel.png" },
    { id: "comcar", src: "assets/images/comcar.png" },
    { id: "yay", src: "assets/audio/yay.ogg" },
    { id: "thunder", src: "assets/audio/thunder.ogg" },
    { id: "engine", src: "assets/audio/engine.ogg" }
];
// Game Variables
var rtrack;
var plane;
var point;
var fuel;
var comcar = [];
var scoreboard;
// Game Managers
var collision;
var powerbutton;
var currentState;
var currentStateFunction;
// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}
// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop);
    currentState = constants.MENU_STATE;
    //changeState(currentState);
    // calling main game function
    main();
}
// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '10px';
    document.body.appendChild(stats.domElement);
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    switch (currentState) {
        case constants.MENU_STATE:
            menus.menushow();
            break;
        case constants.PLAY_STATE:
            // instantiate play screen
            play.update();
            break;
        case constants.GAME_OVER_STATE:
            // instantiate play screen
            gameover.gameend();
            break;
    }
    // play.update();
    stage.update();
    stats.end(); // end measuring
}
// Our Main Game Function
function main() {
    game = new createjs.Container();
    menus = new states.menu();
    play = new states.Play();
    gameover = new states.gameover();
    stage.addChild(game);
}
/*
function changeState(state: number): void {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menu;
            states.menu;
            break;

        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.menu;
            states.Play;
            break;

       case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
    }
} */ 
//# sourceMappingURL=game.js.map