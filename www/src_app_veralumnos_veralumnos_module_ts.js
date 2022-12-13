"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_veralumnos_veralumnos_module_ts"],{

/***/ 7505:
/*!*********************************************************!*\
  !*** ./src/app/veralumnos/veralumnos-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VeralumnosPageRoutingModule": () => (/* binding */ VeralumnosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _veralumnos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./veralumnos.page */ 4191);




const routes = [
    {
        path: '',
        component: _veralumnos_page__WEBPACK_IMPORTED_MODULE_0__.VeralumnosPage
    }
];
let VeralumnosPageRoutingModule = class VeralumnosPageRoutingModule {
};
VeralumnosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VeralumnosPageRoutingModule);



/***/ }),

/***/ 1198:
/*!*************************************************!*\
  !*** ./src/app/veralumnos/veralumnos.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VeralumnosPageModule": () => (/* binding */ VeralumnosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _veralumnos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./veralumnos-routing.module */ 7505);
/* harmony import */ var _veralumnos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./veralumnos.page */ 4191);







let VeralumnosPageModule = class VeralumnosPageModule {
};
VeralumnosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _veralumnos_routing_module__WEBPACK_IMPORTED_MODULE_0__.VeralumnosPageRoutingModule
        ],
        declarations: [_veralumnos_page__WEBPACK_IMPORTED_MODULE_1__.VeralumnosPage]
    })
], VeralumnosPageModule);



/***/ }),

/***/ 4191:
/*!***********************************************!*\
  !*** ./src/app/veralumnos/veralumnos.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VeralumnosPage": () => (/* binding */ VeralumnosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _veralumnos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./veralumnos.page.html?ngResource */ 8130);
/* harmony import */ var _veralumnos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./veralumnos.page.scss?ngResource */ 1176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);







let VeralumnosPage = class VeralumnosPage {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.token = localStorage.getItem("token");
        this.users = [];
    }
    ngOnInit() {
        this.getUsers().subscribe(res => {
            console.log("Res", res);
            this.users = res;
        });
    }
    getUsers() {
        return this.http
            .get('assets/server/dlatos.json')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => {
            return res.alumnos;
        }));
    }
};
VeralumnosPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
VeralumnosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-veralumnos',
        template: _veralumnos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_veralumnos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VeralumnosPage);



/***/ }),

/***/ 1176:
/*!************************************************************!*\
  !*** ./src/app/veralumnos/veralumnos.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJhbHVtbm9zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8130:
/*!************************************************************!*\
  !*** ./src/app/veralumnos/veralumnos.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Ver Alumnos</ion-title>\n    <ion-button slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col sizeMd=\"4\" offsetMd=\"4\">\n        <ion-list>\n          <ion-item *ngFor=\"let user of users\" >\n            <ion-avatar slot=\"start\" >\n              <img src=\"{{user.image}}\" alt=\"\">\n            </ion-avatar>\n            <ion-label>\n              <h2 class=\"colorBlue\"> {{user.nombreA}} {{ user.apellidoA }}</h2>\n            </ion-label>\n\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_veralumnos_veralumnos_module_ts.js.map