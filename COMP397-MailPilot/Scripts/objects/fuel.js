var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // fuel Class ++++++++++++++++++++++++++++++++++++++
    var fuel = (function (_super) {
        __extends(fuel, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function fuel(imageString) {
            _super.call(this, imageString);
            this.name = "fuel";
            this.sound = "yay";
            this.dy = 6;
            // this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        fuel.prototype.checkBounds = function () {
            // check if fuel has left screen
            if (this.y > 600 + this.height) {
                this.reset();
            }
        };
        fuel.prototype.reset = function () {
            if (scoreboard.checkscore()) {
                this.x = Math.floor(Math.random() * 400); // start fuel at random location
                this.y = -this.height; // start fuel off stage
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        fuel.prototype.update = function () {
            this.y += this.dy; // moves fuel down the stage
            this.checkBounds();
        };
        return fuel;
    })(objects.GameObject);
    objects.fuel = fuel;
})(objects || (objects = {}));
//# sourceMappingURL=fuel.js.map