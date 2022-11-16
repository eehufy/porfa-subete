"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registro_registro_module_ts"],{

/***/ 4967:
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 2299);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 636:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 4967);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 2299);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 2299:
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var C_Users_Jose_Desktop_prueba_prograMovil_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.html?ngResource */ 9575);
/* harmony import */ var _registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro.page.scss?ngResource */ 7177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let RegistroPage = class RegistroPage {
  constructor(fb, alertController, navCtrl) {
    this.fb = fb;
    this.alertController = alertController;
    this.navCtrl = navCtrl;
    this.formularioRegistro = this.fb.group({
      'nombre': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      'confirmacionPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
    });
  }

  ngOnInit() {}

  guardar() {
    var _this = this;

    return (0,C_Users_Jose_Desktop_prueba_prograMovil_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var f = _this.formularioRegistro.value;

      if (_this.formularioRegistro.invalid) {
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

RegistroPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
}];

RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-registro',
  template: _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegistroPage);


/***/ }),

/***/ 7177:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Ryby5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9575:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"medium\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Registro</ion-title>\n     <ion-buttons slot=\"end\">\n    <ion-button [routerLink]=\"['/home']\" color=\"secondary\" >Home\n      <ion-icon slot=\"icon-only\" name=\"people-outline\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card>\n    <ion-card-header collapse=\"condense\">\n      <ion-card-title>Registro</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form [formGroup]=\"formularioRegistro\" (keyup.enter)=\"guardar()\">\n        <ion-item>\n          <ion-label position=\"floating\">Rut</ion-label>\n          <ion-input formControlName=\"nombre\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Contraseña</ion-label>\n          <ion-input formControlName=\"password\" type=\"password\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Confirmar contraseña</ion-label>\n          <ion-input formControlName=\"confirmacionPassword\" type=\"password\"></ion-input>\n        </ion-item>\n        <br>\n        <ion-button (click)=\"guardar()\">Registrarse\n        </ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n  <ion-footer>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"end\">\n        <ion-button [routerLink]=\"['/login']\" color=\"secondary\">Login\n          <ion-icon slot=\"icon-only\" name=\"people-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_registro_registro_module_ts.js.map