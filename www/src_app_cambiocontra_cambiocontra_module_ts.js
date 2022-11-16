"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cambiocontra_cambiocontra_module_ts"],{

/***/ 6380:
/*!*************************************************************!*\
  !*** ./src/app/cambiocontra/cambiocontra-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CambiocontraPageRoutingModule": () => (/* binding */ CambiocontraPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cambiocontra_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cambiocontra.page */ 3576);




const routes = [
    {
        path: '',
        component: _cambiocontra_page__WEBPACK_IMPORTED_MODULE_0__.CambiocontraPage
    }
];
let CambiocontraPageRoutingModule = class CambiocontraPageRoutingModule {
};
CambiocontraPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CambiocontraPageRoutingModule);



/***/ }),

/***/ 9656:
/*!*****************************************************!*\
  !*** ./src/app/cambiocontra/cambiocontra.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CambiocontraPageModule": () => (/* binding */ CambiocontraPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cambiocontra_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cambiocontra-routing.module */ 6380);
/* harmony import */ var _cambiocontra_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cambiocontra.page */ 3576);







let CambiocontraPageModule = class CambiocontraPageModule {
};
CambiocontraPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cambiocontra_routing_module__WEBPACK_IMPORTED_MODULE_0__.CambiocontraPageRoutingModule
        ],
        declarations: [_cambiocontra_page__WEBPACK_IMPORTED_MODULE_1__.CambiocontraPage]
    })
], CambiocontraPageModule);



/***/ }),

/***/ 3576:
/*!***************************************************!*\
  !*** ./src/app/cambiocontra/cambiocontra.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CambiocontraPage": () => (/* binding */ CambiocontraPage)
/* harmony export */ });
/* harmony import */ var C_Users_Jose_Desktop_prueba_prograMovil_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cambiocontra_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cambiocontra.page.html?ngResource */ 2185);
/* harmony import */ var _cambiocontra_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cambiocontra.page.scss?ngResource */ 6566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let CambiocontraPage = class CambiocontraPage {
  constructor(fb, alertController, navCtrl) {
    this.fb = fb;
    this.alertController = alertController;
    this.navCtrl = navCtrl;
    this.cambioContra = this.fb.group({
      'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      'confirmacionNueva': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
    });
  }

  ngOnInit() {}

  guardar() {
    var _this = this;

    return (0,C_Users_Jose_Desktop_prueba_prograMovil_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var f = _this.cambioContra.value;

      if (_this.cambioContra.invalid) {
        const alert = yield _this.alertController.create({
          header: 'Datos incompletos',
          message: 'Tienes que llenar todos los Campos',
          buttons: ['Aceptar']
        });
        yield alert.present();
        return;
      }

      var usuario = {
        nombre: f.nombre,
        password: f.password
      };
      localStorage.setItem('usuario', JSON.stringify(usuario));
      localStorage.setItem('ingresado', 'true');

      _this.navCtrl.navigateRoot('inicio');
    })();
  }

};

CambiocontraPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
}];

CambiocontraPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-cambiocontra',
  template: _cambiocontra_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cambiocontra_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CambiocontraPage);


/***/ }),

/***/ 6566:
/*!****************************************************************!*\
  !*** ./src/app/cambiocontra/cambiocontra.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1iaW9jb250cmEucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2185:
/*!****************************************************************!*\
  !*** ./src/app/cambiocontra/cambiocontra.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Cambio de contraseña\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button [routerLink]=\"['/home']\" color=\"secondary\" >Home\n        <ion-icon slot=\"icon-only\" name=\"people-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card>\n    <ion-card-header collapse=\"condense\">\n      <ion-card-title>cambio contraseña</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form [formGroup]=\"cambioContra\" (keyup.enter) =\"guardar()\" >\n        <ion-item>\n          <ion-label position=\"floating\">Rut</ion-label>\n          <ion-input formControlName=\"nombre\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Contraseña</ion-label>\n          <ion-input formControlName=\"password\" type=\"password\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Confirmar nueva contraseña</ion-label>\n          <ion-input formControlName=\"confirmacionNueva\" type=\"password\"></ion-input>\n        </ion-item>\n\n        <br>\n        <ion-button (click)=\"guardar()\" >cambio contraseña\n        </ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n  <ion-footer>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button [routerLink]=\"['/login']\" color=\"secondary\" >Login\n          <ion-icon slot=\"icon-only\" name=\"people-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_cambiocontra_cambiocontra_module_ts.js.map