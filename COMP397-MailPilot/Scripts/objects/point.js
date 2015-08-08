var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // planet Class ++++++++++++++++++++++++++++++++++++++
    var point = (function (_super) {
        __extends(point, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function point(imageString) {
            _super.call(this, imageString);
            this.name = "point";
            this.sound = "yay";
            this.dy = 5;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        point.prototype.checkBounds = function () {
            // check if planet has left screen
            if (this.y > 600 + this.height) {
                this.reset();
            }
        };
        point.prototype.reset = function () {
            this.x = Math.floor(Math.random() * 400); // start planet at random location
            this.y = -this.height; // start planet off stage
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        point.prototype.update = function () {
            this.y += this.dy; // moves island down the stage
            this.checkBounds();
        };
        return point;
    })(objects.GameObject);
    objects.point = point;
})(objects || (objects = {}));
//# sourceMappingURL=point.js.map