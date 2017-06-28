"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_ui_1 = require("ng2-ui");
var shared_module_1 = require("../shared/shared.module");
var store_list_component_1 = require("./store-list.component");
var store_list_map_dialog_component_1 = require("./store-list-map-dialog.component");
var store_filter_pipe_1 = require("./store-filter.pipe");
var store_field_filter_pipe_1 = require("./store-field-filter.pipe");
var store_orderBy_filter_pipe_1 = require("./store-orderBy-filter.pipe");
var store_service_1 = require("./store.service");
var StoreModule = (function () {
    function StoreModule() {
    }
    return StoreModule;
}());
StoreModule = __decorate([
    core_1.NgModule({
        declarations: [
            store_list_component_1.StoreListComponent,
            store_list_map_dialog_component_1.StoreListMapDialogComponent,
            store_filter_pipe_1.StoreFilterPipe,
            store_field_filter_pipe_1.StoreFieldFilterPipe,
            store_orderBy_filter_pipe_1.StoreOrderByFilterPipe
        ],
        imports: [
            shared_module_1.SharedModule,
            ng2_ui_1.Ng2MapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyB53S10hi3txW2AQX1MqPS0yFsT5wTaWDk' })
        ],
        entryComponents: [
            store_list_map_dialog_component_1.StoreListMapDialogComponent
        ],
        providers: [
            store_service_1.StoreService
        ]
    })
], StoreModule);
exports.StoreModule = StoreModule;
//# sourceMappingURL=store.module.js.map