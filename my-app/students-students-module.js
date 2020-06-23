(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["students-students-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/students/students.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/students/students.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container fullscreen>\n<app-sidenav></app-sidenav>\n<div class=\"container\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n    <mat-card style=\"text-align: center;\">\n        <mat-card-content>\n            <mat-form-field>\n                <mat-label>Filter</mat-label>\n                <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\">\n              </mat-form-field>\n              \n              <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n              \n                <!-- Position Column -->\n                <ng-container matColumnDef=\"position\">\n                  <th mat-header-cell *matHeaderCellDef> No. </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n                </ng-container>\n              \n                <!-- Name Column -->\n                <ng-container matColumnDef=\"name\">\n                  <th mat-header-cell *matHeaderCellDef> Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                </ng-container>\n              \n                <!-- Weight Column -->\n                <ng-container matColumnDef=\"weight\">\n                  <th mat-header-cell *matHeaderCellDef> Weight </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n                </ng-container>\n              \n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"symbol\">\n                  <th mat-header-cell *matHeaderCellDef> Symbol </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n                </ng-container>\n              \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n</mat-card-content>\n</mat-card>\n</div>\n</mat-sidenav-container>\n\n\n");

/***/ }),

/***/ "./src/app/admin/students/students-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/students/students-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: StudentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsRoutingModule", function() { return StudentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _students_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./students.component */ "./src/app/admin/students/students.component.ts");




var routes = [
    { path: '', component: _students_component__WEBPACK_IMPORTED_MODULE_3__["StudentsComponent"] }
];
var StudentsRoutingModule = /** @class */ (function () {
    function StudentsRoutingModule() {
    }
    StudentsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StudentsRoutingModule);
    return StudentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/students/students.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/students/students.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3R1ZGVudHMvc3R1ZGVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0dWRlbnRzL3N0dWRlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/admin/students/students.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/students/students.component.ts ***!
  \******************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/table.es5.js");



var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * @title Table with filtering
 */
var StudentsComponent = /** @class */ (function () {
    function StudentsComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
    }
    StudentsComponent.prototype.ngOnInit = function () {
    };
    StudentsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    StudentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'students-app',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./students.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/students/students.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./students.component.css */ "./src/app/admin/students/students.component.css")).default]
        })
    ], StudentsComponent);
    return StudentsComponent;
}());



/***/ }),

/***/ "./src/app/admin/students/students.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/students/students.module.ts ***!
  \***************************************************/
/*! exports provided: StudentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsModule", function() { return StudentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/table.es5.js");
/* harmony import */ var _students_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./students-routing.module */ "./src/app/admin/students/students-routing.module.ts");
/* harmony import */ var _students_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./students.component */ "./src/app/admin/students/students.component.ts");








var StudentsModule = /** @class */ (function () {
    function StudentsModule() {
    }
    StudentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_students_component__WEBPACK_IMPORTED_MODULE_7__["StudentsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _students_routing_module__WEBPACK_IMPORTED_MODULE_6__["StudentsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"]
            ]
        })
    ], StudentsModule);
    return StudentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=students-students-module.js.map