"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.IdCard = void 0;
var Product_1 = require("./Product");
var IdCard = /** @class */ (function (_super) {
    __extends(IdCard, _super);
    function IdCard(owner) {
        var _this = _super.call(this) || this;
        console.log(owner + " \u3055\u3093\u306E\u30AB\u30FC\u30C9\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002");
        _this.owner = owner;
        return _this;
    }
    IdCard.prototype.use = function () {
        console.log(this.owner + " \u3055\u3093\u306E\u30AB\u30FC\u30C9\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002");
    };
    return IdCard;
}(Product_1.Product));
exports.IdCard = IdCard;
