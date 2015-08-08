var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // galaxy Class ++++++++++++++++++++++++++++++++++++++
    var rtrack = (function (_super) {
        __extends(rtrack, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function rtrack(imageString) {
            _super.call(this, imageString);
            this.dy = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        rtrack.prototype.checkBounds = function () {
            // check if galaxy has left screen
            if (this.y == 0) {
                this.reset();
            }
        };
        rtrack.prototype.reset = function () {
            this.x = 0;
            this.y = -200; // reset galaxy off screen
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        rtrack.prototype.update = function () {
            this.y += this.dy; // moves galaxy down the stage
            this.checkBounds();
        };
        return rtrack;
    })(createjs.Bitmap);
    objects.rtrack = rtrack;
})(objects || (objects = {}));
//# sourceMappingURL=galaxy.js.map