(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n  <nav>\n    <div class=\"nav-wrapper red darken-3\">\n      <a href=\"#!\" class=\"logo\" style=\"display: inline-block; height: 100%;\"><img style=\"vertical-align: middle\" class=\"responsive-img\" src=\"../assets/images/book.svg\" alt=\"diccionario\"></a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li routerLinkActive=\"active current\" [routerLinkActiveOptions]=\"{ exact: true }\"><a routerLink=\"\">Inicio</a></li> <!--routerLink en lugar de href-->\n        <li routerLinkActive=\"active current\"><a routerLink=\"entrada/_\">Buscar entradas</a></li>\n        <li routerLinkActive=\"active current\"><a routerLink=\"editarEntradas\">Editar entradas</a></li>\n      </ul>\n    </div>\n  </nav>\n</div>\n\n<router-outlet></router-outlet> <!--Renderizar componente asociado con la ruta en el outlet-->\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/entrada/entrada.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/entrada/entrada.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    \n    <div class=\"grid-item\" *ngFor = \"let result of wordService.results\">\n\n        <h5>{{ result.lema }}&nbsp;</h5>\n        <span *ngIf = \"result.varianteDe\" >(tb.\n            <div class=\"variantes\" *ngFor=\"let variante of result.varianteDe\">\n                <a [routerLink]=\"['/entrada', variante]\">{{ variante }}</a>\n            </div>\n            <span>)</span>\n        </span>\n        <div class=\"card\">\n            <div class=\"card-content\">\n                <ol> \n                    <div *ngFor = \"let definicion of result.definiciones['definiciones'], let i = index;\">\n                        <li>\n                            <span>{{ result.definiciones['marcaGramatical'][i] }}</span>\n                            <span class=\"cursiva\">{{ result.definiciones['marcaRegional'][i] }} {{ result.definiciones['marcaUso'][i] }}</span><br>\n                            <span>{{ definicion }}.</span>\n                            <span class=\"cursiva\">{{ result.definiciones['ejemplo'][i] }}</span>\n                            <span class=\"fuente\">{{ result.definiciones['fuenteEjemplo'][i] }}</span>\n                        </li>\n                        <div class=\"sinonimos\" *ngFor = \"let sinonimo of result.sinonimos\">\n                            <a *ngIf = \"sinonimo[1] === definicion\" class=\"col\" [routerLink]=\"['/entrada', sinonimo[0]]\"> {{ sinonimo[0] }} &nbsp;</a>\n                        </div>\n                    </div>\n                </ol>\n            </div>\n            \n        </div>\n    </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>INICIO</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/neovis/neovis.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/neovis/neovis.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"grid-item--width2\">\n    <div class=\"card\" >\n        <div class=\"card-content\">\n            <span class=\"card-title\">Relaciones semánticas</span>\n            \n            <div id=\"viz\"></div>\n        </div>\n    </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/not-found/not-found.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/not-found/not-found.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>not-found works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search/search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <form #searchForm = \"ngForm\" (ngSubmit)=\"search(searchForm)\" autocomplete=\"off\" >\n                    <div class=\"row\">\n                        <div class=\"input-field col s12\">\n                            <i class=\"material-icons prefix red-text text-darken-3\">textsms</i>\n                            <input type=\"text\" id=\"autocomplete-input\" class=\"autocomplete\" name=\"autocomplete\"  #autocomplete = \"ngModel\" [(ngModel)] = \"wordService.searchedWord.lema\" autofocus>\n                            <label for=\"autocomplete-input\">Buscar una entrada</label>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"grid\">\n        <div>\n            <app-neovis></app-neovis>\n        </div>\n            <div *ngIf = \"!wordService.results || wordService.results.length == 0\">\n                <div class=\"grid-item\">\n                    <div class=\"card\">\n                        <div class=\"card-content\">\n                            <p>No se encontraron resultados</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        \n        \n        \n        <div>\n            <app-entrada></app-entrada>\n        </div>\n    </div>\n    \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/words/words.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/words/words.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div >\n            <div class=\"card\">\n                <div class=\"card-content\">\n                    <!-- se maneja desde el evento ngSubmit con la funcion addWord que toma como parametro el formulario (variable #wordForm) -->\n                    <form #wordForm = \"ngForm\" (ngSubmit)=\"addWord(wordForm)\" autocomplete=\"off\">\n                        <div class=\"row\">     \n                            <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)] = \"wordService.selectedWord._id\">                \n                            <div class=\"input-field col s12\">\n                                <input type=\"text\" name=\"lema\" #lema = \"ngModel\" [(ngModel)] = \"wordService.selectedWord.lema\" placeholder=\"Ingrese un lema\">    \n                            </div>\n                            <div class=\"input-field col s12\">\n                                <input type=\"text\" name=\"idLema\" #idLema = \"ngModel\" [(ngModel)] = \"wordService.selectedWord.idLema\" placeholder=\"Ingrese un ID para el lema\">  \n                            </div>\n                            <div class=\"card-action\">\n                                <div class=\"input-field col s12\">\n                                    <button class=\"btn right red darken-4\">Guardar</button>\n                                    <button class=\"btn left red darken-4\" (click) = \"resetForm(wordForm)\">Limpiar</button>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div>\n            <table class=\"responsive-table\">\n                <thead>\n                    <th>idLema</th>\n                    <th>Lema</th>\n                    <th>Opciones</th>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let word of wordService.words\">\n                        <td>{{ word.idLema }}</td>\n                        <td>{{ word.lema }}</td>\n                        <td>\n                            <a (click) = \"editWord(word)\">\n                                <i class=\"material-icons red-text text-darken-3\">edit</i>\n                            </a>\n                            <a (click) = \"deleteWord(word)\">\n                                <i class=\"material-icons red-text text-darken-3\">delete</i>\n                            </a>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_words_words_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/words/words.component */ "./src/app/components/words/words.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");







const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'entrada/:lema',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"]
    },
    {
        path: 'editarEntradas',
        component: _components_words_words_component__WEBPACK_IMPORTED_MODULE_4__["WordsComponent"]
    },
    {
        path: '**',
        component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_words_words_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/words/words.component */ "./src/app/components/words/words.component.ts");
/* harmony import */ var _components_neovis_neovis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/neovis/neovis.component */ "./src/app/components/neovis/neovis.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _services_word_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/word.service */ "./src/app/services/word.service.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_entrada_entrada_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/entrada/entrada.component */ "./src/app/components/entrada/entrada.component.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_words_words_component__WEBPACK_IMPORTED_MODULE_7__["WordsComponent"],
            _components_neovis_neovis_component__WEBPACK_IMPORTED_MODULE_8__["NeovisComponent"],
            _components_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
            _components_entrada_entrada_component__WEBPACK_IMPORTED_MODULE_13__["EntradaComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [_services_word_service__WEBPACK_IMPORTED_MODULE_10__["WordService"], _services_search_service__WEBPACK_IMPORTED_MODULE_14__["SearchService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/entrada/entrada.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/entrada/entrada.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    color: #c62828;\n}\n\nh5 {\n    display: inline;\n}\n\nspan {\n    font-weight: normal;\n    padding-right: 5px;\n}\n\nol {\n    font-weight: bold;\n}\n\n.cursiva {\n    font-style: italic;\n    \n}\n\n.fuente {\n    font-size: small;\n}\n\nspan:empty {\n    display: none;\n}\n\n.sinonimos, .variantes {\n    display:inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbnRyYWRhL2VudHJhZGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbnRyYWRhL2VudHJhZGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICAgIGNvbG9yOiAjYzYyODI4O1xufVxuXG5oNSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG5zcGFuIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxub2wge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY3Vyc2l2YSB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIFxufVxuXG4uZnVlbnRlIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG5zcGFuOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lub25pbW9zLCAudmFyaWFudGVzIHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/entrada/entrada.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/entrada/entrada.component.ts ***!
  \*********************************************************/
/*! exports provided: EntradaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntradaComponent", function() { return EntradaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_word_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/word.service */ "./src/app/services/word.service.ts");



let EntradaComponent = class EntradaComponent {
    constructor(wordService) {
        this.wordService = wordService;
    } // se usa wordService en el css
    ngOnInit() {
    }
};
EntradaComponent.ctorParameters = () => [
    { type: src_app_services_word_service__WEBPACK_IMPORTED_MODULE_2__["WordService"] }
];
EntradaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entrada',
        template: __webpack_require__(/*! raw-loader!./entrada.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/entrada/entrada.component.html"),
        styles: [__webpack_require__(/*! ./entrada.component.css */ "./src/app/components/entrada/entrada.component.css")]
    })
], EntradaComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/neovis/neovis.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/neovis/neovis.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#viz {\n    padding-left: 0;\n    padding-right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZW92aXMvbmVvdmlzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25lb3Zpcy9uZW92aXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN2aXoge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDUwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/neovis/neovis.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/neovis/neovis.component.ts ***!
  \*******************************************************/
/*! exports provided: NeovisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeovisComponent", function() { return NeovisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_neovis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/neovis.service */ "./src/app/services/neovis.service.ts");



let NeovisComponent = class NeovisComponent {
    constructor(neovisService) {
        this.neovisService = neovisService;
    }
    ngOnInit() {
        //this.neovisService.draw();
    }
};
NeovisComponent.ctorParameters = () => [
    { type: src_app_services_neovis_service__WEBPACK_IMPORTED_MODULE_2__["NeovisService"] }
];
NeovisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-neovis',
        template: __webpack_require__(/*! raw-loader!./neovis.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/neovis/neovis.component.html"),
        providers: [src_app_services_neovis_service__WEBPACK_IMPORTED_MODULE_2__["NeovisService"]],
        styles: [__webpack_require__(/*! ./neovis.component.css */ "./src/app/components/neovis/neovis.component.css")]
    })
], NeovisComponent);



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input:focus {\n    border-bottom: 1px solid #c62828 !important;\n    box-shadow: 0 1px 0 0 #c62828 !important;\n}\n.section-search input.autocomplete {\n    color: #000;\n}\n.input-field .prefix.active {\n    color: #000!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQ0FBMkM7SUFDM0Msd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzYyODI4ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMCAwICNjNjI4MjggIWltcG9ydGFudDtcbn1cbi5zZWN0aW9uLXNlYXJjaCBpbnB1dC5hdXRvY29tcGxldGUge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuLmlucHV0LWZpZWxkIC5wcmVmaXguYWN0aXZlIHtcbiAgICBjb2xvcjogIzAwMCFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_word_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/word.service */ "./src/app/services/word.service.ts");





let SearchComponent = class SearchComponent {
    constructor(searchService, router, wordService, route) {
        this.searchService = searchService;
        this.router = router;
        this.wordService = wordService;
        this.route = route;
    }
    ngOnInit() {
        this.searchService.getData();
        this.subscription = this.route.paramMap
            .subscribe(paramMap => {
            this.lema = paramMap.get('lema');
            this.search(this.lema);
        });
        var $grid = $('.grid').packery({
            columnWidth: '.grid-sizer',
            itemSelector: '.grid-item',
            percentPosition: true
        });
    }
    ngAfterViewInit() {
        if (this.lema !== '_') {
            this.search(this.lema);
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.wordService.searchedWord.lema = '';
        this.wordService.results = [];
    }
    search(form) {
        var searchedWord = '';
        if (form.constructor.name !== 'NgForm') {
            searchedWord = form;
        }
        else {
            searchedWord = form.value.autocomplete;
        }
        if (searchedWord != null && searchedWord.trim().length !== 0) {
            this.router.navigate(['/entrada', searchedWord]); // TODO: Esto hace que se llame el método dos veces
        }
        else {
            this.router.navigate(['/entrada', '_']);
        }
        this.searchService.searchWord(searchedWord);
        this.wordService.searchWord(searchedWord)
            .subscribe(res => {
            this.wordService.results = res;
        });
        this.searchService.getData();
    }
};
SearchComponent.ctorParameters = () => [
    { type: src_app_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_word_service__WEBPACK_IMPORTED_MODULE_4__["WordService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/components/words/words.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/words/words.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input:focus {\n    border-bottom: 1px solid #c62828 !important;\n    box-shadow: 0 1px 0 0 #c62828 !important;\n}\n.section-search input.autocomplete {\n    color: #000;\n}\n.input-field .prefix.active {\n    color: #000!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3Jkcy93b3Jkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkNBQTJDO0lBQzNDLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dvcmRzL3dvcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNjI4MjggIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2M2MjgyOCAhaW1wb3J0YW50O1xufVxuLnNlY3Rpb24tc2VhcmNoIGlucHV0LmF1dG9jb21wbGV0ZSB7XG4gICAgY29sb3I6ICMwMDA7XG59XG4uaW5wdXQtZmllbGQgLnByZWZpeC5hY3RpdmUge1xuICAgIGNvbG9yOiAjMDAwIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/words/words.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/words/words.component.ts ***!
  \*****************************************************/
/*! exports provided: WordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsComponent", function() { return WordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_word_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/word.service */ "./src/app/services/word.service.ts");
/* harmony import */ var src_app_models_lema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/lema */ "./src/app/models/lema.ts");
/* harmony import */ var src_app_services_neovis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/neovis.service */ "./src/app/services/neovis.service.ts");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");






let WordsComponent = class WordsComponent {
    constructor(wordService, neovisService, searchService) {
        this.wordService = wordService;
        this.neovisService = neovisService;
        this.searchService = searchService;
    }
    ngOnInit() {
        this.getWords();
    }
    addWord(form) {
        if (form.value._id) {
            this.wordService.putWord(form.value)
                .subscribe((res) => {
                this.resetForm(form);
                M.toast({ html: res.status });
                this.getWords();
            });
        }
        else if (form.value.lema != null && form.value.lema != '') {
            this.wordService.postWord(form.value)
                .subscribe((res) => {
                this.resetForm(form);
                M.toast({ html: res.status });
                this.getWords();
            });
        }
        //console.log(this.wordService.words);
    }
    getWords() {
        this.wordService.getWords()
            .subscribe(res => {
            this.wordService.words = res;
        });
        //this.searchService.getData();
    }
    editWord(word) {
        this.wordService.selectedWord = word;
    }
    deleteWord(word) {
        this.wordService.deleteWord(word)
            .subscribe((res) => {
            M.toast({ html: res.status });
            this.getWords();
        });
    }
    resetForm(form) {
        if (form) {
            form.reset();
            this.wordService.selectedWord = new src_app_models_lema__WEBPACK_IMPORTED_MODULE_3__["Lema"]();
            this.getWords();
        }
    }
};
WordsComponent.ctorParameters = () => [
    { type: _services_word_service__WEBPACK_IMPORTED_MODULE_2__["WordService"] },
    { type: src_app_services_neovis_service__WEBPACK_IMPORTED_MODULE_4__["NeovisService"] },
    { type: src_app_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"] }
];
WordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-words',
        template: __webpack_require__(/*! raw-loader!./words.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/words/words.component.html"),
        providers: [src_app_services_neovis_service__WEBPACK_IMPORTED_MODULE_4__["NeovisService"]],
        styles: [__webpack_require__(/*! ./words.component.css */ "./src/app/components/words/words.component.css")]
    })
], WordsComponent);



/***/ }),

/***/ "./src/app/models/lema.ts":
/*!********************************!*\
  !*** ./src/app/models/lema.ts ***!
  \********************************/
/*! exports provided: Lema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lema", function() { return Lema; });
// Modelo de datos en el front end
class Lema {
    constructor(_id = '', idLema = null, lema = '') {
        this._id = _id;
        this.idLema = idLema;
        this.lema = lema;
    }
}
Lema.ctorParameters = () => [
    null,
    null,
    null
];


/***/ }),

/***/ "./src/app/services/neovis.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/neovis.service.ts ***!
  \********************************************/
/*! exports provided: NeovisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeovisService", function() { return NeovisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NeovisService = class NeovisService {
    constructor() {
        this.contador = 0;
        this.config = {
            container_id: "viz",
            server_url: "bolt://localhost:7687",
            server_user: "neo4j",
            server_password: "123",
            labels: {
                "Lema": {
                    caption: "lema",
                    community: 0
                },
                "Definicion": {
                    caption: (node) => node.properties.enunciadoDef.split(/((?:\w+ ){5})/g).filter(Boolean).join("\n"),
                    community: "idDef"
                }
            },
            relationships: {
                "TIENE": {
                    caption: false,
                    thickness: 'tiene'
                },
                "ES": {
                    caption: false,
                    thickness: 'es'
                }
            },
            initial_cypher: "MATCH (n :Lema) WITH n MATCH (m:Lema)-[r]-(o:Lema) RETURN *"
        };
    }
    draw() {
        this.viz = new NeoVis.default(this.config);
        return this.viz.render();
    }
    reload(lema) {
        if (lema != '' && lema != null) {
            this.config.labels['Lema'].community = (node) => node.properties.lema.toLowerCase().startsWith(lema.toLowerCase()) ? 1 : 0;
            this.config.initial_cypher = "MATCH p=(n :Lema)--(r:Definicion)--(m:Lema) WHERE n.lema =~ " + "'(?i)" + lema + ".*' RETURN DISTINCT n, r,  m, relationships(p)";
            //¿Que hacer con palabras que no tienen sinonimos, ej: coquitos? Con palabras como bluyin se pueden usar las variantes (enlazarlas a definiciones)
        }
        else {
            this.config.initial_cypher = 'MATCH (n :Lema) WITH n MATCH (m:Lema)-[r]-(o:Lema) RETURN *';
        }
        this.draw();
    }
};
NeovisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NeovisService);



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _word_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./word.service */ "./src/app/services/word.service.ts");
/* harmony import */ var _neovis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./neovis.service */ "./src/app/services/neovis.service.ts");




let SearchService = class SearchService {
    constructor(wordService, neovisService) {
        this.wordService = wordService;
        this.neovisService = neovisService;
        this.data = {};
    }
    getData() {
        this.data = {};
        this.wordService.getWords()
            .subscribe(res => {
            this.wordService.words = res;
            this.wordService.words.forEach(word => {
                this.data[word.lema] = null;
            });
            var options = {
                data: this.data,
                onAutocomplete: (lema) => {
                    this.wordService.searchedWord.lema = lema;
                    //TODO: cuando se selecciona con el teclado hay que dar dos veces Enter
                }
            };
            $(document).ready(function () {
                $('input.autocomplete').autocomplete(options);
            });
        });
    }
    searchWord(lema) {
        this.neovisService.reload(lema);
    }
};
SearchService.ctorParameters = () => [
    { type: _word_service__WEBPACK_IMPORTED_MODULE_2__["WordService"] },
    { type: _neovis_service__WEBPACK_IMPORTED_MODULE_3__["NeovisService"] }
];
SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SearchService);



/***/ }),

/***/ "./src/app/services/word.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/word.service.ts ***!
  \******************************************/
/*! exports provided: WordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordService", function() { return WordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _models_lema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/lema */ "./src/app/models/lema.ts");


 // para comunicarse con el backend

let WordService = class WordService {
    constructor(http) {
        this.http = http;
        this.URL_API = 'api/entradas';
        this.selectedWord = new _models_lema__WEBPACK_IMPORTED_MODULE_3__["Lema"]();
        this.searchedWord = new _models_lema__WEBPACK_IMPORTED_MODULE_3__["Lema"]();
    }
    getWords() {
        return this.http.get(this.URL_API);
    }
    getWord(lema) {
        return this.http.get(this.URL_API + `/${lema.lema}`);
    }
    postWord(lema) {
        return this.http.post(this.URL_API, lema);
    }
    putWord(lema) {
        return this.http.put(this.URL_API + `/${lema.lema}`, lema); // `${lema.lema}` sintaxis ECMAScript para leer el valor de la propiedad lema del objeto lema
    }
    deleteWord(lema) {
        return this.http.request('delete', this.URL_API + `/${lema.lema}`, {
            body: {
                idLema: lema.idLema,
                lema: lema.lema
            }
        });
    }
    searchWord(lema) {
        return this.http.get(this.URL_API + '/resultados' + `/${lema}`);
    }
};
WordService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WordService);



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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mauro/pruebaLexicografia/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map