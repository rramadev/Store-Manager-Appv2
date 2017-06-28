"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_routing_module_1 = require("./product-routing.module");
var shared_module_1 = require("../shared/shared.module");
var product_list_component_1 = require("./product-list.component");
var product_detail_component_1 = require("./product-detail.component");
var product_detail_dialog_component_1 = require("./product-detail-dialog.component");
var product_filter_pipe_1 = require("./product-filter.pipe");
var product_guard_service_1 = require("./product-guard.service");
var product_service_1 = require("./product.service");
var product_list_md_card_directive_1 = require("./product-list-md-card.directive");
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        declarations: [
            product_list_component_1.ProductListComponent,
            product_detail_component_1.ProductDetailComponent,
            product_detail_dialog_component_1.ProductDetailDialogComponent,
            product_filter_pipe_1.ProductFilterPipe,
            product_list_md_card_directive_1.ProductListMdCardDirective
        ],
        imports: [
            product_routing_module_1.ProductRoutingModule,
            shared_module_1.SharedModule
        ],
        entryComponents: [
            product_detail_dialog_component_1.ProductDetailDialogComponent
        ],
        providers: [
            product_service_1.ProductService,
            product_guard_service_1.ProductDetailGuard
        ]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map