"use strict";
exports.__esModule = true;
exports.Factory = void 0;
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.create = function (owner) {
        var p = this.createProduct(owner);
        this.registerProduct(p);
        return p;
    };
    return Factory;
}());
exports.Factory = Factory;
