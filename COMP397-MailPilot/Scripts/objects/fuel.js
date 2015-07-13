var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Island Class ++++++++++++++++++++++++++++++++++++++
    var fuel = (function (_super) {
        __extends(fuel, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function fuel(imageString) {
            _super.call(this, imageString);
            this.name = "fuel";
            this.sound = "yay";
            this.dy = 6;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        fuel.prototype.checkBounds = function () {
            // check if fuel has left screen
            if (this.x > 640 + this.height) {
                this.reset();
            }
        };
        fuel.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 480); // start island at random location
            this.x = -this.width; // start island off stage
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        fuel.prototype.update = function () {
            this.x += this.dy; // moves island down the stage
            this.checkBounds();
        };
        return fuel;
    })(objects.GameObject);
    objects.fuel = fuel;
})(objects || (objects = {}));
//# sourceMappingURL=fuel.js.map