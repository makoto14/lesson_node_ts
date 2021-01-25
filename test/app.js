"use strict";
exports.__esModule = true;
var serverModule_1 = require("./serverModule");
var Main = /** @class */ (function () {
    function Main() {
        // serverModuleの中のServerAPIクラスのインスタンスを作成
        var serverAPI = new serverModule_1.ServerAPI();
        // ServerAPIの関数を実行
        serverAPI.initServer();
    }
    return Main;
}());
new Main();
