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
exports.IdCardFactory = void 0;
var IdCard_1 = require("./IdCard");
var Factory_1 = require("./Factory");
var IdCardFactory = /** @class */ (function (_super) {
    __extends(IdCardFactory, _super);
    function IdCardFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.owners = [];
        return _this;
    }
    IdCardFactory.prototype.createProduct = function (owner) {
        return new IdCard_1.IdCard(owner);
    };
    IdCardFactory.prototype.registerProduct = function (product) {
        this.owners.push(product.owner);
    };
    return IdCardFactory;
}(Factory_1.Factory));
exports.IdCardFactory = IdCardFactory;
