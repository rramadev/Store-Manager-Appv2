"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var welcome_component_1 = require("../home/welcome.component");
// import { ProductListComponent } from '../products/product-list.component';
// import { ProductDetailComponent } from '../products/product-detail.component';
// import { ProductDetailGuard } from '../products/product-guard.service';
var store_list_component_1 = require("../stores/store-list.component");
var appRoutes = [
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'stores', component: store_list_component_1.StoreListComponent },
    // { path: 'products', component: ProductListComponent },
    // { path: 'product/:id',
    //     canActivate: [ ProductDetailGuard ],
    //     component: ProductDetailComponent },
    // Default
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    // Wildcard
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    // , { useHash: true })]
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes)
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map