"use strict";
exports.__esModule = true;
exports.ServerAPI = void 0;
var http = require("http");
var ServerAPI = /** @class */ (function () {
    function ServerAPI() {
    }
    ServerAPI.prototype.initServer = function () {
        var _this = this;
        var server = http.createServer(function (request, response) {
            return _this.requestHandler(request, response);
        });
        server.listen("5000");
        // ログを出力する
        console.log("http://localhost:5000 へアクセスください");
    };
    /**
     * サーバーにリクエストがあった時に実行される関数
     */
    ServerAPI.prototype.requestHandler = function (request, response) {
        response.end("Call From ServeAPI Class");
    };
    return ServerAPI;
}());
exports.ServerAPI = ServerAPI;
