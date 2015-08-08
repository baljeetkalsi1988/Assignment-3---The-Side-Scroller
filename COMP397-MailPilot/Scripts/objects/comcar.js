var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // spaceship Class ++++++++++++++++++++++++++++++++++++++
    var comcar = (function (_super) {
        __extends(comcar, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function comcar(imageString) {
            _super.call(this, imageString);
            this.name = "comcar";
            this.sound = "thunder";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        comcar.prototype.checkBounds = function () {
            // check if spaceship has left screen
            if (this.y > 480 + this.height) {
                this.reset();
            }
        };
        comcar.prototype.reset = function () {
            this.x = Math.floor(Math.random() * 640); // start spaceship at random location
            this.y = -this.width; // start spaceship off stage
            this.dy = Math.floor(Math.random() * 5) + 5;
            this.dx = Math.floor(Math.random() * 4) - 2;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        comcar.prototype.update = function () {
            if (this.x > 605) {
                this.x += -this.dx; // drifts cloud right and left  
                this.y += this.dy; // moves cloud down the stage
            }
            if (this.x < 65) {
                this.x += this.dx; // drifts cloud right and left
                this.y += this.dy; // moves cloud down the stage
            }
            else {
                this.y += this.dy; // moves cloud down the stage
                this.x += this.dx;
            }
            this.checkBounds();
        };
        return comcar;
    })(objects.GameObject);
    objects.comcar = comcar;
})(objects || (objects = {}));
//# sourceMappingURL=comcar.js.map