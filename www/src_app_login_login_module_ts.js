"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_Jose_Desktop_Github_wea_porfa_subete_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/storage.service */ 8007);
/* harmony import */ var src_capi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/capi.service */ 1699);








let LoginPage = class LoginPage {
  constructor(router, Capi, storage) {
    this.router = router;
    this.Capi = Capi;
    this.storage = storage;
    this.lista = [];
  }

  ngOnInit() {
    this.Capi.getUsers();
    this.lista = this.Capi.listado;
    console.log(this.lista);
    this.storage.init();
  }

  checkear(nom, cont) {
    var _this = this;

    return (0,C_Users_Jose_Desktop_Github_wea_porfa_subete_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.nombre = nom.value; //console.log(this.apirest.listado.find(({username}) => username === this.nombre));

      _this.lista = _this.Capi.listado.find(({
        UsuarioA
      }) => UsuarioA === _this.nombre); //console.log(this.lista);

      if (nom.value == "") {
        _this.mensaje = " Ingrese nombre de usuario";
      } else if (cont.value == "") {
        _this.mensaje = " Por favor, ingrese su contraseña";
      } else if (!_this.Capi.listado.find(({
        UsuarioA
      }) => UsuarioA === _this.nombre)) {
        _this.mensaje = " Usuario no existe";
      } else if (cont.value != "1234") {
        _this.mensaje = " Contraseña incorrecta";
      } else {
        _this.storage.agregar('id', _this.lista['id']);

        _this.router.navigate(['/home', _this.lista['id']]);

        nom.value = '';
        cont.value = '';
        _this.mensaje = '';
      }
      /**
          else if(cont.value != "1234"){
            this.mensaje = 'contraseña incorrecta'
          }*/

    })();
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: src_capi_service__WEBPACK_IMPORTED_MODULE_4__.CapiService
}, {
  type: src_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 1699:
/*!*****************************!*\
  !*** ./src/capi.service.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapiService": () => (/* binding */ CapiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



let CapiService = class CapiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.listado = [];
        this.urlBaseApi = 'http://localhost:3000/';
    }
    getUsers() {
        let url = this.urlBaseApi + 'alumnos/';
        this.listado = [];
        return new Promise((resolve, rejects) => {
            this.httpClient.get(url).subscribe((data) => {
                resolve(data);
                data.forEach(item => { this.listado.push(item); });
            }, error => {
                console.log("Error en el servidor");
            });
        });
    }
    getProfesores() {
        let url = this.urlBaseApi + 'profesor/';
        this.listado = [];
        return new Promise((resolve, rejects) => {
            this.httpClient.get(url).subscribe((data) => {
                resolve(data);
                data.forEach(item => { this.listado.push(item); });
            }, error => {
                console.log("Error en el servidor");
            });
        });
    }
    getPosts(id) {
        let url = this.urlBaseApi + 'profesor/';
        this.listado = [];
        return new Promise((resolve, rejects) => {
            this.httpClient.get(url).subscribe((data) => {
                resolve(data);
                data.forEach(item => {
                    if (item['id'] == id) {
                        this.listado.push(item);
                    }
                });
            }, error => {
                console.log("Error en el servidor");
            });
        });
    }
    getComments(id) {
        let url = this.urlBaseApi + 'asignatura/';
        this.listado = [];
        return new Promise((resolve, rejects) => {
            this.httpClient.get(url).subscribe((data) => {
                resolve(data);
                data.forEach(item => {
                    if (item['id'] == id) {
                        this.listado.push(item);
                    }
                });
            }, error => {
                console.log("Error en el servidor");
            });
        });
    }
};
CapiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
CapiService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CapiService);



/***/ }),

/***/ 8007:
/*!********************************!*\
  !*** ./src/storage.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var C_Users_Jose_Desktop_Github_wea_porfa_subete_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 190);




let StorageService = class StorageService {
  constructor(storage) {
    this.storage = storage;
    this.init();
  }

  init() {
    var _this = this;

    return (0,C_Users_Jose_Desktop_Github_wea_porfa_subete_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.storage.create();
    })();
  }

  agregar(key, valor) {
    var _this2 = this;

    return (0,C_Users_Jose_Desktop_Github_wea_porfa_subete_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.storage.set(key, valor);
    })();
  }

  leer(key) {
    var _this3 = this;

    return (0,C_Users_Jose_Desktop_Github_wea_porfa_subete_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this3.storage.get(key);
    })();
  }

  listar() {
    var _this4 = this;

    return (0,C_Users_Jose_Desktop_Github_wea_porfa_subete_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let listado = [];
      yield _this4.storage.forEach((v, k) => {
        listado.push(v[0]);
      });
      return listado;
    })();
  }

  limpiar() {
    var _this5 = this;

    return (0,C_Users_Jose_Desktop_Github_wea_porfa_subete_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.storage.clear();
    })();
  }

};

StorageService.ctorParameters = () => [{
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage
}];

StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], StorageService);


/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "#error {\n  font-size: 16px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7RUFDQSxVQUFBO0FBQUoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Vycm9yXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-card>\n    <ion-card-header collapse=\"condense\">\n      <ion-card-title>\n        Login\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form >\n        <ion-item>\n\n          <ion-label position = \"floating\"> Nombre </ion-label>\n          <ion-input #UsuarioA type=\"text\"></ion-input>\n\n        </ion-item>\n\n\n        <ion-item>\n          <ion-label position = \"floating\"> Contraseña </ion-label>\n          <ion-input #cont type=\"password\"></ion-input>\n        </ion-item>\n        <div *ngIf=\"mensaje\">\n          <h3 id=\"error\">{{mensaje}}</h3>\n        </div>\n      </form>\n     \n      <br>\n      <ion-button color=\"primary\"  (click)=\"checkear(UsuarioA, cont)\">login</ion-button><br>\n      <ion-button color=\"primary\" (click)=\"ngOnInit()\">salir</ion-button><br>\n      \n\n\n\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>\n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map