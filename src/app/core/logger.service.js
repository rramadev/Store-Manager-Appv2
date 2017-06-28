"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var LoggerService = (function () {
    function LoggerService() {
        this.success = [
            'background: green',
            'color: white',
            'display: block',
            'text-align: center'
        ].join(';');
        this.failure = [
            'background: red',
            'color: white',
            'display: block',
            'text-align: center'
        ].join(';');
    }
    LoggerService.prototype.log = function (message) {
        console.log('%c Log.info: %s', this.success, message);
    };
    LoggerService.prototype.error = function (message) {
        console.error('%c Log.error: %s', this.failure, message);
    };
    LoggerService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        this.error(errMsg);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return LoggerService;
}());
LoggerService = __decorate([
    core_1.Injectable()
], LoggerService);
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map