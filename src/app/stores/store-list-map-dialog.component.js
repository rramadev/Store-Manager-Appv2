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
var material_1 = require("@angular/material");
var StoreListMapDialogComponent = (function () {
    function StoreListMapDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    StoreListMapDialogComponent.prototype.onMarker = function (evt) {
        var marker = evt.target;
        marker.ng2MapComponent.openInfoWindow('iw', marker, { name: this.name });
    };
    return StoreListMapDialogComponent;
}());
StoreListMapDialogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './store-list-map-dialog.component.html',
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], StoreListMapDialogComponent);
exports.StoreListMapDialogComponent = StoreListMapDialogComponent;
//# sourceMappingURL=store-list-map-dialog.component.js.map