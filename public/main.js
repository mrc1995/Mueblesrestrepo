(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-navigation></app-navigation>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_nusers_nusers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nusers/nusers.component */ "./src/app/components/nusers/nusers.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_visual_product_visual_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/visual-product/visual-product.component */ "./src/app/components/visual-product/visual-product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _components_nusers_nusers_component__WEBPACK_IMPORTED_MODULE_10__["NusersComponent"],
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
                _components_visual_product_visual_product_component__WEBPACK_IMPORTED_MODULE_12__["VisualProductComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"],
                ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"]
            ],
            providers: [angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_components_nusers_nusers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/components/nusers/nusers.component */ "./src/app/components/nusers/nusers.component.ts");
/* harmony import */ var _app_components_products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _app_components_visual_product_visual_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/components/visual-product/visual-product.component */ "./src/app/components/visual-product/visual-product.component.ts");




var appRoutes = [
    { path: '', component: _app_components_nusers_nusers_component__WEBPACK_IMPORTED_MODULE_1__["NusersComponent"] },
    { path: 'users', component: _app_components_nusers_nusers_component__WEBPACK_IMPORTED_MODULE_1__["NusersComponent"], data: { state: 'users' } },
    { path: 'products', component: _app_components_products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"], data: { state: 'products' } },
    { path: 'visualProduct', component: _app_components_visual_product_visual_product_component__WEBPACK_IMPORTED_MODULE_3__["VisualProductComponent"], data: { state: 'visualProduct' } },
];
var appRoutingProviders = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" routerLink=\"/users\">Usuarios</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/products\">Productos</a>\n  </li>\n  <li class=\"nav-item dropdown\">\n      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n      <div class=\"dropdown-menu\">\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\">Separated link</a>\n      </div>\n    </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link disabled\" href=\"#\">Contactanos</a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/nusers/nusers.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/nusers/nusers.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    width: 50%;\r\n    margin: 0 auto;\r\n}\r\n\r\ntable{\r\n    width: 70%;\r\n    margin: 0 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udXNlcnMvbnVzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9udXNlcnMvbnVzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG50YWJsZXtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/nusers/nusers.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/nusers/nusers.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form-group\">\n    <label>Nombre</label><input class=\"form-control\" type=\"text\" name=\"nombre\" [(ngModel)]=\"persona.nombre\">\n    <label>Descripcion</label><textarea class=\"form-control\" type=\"text\" name=\"descripcion\" [(ngModel)]=\"persona.descripcion\"></textarea>\n    <label>Valor</label><input class=\"form-control\" type=\"text\" name=\"valor\" [(ngModel)]=\"persona.valor\">\n    <div class=\"form-group mt-4\">\n      <label>Imagen</label><input type=\"file\" name=\"imagen\" [(ngModel)]=\"persona.imagen\" (change)=\"onChange ($event.target.files)\">\n    </div>\n\n    <button class=\"btn btn-primary\" type=\"submit\" *ngIf=\"!enableButtonMod\">Enviar</button>\n    <button class=\"btn btn-primary\" type=\"button\" (click)=\"modifPersona()\" *ngIf=\"enableButtonMod\">Modificar</button>\n  </form>\n</div>\n\n<table class=\"table table-striped mt-4\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">Nombre</th>\n      <th scope=\"col\">Descripcion</th>\n      <th scope=\"col\">Precio</th>\n      <th scope=\"col\">Opciones</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let item of items; let i = index\">\n    <tr>\n      <td scope=\"row\">{{item.persona.nombre}}</td>\n      <td>{{item.persona.descripcion}}</td>\n      <td>{{item.persona.valor | currency}}</td>\n      <td>\n        <button class=\"btn btn-primary mr-2\" (click)=\"updatePerson(i)\">Modificar</button>\n        <button class=\"btn btn-primary\" (click)=\"removePerson(i)\">Eliminar</button>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/components/nusers/nusers.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/nusers/nusers.component.ts ***!
  \*******************************************************/
/*! exports provided: NusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NusersComponent", function() { return NusersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_tranformtoBase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tranformtoBase.service */ "./src/app/services/tranformtoBase.service.ts");
/* harmony import */ var _utils_person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/person */ "./src/app/utils/person.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NusersComponent = /** @class */ (function () {
    function NusersComponent(db, _appService, _transformBase) {
        this.db = db;
        this._appService = _appService;
        this._transformBase = _transformBase;
        this.title = 'unit-test';
        this.itemValue = '';
        this.persona = new _utils_person__WEBPACK_IMPORTED_MODULE_4__["Persona"]();
        this.enableButtonMod = false;
    }
    NusersComponent.prototype.ngOnInit = function () {
        this.getInfo();
    };
    NusersComponent.prototype.getInfo = function () {
        var _this = this;
        this._appService.getInfo().subscribe(function (response) {
            var dataResponse;
            dataResponse = response;
            _this.items = dataResponse;
        }, function (error) {
            console.log(error);
        });
    };
    NusersComponent.prototype.onSubmit = function () {
        console.log(this.persona);
        this._appService.addPerson(this.persona);
        this.persona = new _utils_person__WEBPACK_IMPORTED_MODULE_4__["Persona"]();
    };
    NusersComponent.prototype.updatePerson = function (index) {
        var _this = this;
        this.persona = this.items[index].persona;
        this.enableButtonMod = true;
        this.db.list('Personas').snapshotChanges().subscribe(function (response) {
            var dataResponse;
            dataResponse = response;
            _this.sendPerson = dataResponse[index];
        });
    };
    NusersComponent.prototype.modifPersona = function () {
        this._appService.updatePerson(this.sendPerson, this.persona);
        this.enableButtonMod = false;
        this.persona = new _utils_person__WEBPACK_IMPORTED_MODULE_4__["Persona"]();
    };
    NusersComponent.prototype.removePerson = function (value) {
        var _this = this;
        this.db.list('Personas').snapshotChanges().subscribe(function (response) {
            var dataResponse;
            dataResponse = response;
            _this._appService.deletePerson(dataResponse[value]);
        });
    };
    NusersComponent.prototype.onChange = function (files) {
        var _this = this;
        console.log(files);
        this.persona.imagen = this._transformBase.transformToBase64Promise(files.item(0)).then(function (data) {
            _this.persona.imagen = data;
        }, function (error) {
            console.log(error);
        });
    };
    NusersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nusers',
            template: __webpack_require__(/*! ./nusers.component.html */ "./src/app/components/nusers/nusers.component.html"),
            styles: [__webpack_require__(/*! ./nusers.component.css */ "./src/app/components/nusers/nusers.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _services_tranformtoBase_service__WEBPACK_IMPORTED_MODULE_3__["TransformToBase"]])
    ], NusersComponent);
    return NusersComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/products/products.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-card{\r\n    margin: 10px auto;\r\n}\r\n.row{\r\n    margin: 0 !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxxQkFBcUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLWNhcmR7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n  <div class=\"col-md-4\" *ngFor =\"let item of items; let i = index\">\n    <div class=\"card center-card\" style=\"width: 16rem;\">\n      <img class=\"card-img-top\" src=\"{{item.persona.imagen}}\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{item.persona.nombre}}</h5>\n        <p class=\"card-text\">{{item.persona.descripcion}}</p>\n        <p class=\"card-text\">{{item.persona.valor | currency}}</p>\n        <button class=\"btn btn-primary\" (click)=\"verMas(i)\">Ver más</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(db, _appService, router) {
        this.db = db;
        this._appService = _appService;
        this.router = router;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getInfo();
    };
    ProductsComponent.prototype.getInfo = function () {
        var _this = this;
        this._appService.getInfo().subscribe(function (response) {
            var dataResponse;
            dataResponse = response;
            _this.items = dataResponse;
        }, function (error) {
            console.log(error);
        });
    };
    ProductsComponent.prototype.verMas = function (index) {
        sessionStorage.setItem('Producto', JSON.stringify(this.items[index]));
        this.router.navigate(['visualProduct']);
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/components/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/visual-product/visual-product.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/visual-product/visual-product.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aXN1YWwtcHJvZHVjdC92aXN1YWwtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aXN1YWwtcHJvZHVjdC92aXN1YWwtcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/visual-product/visual-product.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/visual-product/visual-product.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\"> <img class=\"\" src=\"{{product.persona.imagen}}\" alt=\"\"></div>\n  <div class=\"col-md-8 text-center\">\n    <div class=\"row\">\n      <div class=\"col-md-12\"><h1>{{product.persona.nombre}}</h1></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\"><p>{{product.persona.descripcion}}</p></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\"><p>{{product.persona.valor | currency}}</p></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/visual-product/visual-product.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/visual-product/visual-product.component.ts ***!
  \***********************************************************************/
/*! exports provided: VisualProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualProductComponent", function() { return VisualProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VisualProductComponent = /** @class */ (function () {
    function VisualProductComponent() {
    }
    VisualProductComponent.prototype.ngOnInit = function () {
        this.product = JSON.parse(sessionStorage.getItem('Producto'));
        console.log(this.product);
    };
    VisualProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visual-product',
            template: __webpack_require__(/*! ./visual-product.component.html */ "./src/app/components/visual-product/visual-product.component.html"),
            styles: [__webpack_require__(/*! ./visual-product.component.css */ "./src/app/components/visual-product/visual-product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VisualProductComponent);
    return VisualProductComponent;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(afdb) {
        this.afdb = afdb;
        this.itemValue = "";
    }
    AppService.prototype.getInfo = function () {
        return this.afdb.list('Personas').valueChanges();
    };
    AppService.prototype.addPerson = function (value) {
        this.afdb.list('/Personas').push({ persona: value });
    };
    AppService.prototype.updatePerson = function (item, value) {
        this.afdb.object('/Personas/' + item.key).update({ persona: value });
    };
    AppService.prototype.deletePerson = function (item) {
        return this.afdb.list('/Personas/' + item.key).remove();
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/services/tranformtoBase.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/tranformtoBase.service.ts ***!
  \****************************************************/
/*! exports provided: TransformToBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformToBase", function() { return TransformToBase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TransformToBase = /** @class */ (function () {
    function TransformToBase() {
    }
    TransformToBase.prototype.base64toBlob = function (base64Data, contentType) {
        contentType = contentType || "";
        var sliceSize = 1024;
        var byteCharacters = atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);
        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);
            var bytes = new Array(end - begin);
            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, {
            type: contentType
        });
    };
    TransformToBase.prototype.transformToBase64 = function (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
            return reader.result;
        };
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    };
    TransformToBase.prototype.transformToBase64Promise = function (file) {
        var promise = new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                var result = reader.result;
                resolve(result);
            };
            reader.onerror = function (error) {
                reject(error);
            };
        });
        return promise;
    };
    TransformToBase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], TransformToBase);
    return TransformToBase;
}());



/***/ }),

/***/ "./src/app/utils/person.ts":
/*!*********************************!*\
  !*** ./src/app/utils/person.ts ***!
  \*********************************/
/*! exports provided: Persona */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Persona", function() { return Persona; });
var Persona = /** @class */ (function () {
    function Persona() {
    }
    return Persona;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCtg1qKoPYunE1l0d9VoXSw3-uY4smh6iY",
        authDomain: "muebles-restrepo.firebaseapp.com",
        databaseURL: "https://muebles-restrepo.firebaseio.com",
        projectId: "muebles-restrepo",
        storageBucket: "muebles-restrepo.appspot.com",
        messagingSenderId: "171716731570"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\xampp\htdocs\unit-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map