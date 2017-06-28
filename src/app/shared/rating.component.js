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
var logger_service_1 = require("../core/logger.service");
var RatingComponent = (function () {
    function RatingComponent(loggerService) {
        this.loggerService = loggerService;
        this.ratingClicked = new core_1.EventEmitter();
    }
    RatingComponent.prototype.ngOnChanges = function () {
        this.ratingWidth = this.rating * 86 / 5;
    };
    RatingComponent.prototype.onClick = function () {
        this.loggerService.log('Rating clicked [' + this.rating + ']');
        this.ratingClicked.emit("User rating is up to [" + this.rating + "]");
    };
    return RatingComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RatingComponent.prototype, "rating", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RatingComponent.prototype, "ratingClicked", void 0);
RatingComponent = __decorate([
    core_1.Component({
        selector: 'sm-shared-rating',
        moduleId: module.id,
        templateUrl: './rating.component.html',
        styleUrls: ['./rating.component.css']
    }),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], RatingComponent);
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map