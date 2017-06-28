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
var ProductListMdCardDirective = (function () {
    function ProductListMdCardDirective(el) {
        this.el = el;
    }
    ProductListMdCardDirective.prototype.onMouseEnter = function () {
        this.setBorder();
    };
    ProductListMdCardDirective.prototype.onMouseLeave = function () {
        this.deleteBorder();
    };
    ProductListMdCardDirective.prototype.setBorder = function () {
        this.el.nativeElement.style.boxShadow = '2px 2px 5px 5px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)';
        // this.el.nativeElement.style.borderRadius = '12px';
    };
    ProductListMdCardDirective.prototype.deleteBorder = function () {
        this.el.nativeElement.style.boxShadow = '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)';
        // this.el.nativeElement.style.borderRadius = '2px';
    };
    return ProductListMdCardDirective;
}());
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductListMdCardDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductListMdCardDirective.prototype, "onMouseLeave", null);
ProductListMdCardDirective = __decorate([
    core_1.Directive({
        selector: '[mdCardBorder]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ProductListMdCardDirective);
exports.ProductListMdCardDirective = ProductListMdCardDirective;
//# sourceMappingURL=product-list-md-card.directive.js.map