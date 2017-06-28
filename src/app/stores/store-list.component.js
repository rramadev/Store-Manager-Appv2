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
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
require("rxjs/add/operator/startWith");
var store_service_1 = require("./store.service");
var store_list_map_dialog_component_1 = require("./store-list-map-dialog.component");
var StoreListComponent = (function () {
    function StoreListComponent(storeService, dialog) {
        this.storeService = storeService;
        this.dialog = dialog;
        this.pageTitle = 'Store List';
        this.imageWidth = 60;
        this.imageMargin = 2;
        this.showImage = true;
        this.showTools = true;
        this.showBar = false;
        this.updated = false;
        this.updateMessage = ' - Store Updated!';
        this.deleted = false;
        this.deleteMessage = ' - Store Deleted!';
        this.storeNoDuplicateFilter = 'address';
        this.placeholderFilter = 'Looking for...';
        this.errorMessage = '';
        this.storeFilterInput = '';
        this.storeFilterMsg = '';
        this.orderByFilter = 'name';
        this.cityFilterInput = '';
        this.cityList = [
            'Berlin',
            'Bochum',
            'Darmstadt',
            'Gelsenkirchen',
            'Hamburg',
            'Kiel',
            'Köln',
            'München',
            'Trier',
            'Witten'
        ];
        this.startCityCtrl();
    }
    StoreListComponent.prototype.startCityCtrl = function () {
        var _this = this;
        this.cityCtrl = new forms_1.FormControl();
        this.filteredCities = this.cityCtrl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterCitiesInput(name); });
    };
    StoreListComponent.prototype.filterCitiesInput = function (val) {
        return val ?
            this.cityList.filter(function (s) { return new RegExp(val, 'gi').test(s); })
            : this.cityList;
    };
    StoreListComponent.prototype.setFilterValue = function (input, type) {
        type === 'search' ? (this.cityCtrl.setValue(''),
            this.storeFilterMsg = '- Filtered by: ',
            this.storeFilterInput = input,
            this.storeFilterFields = ['name', 'address']) : (this.cityFilterInput = '',
            this.storeFilterMsg = '- Filtered by city: ',
            this.storeFilterInput = this.cityCtrl.value,
            this.storeFilterFields = ['address']);
    };
    StoreListComponent.prototype.displayFilter = function () {
        return this.storeFilterMsg + this.storeFilterInput;
    };
    StoreListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    StoreListComponent.prototype.getStores = function () {
        var _this = this;
        this.storeService.getStores().subscribe(function (stores) { return _this.stores = stores; }, function (error) { return _this.errorMessage = error; }, function () {
            if (_this.showBar) {
                _this.showBar = false;
                _this.deleted = true;
            }
            ;
            // Set default filter
            // this.orderByFilter = 'name';
            // Set default store image
            // for (let store of this.stores) {
            // 	store['imageUrl'] =
            // 	 'https://openclipart.org/image/300px/svg_to_png/244855/Online-Store-Spanish-Signs.png';
            // };
            // Remove duplicated addresses
            // var noDuplicateStores = [];
            // var addresses = [];
            // var key = "";
            // for (let store of this.stores) {
            //   key = store['address'];
            //   if (addresses.indexOf(key) === -1) {
            //     addresses.push(key);
            //     noDuplicateStores.push(store);
            //   }
            // };
            // Remove duplicated addresses
            // Using filter method
            var addressList = [];
            var noDuplicateStores = _this.stores.filter(function (store) {
                return (addressList.indexOf(store['address']) === -1) ?
                    addressList.push(store['address'])
                    : false;
            });
            _this.stores = noDuplicateStores.slice();
            // Filter JSON by fields
            // let filteredObject = {},
            // filteredArray = [],
            // p = new Set(Object.keys(this.stores[0])),
            // blacklist: string[] = ['styleUrl', 'ExtendedData'];
            // blacklist.forEach(a => p.delete(a));
            // for (var i in this.stores) {
            // 	filteredObject['id'] = i;
            // 	p.forEach(k => filteredObject[k] = this.stores[i][k]);
            // 	filteredArray.push(filteredObject);
            // 	filteredObject = {};
            // }
            // console.log(JSON.stringify(filteredArray));
            // Create Cities List
            // let citiesList = this.stores.reduce((acc,curr) => {
            // 	let posi = curr.description.indexOf('- Stadt:') + 9;
            // 	let posf = curr.description.indexOf('<br>Adresse - Staat');
            // 	let city = curr.description.substring(posi, posf);
            // 	if (acc.indexOf(city)===-1) {
            // 		acc.push(city);
            // 	}
            // 	return acc;
            // }, []);
        });
    };
    StoreListComponent.prototype.deleteStore = function (id) {
        var _this = this;
        this.showBar = true;
        this.deleted = false;
        this.storeService.deleteStore(id).subscribe(function (result) {
            _this.getStores();
            // let updatedStores = this.stores.filter(store => store.id !== id);
            // this.stores = JSON.parse(JSON.stringify(updatedStores));
        }, function (error) {
            _this.errorMessage = error;
            _this.showBar = false;
        });
    };
    StoreListComponent.prototype.openDialog = function (address, name) {
        var dialogRef = this.dialog.open(store_list_map_dialog_component_1.StoreListMapDialogComponent);
        dialogRef.componentInstance.address = address;
        dialogRef.componentInstance.name = name;
    };
    StoreListComponent.prototype.ngOnInit = function () {
        this.getStores();
    };
    return StoreListComponent;
}());
StoreListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './store-list.component.html',
        styleUrls: ['./store-list.component.css']
    }),
    __metadata("design:paramtypes", [store_service_1.StoreService,
        material_1.MdDialog])
], StoreListComponent);
exports.StoreListComponent = StoreListComponent;
//# sourceMappingURL=store-list.component.js.map