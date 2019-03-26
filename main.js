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



var routes = [];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<app-home></app-home>\n<app-why-we></app-why-we>\n<app-tutorial></app-tutorial>\n<app-footer></app-footer>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ProgrammingYourLife';
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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _why_we_why_we_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./why-we/why-we.component */ "./src/app/why-we/why-we.component.ts");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _why_we_why_we_component__WEBPACK_IMPORTED_MODULE_7__["WhyWeComponent"],
                _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_9__["TutorialComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ng2_carouselamos__WEBPACK_IMPORTED_MODULE_8__["Ng2CarouselamosModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: #aca7a3;\r\n\r\n}\r\na{\r\n    text-decoration: none;\r\n    display: block;\r\n    padding-top: 5px;\r\n    margin-left:10px; \r\n    color: #fff;\r\n}\r\n.contact{\r\n    margin-left: 10px;\r\n}\r\n@media screen and (min-width: 768px){\r\n    .contact{\r\n        display: flex;\r\n        flex-direction: column-reverse;\r\n    \r\n    }\r\n    .container{\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n    \r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCOztBQUU3QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBR0E7SUFDSTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7O0lBRWxDO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDhCQUE4Qjs7SUFFbEM7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWNhN2EzO1xyXG5cclxufVxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDsgXHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uY29udGFjdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLmNvbnRhY3R7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"social\">\n    <a href=\"https://github.com/m4eryk?tab=repositories\" target=\"_blank\"><i class=\"fab fa-github fa-1x\">  My Git Hub</i></a>\n    <a href=\"https://www.instagram.com/watatp/\" target=\"_blank\"><i class=\"fab fa-instagram fa-1x\">  My Inst</i></a>\n    <a href=\"https://vk.com/maeryk\" target=\"_blank\"><i class=\"fab fa-vk fa-1x\">  My VK Page</i></a>\n  </div>\n  <div class=\"contact\">\n     <i class=\"fas fa-envelope\">  Work email: maerovwork@gmail.com</i> \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n   width: 100%;\r\n   margin: 0 auto;\r\n   max-width: 960px;\r\n   background: #aca7a3;\r\n}\r\nnav ul{\r\n    margin: 0;\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\nnav a{\r\n    text-decoration: none;\r\n    text-align: center;\r\n    display: block;\r\n    padding: 10px;\r\n    color: #fff;\r\n}\r\nnav a:hover{\r\n    background-color: #1d1f21;\r\n    border-bottom: 2px solid white;\r\n\r\n}\r\n.logo{\r\n    display: flex;\r\n    margin: 0 auto;\r\n    max-width: 45px;\r\n    padding-left: 10px;\r\n}\r\n@media screen and (min-width: 768px){\r\n   \r\n    nav ul{\r\n        display: flex;\r\n    }\r\n    \r\n    nav{\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n    .logo{\r\n        margin: 0;\r\n    }\r\n}\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csV0FBVztHQUNYLGNBQWM7R0FDZCxnQkFBZ0I7R0FDaEIsbUJBQW1CO0FBQ3RCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDhCQUE4Qjs7QUFFbEM7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUVBOztJQUVJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLFNBQVM7SUFDYjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICBiYWNrZ3JvdW5kOiAjYWNhN2EzO1xyXG59XHJcbm5hdiB1bHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbm5hdiBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxubmF2IGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZjIxO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xyXG5cclxufVxyXG5cclxuLmxvZ297XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDQ1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgXHJcbiAgICBuYXYgdWx7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmF2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgLmxvZ297XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <nav>\n  <img class=\"logo\" src=\"../../assets/img/logo.png\" alt=\"logo\">\n    <ul>\n      <li><a href=\"#home\">Home</a></li>\n      <li><a href=\"#why-we\">Why We</a></li>\n      <li><a href=\"#\">Tutorial</a></li>\n      <li><a href=\"#\">GET STARTED</a></li>\n    </ul>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: #1d1f21;\r\n}\r\n.content{\r\n    color: #ffffff;\r\n    background: url('home-baner.png')no-repeat;\r\n    height: 390px;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.text {\r\n\r\n        text-align: center;\r\n}\r\n@media screen and (min-width: 768px){\r\n    .content{\r\n        flex-direction: row-reverse;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        \r\n    }\r\n    .text{\r\n        width: 400px;\r\n        text-align:  center;\r\n        margin-right: 10px;\r\n        line-height: 18px;  \r\n        font-size: 18px;        \r\n    }\r\n    .text h1{\r\n        text-align: left;\r\n        line-height: 40px;\r\n        word-spacing: 9999rem;\r\n        font-size: 50px;\r\n    }\r\n    .text h1:hover {\r\n        color: #6e2070 ;\r\n        text-shadow: #6e2070 0 0 10px;\r\n    }\r\n    .text p:hover{\r\n        color: green;\r\n    }\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCwwQ0FBMkQ7SUFDM0QsYUFBYTs7SUFFYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBOztRQUVRLGtCQUFrQjtBQUMxQjtBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7UUFDM0IsOEJBQThCO1FBQzlCLG1CQUFtQjs7SUFFdkI7SUFDQTtRQUNJLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWYyMTtcclxufVxyXG4uY29udGVudHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9ob21lLWJhbmVyLnBuZ1wiKW5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMzkwcHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udGV4dCB7XHJcblxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnRleHR7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246ICBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4OyAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4OyAgICAgICAgXHJcbiAgICB9XHJcbiAgICAudGV4dCBoMXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdvcmQtc3BhY2luZzogOTk5OXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dCBoMTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICM2ZTIwNzAgO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAjNmUyMDcwIDAgMCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQgcDpob3ZlcntcclxuICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICB9XHJcbiAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"home\">\n  <div class=\"content\">\n    <div class=\"text\">\n      <h1>PROGRAMMING YOUR LIFE</h1>\n      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi obcaecati, eaque quae nostrum eius consequuntur quia ducimus vitae omnis porro?  </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/tutorial/tutorial.component.css":
/*!*************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background-color:  #1d1f21;\r\n}\r\n.card{\r\n    \r\n    height: 310px;\r\n    width: 250px;\r\n    background-color: #ffffff;\r\n    border-radius: 5px;\r\n    border: 2px solid #aca7a3 ;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    margin: 10px;\r\n}\r\n.card .brend{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-bottom:2px solid#aca7a3 ; \r\n}\r\n.card .brend a{\r\n    z-index: 10;\r\n    background-color: #aca7a3 ;\r\n    border-radius: 20px;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    display: block;\r\n    padding: 10px;\r\n    color:black;\r\n    width: 100px;\r\n    margin-bottom: 5px;  \r\n}\r\n.card .brend a:hover{\r\n    color: #ffffff;\r\n    background-color: #1d1f21;\r\n}\r\nspan{\r\n    font-size: 8pt;\r\n    line-height: 5pt;\r\n}\r\nh1{\r\n    background:#aca7a3 ;\r\n    color: #ffffff;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    padding: 10px;\r\n    margin: 0;\r\n    width: 100%;\r\n    font-size: 25px;\r\n}\r\n@media screen and (min-width: 768px){\r\n    .container{\r\n        display: block\r\n    }\r\n    .content{\r\n        padding-top: 20px;\r\n\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;   \r\n    }\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHV0b3JpYWwvdHV0b3JpYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtBQUM5QjtBQUNBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSSxpQkFBaUI7O1FBRWpCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCOzs7QUFHSiIsImZpbGUiOiJzcmMvYXBwL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICMxZDFmMjE7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBcclxuICAgIGhlaWdodDogMzEwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2FjYTdhMyA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmNhcmQgLmJyZW5ke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCNhY2E3YTMgOyBcclxufVxyXG4uY2FyZCAuYnJlbmQgYXtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FjYTdhMyA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyAgXHJcbn1cclxuLmNhcmQgLmJyZW5kIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDFmMjE7XHJcbn1cclxuc3BhbntcclxuICAgIGZvbnQtc2l6ZTogOHB0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDVwdDtcclxufVxyXG5oMXtcclxuICAgIGJhY2tncm91bmQ6I2FjYTdhMyA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICBcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.html":
/*!**************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h1>choose a course for yourself</h1>\n  <div class=\"content\">\n    <div class=\"card\">\n      <div class=\"brend\">\n        <i class=\"fab fa-css3-alt fa-7x \" style=\"color: #4749c4;\"></i>\n        <a href=\"#home\">go</a>\n      </div>\n      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta ipsum tempore ab assumenda nihil molestiae expedita temporibus consequatur, fugit sapiente, illo aspernatur tempora harum amet, ullam commodi possimus nam nobis maxime praesentium fuga!</span>  \n    </div>\n    <div class=\"card\">\n      <div class=\"brend\">\n          <i class=\"fab fa-html5 fa-7x\" style=\"color:#eb5c5c\"></i>\n        <a href=\"#home\">go</a>\n      </div>\n      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta ipsum tempore ab assumenda nihil molestiae expedita temporibus consequatur, fugit sapiente, illo aspernatur tempora harum amet, ullam commodi possimus nam nobis maxime praesentium fuga!</span>  \n    </div>\n    <div class=\"card\">\n          <div class=\"brend\">\n              <i class=\"fab fa-js-square fa-7x \" style=\"color:#f5ae52\"></i>\n            <a href=\"#home\">go</a>\n          </div>\n          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta ipsum tempore ab assumenda nihil molestiae expedita temporibus consequatur, fugit sapiente, illo aspernatur tempora harum amet, ullam commodi possimus nam nobis maxime praesentium fuga!</span>  \n    </div>\n  </div>\n</div>  \n\n"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.ts":
/*!************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.ts ***!
  \************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.component.html */ "./src/app/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.css */ "./src/app/tutorial/tutorial.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "./src/app/why-we/why-we.component.css":
/*!*********************************************!*\
  !*** ./src/app/why-we/why-we.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    background: #bdb7b7;\r\n    height: 470px;\r\n}\r\nh1{\r\n    background-color: #1d1f21;\r\n    color:#ffffffff;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\np{\r\n    \r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    line-height: 25px;\r\n    margin: 0;\r\n    padding-top: 70px;\r\n    z-index: 10;\r\n    font-size: 25px;\r\n    color:#ffffffff; \r\n    width: 500px;\r\n    padding-right:20px; \r\n    text-shadow: #fff -1px -1px 0, \r\n                 #333 1px 1px 0;\r\n    \r\n}\r\n.container .ng2-carouselamos-container{\r\n        width: 70%;\r\n        margin: 0 auto;\r\n    }\r\n.container .slide-items{\r\n    flex-direction: column;\r\n    display: flex;\r\n    align-items: center;\r\n      \r\n}\r\n.slide-items img{\r\n    padding: 0;\r\n    margin: 0;\r\n    z-index: -1;\r\n    position: relative;\r\n    background-size: cover;\r\n    width: 752px;\r\n    height: 440px;\r\n    bottom: 180px;\r\n\r\n}\r\n#left, #right{\r\n    position: relative;\r\n    top: 20px;\r\n    width: 75px;\r\n\r\n}\r\n@media screen and (min-width: 768px){\r\n    .slide-items img{\r\n        width: 960px;\r\n        height: 560px;\r\n    }\r\n    h1{\r\n        font-size: 100px;\r\n        padding: 0;\r\n        margin: 0;\r\n    }\r\n    .container{\r\n        height: 660px;\r\n    }\r\n    p{\r\n        width: 600px;\r\n    }\r\n    #left, #right{\r\n        width: 100px;\r\n        \r\n    \r\n    }\r\n}\r\n@media screen and (max-width: 498px){\r\n    .slide-items img{\r\n        width: 500px;\r\n        height: 400px;\r\n    }\r\n    h1{\r\n        font-size: 25px;\r\n\r\n    }\r\n    .container{\r\n        height: 420px;\r\n    }\r\n    p{\r\n        width: px;\r\n    }\r\n    #left, #right{\r\n        width: 50px;\r\n    \r\n    }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2h5LXdlL3doeS13ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7O0lBRUkseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCOytCQUMyQjs7QUFFL0I7QUFDQTtRQUNRLFVBQVU7UUFDVixjQUFjO0lBQ2xCO0FBQ0o7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjs7QUFFdkI7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhOztBQUVqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXOztBQUVmO0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLFNBQVM7SUFDYjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTs7O0lBR2hCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7O0lBRW5CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLFdBQVc7O0lBRWY7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC93aHktd2Uvd2h5LXdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNiZGI3Yjc7XHJcbiAgICBoZWlnaHQ6IDQ3MHB4O1xyXG59XHJcbmgxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWYyMTtcclxuICAgIGNvbG9yOiNmZmZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbnB7XHJcbiAgICBcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjojZmZmZmZmZmY7IFxyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoyMHB4OyBcclxuICAgIHRleHQtc2hhZG93OiAjZmZmIC0xcHggLTFweCAwLCBcclxuICAgICAgICAgICAgICAgICAjMzMzIDFweCAxcHggMDtcclxuICAgIFxyXG59XHJcbi5jb250YWluZXIgLm5nMi1jYXJvdXNlbGFtb3MtY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbi5jb250YWluZXIgLnNsaWRlLWl0ZW1ze1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBcclxufVxyXG5cclxuLnNsaWRlLWl0ZW1zIGltZ3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogNzUycHg7XHJcbiAgICBoZWlnaHQ6IDQ0MHB4O1xyXG4gICAgYm90dG9tOiAxODBweDtcclxuXHJcbn1cclxuI2xlZnQsICNyaWdodHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLnNsaWRlLWl0ZW1zIGltZ3tcclxuICAgICAgICB3aWR0aDogOTYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1NjBweDtcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDogNjYwcHg7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgIH1cclxuICAgICNsZWZ0LCAjcmlnaHR7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk4cHgpe1xyXG4gICAgLnNsaWRlLWl0ZW1zIGltZ3tcclxuICAgICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuXHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIHdpZHRoOiBweDtcclxuICAgIH1cclxuICAgICNsZWZ0LCAjcmlnaHR7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/why-we/why-we.component.html":
/*!**********************************************!*\
  !*** ./src/app/why-we/why-we.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container\" id=\"why-we\">\n        <h1>why we ?</h1>\n    <div\n        ng2-carouselamos\n        class=\"slides-wrapper\"\n        [items]=\"images\"\n        [width]=\" 960\"\n        [$prev]=\"prev\"\n        [$next]=\"next\"\n        [$item]=\"item\"\n    >\n    </div>\n\n    <ng-template #prev>\n        <img src=\"../../assets/img/prev.png\" id=\"left\" />\n    </ng-template>\n\n    <ng-template #next>\n        <img src=\"../../assets/img/next.png\" id=\"right\" />\n    </ng-template>\n\n    <ng-template #item let-item let-i=\"index\">\n    \n    <div class=\"content\" >  \n        \n        \n        <div class=\"slide-items\" >\n                <p [style.fontSize]=\"item.color\">{{item.tatle}}</p>\n               <img src=\"{{item.name}}\" alt=\"slid\">\n\n        </div>\n        \n    </div>\n    \n    </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/why-we/why-we.component.ts":
/*!********************************************!*\
  !*** ./src/app/why-we/why-we.component.ts ***!
  \********************************************/
/*! exports provided: WhyWeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyWeComponent", function() { return WhyWeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WhyWeComponent = /** @class */ (function () {
    function WhyWeComponent() {
        this.images = [];
        this.images = [
            { name: '../../assets/img/why-baner.jpg',
                tatle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum dignissimos maiores maxime atque natus?"
            },
            { name: '../../assets/img/0x677C88DF7CC815E3FBE5FDEED5A441C0.jpeg',
                tatle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum dignissimos maiores maxime atque natus?"
            }
        ];
    }
    WhyWeComponent.prototype.ngOnInit = function () {
    };
    WhyWeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-why-we',
            template: __webpack_require__(/*! ./why-we.component.html */ "./src/app/why-we/why-we.component.html"),
            styles: [__webpack_require__(/*! ./why-we.component.css */ "./src/app/why-we/why-we.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WhyWeComponent);
    return WhyWeComponent;
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

module.exports = __webpack_require__(/*! C:\Users\maeryk\Desktop\фулстак чертило\Angular\ProgrammingYourLife\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map