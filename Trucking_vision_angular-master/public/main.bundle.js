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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<br><br><br><br><br>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_getdata_service__ = __webpack_require__("./src/app/services/getdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(newGetData) {
        this.newGetData = newGetData;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.newGetData.getCategory();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_getdata_service__["a" /* GetdataService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_categories_categories_component__ = __webpack_require__("./src/app/components/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_products_products_component__ = __webpack_require__("./src/app/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_gallery_gallery_component__ = __webpack_require__("./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_getdata_service__ = __webpack_require__("./src/app/services/getdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_deletedata_service__ = __webpack_require__("./src/app/services/deletedata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_adddata_service__ = __webpack_require__("./src/app/services/adddata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_setdata_service__ = __webpack_require__("./src/app/services/setdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_materialize__ = __webpack_require__("./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_guards_auth_guard__ = __webpack_require__("./src/app/components/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_categories_categories_component__["a" /* CategoriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'category', component: __WEBPACK_IMPORTED_MODULE_6__components_categories_categories_component__["a" /* CategoriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'products/:id/:category', component: __WEBPACK_IMPORTED_MODULE_7__components_products_products_component__["a" /* ProductsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'gallery/:id/:product_name/:category', component: __WEBPACK_IMPORTED_MODULE_9__components_gallery_gallery_component__["a" /* GalleryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__components_guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_18_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_7__components_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_16_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_getdata_service__["a" /* GetdataService */], __WEBPACK_IMPORTED_MODULE_12__services_deletedata_service__["a" /* DeletedataService */], __WEBPACK_IMPORTED_MODULE_13__services_adddata_service__["a" /* AdddataService */], __WEBPACK_IMPORTED_MODULE_14__services_setdata_service__["a" /* SetdataService */], __WEBPACK_IMPORTED_MODULE_15__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_19__components_guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/categories/categories.component.css":
/***/ (function(module, exports) {

module.exports = "#gifspinner{\r\n  position:fixed;\r\n  width:150px;\r\n  height:150px;\r\n  top:50%;\r\n  display: inline-block;\r\n   vertical-align: middle;\r\n   line-height: normal;\r\n\r\n}\r\n\r\n#overlay_loading {\r\n\r\nposition:fixed;\r\nz-index:5;\r\n left:0;\r\n top:0;\r\nmargin:0px;\r\nwidth:100%; height:100%;\r\nbackground: rgba(54, 25, 25, .7);\r\ntext-align: center;\r\ncolor:white;\r\n }\r\n"

/***/ }),

/***/ "./src/app/components/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<br>\n<div *ngIf=\"submitted\" id=\"overlay_loading\">\n\n<div id=\"gifspinner\" class=\"preloader-wrapper big active\">\n     <div class=\"spinner-layer spinner-blue\">\n     <div class=\"circle-clipper left\">\n       <div class=\"circle\"></div>\n     </div><div class=\"gap-patch\">\n       <div class=\"circle\"></div>\n     </div><div class=\"circle-clipper right\">\n       <div class=\"circle\"></div>\n     </div>\n   </div>\n\n</div>\n</div>\n\n<nav>\n    <div class=\"nav-wrapper  \">\n      <div class=\"col s12 indigo darken-4 \">\n\n        <a routerLink='/' fragment=\"categories\" routerLinkActive=\"active\" class=\"breadcrumb\" >&nbsp;Categories</a>\n\n      </div>\n    </div>\n  </nav>\n  <br><br>\n\n <ul id=\"tabs-swipe-demo\" class=\"tabs indigo darken-4 \">\n   <li class=\"tab col s3 \"><a class=\"white-text\" href=\"#categories\">Categories</a></li>\n   <li class=\"tab col s3\"><a class=\"white-text\" href=\"#websites\">Websites</a></li>\n </ul>\n <div id=\"categories\" class=\"col s12\">\n\n<h5>Add new category</h5>\n\n   <div class=\"row\">\n\n     <form id = \"formNewCategory\" name =\"formNewCategory\" #categoryData = \"ngForm\" >\n      <input type = \"text\" name =\"name\" id=\"name\" placeholder=\"Enter category name\" ngModel><br>\n      <input type = \"file\" id=\"image\" name=\"image\" ngModel ><br><br>\n      <input type=\"button\" class=\"btn  green darken-1\" (click)=\"addCategory(); categoryData.reset()\" value=\"Add Category\">\n    </form>\n\n   </div>\n   <table class=\"responsive-table striped\">\n          <thead>\n            <tr>\n                <th>Category Name</th>\n                <th>Image</th>\n                <th>Delete</th>\n                <th>Edit Products</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let item of category\">\n              <td>{{item.item}}</td>\n              <td><img src='http://localhost:3000/uploads/{{item.filename_path}}' height='42' width='62'></td>\n              <td> <a (click)=\"deleteCategory(item._id,item.item)\" class=\"waves-effect waves-light red darken-3 btn\"><i  class=\"material-icons\">delete</i></a></td>\n              <td><a routerLink='/products/{{item._id}}/{{item.item}}' routerLinkActive=\"active\"class=\"waves-effect waves-light indigo darken-4 btn\"><i class=\"material-icons\">edit</i></a></td>\n\n            </tr>\n          </tbody>\n  </table>\n</div>\n <div id=\"websites\" class=\"col s12 red\">Websites</div>\n"

/***/ }),

/***/ "./src/app/components/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_getdata_service__ = __webpack_require__("./src/app/services/getdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_deletedata_service__ = __webpack_require__("./src/app/services/deletedata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_adddata_service__ = __webpack_require__("./src/app/services/adddata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(getdataService, deletedataService, adddataService, http, elem) {
        var _this = this;
        this.getdataService = getdataService;
        this.deletedataService = deletedataService;
        this.adddataService = adddataService;
        this.http = http;
        this.elem = elem;
        this.deleteCategory = function (deletedCatID, deletedCatCategory) {
            var _this = this;
            if (confirm('Are you sure to delete category "' + deletedCatCategory + '"? All dependencies will be deleted.')) {
                this.submitted = true;
                this.deletedataService.deleteCategory(deletedCatID, deletedCatCategory).subscribe(function (res) {
                    console.log(res);
                    _this.submitted = false;
                    ////////refresh category /////////////
                    _this.getdataService.getCategory().subscribe(function (category) {
                        _this.category = category;
                        // console.log(  this.category);
                    }, function (err) {
                        console.log(err);
                        return false;
                    });
                    //////////end refresh category.////////
                });
            }
        };
        setInterval(function () {
            _this.getdataService.getCategory().subscribe(function (category) {
                _this.category = category;
            }, function (err) {
                console.log(err);
                return false;
            });
        }, 10000);
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(document).ready(function () { $('ul.tabs').tabs(); });
        ////////refresh category /////////////
        this.getdataService.getCategory().subscribe(function (category) {
            _this.category = category;
            console.log(_this.category);
        }, function (err) {
            console.log(err);
            return false;
        });
        //////////end refresh category.////////
    };
    CategoriesComponent.prototype.addCategory = function () {
        var _this = this;
        var files = this.elem.nativeElement.querySelector('#image').files;
        var catnames = this.elem.nativeElement.querySelector('#name').value;
        var formData = new FormData();
        var file = files[0];
        var catname = catnames[0];
        formData.append('image', file, file.name);
        formData.append('category', catnames);
        //  this.submitted=true;
        this.adddataService.addCategory(formData).subscribe(function (res) {
            alert("category " + catnames + " is now added.");
            ////////refresh category /////////////
            _this.getdataService.getCategory().subscribe(function (category) {
                _this.category = category;
                _this.submitted = false;
            }, function (err) {
                console.log(err);
                return false;
            });
            //////////end refresh category.////////
        });
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__("./src/app/components/categories/categories.component.html"),
            styles: [__webpack_require__("./src/app/components/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_getdata_service__["a" /* GetdataService */], __WEBPACK_IMPORTED_MODULE_2__services_deletedata_service__["a" /* DeletedataService */], __WEBPACK_IMPORTED_MODULE_3__services_adddata_service__["a" /* AdddataService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "footer{\r\n\r\n  bottom:0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"indigo darken-4 page-footer\">\n          <div class=\"container\">\n\n          </div>\n          <div class=\"footer-copyright\">\n            <div class=\"container\">\n           Powered By <a class=\"grey-text text-lighten-4\" href=\"http://www.my-media.tv/\">MyMedia</a> <img src=\"http://localhost:3000/img/my-media-logo2.png\" width=\"19px\" height=\"17px\"/>\n            <a class=\"grey-text text-lighten-4 right\" href=\"http://www.my-media.tv/support/\">Contact Support</a>\n            </div>\n          </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\r\n    display: none;\r\n}\r\n\r\n.custom-file-upload {\r\n    border: 2px dashed #1A237E;\r\n    display: inline-block;\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n    color:black;\r\n    line-height: 50px;\r\n    font-size: 2.0em;\r\n}\r\n\r\n#gifspinner{\r\n  position:fixed;\r\n  width:150px;\r\n  height:150px;\r\n  top:50%;\r\n  display: inline-block;\r\n   vertical-align: middle;\r\n   line-height: normal;\r\n\r\n}\r\n\r\n#overlay_loading {\r\n\r\nposition:fixed;\r\nz-index:5;\r\n left:0;\r\n top:0;\r\nmargin:0px;\r\nwidth:100%; height:100%;\r\nbackground: rgba(54, 25, 25, .7);\r\ntext-align: center;\r\ncolor:white;\r\n }\r\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<br>\n\n<div *ngIf=\"submitted\" id=\"overlay_loading\">\n\n<div id=\"gifspinner\" class=\"preloader-wrapper big active\">\n     <div class=\"spinner-layer spinner-blue\">\n     <div class=\"circle-clipper left\">\n       <div class=\"circle\"></div>\n     </div><div class=\"gap-patch\">\n       <div class=\"circle\"></div>\n     </div><div class=\"circle-clipper right\">\n       <div class=\"circle\"></div>\n     </div>\n   </div>\n\n</div>\n</div>\n<!-- <div class=\"row\">\n    <button routerLink='/products/{{this.id_url}}/{{this.category_url}}'  routerLinkActive=\"active\" id=\"back_to_categories\" class=\"btn black\" ><i class='material-icons'>arrow_back</i></button>\n</div> -->\n\n<!-- <div >\n   <h4>\n      Categories > Product:{{category_url}} > Gallery:{{this.product_url}}\n   </h4>\n</div> -->\n\n<nav>\n    <div class=\"nav-wrapper  \">\n      <div class=\"col s12 indigo darken-4 \">\n\n        <a routerLink='/' fragment=\"categories\" routerLinkActive=\"active\" class=\"breadcrumb\" >&nbsp;Categories</a>\n        <a routerLink='/products/{{this.id_url}}/{{this.category_url}}'  routerLinkActive=\"active\" class=\"breadcrumb\" >{{category_url}}</a>\n        <a class=\"breadcrumb\">{{this.product_url}}</a>\n\n      </div>\n    </div>\n  </nav>\n<br><br>\n\n<ul id=\"tabs-swipe-demo\" class=\"tabs indigo darken-4 \">\n  <li class=\"tab col s3 \"><a class=\"white-text\" href=\"#gallery\">Gallery</a></li>\n  <li class=\"tab col s3\"><a class=\"white-text\" href=\"#youtube\">Youtube</a></li>\n</ul>\n<br><br>\n <div id=\"gallery\" class=\"col s12\">\n<h5>Add images to gallery</h5>\n\n   <div class=\"row\">\n\n     <form id = \"formNewGallery\" name =\"formNewGallery\" #galleryData = \"ngForm\" >\n      <label class=\"custom-file-upload\"> Select Files or Drag and Drop\n      <input id=\"image\" name=\"image\" type=\"file\" (change)=\"addGallery();galleryData.reset() \" placeholder=\"Upload a file...\" multiple ngModel/>\n    </label>\n    <br><br>\n    </form>\n\n   </div>\n\n   <table class=\"responsive-table striped\">\n          <thead>\n            <tr>\n                <th>Image</th>\n                <th>Title</th>\n                <th>Description</th>\n                <th>Delete</th>\n\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let item of gallery\" >\n              <td><img src='http://localhost:3000/uploads/{{item.src}}' height='42' width='62'></td>\n              <td><input type = \"text\" name =\"title_value\" id=\"title_value\" #Title_Value placeholder=\"Enter Title\" value='{{item.title}}' (change)=\"SetGalleryDescription(item.src,Title_Value.value,Description_Value.value)\" ></td>\n              <td><input type = \"text\" name =\"description_value\" id=\"description_value\" #Description_Value placeholder=\"Enter Description\" value='{{item.description}}' (change)=\"SetGalleryDescription(item.src,Title_Value.value,Description_Value.value)\"></td>\n              <td> <a (click)=\"deleteGalleryItem(item.src)\" class=\"waves-effect waves-light red darken-3 btn\"><i  class=\"material-icons\">delete</i></a></td>\n\n\n            </tr>\n                <div *ngIf=\"submitted\" class=\"progress\"><div class=\"indeterminate\"></div></div>\n          </tbody>\n  </table>\n</div>\n <div id=\"youtube\" class=\"col s12\">\n   <div >\n     <h5>Add youtube videos to gallery</h5>\n\n\n      <div class=\"row\">\n\n        <form id = \"formNewYoutube\" name =\"formNewYoutube\" #youtubeData = \"ngForm\" >\n         <input type = \"text\" name =\"youtube_description\" id=\"youtube_description\" placeholder=\"Description\" ngModel><br>\n        <input type = \"text\" name =\"youtube_link\" id=\"youtube_link\" placeholder=\"Enter the youtube link\" ngModel><br>\n        <input type=\"button\" class=\"btn  green darken-1\" (click)=\"addVideo(); youtubeData.reset()\" value=\"Add Video\">\n       </form>\n\n      </div>\n\n      <table class=\"responsive-table striped\">\n             <thead>\n               <tr>\n                   <th>URL</th>\n                   <th>Description</th>\n                   <th>Delete</th>\n               </tr>\n             </thead>\n\n             <tbody>\n               <tr *ngFor=\"let item of video\">\n                 <td><a href='https://www.youtube.com/watch?v={{item.src}}'  target=\"_blank\">{{item.src}}</a></td>\n                 <td><input type = \"text\" name =\"description_value_yt\" id=\"description_value_yt\" #Description_Value_yt placeholder=\"Enter Description\" value='{{item.description}}' (change)=\"SetGalleryDescription(item.src,'title',Description_Value_yt.value)\"></td>\n                   <td> <a (click)=\"deleteGalleryItem(item.src)\" class=\"waves-effect waves-light red darken-3 btn\"><i  class=\"material-icons\">delete</i></a></td>\n               </tr>\n             </tbody>\n     </table>\n\n   </div>\n </div>\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_adddata_service__ = __webpack_require__("./src/app/services/adddata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_getdata_service__ = __webpack_require__("./src/app/services/getdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_deletedata_service__ = __webpack_require__("./src/app/services/deletedata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_setdata_service__ = __webpack_require__("./src/app/services/setdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(getdataService, deletedataService, setdataService, route, adddataService, http, elem) {
        this.getdataService = getdataService;
        this.deletedataService = deletedataService;
        this.setdataService = setdataService;
        this.route = route;
        this.adddataService = adddataService;
        this.http = http;
        this.elem = elem;
        this.filesToUpload = [];
        this.deleteGalleryItem = function (deletedGalleryID) {
            var _this = this;
            this.submitted = true;
            this.deletedataService.deleteGalleryItem(deletedGalleryID).subscribe(function (res) {
                console.log(res);
                _this.submitted = false;
                ////////refresh gallery /////////////
                _this.getdataService.getGallery(_this.id_url).subscribe(function (gallery) {
                    _this.gallery = gallery;
                    _this.submitted = false;
                }, function (err) {
                    console.log(err);
                    return false;
                });
                //////////end refresh gallery.////////
                ////////refresh video /////////////
                _this.getdataService.getVideo(_this.id_url).subscribe(function (video) {
                    _this.video = video;
                }, function (err) {
                    console.log(err);
                    return false;
                });
                //////////end refresh video.////////
            });
        };
        this.SetGalleryDescription = function (SetGallery_ID, Title, Description) {
            var _this = this;
            this.submitted = true;
            //console.log(SetGallery_ID + Description);
            this.setdataService.SetGalleryDescription(SetGallery_ID, Title, Description).subscribe(function (res) {
                console.log(res);
                _this.submitted = false;
                ////////refresh gallery /////////////
                _this.getdataService.getGallery(_this.id_url).subscribe(function (gallery) {
                    _this.gallery = gallery;
                    _this.submitted = false;
                }, function (err) {
                    console.log(err);
                    return false;
                });
                //////////end refresh gallery.////////
            });
        };
        this.isYoutube = function isYoutube(getURL) {
            var url = getURL;
            if (url != undefined || url != '') {
                var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
                var match = url.match(regExp);
                if (match && match[2].length == 11) {
                    // Do anything for being valid
                    // if need to change the url to embed url then use below line
                    return true;
                }
                else {
                    return false;
                    // Do anything for not being valid
                }
            }
        };
        this.youtube_parser = function youtube_parser(url) {
            //  console.log(url);
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            var match = url.match(regExp);
            return (match && match[7].length == 11) ? match[7] : false;
        };
        setInterval(function () {
        }, 10000);
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(document).ready(function () { $('ul.tabs').tabs(); });
        this.id_url = this.route.snapshot.paramMap.get('id');
        this.product_url = this.route.snapshot.paramMap.get('product_name');
        this.category_url = this.route.snapshot.paramMap.get('category');
        console.log(this.product_url);
        this.submitted = false;
        ////////refresh gallery /////////////
        this.getdataService.getGallery(this.id_url).subscribe(function (gallery) {
            _this.gallery = gallery;
        }, function (err) {
            console.log(err);
            return false;
        });
        //////////end refresh gallery.////////
        ////////refresh video /////////////
        this.getdataService.getVideo(this.id_url).subscribe(function (video) {
            _this.video = video;
        }, function (err) {
            console.log(err);
            return false;
        });
        //////////end refresh video.////////
    };
    GalleryComponent.prototype.addVideo = function () {
        var _this = this;
        var youtube_description = this.elem.nativeElement.querySelector('#youtube_description').value;
        var youtube_link = this.elem.nativeElement.querySelector('#youtube_link').value;
        var youtube_link_parsed = this.youtube_parser(youtube_link);
        var formData = new FormData();
        if (this.isYoutube(youtube_link)) {
            formData.append('link', youtube_link_parsed);
            formData.append('desc', youtube_description);
            formData.append('id', this.id_url);
            formData.append('category', this.category_url);
            this.submitted = true;
            //var json_arr = JSON.stringify(formData);
            this.adddataService.addVideo(formData).subscribe(function (res) {
                alert("Video is added to Gallery.");
                _this.submitted = false;
                ////////refresh video /////////////
                _this.getdataService.getVideo(_this.id_url).subscribe(function (video) {
                    _this.video = video;
                }, function (err) {
                    console.log(err);
                    return false;
                });
                //////////end refresh video.////////
            });
        }
        else {
            alert("Please insert a valid youtube link");
        }
    };
    GalleryComponent.prototype.addGallery = function () {
        var _this = this;
        var files = this.elem.nativeElement.querySelector('#image').files;
        //let catnames = this.elem.nativeElement.querySelector('#name').value;
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append('image', files[i], files[i].name);
            console.log("appended " + files[i].name);
        }
        //  formData.append('image[]',files[0],files[0].name);
        //formData.append('image[]',files[1],files[1].name);
        //  let file = files[0];
        //  let catname = catnames[0];
        //formData.append('image',files);
        formData.append('id', this.id_url);
        formData.append('category', this.category_url);
        this.submitted = true;
        var json_arr = JSON.stringify(formData);
        console.log("JSON: " + json_arr);
        this.adddataService.addGallery(formData).subscribe(function (res) {
            alert("Images are uploaded to Gallery.");
            _this.submitted = false;
            ////////refresh gallery /////////////
            _this.getdataService.getGallery(_this.id_url).subscribe(function (gallery) {
                _this.gallery = gallery;
            }, function (err) {
                console.log(err);
                return false;
            });
            //////////end refresh gallery.////////
        });
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/components/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_getdata_service__["a" /* GetdataService */], __WEBPACK_IMPORTED_MODULE_3__services_deletedata_service__["a" /* DeletedataService */], __WEBPACK_IMPORTED_MODULE_4__services_setdata_service__["a" /* SetdataService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_adddata_service__["a" /* AdddataService */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            alert("Please login First");
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<body>\n  <div class=\"section\"></div>\n  <main>\n    <div class=\"s12 m4 l8\">\n      <div class=\"section\"></div>\n\n      <h5 class=\"indigo-text\">Please, login into your account</h5>\n      <div class=\"section\"></div>\n\n        <div class=\"z-depth-1 grey lighten-4 row\" style=\" padding: 32px 48px 0px 48px; border: 1px solid #EEE;\">\n\n          <form class=\"col s12\" method=\"post\">\n            <div class='row'>\n              <div class='col s12'>\n              </div>\n            </div>\n\n            <div class='row'>\n              <div class='input-field col s12'>\n                <input #Login_Email_Value class='validate' type='email' name='email' id='email' />\n                <label for='email'>Enter your email</label>\n              </div>\n            </div>\n\n            <div class='row'>\n              <div class='input-field col s12'>\n                <input #Login_Password_Value class='validate' type='password' name='password' id='password' />\n                <label for='password'>Enter your password</label>\n              </div>\n\n            </div>\n\n            <br />\n            <div>\n              <div class='row'>\n\n                <a (click)=\"login(Login_Email_Value.value,Login_Password_Value.value)\" class=\"col s12 btn btn-large waves-effect indigo\">Login</a>\n              </div>\n            </div>\n          </form>\n        </div>\n\n      <a href=\"#!\">Create account</a>\n    </div>\n\n    <div class=\"section\"></div>\n    <div class=\"section\"></div>\n  </main>\n\n</body> -->\n\n<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                //    this.flashMessage.show('you are now logged in',{cssClass:'alert-success', timeout:5000});
                _this.router.navigate(['category']);
            }
            else {
                //    this.flashMessage.show(data.msg,{cssClass:'alert-danger', timeout:5000});
                _this.router.navigate(['login']);
                alert("Wrong Username or Password");
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <nav>\n    <div class=\"nav-wrapper indigo darken-4\">\n      <a href=\"#\" class=\"brand-logo\">&nbsp;Vision Trucking Signage Panel</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </div>\n\n  </nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.css":
/***/ (function(module, exports) {

module.exports = "#gifspinner{\r\n  position:fixed;\r\n  width:150px;\r\n  height:150px;\r\n  top:50%;\r\n  display: inline-block;\r\n   vertical-align: middle;\r\n   line-height: normal;\r\n\r\n}\r\n\r\n#overlay_loading {\r\n\r\nposition:fixed;\r\nz-index:5;\r\n left:0;\r\n top:0;\r\nmargin:0px;\r\nwidth:100%; height:100%;\r\nbackground: rgba(54, 25, 25, .7);\r\ntext-align: center;\r\ncolor:white;\r\n }\r\n"

/***/ }),

/***/ "./src/app/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<br>\n<div *ngIf=\"submitted\" id=\"overlay_loading\">\n\n<div id=\"gifspinner\" class=\"preloader-wrapper big active\">\n     <div class=\"spinner-layer spinner-blue\">\n     <div class=\"circle-clipper left\">\n       <div class=\"circle\"></div>\n     </div><div class=\"gap-patch\">\n       <div class=\"circle\"></div>\n     </div><div class=\"circle-clipper right\">\n       <div class=\"circle\"></div>\n     </div>\n   </div>\n\n</div>\n</div>\n<!-- <div class=\"row\">\n    <button routerLink='/' fragment=\"categories\" routerLinkActive=\"active\" id=\"back_to_categories\" class=\"btn black\" ><i class='material-icons'>arrow_back</i></button>\n</div> -->\n <!-- <div >\n    <h3>\n       Categories > Product:{{category_url}}\n    </h3>\n </div> -->\n\n <nav>\n     <div class=\"nav-wrapper  \">\n       <div class=\"col s12 indigo darken-4 \">\n\n         <a routerLink='/' fragment=\"categories\" routerLinkActive=\"active\" class=\"breadcrumb\" >&nbsp;Categories</a>\n         <a routerLink='/products/{{this.id_url}}/{{this.category_url}}'  routerLinkActive=\"active\" class=\"breadcrumb\" >{{category_url}}</a>\n       </div>\n     </div>\n   </nav>\n<br><br>\n<h5>Add new product</h5>\n\n   <div class=\"row\">\n\n     <form id = \"formNewProduct\" name =\"formNewProduct\" #productData = \"ngForm\" >\n      <input type = \"text\" name =\"name\" id=\"name\" placeholder=\"Enter product name\" ngModel><br>\n      <input type = \"file\" id=\"image\" name=\"image\" ngModel ><br><br>\n      <input type=\"button\" class=\"btn  green darken-1\" (click)=\"addProduct(); productData.reset()\" value=\"Add Product\">\n    </form>\n\n   </div>\n\n   <table class=\"responsive-table striped\">\n          <thead>\n            <tr>\n                <th>Product Name</th>\n                <th>Image</th>\n                <th>Delete</th>\n                <th>Edit Gallery</th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let item of product\">\n              <td>{{item.product_name}}</td>\n              <td><img src='http://localhost:3000/uploads/{{item.image_path}}' height='42' width='62'></td>\n              <td> <a (click)=\"deleteProduct(item._id,item.product_name)\" class=\"waves-effect waves-light red darken-3 btn\"><i  class=\"material-icons\">delete</i></a></td>\n              <td><a  routerLink='/gallery/{{item._id}}/{{item.product_name}}/{{category_url}}' routerLinkActive=\"active\" class=\"waves-effect waves-light indigo darken-4 btn\"><i class=\"material-icons\">edit</i></a></td>\n\n            </tr>\n          </tbody>\n  </table>\n<!--\n<select class=\"browser-default\">\n  <option value=\"\" disabled selected>Choose your Month</option>\n  <option *ngFor=\"let i of months\">{{i}}</option>\n</select>\n\n\n<div>\n   <span *ngIf=\"isavailable; else condition1\">Condition is valid.</span>\n   <ng-template #condition1>Condition is invalid</ng-template>\n</div>-->\n"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_getdata_service__ = __webpack_require__("./src/app/services/getdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_deletedata_service__ = __webpack_require__("./src/app/services/deletedata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_adddata_service__ = __webpack_require__("./src/app/services/adddata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_setdata_service__ = __webpack_require__("./src/app/services/setdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductsComponent = /** @class */ (function () {
    //  id_url:string;
    function ProductsComponent(route, getdataService, setdataService, deletedataService, adddataService, http, elem) {
        var _this = this;
        this.route = route;
        this.getdataService = getdataService;
        this.setdataService = setdataService;
        this.deletedataService = deletedataService;
        this.adddataService = adddataService;
        this.http = http;
        this.elem = elem;
        this.deleteProduct = function (deletedProdID, deletedProdProduct) {
            var _this = this;
            if (confirm('Are you sure to delete "' + deletedProdProduct + '" product? All dependencies will be deleted.')) {
                this.submitted = true;
                this.deletedataService.deleteProduct(deletedProdID, deletedProdProduct).subscribe(function (res) {
                    console.log(res);
                    _this.submitted = false;
                    ////////refresh category /////////////
                    _this.getdataService.getProduct(_this.category_url).subscribe(function (product) {
                        _this.product = product;
                    }, function (err) {
                        console.log(err);
                        return false;
                    });
                    //////////end refresh category.////////
                });
            }
        };
        setInterval(function () {
            _this.getdataService.getProduct(_this.category_url).subscribe(function (product) {
                _this.product = product;
            }, function (err) {
                console.log(err);
                return false;
            });
        }, 10000);
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get parameters
        //  console.log("hey this is me yo"+this.route.snapshot.paramMap.get('category'));
        this.category_url = this.route.snapshot.paramMap.get('category');
        //  this.id_url =  this.route.snapshot.paramMap.get('id');
        ////////refresh category /////////////
        this.getdataService.getProduct(this.category_url).subscribe(function (product) {
            _this.product = product;
        }, function (err) {
            console.log(err);
            return false;
        });
        //////////end refresh category.////////
    };
    ProductsComponent.prototype.addProduct = function () {
        var _this = this;
        var files = this.elem.nativeElement.querySelector('#image').files;
        var prodnames = this.elem.nativeElement.querySelector('#name').value;
        var formData = new FormData();
        var file = files[0];
        formData.append('image', file, file.name);
        formData.append('product', prodnames);
        formData.append('category', this.category_url);
        //this.submitted=true;
        this.adddataService.addProduct(formData).subscribe(function (res) {
            alert("product " + prodnames + " is now added.");
            ////////refresh category /////////////
            _this.getdataService.getProduct(_this.category_url).subscribe(function (product) {
                _this.product = product;
            }, function (err) {
                console.log(err);
                return false;
            });
            //////////end refresh category.////////
        });
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products',
            template: __webpack_require__("./src/app/components/products/products.component.html"),
            styles: [__webpack_require__("./src/app/components/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_getdata_service__["a" /* GetdataService */], __WEBPACK_IMPORTED_MODULE_4__services_setdata_service__["a" /* SetdataService */], __WEBPACK_IMPORTED_MODULE_2__services_deletedata_service__["a" /* DeletedataService */], __WEBPACK_IMPORTED_MODULE_3__services_adddata_service__["a" /* AdddataService */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/services/adddata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdddataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdddataService = /** @class */ (function () {
    function AdddataService(http) {
        this.http = http;
    }
    /*  addCategory(id,category){
        return this.http.delete("http://localhost:3000/deletes/delete_category/"+id+"/"+category)
        .map(res => res.json());
      }*/
    AdddataService.prototype.addCategory = function (formdata) {
        var _url = "http://localhost:3000/adds/add_category";
        return this.http.post(_url, formdata)
            .catch(this._errorHandler);
    };
    AdddataService.prototype.addProduct = function (formdata) {
        var _url = "http://localhost:3000/adds/add_product";
        return this.http.post(_url, formdata)
            .catch(this._errorHandler);
    };
    AdddataService.prototype.addGallery = function (formdata) {
        var _url = "http://localhost:3000/adds/add_gallery";
        return this.http.post(_url, formdata)
            .catch(this._errorHandler);
    };
    AdddataService.prototype.addVideo = function (formdata) {
        var _url = "http://localhost:3000/adds/add_video";
        return this.http.post(_url, formdata)
            .catch(this._errorHandler);
    };
    AdddataService.prototype._errorHandler = function (error) {
        console.error('Error occured: ' + error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'some error on server occured');
    };
    AdddataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AdddataService);
    return AdddataService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthenticationService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthenticationService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthenticationService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/deletedata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletedataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeletedataService = /** @class */ (function () {
    function DeletedataService(http) {
        this.http = http;
    }
    DeletedataService.prototype.deleteCategory = function (id, category) {
        return this.http.delete("http://localhost:3000/deletes/delete_category/" + id + "/" + category)
            .map(function (res) { return res.json(); });
    };
    DeletedataService.prototype.deleteProduct = function (id, category) {
        return this.http.delete("http://localhost:3000/deletes/delete_product/" + id)
            .map(function (res) { return res.json(); });
    };
    DeletedataService.prototype.deleteGalleryItem = function (id, name) {
        return this.http.delete("http://localhost:3000/deletes/delete_from_gallery/" + id)
            .map(function (res) { return res.json(); });
    };
    DeletedataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], DeletedataService);
    return DeletedataService;
}());



/***/ }),

/***/ "./src/app/services/getdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetdataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetdataService = /** @class */ (function () {
    function GetdataService(http) {
        this.http = http;
    }
    GetdataService.prototype.getCategory = function () {
        return this.http.get('http://localhost:3000/fetchs/fetch_categories')
            .map(function (res) { return res.json(); });
    };
    //is not used until now
    GetdataService.prototype.getWhichCategoryImIn = function () {
        return this.http.get('http://localhost:3000/fetchs/fetch_categories')
            .map(function (res) { return res.json(); });
    };
    GetdataService.prototype.getProduct = function (category) {
        return this.http.get('http://localhost:3000/fetchs/fetch_products/' + category)
            .map(function (res) { return res.json(); });
    };
    GetdataService.prototype.getGallery = function (product_id) {
        return this.http.get('http://localhost:3000/fetchs/fetch_products_media_byID_gallery/' + product_id)
            .map(function (res) { return res.json(); });
    };
    GetdataService.prototype.getVideo = function (product_id) {
        return this.http.get('http://localhost:3000/fetchs/fetch_products_media_byID_youtube/' + product_id)
            .map(function (res) { return res.json(); });
    };
    GetdataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], GetdataService);
    return GetdataService;
}());



/***/ }),

/***/ "./src/app/services/setdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetdataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SetdataService = /** @class */ (function () {
    function SetdataService(http) {
        this.http = http;
    }
    SetdataService.prototype.SetGalleryDescription = function (gallery_id, title, description) {
        var _url = "http://localhost:3000/sets/set_desc_title/";
        var data = '{"id": "' + gallery_id + '","title": "' + title + '", "description": "' + description + '"}';
        console.log(data);
        return this.http.post(_url, JSON.parse(data))
            .catch(this._errorHandler);
    };
    SetdataService.prototype.nonono = function (formdata) {
        var _url = "http://localhost:3000/adds/add_category";
        return this.http.post(_url, formdata)
            .catch(this._errorHandler);
    };
    SetdataService.prototype._errorHandler = function (error) {
        console.error('Error occured: ' + error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'some error on server occured');
    };
    SetdataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], SetdataService);
    return SetdataService;
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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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