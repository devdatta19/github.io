(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-sidenav></app-sidenav>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidenav/sidenav.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidenav/sidenav.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-sidenav-container fullscreen> -->\n  <div class=\"example-sidenav-content\">\n    <!-- <router-outlet></router-outlet> -->\n    \n    <mat-icon (click)=\"sidenav.toggle()\" class=\"sidenav-menu\">menu</mat-icon>\n  </div>\n  <mat-sidenav #sidenav mode=\"side\" class=\"example-sidenav\" [ngStyle]=\"{ 'width.em': sidenavWidth }\" opened=\"true\"\n    (mouseenter)=\"increase()\" (mouseleave)=\"decrease()\">\n    <div class=\"logomain\">Admin</div>\n    <mat-nav-list>\n      <mat-list-item routerLink=\"/admin/students\" routerLinkActive=\"active\">\n        <mat-icon mat-list-icon>person</mat-icon>\n        <div fxFlex=\"10\"></div>\n        <div *ngIf=\"sidenavWidth > 6\" class=\"sidenav-item\">\n          <h5 class=\"lead\">Students</h5>\n        </div>\n      </mat-list-item>\n\n      <mat-list-item routerLink=\"/admin/add-question\" routerLinkActive=\"active\">\n        <mat-icon mat-list-icon>settings</mat-icon>\n        <div fxFlex=\"10\"></div>\n        <div *ngIf=\"sidenavWidth > 6\" class=\"sidenav-item\">\n          <h5 class=\"lead\">Add Questions</h5>\n        </div>\n      </mat-list-item>\n\n      <!-- <mat-list-item routerLink=\"3\" routerLinkActive=\"active\">\n        <mat-icon mat-list-icon>local_phone</mat-icon>\n        <div fxFlex=\"10\"></div>\n        <div *ngIf=\"sidenavWidth > 6\" class=\"sidenav-item\">\n          <h5 class=\"lead\">Contact</h5>\n        </div>\n      </mat-list-item> -->\n\n\n\n    </mat-nav-list>\n\n  </mat-sidenav>\n\n  \n<!-- </mat-sidenav-container> -->");

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");




var routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
    },
    { path: 'students', loadChildren: function () { return __webpack_require__.e(/*! import() | students-students-module */ "students-students-module").then(__webpack_require__.bind(null, /*! ./students/students.module */ "./src/app/admin/students/students.module.ts")).then(function (m) { return m.StudentsModule; }); } },
    { path: 'add-question', loadChildren: function () { return __webpack_require__.e(/*! import() | add-question-add-question-module */ "add-question-add-question-module").then(__webpack_require__.bind(null, /*! ./add-question/add-question.module */ "./src/app/admin/add-question/add-question.module.ts")).then(function (m) { return m.AddQuestionModule; }); } },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
        console.log('hhhhh');
    };
    AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");








/* import { SidenavComponent} from '../sidenav/sidenav.component'; */
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"]],
            exports: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.sidenavWidth = 4;
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.increase = function () {
        this.sidenavWidth = 15;
        console.log('increase sidenav width');
    };
    SidenavComponent.prototype.decrease = function () {
        this.sidenavWidth = 4;
        console.log('decrease sidenav width');
    };
    SidenavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidenav/sidenav.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map