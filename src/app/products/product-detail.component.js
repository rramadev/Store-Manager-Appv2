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
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var product_detail_dialog_component_1 = require("./product-detail-dialog.component");
var product_service_1 = require("./product.service");
var logger_service_1 = require("../core/logger.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, router, productService, dialog, loggerService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.dialog = dialog;
        this.loggerService = loggerService;
        this.pageTitle = '';
        this.errorMessage = '';
        this.showBar = false;
        this.updated = false;
        this.updateMessage = ' - Updated!';
        this.deleted = false;
        this.deleteMessage = ' - Deleted!';
    }
    ProductDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/products']);
    };
    ProductDetailComponent.prototype.onRatingClicked = function (message) {
        this.setTitle(message);
    };
    ProductDetailComponent.prototype.setTitle = function (message) {
        if (message === void 0) { message = ''; }
        this.pageTitle = "Product Detail: " + this.product.productName + " " + message;
    };
    ProductDetailComponent.prototype.openDialog = function () {
        var _this = this;
        this.updated = false;
        var dialogRef = this.dialog.open(product_detail_dialog_component_1.ProductDetailDialogComponent);
        dialogRef.componentInstance.product = this.product;
        dialogRef.afterClosed().subscribe(function (result) {
            (typeof result === 'object') ? (_this.showBar = true,
                _this.updateProduct(result))
                : _this.updated = false;
        });
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id).subscribe(function (product) {
            _this.product = product;
            _this.setTitle();
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.updateProduct = function (product) {
        var _this = this;
        this.productService.updateProduct(product).subscribe(function (result) {
            _this.product = Object.assign({}, product);
            _this.showBar = false;
            _this.updated = true;
            _this.loggerService.log('Product updated successfully!');
        }, function (error) {
            _this.errorMessage = error;
            _this.showBar = false;
            _this.loggerService.error('Error on product update!');
        });
    };
    ProductDetailComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.updated = false;
        this.showBar = true;
        this.productService.deleteProduct(id).subscribe(function (result) {
            // this.product = undefined;
            _this.showBar = false;
            _this.deleted = true;
            _this.setTitle();
            _this.loggerService.log('Product deleted successfully!');
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subcription = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getProduct(id);
        });
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './product-detail.component.html',
        styleUrls: ['./product-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        product_service_1.ProductService,
        material_1.MdDialog,
        logger_service_1.LoggerService])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map