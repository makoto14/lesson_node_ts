"use strict";
exports.__esModule = true;
var IdCardFactory_1 = require("./IdCardFactory");
var factory = new IdCardFactory_1.IdCardFactory();
var card1 = factory.create("hoge");
// console.log(card1);
card1.use();
