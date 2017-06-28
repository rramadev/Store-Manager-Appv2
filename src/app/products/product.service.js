"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/publishReplay");
var logger_service_1 = require("../core/logger.service");
var ProductService = (function () {
    function ProductService(http, logger) {
        this.http = http;
        this.logger = logger;
        // private productUrl = 'api/products/products.json';
        this.productUrl = 'api/products'; // URL to web api
    }
    ProductService.prototype.getProducts = function () {
        // if (!this.products) {
        this.products = this.http.get(this.productUrl)
            .map(function (response) { return response.json().data || {}; })
            .publishReplay(1)
            .refCount()
            .catch(this.logger.handleError);
        // }
        return this.products;
    };
    ProductService.prototype.getProduct = function (id) {
        var url = this.productUrl + "/" + id;
        this.product = this.http.get(url)
            .map(function (response) { return response.json().data || {}; })
            .catch(this.logger.handleError);
        return this.product;
        // return this.getProducts()
        // .map((products: IProduct[]) => products.find(p => p.id === id));
    };
    ProductService.prototype.updateProduct = function (product) {
        var url = this.productUrl + "/" + product.id;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.product = this.http.put(url, JSON.stringify(product), options)
            .map(function (response) { return response.json(); })
            .catch(this.logger.handleError);
        return this.product;
    };
    ProductService.prototype.deleteProduct = function (id) {
        var url = this.productUrl + "/" + id;
        this.product = this.http.delete(url)
            .map(function (response) { return response.json(); })
            .catch(this.logger.handleError);
        return this.product;
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, logger_service_1.LoggerService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map