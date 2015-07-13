var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Island Class ++++++++++++++++++++++++++++++++++++++
    var planet = (function (_super) {
        __extends(planet, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function planet(imageString) {
            _super.call(this, imageString);
            this.name = "island";
            this.sound = "yay";
            this.dy = 5;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        planet.prototype.checkBounds = function () {
            // check if island has left screen
            if (this.x > 640 + this.height) {
                this.reset();
            }
        };
        planet.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480); // start island at random location
            this.x = -this.width; // start island off stage
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        planet.prototype.update = function () {
            this.x += this.dy; // moves island down the stage
            this.checkBounds();
        };
        return planet;
    })(objects.GameObject);
    objects.planet = planet;
})(objects || (objects = {}));
//# sourceMappingURL=planet.js.map