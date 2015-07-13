var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Cloud Class ++++++++++++++++++++++++++++++++++++++
    var spaceship = (function (_super) {
        __extends(spaceship, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function spaceship(imageString) {
            _super.call(this, imageString);
            this.name = "cloud";
            this.sound = "thunder";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        spaceship.prototype.checkBounds = function () {
            // check if cloud has left screen
            if (this.x > 640 + this.height) {
                this.reset();
            }
        };
        spaceship.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480); // start cloud at random location
            this.x = -this.width; // start cloud off stage
            this.dx = Math.floor(Math.random() * 5) + 5;
            this.dy = Math.floor(Math.random() * 4) - 2;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        spaceship.prototype.update = function () {
            this.y += this.dy; // moves cloud down the stage
            this.x += this.dx; // drifts cloud right and left
            this.checkBounds();
        };
        return spaceship;
    })(objects.GameObject);
    objects.spaceship = spaceship;
})(objects || (objects = {}));
//# sourceMappingURL=spaceship.js.map