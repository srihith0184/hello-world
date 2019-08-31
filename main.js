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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buyadvice_buyadvice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buyadvice/buyadvice.component */ "./src/app/buyadvice/buyadvice.component.ts");
/* harmony import */ var _selladvice_selladvice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selladvice/selladvice.component */ "./src/app/selladvice/selladvice.component.ts");
/* harmony import */ var _topgainer_topgainer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topgainer/topgainer.component */ "./src/app/topgainer/topgainer.component.ts");
/* harmony import */ var _toplooser_toplooser_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toplooser/toplooser.component */ "./src/app/toplooser/toplooser.component.ts");







var routes = [{ path: 'buy', component: _buyadvice_buyadvice_component__WEBPACK_IMPORTED_MODULE_3__["BuyadviceComponent"] },
    { path: 'sell', component: _selladvice_selladvice_component__WEBPACK_IMPORTED_MODULE_4__["SelladviceComponent"] },
    { path: 'gainer', component: _topgainer_topgainer_component__WEBPACK_IMPORTED_MODULE_5__["TopgainerComponent"] },
    { path: 'looser', component: _toplooser_toplooser_component__WEBPACK_IMPORTED_MODULE_6__["ToplooserComponent"] },];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');\r\n\r\nbody, html {\r\n    height: 100%;\r\n    margin: 0 auto;\r\n    \r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUVBQXlFOztBQUV6RTtJQUNJLFlBQVk7SUFDWixjQUFjOzs7QUFHbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwJyk7XHJcblxyXG5ib2R5LCBodG1sIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgXHJcbiAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<body >\n  <router-outlet></router-outlet>\n\n</body>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TradeAdvice';
        console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production);
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _topgainer_topgainer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./topgainer/topgainer.component */ "./src/app/topgainer/topgainer.component.ts");
/* harmony import */ var _toplooser_toplooser_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toplooser/toplooser.component */ "./src/app/toplooser/toplooser.component.ts");
/* harmony import */ var _buyadvice_buyadvice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buyadvice/buyadvice.component */ "./src/app/buyadvice/buyadvice.component.ts");
/* harmony import */ var _selladvice_selladvice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selladvice/selladvice.component */ "./src/app/selladvice/selladvice.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");














var appRoutes = [
    {
        path: 'gainer',
        component: _topgainer_topgainer_component__WEBPACK_IMPORTED_MODULE_9__["TopgainerComponent"],
        data: { title: 'Share Market Advice ' }
    },
    {
        path: 'looser',
        component: _toplooser_toplooser_component__WEBPACK_IMPORTED_MODULE_10__["ToplooserComponent"],
        data: { title: 'Share Market Advice ' }
    },
    {
        path: 'buy',
        component: _buyadvice_buyadvice_component__WEBPACK_IMPORTED_MODULE_11__["BuyadviceComponent"],
        data: { title: 'Share Market Advice ' }
    },
    {
        path: 'sell',
        component: _selladvice_selladvice_component__WEBPACK_IMPORTED_MODULE_12__["SelladviceComponent"],
        data: { title: 'Share Market Advice ' }
    },
    {
        path: '',
        component: _buyadvice_buyadvice_component__WEBPACK_IMPORTED_MODULE_11__["BuyadviceComponent"],
        data: { title: 'Share Market Advice ' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _topgainer_topgainer_component__WEBPACK_IMPORTED_MODULE_9__["TopgainerComponent"],
                _toplooser_toplooser_component__WEBPACK_IMPORTED_MODULE_10__["ToplooserComponent"],
                _buyadvice_buyadvice_component__WEBPACK_IMPORTED_MODULE_11__["BuyadviceComponent"],
                _selladvice_selladvice_component__WEBPACK_IMPORTED_MODULE_12__["SelladviceComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buy.service.ts":
/*!********************************!*\
  !*** ./src/app/buy.service.ts ***!
  \********************************/
/*! exports provided: BuyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyService", function() { return BuyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var buyendpoint = "50.62.168.2:3000/buy";
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    })
};
var BuyService = /** @class */ (function () {
    function BuyService(http) {
        this.http = http;
    }
    BuyService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    BuyService.prototype.getBuyTrade = function () {
        return this.http.get(buyendpoint, { headers: {
                'Access-Control-Allow-Origin': '*'
            } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    BuyService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    BuyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BuyService);
    return BuyService;
}());



/***/ }),

/***/ "./src/app/buyadvice/buyadvice.component.css":
/*!***************************************************!*\
  !*** ./src/app/buyadvice/buyadvice.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: separate;\r\n    border-spacing: 1;\r\n    color: #4a4a4d;\r\n    font: 12px/1.4 \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    table-layout: fixed;\r\n    \r\n  \r\n  }\r\n  th,\r\n  td {\r\n    padding: 10px 15px;\r\n    vertical-align: top;\r\n    align-content: top;\r\n    -ms-grid-columns: inherit;\r\n  }\r\n  tr {\r\n    padding: 10px 15px;\r\n    vertical-align: top;\r\n    align-content: top;\r\n    \r\n  }\r\n  thead {\r\n    background: #395870;\r\n    background: linear-gradient(#49708f, #293f50);\r\n    color: #fff;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n  \r\n  }\r\n  th:first-child {\r\n    border-top-left-radius: 5px;\r\n    text-align: left;\r\n  }\r\n  th:last-child {\r\n    border-top-right-radius: 5px;\r\n  }\r\n  tbody tr:nth-child(even) {\r\n    background: #f0f0f2;\r\n  }\r\n  td {\r\n    border-bottom: 1px solid #cecfd5;\r\n    border-right: 1px solid #cecfd5;\r\n  }\r\n  td:first-child {\r\n    border-left: 1px solid #cecfd5;\r\n  }\r\n  .book-title {\r\n    color: #395870;\r\n    display: block;\r\n  }\r\n  .text-offset {\r\n    color: #7c7c80;\r\n    font-size: 12px;\r\n  }\r\n  .item-stock,\r\n  .item-qty {\r\n    text-align: center;\r\n  }\r\n  .item-price {\r\n    text-align: right;\r\n  }\r\n  .item-multiple {\r\n    display: block;\r\n  }\r\n  tfoot {\r\n    text-align: right;\r\n  }\r\n  tfoot tr:last-child {\r\n    background: #f0f0f2;\r\n    color: #395870;\r\n    font-weight: bold;\r\n  }\r\n  tfoot tr:last-child td:first-child {\r\n    border-bottom-left-radius: 5px;\r\n  }\r\n  tfoot tr:last-child td:last-child {\r\n    border-bottom-right-radius: 5px;\r\n  }\r\n  body {\r\n    background: #9BC86A;\r\n    font: 400 14px 'Calibri','Arial';\r\n    padding: 20px;\r\n \r\n  }\r\n  blockquote {\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5YWR2aWNlL2J1eWFkdmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsNkRBQTZEO0lBQzdELG1CQUFtQjs7O0VBR3JCO0VBQ0E7O0lBRUUsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCO0VBS0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7RUFFcEI7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0MsV0FBVztJQUNYLGVBQWU7SUFDZix5QkFBeUI7O0VBRTNCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7RUFDQTs7SUFFRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsYUFBYTs7RUFFZjtFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2J1eWFkdmljZS9idXlhZHZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICBib3JkZXItc3BhY2luZzogMTtcclxuICAgIGNvbG9yOiAjNGE0YTRkO1xyXG4gICAgZm9udDogMTJweC8xLjQgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgIFxyXG4gIFxyXG4gIH1cclxuICB0aCxcclxuICB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYWxpZ24tY29udGVudDogdG9wO1xyXG4gICAgLW1zLWdyaWQtY29sdW1uczogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgdHIge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHRvcDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICB0aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzk1ODcwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0OTcwOGYsICMyOTNmNTApO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIFxyXG4gIH1cclxuICB0aDpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICB0aDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYyO1xyXG4gIH1cclxuICB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2ZkNTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWNmZDU7XHJcbiAgfVxyXG4gIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NlY2ZkNTtcclxuICB9XHJcbiAgLmJvb2stdGl0bGUge1xyXG4gICAgY29sb3I6ICMzOTU4NzA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnRleHQtb2Zmc2V0IHtcclxuICAgIGNvbG9yOiAjN2M3YzgwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuaXRlbS1zdG9jayxcclxuICAuaXRlbS1xdHkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuaXRlbS1wcmljZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLml0ZW0tbXVsdGlwbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIHRmb290IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICB0Zm9vdCB0cjpsYXN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjI7XHJcbiAgICBjb2xvcjogIzM5NTg3MDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICB0Zm9vdCB0cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgdGZvb3QgdHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzlCQzg2QTtcclxuICAgIGZvbnQ6IDQwMCAxNHB4ICdDYWxpYnJpJywnQXJpYWwnO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuIFxyXG4gIH1cclxuICBcclxuICBibG9ja3F1b3RlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/buyadvice/buyadvice.component.html":
/*!****************************************************!*\
  !*** ./src/app/buyadvice/buyadvice.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<ul class=\"Sell Shares\" background=\"assets\\123.jpg\">\n\n\n\n\n  <h1 color=\"reds\"><font color=\"black\"> Buy Advice Today </font></h1>\n\n                  <div  >\n\n                          \n                            <table border=\"1\">\n                                  <tr bgcolor=\"black\">\n          \n                                          <th>\n                                                  <font color=\"white\">STOCK NAME</font>\n                                          </th>\n                                          <th>\n                                                  <font color=\"white\">OPEN PRICE</font>\n                                          </th>\n                                          <th>\n                                                  <font color=\"white\">HIGH PRICE</font>\n                                          </th>\n                                          <th>\n                                                  <font color=\"white\">LOW PRICE</font>\n                                          </th>\n                                          <th>\n                                                  <font color=\"white\">LTP PRICE</font>\n                                          </th>\n                                        \n          \n                                  </tr>\n          \n                                  \n          \n                                  <tr *ngFor=\"let buytrade of buytrades\" bgcolor=\"lightgreen\">\n          \n                                          <td>{{buytrade.symbol}}</td>\n                                          <td>{{buytrade.open}}</td>\n                                          <td>{{buytrade.high}}</td>\n                                          <td>{{buytrade.low}}</td>\n                                          <td>{{buytrade.ltP}}</td>\n                                          \n          \n          \n                                  </tr>\n                                  \n          \n                          </table>\n                  \n                  </div>\n\n</ul>\n"

/***/ }),

/***/ "./src/app/buyadvice/buyadvice.component.ts":
/*!**************************************************!*\
  !*** ./src/app/buyadvice/buyadvice.component.ts ***!
  \**************************************************/
/*! exports provided: BuyadviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyadviceComponent", function() { return BuyadviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _buy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buy.service */ "./src/app/buy.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var BuyadviceComponent = /** @class */ (function () {
    function BuyadviceComponent(rest, route, router) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.buytrades = [];
        this.buySample = [];
    }
    BuyadviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(200000).subscribe(function (val) {
            _this.getBuyTrades();
        });
        this.getBuyTrades();
    };
    BuyadviceComponent.prototype.getBuyTrades = function () {
        var _this = this;
        this.rest.getBuyTrade().subscribe(function (res) {
            var filtered = [];
            // console.log(res.data.length);
            filtered = res.data.filter(function (item) {
                return item.open === item.low;
            });
            // console.log(filtered);
            _this.buytrades = filtered;
        });
    };
    BuyadviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyadvice',
            template: __webpack_require__(/*! ./buyadvice.component.html */ "./src/app/buyadvice/buyadvice.component.html"),
            styles: [__webpack_require__(/*! ./buyadvice.component.css */ "./src/app/buyadvice/buyadvice.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_buy_service__WEBPACK_IMPORTED_MODULE_2__["BuyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BuyadviceComponent);
    return BuyadviceComponent;
}());



/***/ }),

/***/ "./src/app/gainer.service.ts":
/*!***********************************!*\
  !*** ./src/app/gainer.service.ts ***!
  \***********************************/
/*! exports provided: GainerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GainerService", function() { return GainerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var gainerendpoint = "50.62.168.2:3000/gainer";
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    })
};
var GainerService = /** @class */ (function () {
    function GainerService(http) {
        this.http = http;
    }
    GainerService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    GainerService.prototype.getGainerTrade = function () {
        this.http.head("Access-Control-Allow-Origin:*");
        return this.http.get(gainerendpoint, { headers: {
                'Access-Control-Allow-Origin': '*'
            } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    GainerService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    GainerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GainerService);
    return GainerService;
}());



/***/ }),

/***/ "./src/app/looser.service.ts":
/*!***********************************!*\
  !*** ./src/app/looser.service.ts ***!
  \***********************************/
/*! exports provided: LooserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LooserService", function() { return LooserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var looserendpoint = "50.62.168.2:3000/looser";
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    })
};
var LooserService = /** @class */ (function () {
    function LooserService(http) {
        this.http = http;
    }
    LooserService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    LooserService.prototype.getLooserTrade = function () {
        return this.http.get(looserendpoint, { headers: {
                'Access-Control-Allow-Origin': '*'
            } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    LooserService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    LooserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LooserService);
    return LooserService;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The navbar */\r\n.topnav {\r\n    overflow: hidden;\r\n    background-color: #333;\r\n  }\r\n/* Navbar links */\r\n.topnav a {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n.topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7QUFDZjtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7RUFDeEI7QUFFQSxpQkFBaUI7QUFDakI7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGUgbmF2YmFyICovXHJcbi50b3BuYXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE5hdmJhciBsaW5rcyAqL1xyXG4gIC50b3BuYXYgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<header>\n  <div class=\"container\">\n    <h1> <font color=\"white\"> Share Market Advisory</font></h1>\n    <nav>\n\n      <div class=\"bg-img\" >\n        <div class=\"container\">\n          <div class=\"topnav\">\n            <a routerLink=\"/gainer\">Top Gainers</a>\n            <a routerLink=\"/looser\">Top Loosers</a>\n            <a routerLink=\"/buy\">Buying Stocks</a>\n            <a routerLink=\"/sell\">Selling Stocks</a>\n          </div>\n        </div>\n      </div>\n\n    </nav>\n\n\n\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/sell.service.ts":
/*!*********************************!*\
  !*** ./src/app/sell.service.ts ***!
  \*********************************/
/*! exports provided: SellService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellService", function() { return SellService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var sellendpoint = "50.62.168.2/sell";
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    })
};
var SellService = /** @class */ (function () {
    function SellService(http) {
        this.http = http;
    }
    SellService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    SellService.prototype.getSellTrade = function () {
        return this.http.get(sellendpoint, { headers: {
                'Access-Control-Allow-Origin': '*'
            } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    SellService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    SellService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SellService);
    return SellService;
}());



/***/ }),

/***/ "./src/app/selladvice/selladvice.component.css":
/*!*****************************************************!*\
  !*** ./src/app/selladvice/selladvice.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: separate;\r\n    border-spacing: 1;\r\n    color: #f5f5f5;\r\n    font: 12px/1.4 \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    table-layout: fixed;\r\n    \r\n  \r\n  }\r\n  th,\r\n  td {\r\n    padding: 10px 15px;\r\n    vertical-align: top;\r\n    align-content: top;\r\n    -ms-grid-columns: inherit;\r\n  }\r\n  tr {\r\n    padding: 10px 15px;\r\n    vertical-align: top;\r\n    align-content: top;\r\n    \r\n  }\r\n  thead {\r\n    background: #395870;\r\n    background: linear-gradient(#49708f, #293f50);\r\n    color: #fff;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n  \r\n  }\r\n  th:first-child {\r\n    border-top-left-radius: 5px;\r\n    text-align: left;\r\n  }\r\n  th:last-child {\r\n    border-top-right-radius: 5px;\r\n  }\r\n  tbody tr:nth-child(even) {\r\n    background: #d3770d;\r\n  }\r\n  td {\r\n    border-bottom: 1px solid #cecfd5;\r\n    border-right: 1px solid #cecfd5;\r\n  }\r\n  td:first-child {\r\n    border-left: 1px solid #cecfd5;\r\n  }\r\n  .book-title {\r\n    color: #395870;\r\n    display: block;\r\n  }\r\n  .text-offset {\r\n    color: #7c7c80;\r\n    font-size: 12px;\r\n  }\r\n  .item-stock,\r\n  .item-qty {\r\n    text-align: center;\r\n  }\r\n  .item-price {\r\n    text-align: right;\r\n  }\r\n  .item-multiple {\r\n    display: block;\r\n  }\r\n  tfoot {\r\n    text-align: right;\r\n  }\r\n  tfoot tr:last-child {\r\n    background: #f0f0f2;\r\n    color: #395870;\r\n    font-weight: bold;\r\n  }\r\n  tfoot tr:last-child td:first-child {\r\n    border-bottom-left-radius: 5px;\r\n  }\r\n  tfoot tr:last-child td:last-child {\r\n    border-bottom-right-radius: 5px;\r\n  }\r\n  body {\r\n    background: rgb(200, 120, 106);\r\n    font: 400 14px 'Calibri','Arial';\r\n    padding: 20px;\r\n \r\n  }\r\n  blockquote {\r\n    color: rgb(245, 11, 11);\r\n    text-align: center;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGFkdmljZS9zZWxsYWR2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCw2REFBNkQ7SUFDN0QsbUJBQW1COzs7RUFHckI7RUFDQTs7SUFFRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7RUFLQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCOztFQUVwQjtFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3QyxXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5Qjs7RUFFM0I7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGNBQWM7SUFDZCxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtFQUNBOztJQUVFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyxhQUFhOztFQUVmO0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2VsbGFkdmljZS9zZWxsYWR2aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDE7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxuICAgIGZvbnQ6IDEycHgvMS40IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICBcclxuICBcclxuICB9XHJcbiAgdGgsXHJcbiAgdGQge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHRvcDtcclxuICAgIC1tcy1ncmlkLWNvbHVtbnM6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIHRyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBhbGlnbi1jb250ZW50OiB0b3A7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgdGhlYWQge1xyXG4gICAgYmFja2dyb3VuZDogIzM5NTg3MDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNDk3MDhmLCAjMjkzZjUwKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBcclxuICB9XHJcbiAgdGg6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgdGg6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIH1cclxuICB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZDogI2QzNzcwZDtcclxuICB9XHJcbiAgdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZWNmZDU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2VjZmQ1O1xyXG4gIH1cclxuICB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjZWNmZDU7XHJcbiAgfVxyXG4gIC5ib29rLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMzk1ODcwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC50ZXh0LW9mZnNldCB7XHJcbiAgICBjb2xvcjogIzdjN2M4MDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLml0ZW0tc3RvY2ssXHJcbiAgLml0ZW0tcXR5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLml0ZW0tcHJpY2Uge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5pdGVtLW11bHRpcGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICB0Zm9vdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgdGZvb3QgdHI6bGFzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYyO1xyXG4gICAgY29sb3I6ICMzOTU4NzA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgdGZvb3QgdHI6bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIHRmb290IHRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMDAsIDEyMCwgMTA2KTtcclxuICAgIGZvbnQ6IDQwMCAxNHB4ICdDYWxpYnJpJywnQXJpYWwnO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuIFxyXG4gIH1cclxuICBcclxuICBibG9ja3F1b3RlIHtcclxuICAgIGNvbG9yOiByZ2IoMjQ1LCAxMSwgMTEpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/selladvice/selladvice.component.html":
/*!******************************************************!*\
  !*** ./src/app/selladvice/selladvice.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<ul class=\"Sell Shares\" background=\"assets\\123.jpg\">\n\n\n\n\n  <h1 color=\"reds\"> <font color=\"black\"> Sell Advice Today </font></h1>\n\n                  <div >\n\n                         \n                          <table border=\"1\">\n                                  <tr bgcolor=\"black\">\n          \n                                          <th>\n                                                  <font color=\"white\">STOCK NAME</font>\n                                          </th>\n                                          <th>\n                                                  <font color=\"white\">OPEN PRICE</font>\n                                          </th>\n                                          <th>\n                                                  <font color=\"white\">HIGH PRICE</font>\n                                          </th>\n                                          <th>\n                                                  <font color=\"white\">LOW PRICE</font>\n                                          </th>\n                                          <th>\n                                                  <font color=\"white\">LTP PRICE</font>\n                                          </th>\n                                        \n          \n                                  </tr>\n          \n                                  \n          \n                                  <tr *ngFor=\"let selltrade of selltrades\" bgcolor=\"red\">\n          \n                                          <td>{{selltrade.symbol}}</td>\n                                          <td>{{selltrade.open}}</td>\n                                          <td>{{selltrade.high}}</td>\n                                          <td>{{selltrade.low}}</td>\n                                          <td>{{selltrade.ltP}}</td>\n                                          \n          \n          \n                                  </tr>\n                                  \n          \n                          </table>\n                  \n                  </div>\n\n</ul>\n"

/***/ }),

/***/ "./src/app/selladvice/selladvice.component.ts":
/*!****************************************************!*\
  !*** ./src/app/selladvice/selladvice.component.ts ***!
  \****************************************************/
/*! exports provided: SelladviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelladviceComponent", function() { return SelladviceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sell_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sell.service */ "./src/app/sell.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var SelladviceComponent = /** @class */ (function () {
    function SelladviceComponent(rest, route, router) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.selltrades = [];
        this.sellSample = [];
    }
    SelladviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(200000).subscribe(function (val) {
            _this.getSellTrades();
        });
        this.getSellTrades();
    };
    SelladviceComponent.prototype.getSellTrades = function () {
        var _this = this;
        this.rest.getSellTrade().subscribe(function (res) {
            var filtered = [];
            // console.log(res.data.length);
            filtered = res.data.filter(function (item) {
                return item.open === item.high;
            });
            //console.log(filtered);
            _this.selltrades = filtered;
        });
    };
    SelladviceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selladvice',
            template: __webpack_require__(/*! ./selladvice.component.html */ "./src/app/selladvice/selladvice.component.html"),
            styles: [__webpack_require__(/*! ./selladvice.component.css */ "./src/app/selladvice/selladvice.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sell_service__WEBPACK_IMPORTED_MODULE_2__["SellService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SelladviceComponent);
    return SelladviceComponent;
}());



/***/ }),

/***/ "./src/app/topgainer/topgainer.component.css":
/*!***************************************************!*\
  !*** ./src/app/topgainer/topgainer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: separate;\r\n    border-spacing: 1;\r\n    color: #4a4a4d;\r\n    font: 12px/1.4 \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    table-layout: fixed;\r\n    \r\n  \r\n  }\r\n  th,\r\n  td {\r\n    padding: 10px 15px;\r\n    vertical-align: top;\r\n    align-content: top;\r\n    -ms-grid-columns: inherit;\r\n  }\r\n  tr {\r\n    padding: 10px 15px;\r\n    vertical-align: top;\r\n    align-content: top;\r\n    \r\n  }\r\n  thead {\r\n    background: #395870;\r\n    background: linear-gradient(#49708f, #293f50);\r\n    color: #fff;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n  \r\n  }\r\n  th:first-child {\r\n    border-top-left-radius: 5px;\r\n    text-align: left;\r\n  }\r\n  th:last-child {\r\n    border-top-right-radius: 5px;\r\n  }\r\n  tbody tr:nth-child(even) {\r\n    background: #f0f0f2;\r\n  }\r\n  td {\r\n    border-bottom: 1px solid #cecfd5;\r\n    border-right: 1px solid #cecfd5;\r\n  }\r\n  td:first-child {\r\n    border-left: 1px solid #cecfd5;\r\n  }\r\n  .book-title {\r\n    color: #395870;\r\n    display: block;\r\n  }\r\n  .text-offset {\r\n    color: #7c7c80;\r\n    font-size: 12px;\r\n  }\r\n  .item-stock,\r\n  .item-qty {\r\n    text-align: center;\r\n  }\r\n  .item-price {\r\n    text-align: right;\r\n  }\r\n  .item-multiple {\r\n    display: block;\r\n  }\r\n  tfoot {\r\n    text-align: right;\r\n  }\r\n  tfoot tr:last-child {\r\n    background: #f0f0f2;\r\n    color: #395870;\r\n    font-weight: bold;\r\n  }\r\n  tfoot tr:last-child td:first-child {\r\n    border-bottom-left-radius: 5px;\r\n  }\r\n  tfoot tr:last-child td:last-child {\r\n    border-bottom-right-radius: 5px;\r\n  }\r\n  body {\r\n    background: #9BC86A;\r\n    font: 400 14px 'Calibri','Arial';\r\n    padding: 20px;\r\n \r\n  }\r\n  blockquote {\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wZ2FpbmVyL3RvcGdhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsNkRBQTZEO0lBQzdELG1CQUFtQjs7O0VBR3JCO0VBQ0E7O0lBRUUsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCO0VBS0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7RUFFcEI7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0MsV0FBVztJQUNYLGVBQWU7SUFDZix5QkFBeUI7O0VBRTNCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZ0NBQWdDO0lBQ2hDLCtCQUErQjtFQUNqQztFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7RUFDQTs7SUFFRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsYUFBYTs7RUFFZjtFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3RvcGdhaW5lci90b3BnYWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICBib3JkZXItc3BhY2luZzogMTtcclxuICAgIGNvbG9yOiAjNGE0YTRkO1xyXG4gICAgZm9udDogMTJweC8xLjQgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgIFxyXG4gIFxyXG4gIH1cclxuICB0aCxcclxuICB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYWxpZ24tY29udGVudDogdG9wO1xyXG4gICAgLW1zLWdyaWQtY29sdW1uczogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgdHIge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHRvcDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICB0aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzk1ODcwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM0OTcwOGYsICMyOTNmNTApO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIFxyXG4gIH1cclxuICB0aDpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICB0aDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYyO1xyXG4gIH1cclxuICB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2ZkNTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZWNmZDU7XHJcbiAgfVxyXG4gIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NlY2ZkNTtcclxuICB9XHJcbiAgLmJvb2stdGl0bGUge1xyXG4gICAgY29sb3I6ICMzOTU4NzA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnRleHQtb2Zmc2V0IHtcclxuICAgIGNvbG9yOiAjN2M3YzgwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuaXRlbS1zdG9jayxcclxuICAuaXRlbS1xdHkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuaXRlbS1wcmljZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLml0ZW0tbXVsdGlwbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIHRmb290IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICB0Zm9vdCB0cjpsYXN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjI7XHJcbiAgICBjb2xvcjogIzM5NTg3MDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICB0Zm9vdCB0cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgdGZvb3QgdHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzlCQzg2QTtcclxuICAgIGZvbnQ6IDQwMCAxNHB4ICdDYWxpYnJpJywnQXJpYWwnO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuIFxyXG4gIH1cclxuICBcclxuICBibG9ja3F1b3RlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/topgainer/topgainer.component.html":
/*!****************************************************!*\
  !*** ./src/app/topgainer/topgainer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<ul class=\"Gaining Shares\" background=\"assets\\123.jpg\">\n\n\n\n  <h1 color=\"reds\"><font color=\"black\">  Top Gainers Today</font></h1>\n\n  <div *ngFor=\"let gainertrade of gainertrades\">\n                  <div *ngFor=\"let trade of gainertrade\">\n          <table border=\"1\">\n                  <tr bgcolor=\"black\">\n\n                          <th>\n                                  <font color=\"white\">STOCK NAME</font>\n                          </th>\n                          <th>\n                                  <font color=\"white\">OPEN PRICE</font>\n                          </th>\n                          <th>\n                                  <font color=\"white\">HIGH PRICE</font>\n                          </th>\n                          <th>\n                                  <font color=\"white\">LOW PRICE</font>\n                          </th>\n                          <th>\n                                  <font color=\"white\">LTP PRICE</font>\n                          </th>\n                          <th>\n                                  <font color=\"white\">PREVIOUS CLOSE PRICE</font>\n                          </th>\n\n                  </tr>\n\n                  \n\n                  <tr *ngFor=\"let trade1 of trade.data\" bgcolor=\"lightgreen\">\n\n                          <td>{{trade1.symbol}}</td>\n                          <td>{{trade1.openPrice}}</td>\n                          <td>{{trade1.highPrice}}</td>\n                          <td>{{trade1.lowPrice}}</td>\n                          <td>{{trade1.ltp}}</td>\n                          <td>{{trade1.previousPrice}}</td>\n\n\n                  </tr>\n                  \n\n          </table>\n  </div>\n  </div>\n\n\n\n</ul>"

/***/ }),

/***/ "./src/app/topgainer/topgainer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/topgainer/topgainer.component.ts ***!
  \**************************************************/
/*! exports provided: TopgainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopgainerComponent", function() { return TopgainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gainer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gainer.service */ "./src/app/gainer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var TopgainerComponent = /** @class */ (function () {
    function TopgainerComponent(rest, route, router) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.gainerSample = [];
        this.gainertrades = [];
    }
    TopgainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(200000).subscribe(function (val) {
            _this.getGainerTrades();
        });
        this.getGainerTrades();
    };
    TopgainerComponent.prototype.getGainerTrades = function () {
        var _this = this;
        this.gainertrades = [];
        this.rest.getGainerTrade().subscribe(function (data) {
            console.log(data);
            _this.gainerSample = Array.of(data);
            _this.gainertrades = Array.of(_this.gainerSample);
            console.log(_this.gainertrades);
        });
    };
    TopgainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topgainer',
            template: __webpack_require__(/*! ./topgainer.component.html */ "./src/app/topgainer/topgainer.component.html"),
            styles: [__webpack_require__(/*! ./topgainer.component.css */ "./src/app/topgainer/topgainer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_gainer_service__WEBPACK_IMPORTED_MODULE_2__["GainerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TopgainerComponent);
    return TopgainerComponent;
}());



/***/ }),

/***/ "./src/app/toplooser/toplooser.component.css":
/*!***************************************************!*\
  !*** ./src/app/toplooser/toplooser.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    border-collapse: separate;\r\n    border-spacing: 1;\r\n    color: #f5f5f8;\r\n    font: 12px/1.4 \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    table-layout: fixed;\r\n    \r\n    \r\n  \r\n  }\r\n  th,\r\n  td {\r\n    padding: 10px 15px;\r\n    vertical-align: top;\r\n    align-content: top;\r\n    -ms-grid-columns: inherit;\r\n  }\r\n  tr {\r\n    padding: 10px 15px;\r\n    vertical-align: top;\r\n    align-content: top;\r\n    \r\n  }\r\n  thead {\r\n    background: #395870;\r\n    background: linear-gradient(#49708f, #293f50);\r\n    color: #fff;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n  \r\n  }\r\n  th:first-child {\r\n    border-top-left-radius: 5px;\r\n    text-align: left;\r\n  }\r\n  th:last-child {\r\n    border-top-right-radius: 5px;\r\n  }\r\n  tbody tr:nth-child(even) {\r\n    background: #d8a90d;\r\n  }\r\n  td {\r\n    border-bottom: 1px solid #cecfd5;\r\n    border-right: 1px solid #cecfd5;\r\n  }\r\n  td:first-child {\r\n    border-left: 1px solid #cecfd5;\r\n  }\r\n  .book-title {\r\n    color: #395870;\r\n    display: block;\r\n  }\r\n  .text-offset {\r\n    color: #7c7c80;\r\n    font-size: 12px;\r\n  }\r\n  .item-stock,\r\n  .item-qty {\r\n    text-align: center;\r\n  }\r\n  .item-price {\r\n    text-align: right;\r\n  }\r\n  .item-multiple {\r\n    display: block;\r\n  }\r\n  tfoot {\r\n    text-align: right;\r\n  }\r\n  tfoot tr:last-child {\r\n    background: #f0f0f2;\r\n    color: #395870;\r\n    font-weight: bold;\r\n  }\r\n  tfoot tr:last-child td:first-child {\r\n    border-bottom-left-radius: 5px;\r\n  }\r\n  tfoot tr:last-child td:last-child {\r\n    border-bottom-right-radius: 5px;\r\n  }\r\n  body {\r\n    background: rgb(72, 24, 202);\r\n    font: 400 14px 'Calibri','Arial';\r\n    padding: 20px;\r\n    background:\"assets\\123.jpg\"\r\n \r\n  }\r\n  \r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wbG9vc2VyL3RvcGxvb3Nlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsNkRBQTZEO0lBQzdELG1CQUFtQjs7OztFQUlyQjtFQUNBOztJQUVFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjtFQUtBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7O0VBRXBCO0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNkNBQTZDO0lBQzdDLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCOztFQUUzQjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGdDQUFnQztJQUNoQywrQkFBK0I7RUFDakM7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsY0FBYztJQUNkLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0VBQ0E7O0lBRUUsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYjs7RUFFRiIsImZpbGUiOiJzcmMvYXBwL3RvcGxvb3Nlci90b3Bsb29zZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICBib3JkZXItc3BhY2luZzogMTtcclxuICAgIGNvbG9yOiAjZjVmNWY4O1xyXG4gICAgZm9udDogMTJweC8xLjQgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgIFxyXG4gICAgXHJcbiAgXHJcbiAgfVxyXG4gIHRoLFxyXG4gIHRkIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBhbGlnbi1jb250ZW50OiB0b3A7XHJcbiAgICAtbXMtZ3JpZC1jb2x1bW5zOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICB0ciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYWxpZ24tY29udGVudDogdG9wO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIHRoZWFkIHtcclxuICAgIGJhY2tncm91bmQ6ICMzOTU4NzA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzQ5NzA4ZiwgIzI5M2Y1MCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgXHJcbiAgfVxyXG4gIHRoOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIHRoOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQ6ICNkOGE5MGQ7XHJcbiAgfVxyXG4gIHRkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VjZmQ1O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NlY2ZkNTtcclxuICB9XHJcbiAgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2VjZmQ1O1xyXG4gIH1cclxuICAuYm9vay10aXRsZSB7XHJcbiAgICBjb2xvcjogIzM5NTg3MDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAudGV4dC1vZmZzZXQge1xyXG4gICAgY29sb3I6ICM3YzdjODA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5pdGVtLXN0b2NrLFxyXG4gIC5pdGVtLXF0eSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pdGVtLXByaWNlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAuaXRlbS1tdWx0aXBsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgdGZvb3Qge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIHRmb290IHRyOmxhc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMjtcclxuICAgIGNvbG9yOiAjMzk1ODcwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIHRmb290IHRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIH1cclxuICB0Zm9vdCB0cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzIsIDI0LCAyMDIpO1xyXG4gICAgZm9udDogNDAwIDE0cHggJ0NhbGlicmknLCdBcmlhbCc7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDpcImFzc2V0c1xcMTIzLmpwZ1wiXHJcbiBcclxuICB9XHJcbiAgXHJcblxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/toplooser/toplooser.component.html":
/*!****************************************************!*\
  !*** ./src/app/toplooser/toplooser.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<ul class=\"Loosing Shares\">\n\n\n\n\n  <h1 color=\"reds\"> <font color=\"black\"> Top Loosers Today </font></h1>\n\n                  <div *ngFor=\"let loosertrade of loosertrades\">\n\n                           <div *ngFor=\"let trade of loosertrade\">\n                          <table border=\"1\">\n                                  <tr bgcolor=\"black\">\n          \n                                          <th>\n                                                  <font color=\"white\">STOCK NAME</font>\n                                          </th>\n                                          <th>\n                                                  <font color=\"white\">OPEN PRICE</font>\n                                          </th>\n                                          <th>\n                                                  <font color=\"white\">HIGH PRICE</font>\n                                          </th>\n                                          <th>\n                                                  <font color=\"white\">LOW PRICE</font>\n                                          </th>\n                                          <th>\n                                                  <font color=\"white\">LTP PRICE</font>\n                                          </th>\n                                          <th>\n                                                  <font color=\"white\">PREVIOUS CLOSE PRICE</font>\n                                          </th>\n          \n                                  </tr>\n          \n                                  \n          \n                                  <tr *ngFor=\"let trade1 of trade.data\" bgcolor=\"red\">\n          \n                                          <td>{{trade1.symbol}}</td>\n                                          <td>{{trade1.openPrice}}</td>\n                                          <td>{{trade1.highPrice}}</td>\n                                          <td>{{trade1.lowPrice}}</td>\n                                          <td>{{trade1.ltp}}</td>\n                                          <td>{{trade1.previousPrice}}</td>\n          \n          \n                                  </tr>\n                                  \n          \n                          </table>\n                  </div>\n                  </div>\n\n</ul>"

/***/ }),

/***/ "./src/app/toplooser/toplooser.component.ts":
/*!**************************************************!*\
  !*** ./src/app/toplooser/toplooser.component.ts ***!
  \**************************************************/
/*! exports provided: ToplooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToplooserComponent", function() { return ToplooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _looser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../looser.service */ "./src/app/looser.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ToplooserComponent = /** @class */ (function () {
    function ToplooserComponent(rest, route, router) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.loosertrades = [];
        this.looserSample = [];
    }
    ToplooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(200000).subscribe(function (val) {
            _this.getLooserTrades();
        });
        this.getLooserTrades();
    };
    ToplooserComponent.prototype.getLooserTrades = function () {
        var _this = this;
        this.loosertrades = [];
        this.rest.getLooserTrade().subscribe(function (data) {
            console.log(data);
            _this.looserSample = Array.of(data);
            _this.loosertrades = Array.of(_this.looserSample);
        });
    };
    ToplooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toplooser',
            template: __webpack_require__(/*! ./toplooser.component.html */ "./src/app/toplooser/toplooser.component.html"),
            styles: [__webpack_require__(/*! ./toplooser.component.css */ "./src/app/toplooser/toplooser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_looser_service__WEBPACK_IMPORTED_MODULE_2__["LooserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ToplooserComponent);
    return ToplooserComponent;
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
    apiUrl: 'https://www.nseindia.com/'
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

module.exports = __webpack_require__(/*! C:\Users\bhask\Documents\Trading FE\TradeAdvice\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map