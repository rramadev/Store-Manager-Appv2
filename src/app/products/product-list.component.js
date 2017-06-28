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
var product_service_1 = require("./product.service");
var ProductListComponent = (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.pageTitle = 'Product List';
        this.imageWidth = 70;
        this.imageMargin = 2;
        this.gridRows = 2;
        this.gridRatio = '3:3';
        this.showImage = false;
        this.placeholderFilter = 'Looking for...';
        this.listFilter = '';
        this.errorMessage = '';
    }
    ProductListComponent.prototype.onResize = function (width) {
        this.gridRows = width > 1300 ? 3
            : width > 900 ? 2
                : 1;
        this.gridRatio = width > 1300 ? '3:3'
            : width > 1150 ? '4:3'
                : width > 900 ? '3:3'
                    : '4:3';
    };
    ProductListComponent.prototype.getWindowWidth = function () {
        return window.innerWidth;
    };
    ProductListComponent.prototype.displayFilter = function () {
        return '- Filtered by: ' + this.listFilter;
    };
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    ProductListComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.onResize(this.getWindowWidth());
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './product-list.component.html',
        styleUrls: ['./product-list.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map