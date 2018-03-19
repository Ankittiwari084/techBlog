webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(http://fonts.googleapis.com/css?family=Roboto);\n\n/****** LOGIN MODAL ******/\n\n.loginmodal-container {\n  padding: 30px;\n  max-width: 350px;\n  width: 100% !important;\n  background-color: #F7F7F7;\n  margin: 0 auto;\n  border-radius: 2px;\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  font-family: roboto;\n}\n\n.loginmodal-container h1 {\n  text-align: center;\n  font-size: 1.8em;\n  font-family: roboto;\n}\n\n.loginmodal-container input[type=submit] {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n.loginmodal-container input[type=text], input[type=password] {\n  height: 44px;\n  font-size: 16px;\n  width: 100%;\n  margin-bottom: 10px;\n  -webkit-appearance: none;\n  background: #fff;\n  border: 1px solid #d9d9d9;\n  border-top: 1px solid #c0c0c0;\n  /* border-radius: 2px; */\n  padding: 0 8px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n.loginmodal-container input[type=text]:hover, input[type=password]:hover {\n  border: 1px solid #b9b9b9;\n  border-top: 1px solid #a0a0a0;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n}\n\n.loginmodal {\n  text-align: center;\n  font-size: 14px;\n  font-family: 'Arial', sans-serif;\n  font-weight: 700;\n  height: 36px;\n  padding: 0 8px;\n/* border-radius: 3px; */\n/* -webkit-user-select: none;\n  user-select: none; */\n}\n\n.loginmodal-submit {\n  /* border: 1px solid #3079ed; */\n  border: 0px;\n  color: #fff;\n  text-shadow: 0 1px rgba(0,0,0,0.1); \n  background-color: #4d90fe;\n  padding: 17px 0px;\n  font-family: roboto;\n  font-size: 14px;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\n}\n\n.loginmodal-submit:hover {\n  /* border: 1px solid #2f5bb7; */\n  border: 0px;\n  text-shadow: 0 1px rgba(0,0,0,0.3);\n  background-color: #357ae8;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\n}\n\n.loginmodal-container a {\n  text-decoration: none;\n  color: #666;\n  font-weight: 400;\n  text-align: center;\n  display: inline-block;\n  opacity: 0.6;\n  -webkit-transition: opacity ease 0.5s;\n  transition: opacity ease 0.5s;\n}\n\n.login-help{\n  font-size: 12px;\n}\n\n.has-error{\n  color: red;\n  margin-left: 44px;\n}"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n  <div class=\"loginmodal-container\">\n    <h1>Login to Your Account</h1><br>\n    <div class=\"has-error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n    <form [formGroup] = \"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <input type=\"text\"  placeholder=\"email\"  formControlName='email'>\n     <span class=\"has-error\"  *ngIf = \"!loginForm.get('email').valid &&  loginForm.get('email').touched\">Please Enter Valid Email Address</span>\n     <input type=\"password\"  placeholder=\"Password\" formControlName='password'>\n     <span class=\"has-error\" *ngIf = \"!loginForm.controls['password'].valid && loginForm.controls['password'].touched\">Please Enter the password and minimum 3 digit </span>\n     \n     <input type=\"submit\"    class=\"login loginmodal-submit\" [disabled] = \"!loginForm.valid\" value=\"Login\">\n    </form>    \n    <div class=\"login-help\">\n    <a href=\"#\">Register</a> - <a href=\"#\">Forgot Password</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(userServices, router) {
        this.userServices = userServices;
        this.router = router;
        this.errorMessage = "";
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email])),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4)]))
        });
    };
    AdminComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userServices.loginServices(this.loginForm.value).subscribe(function (response) {
            if (response.status == 200) {
                console.log(response.json().data);
                _this.finalResponce = response.json().data;
                localStorage.setItem('userData', JSON.stringify({
                    'token': _this.finalResponce[1].token, 'otherDetail': _this.finalResponce[0]
                }));
                _this.errorMessage = "";
                _this.router.navigate(['home']);
            }
            else {
                _this.errorMessage = "Email Id or password is invalid";
            }
        }, function (error) {
            _this.errorMessage = "Somthing wrong with your server";
        });
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/admin/admin.component.html"),
            styles: [__webpack_require__("./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register/:id/:name', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_4__admin_admin_component__["a" /* AdminComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false }),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]],
            providers: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n  "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navigation_navigation_component__ = __webpack_require__("./src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__slider_slider_component__ = __webpack_require__("./src/app/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__slider_slider_component__["a" /* SliderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n        <div class=\"verybottom\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"span12\">\n                <div class=\"aligncenter\">\n                  <div class=\"logo\">\n                    <a class=\"brand\" href=\"index.html\"><img src=\"assets/img/logo.png\" alt=\"\" /></a>\n                  </div>\n                  <p>\n                    &copy; Vesperr labs Inc - All right reserved\n                  </p>\n                  <div class=\"credits\">\n                    <!--\n                      All the links in the footer should remain intact.\n                      You can delete the links only if you purchased the pro version.\n                      Licensing information: https://bootstrapmade.com/license/\n                      Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Vesperr\n                    -->\n                    Created by <a href=\"https://bootstrapmade.com/\">BootstrapMade.com</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </footer>\n<a href=\"#\" class=\"scrollup\"><i class=\"icon-chevron-up icon-square icon-48 active\"></i></a>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <meta charset=\"utf-8\">\n  <title>Vesperr one page site template with bootstrap</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <meta name=\"description\" content=\"\" />\n  <meta name=\"author\" content=\"\" />  \n</head>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<app-slider></app-slider>\n<section id=\"about\" class=\"section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"span12\">\n          <div class=\"heading\">\n            <h3><span>About us</span></h3>\n          </div>\n          <div class=\"sub-heading\">\n            <p>\n              We have a history of doing what our name implies, creating a visual language around the beliefs of the brands we work with.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"span3\">\n          <img src=\"assets/img/dummies/team1.jpg\" alt=\"\" class=\"img-polaroid\" />\n          <div class=\"roles\">\n            <h5><strong>Baby Stewards Jr</strong></h5>\n            <p>\n              CEO - Founder\n            </p>\n            <ul class=\"social-profile\">\n              <li><a href=\"#\"><i class=\"icon-facebook icon-32 icon-circled\"></i></a></li>\n              <li><a href=\"#\"><i class=\"icon-twitter icon-32 icon-circled\"></i></a></li>\n              <li><a href=\"#\"><i class=\"icon-linkedin icon-32 icon-circled\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"span3\">\n          <img src=\"assets/img/dummies/team2.jpg\" alt=\"\" class=\"img-polaroid\" />\n          <div class=\"roles\">\n            <h5><strong>Tommy Kreunichev</strong></h5>\n            <p>\n              Lead designer\n            </p>\n            <ul class=\"social-profile\">\n              <li><a href=\"#\"><i class=\"icon-facebook icon-32 icon-circled\"></i></a></li>\n              <li><a href=\"#\"><i class=\"icon-twitter icon-32 icon-circled\"></i></a></li>\n              <li><a href=\"#\"><i class=\"icon-linkedin icon-32 icon-circled\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"span3\">\n          <img src=\"assets/img/dummies/team3.jpg\" alt=\"\" class=\"img-polaroid\" />\n          <div class=\"roles\">\n            <h5><strong>Moriella Maccini</strong></h5>\n            <p>\n              Customer support\n            </p>\n            <ul class=\"social-profile\">\n              <li><a href=\"#\"><i class=\"icon-facebook icon-32 icon-circled\"></i></a></li>\n              <li><a href=\"#\"><i class=\"icon-twitter icon-32 icon-circled\"></i></a></li>\n              <li><a href=\"#\"><i class=\"icon-linkedin icon-32 icon-circled\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"span3\">\n          <img src=\"assets/img/dummies/team4.jpg\" alt=\"\" class=\"img-polaroid\" />\n          <div class=\"roles\">\n            <h5><strong>Brian James Scoothie</strong></h5>\n            <p>\n              Coffee maker\n            </p>\n            <ul class=\"social-profile\">\n              <li><a href=\"#\"><i class=\"icon-facebook icon-32 icon-circled\"></i></a></li>\n              <li><a href=\"#\"><i class=\"icon-twitter icon-32 icon-circled\"></i></a></li>\n              <li><a href=\"#\"><i class=\"icon-linkedin icon-32 icon-circled\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- end section about -->\n  <!-- section services -->\n  <section id=\"services\" class=\"section parallax dark\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"span12\">\n          <div class=\"heading\">\n            <h3><span>Our services</span></h3>\n          </div>\n          <div class=\"sub-heading\">\n            <p>\n              We have a history of doing what our name implies, creating a visual language around the beliefs of the brands we work with.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"span3\">\n          <div class=\"box aligncenter\">\n            <div class=\"halftop\">\n              <h4><strong>User interface</strong></h4>\n              <i class=\"icon-desktop icon-4x\"></i>\n            </div>\n            <p>\n              Lorem ipsum dolor sit amet, eum no latine delectus deserunt diam\n            </p>\n            <a href=\"#\" class=\"btn btn-theme\">Learn more</a>\n          </div>\n        </div>\n        <div class=\"span3\">\n          <div class=\"box aligncenter\">\n            <div class=\"halftop\">\n              <h4><strong>Content management</strong></h4>\n              <i class=\"icon-briefcase icon-4x\"></i>\n            </div>\n            <p>\n              Lorem ipsum dolor sit amet, eum no latine delectus deserunt diam\n            </p>\n            <a href=\"#\" class=\"btn btn-theme\">Learn more</a>\n          </div>\n        </div>\n        <div class=\"span3\">\n          <div class=\"box aligncenter\">\n            <div class=\"halftop\">\n              <h4><strong>Mobile application</strong></h4>\n              <i class=\"icon-mobile-phone icon-4x\"></i>\n            </div>\n            <p>\n              Lorem ipsum dolor sit amet, eum no latine delectus deserunt diam\n            </p>\n            <a href=\"#\" class=\"btn btn-theme\">Learn more</a>\n          </div>\n        </div>\n        <div class=\"span3\">\n          <div class=\"box aligncenter\">\n            <div class=\"halftop\">\n              <h4><strong>Web design</strong></h4>\n              <i class=\"icon-beaker icon-4x\"></i>\n            </div>\n            <p>\n              Lorem ipsum dolor sit amet, eum no latine delectus deserunt diam\n            </p>\n            <a href=\"#\" class=\"btn btn-theme\">Learn more</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- end section services -->\n  <!-- section works -->\n  <section id=\"works\" class=\"section gray-bg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"span12\">\n          <div class=\"heading\">\n            <h3><span>Recent works</span></h3>\n          </div>\n          <div class=\"sub-heading\">\n            <p>\n              We have a history of doing what our name implies, creating a visual language around the beliefs of the brands we work with.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"span12\">\n          <ul class=\"filter\">\n            <li class=\"all active\"><a href=\"#\" class=\"btn btn-theme\">All categories</a></li>\n            <li class=\"web\"><a href=\"#\" class=\"btn btn-theme\">Web design</a></li>\n            <li class=\"brand\"><a href=\"#\" class=\"btn btn-theme\">Brand identity</a></li>\n            <li class=\"graphic\"><a href=\"#\" class=\"btn btn-theme\">Graphic design</a></li>\n          </ul>\n          <div class=\"clear\">\n          </div>\n          <div class=\"row\">\n            <ul class=\"portfolio-area da-thumbs\">\n              <li class=\"portfolio-item\" data-id=\"id-0\" data-type=\"web\">\n                <div class=\"span3\">\n                  <div class=\"thumbnail\">\n                    <div class=\"image-wrapp\">\n                      <img src=\"assets/img/portfolio/img1.jpg\" alt=\"Portfolio name\" title=\"\" />\n                      <article class=\"da-animate da-slideFromRight\" style=\"display: block;\">\n                        <h5><strong>Portfolio name</strong></h5>\n                        <a href=\"#\"><i class=\"icon-rounded icon-48 icon-link\"></i></a>\n                        <span><a class=\"zoom\" data-pretty=\"prettyPhoto\" href=\"assets/img/portfolio/big1.jpg\">\n\t\t\t\t\t\t\t\t<i class=\"icon-rounded icon-48 icon-zoom-in\"></i>\n\t\t\t\t\t\t\t\t</a></span>\n                      </article>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"portfolio-item\" data-id=\"id-0\" data-type=\"web\">\n                <div class=\"span3\">\n                  <div class=\"thumbnail\">\n                    <div class=\"image-wrapp\">\n                      <img src=\"assets/img/portfolio/img2.jpg\" alt=\"Portfolio name\" title=\"\" />\n                      <article class=\"da-animate da-slideFromRight\" style=\"display: block;\">\n                        <h5><strong>Portfolio name</strong></h5>\n                        <a href=\"#\"><i class=\"icon-rounded icon-48 icon-link\"></i></a>\n                        <span><a class=\"zoom\" data-pretty=\"prettyPhoto\" href=\"assets/img/portfolio/big1.jpg\">\n\t\t\t\t\t\t\t\t<i class=\"icon-rounded icon-48 icon-zoom-in\"></i>\n\t\t\t\t\t\t\t\t</a></span>\n                      </article>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"portfolio-item\" data-id=\"id-0\" data-type=\"brand\">\n                <div class=\"span3\">\n                  <div class=\"thumbnail\">\n                    <div class=\"image-wrapp\">\n                      <img src=\"assets/img/portfolio/img3.jpg\" alt=\"Portfolio name\" title=\"\" />\n                      <article class=\"da-animate da-slideFromRight\" style=\"display: block;\">\n                        <h5><strong>Portfolio name</strong></h5>\n                        <a href=\"#\"><i class=\"icon-rounded icon-48 icon-link\"></i></a>\n                        <span><a class=\"zoom\" data-pretty=\"prettyPhoto\" href=\"assets/img/portfolio/big1.jpg\">\n\t\t\t\t\t\t\t\t<i class=\"icon-rounded icon-48 icon-zoom-in\"></i>\n\t\t\t\t\t\t\t\t</a></span>\n                      </article>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"portfolio-item\" data-id=\"id-0\" data-type=\"photo\">\n                <div class=\"span3\">\n                  <div class=\"thumbnail\">\n                    <div class=\"image-wrapp\">\n                      <img src=\"assets/img/portfolio/img4.jpg\" alt=\"Portfolio name\" title=\"\" />\n                      <article class=\"da-animate da-slideFromRight\" style=\"display: block;\">\n                        <h5><strong>Portfolio name</strong></h5>\n                        <a href=\"#\"><i class=\"icon-rounded icon-48 icon-link\"></i></a>\n                        <span><a class=\"zoom\" data-pretty=\"prettyPhoto\" href=\"assets/img/portfolio/big1.jpg\">\n\t\t\t\t\t\t\t\t<i class=\"icon-rounded icon-48 icon-zoom-in\"></i>\n\t\t\t\t\t\t\t\t</a></span>\n                      </article>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"portfolio-item\" data-id=\"id-0\" data-type=\"graphic\">\n                <div class=\"span3\">\n                  <div class=\"thumbnail\">\n                    <div class=\"image-wrapp\">\n                      <img src=\"assets/img/portfolio/img5.jpg\" alt=\"Portfolio name\" title=\"\" />\n                      <article class=\"da-animate da-slideFromRight\" style=\"display: block;\">\n                        <h5><strong>Portfolio name</strong></h5>\n                        <a href=\"#\"><i class=\"icon-rounded icon-48 icon-link\"></i></a>\n                        <span><a class=\"zoom\" data-pretty=\"prettyPhoto\" href=\"assets/img/portfolio/big1.jpg\">\n\t\t\t\t\t\t\t\t<i class=\"icon-rounded icon-48 icon-zoom-in\"></i>\n\t\t\t\t\t\t\t\t</a></span>\n                      </article>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"portfolio-item\" data-id=\"id-0\" data-type=\"graphic\">\n                <div class=\"span3\">\n                  <div class=\"thumbnail\">\n                    <div class=\"image-wrapp\">\n                      <img src=\"assets/img/portfolio/img6.jpg\" alt=\"Portfolio name\" title=\"\" />\n                      <article class=\"da-animate da-slideFromRight\" style=\"display: block;\">\n                        <h5><strong>Portfolio name</strong></h5>\n                        <a href=\"#\"><i class=\"icon-rounded icon-48 icon-link\"></i></a>\n                        <span><a class=\"zoom\" data-pretty=\"prettyPhoto\" href=\"assets/img/portfolio/big1.jpg\">\n\t\t\t\t\t\t\t\t<i class=\"icon-rounded icon-48 icon-zoom-in\"></i>\n\t\t\t\t\t\t\t\t</a></span>\n                      </article>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"portfolio-item\" data-id=\"id-0\" data-type=\"photo\">\n                <div class=\"span3\">\n                  <div class=\"thumbnail\">\n                    <div class=\"image-wrapp\">\n                      <img src=\"assets/img/portfolio/img7.jpg\" alt=\"Portfolio name\" title=\"\" />\n                      <article class=\"da-animate da-slideFromRight\" style=\"display: block;\">\n                        <h5><strong>Portfolio name</strong></h5>\n                        <a href=\"#\"><i class=\"icon-rounded icon-48 icon-link\"></i></a>\n                        <span><a class=\"zoom\" data-pretty=\"prettyPhoto\" href=\"assets/img/portfolio/big1.jpg\">\n\t\t\t\t\t\t\t\t<i class=\"icon-rounded icon-48 icon-zoom-in\"></i>\n\t\t\t\t\t\t\t\t</a></span>\n                      </article>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"portfolio-item\" data-id=\"id-0\" data-type=\"ilustrator\">\n                <div class=\"span3\">\n                  <div class=\"thumbnail\">\n                    <div class=\"image-wrapp\">\n                      <img src=\"assets/img/portfolio/img8.jpg\" alt=\"Portfolio name\" title=\"\" />\n                      <article class=\"da-animate da-slideFromRight\" style=\"display: block;\">\n                        <h5><strong>Portfolio name</strong></h5>\n                        <a href=\"#\"><i class=\"icon-rounded icon-48 icon-link\"></i></a>\n                        <span><a class=\"zoom\" data-pretty=\"prettyPhoto\" href=\"assets/img/portfolio/big1.jpg\">\n\t\t\t\t\t\t\t\t<i class=\"icon-rounded icon-48 icon-zoom-in\"></i>\n\t\t\t\t\t\t\t\t</a></span>\n                      </article>\n                    </div>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- section works -->\n  <!-- section contact -->\n  <section id=\"contact\" class=\"section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"span12\">\n          <div class=\"heading\">\n            <h3><span>Get in touch</span></h3>\n          </div>\n          <div class=\"sub-heading\">\n            <p>\n              Lorem ipsum dolor sit amet, mutat paulo simul per no, assum fastidii vituperata eam no.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"map-container\">\n      <div id=\"google-map\" data-latitude=\"40.713417\" data-longitude=\"-74.0092125\"></div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"span6\">\n          <h4><i class=\"icon-envelope\"></i><strong>Contact form</strong></h4>\n          <p>\n            Want to work with us or just want to say hello? Don't hesitate to get in touch!\n          </p>\n          <!-- start contact form -->\n          <form action=\"\" method=\"post\" role=\"form\" class=\"contactForm\">\n            <div id=\"sendmessage\">Your message has been sent. Thank you!</div>\n            <div id=\"errormessage\"></div>\n\n            <ul class=\"contact-list\">\n              <li class=\"form-group\">\n                <label>Name <span>*</span></label>\n                <input type=\"text\" name=\"name\" class=\"form_input\" id=\"name\" placeholder=\"Your Name\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\" />\n                <div class=\"validation\"></div>\n                <li class=\"form-group\">\n                  <label>Email <span>*</span></label>\n                  <input type=\"email\" class=\"form_input\" name=\"email\" id=\"email\" placeholder=\"Your Email\" data-rule=\"email\" data-msg=\"Please enter a valid email\" />\n                  <div class=\"validation\"></div>\n                </li>\n                <li class=\"form-group\">\n                  <label>Subject <span>*</span></label>\n                  <input type=\"text\" class=\"form_input\" name=\"subject\" id=\"subject\" placeholder=\"Subject\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 8 chars of subject\" />\n                  <div class=\"validation\"></div>\n                </li>\n\n                <li class=\"form-group\">\n                  <label>Your message <span>*</span></label>\n                  <textarea class=\"form_textarea\" name=\"message\" rows=\"12\" data-rule=\"required\" data-msg=\"Please write something for us\" placeholder=\"Message\"></textarea>\n                  <div class=\"validation\"></div>\n                </li>\n                <li class=\"last\">\n                  <button class=\"btn btn-large btn-theme\" type=\"submit\" id=\"send\">Send a message</button>\n                </li>\n            </ul>\n          </form>\n\n          <!-- end contact form -->\n        </div>\n        <div class=\"span6\">\n          <h4><i class=\"icon-suitcase\"></i><strong>Our office</strong></h4>\n          <p>\n            Feel free to ask if you have any question regarding our services or if you just want to say Hello, we would love to hear from you.\n          </p>\n          <div class=\"dotted_line\">\n          </div>\n          <p>\n            <strong>Vesperr Labs Inc</strong>\n          </p>\n          <p>\n            X123 Street, palm 05 ave Peterongan Semarang, Indonesia 50242\n          </p>\n          <p>\n            <span><i class=\"icon-phone\"></i><strong>Phone:</strong> +6221 999 888 77 or +6221 999 888 66</span>\n          </p>\n          <p>\n            <span><i class=\"icon-comment\"></i><strong>Skype:</strong> vesperr.contact</span>\n          </p>\n          <p>\n            <span><i class=\"icon-envelope-alt\"></i><strong>Email:</strong> info@yourdomainname.com</span>\n          </p>\n          <div class=\"dotted_line\">\n          </div>\n          <h4><i class=\"icon-group\"></i><strong>Connect to our social profiles</strong></h4>\n          <div class=\"social-links\">\n            <ul class=\"social-links\">\n              <li><a href=\"#\" title=\"Twitter\"><i class=\"icon-square icon-32 icon-twitter\"></i></a></li>\n              <li><a href=\"#\" title=\"Facebook\"><i class=\"icon-square icon-32 icon-facebook\"></i></a></li>\n              <li><a href=\"#\" title=\"Google plus\"><i class=\"icon-square icon-32 icon-google-plus\"></i></a></li>\n              <li><a href=\"#\" title=\"Linkedin\"><i class=\"icon-square icon-32 icon-linkedin\"></i></a></li>\n              <li><a href=\"#\" title=\"Pinterest\"><i class=\"icon-square icon-32 icon-pinterest\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- end section contact -->\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<p>Login Works</p>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <!-- start top -->\n    <div id=\"topnav\" class=\"navbar navbar-fixed-top default\">\n      <div class=\"navbar-inner\">\n        <div class=\"container\">\n          <div class=\"logo\">\n            <a href=\"index.html\"><img src=\"assets/img/logo.png\" alt=\"\" /></a>\n          </div>\n          <div class=\"navigation\">\n            <nav>\n              <ul class=\"nav pull-right\">\n                <li  routerLinkActive=\"current\" [routerLinkActiveOptions]=\"{exact : true}\"><a routerLink=\"/\" >Home</a></li>\n                <li routerLinkActive=\"current\"><a routerLink=\"/login\">Login</a></li>\n                <li routerLinkActive=\"current\"><a routerLink=\"/register/12/ankit\">Register</a></li>               \n                <li class=\"dropdown\">\n                  <a href=\"#\">Features <i class=\"icon-angle-down\"></i></a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"components.html\" class=\"external\">Components</a></li>\n                    <li><a href=\"icons.html\" class=\"external\">Icons</a></li>\n                    <li><a href=\"animations.html\" class=\"external\">56 Animations</a></li>\n                  </ul>\n                </li>\n              </ul>\n            </nav>\n          </div>\n          <!--/.nav-collapse -->\n        </div>\n      </div>\n    </div>\n    <!-- end top -->\n  </header>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(route) {
        this.route = route;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log(this.route.snapshot.params['id'], this.route.snapshot.params['name']);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.loginServices = function (userData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + 'admin/login/', userData, { headers: headers });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/slider/slider.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"intro\">\n  <div class=\"slogan\">\n    <div class=\"icon\">\n      <i class=\"icon-beaker icon-10x\"></i>\n    </div>\n    <h1>Welcome to <span>Vesperr</span> creative studio</h1>\n    <h2>Crafting ideas with technology and imagination</h2>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-slider',
            template: __webpack_require__("./src/app/slider/slider.component.html"),
            styles: [__webpack_require__("./src/app/slider/slider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'https://sleepy-garden-39528.herokuapp.com/',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map