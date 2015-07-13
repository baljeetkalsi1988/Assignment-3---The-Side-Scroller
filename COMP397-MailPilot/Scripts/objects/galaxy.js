var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // galaxy Class ++++++++++++++++++++++++++++++++++++++
    var galaxy = (function (_super) {
        __extends(galaxy, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function galaxy(imageString) {
            _super.call(this, imageString);
            this.dy = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        galaxy.prototype.checkBounds = function () {
            // check if galaxy has left screen
            if (this.x == 0) {
                this.reset();
            }
        };
        galaxy.prototype.reset = function () {
            this.y = 0;
            this.x = -1280; // reset galaxy off screen
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        galaxy.prototype.update = function () {
            this.x += this.dy; // moves galaxy down the stage
            this.checkBounds();
        };
        return galaxy;
    })(createjs.Bitmap);
    objects.galaxy = galaxy;
})(objects || (objects = {}));
//# sourceMappingURL=galaxy.js.map