(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-question-add-question-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-question/add-question.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-question/add-question.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container fullscreen>\n<app-sidenav></app-sidenav>\n<div class=\"container\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n  <mat-card style=\"text-align: center;\">\n    <mat-card-content>\n<form  [formGroup]=\"form\" file-drop (files)=\"submit($event)\">\n  <mat-card-content>\n<div class=\"row\">\n  <div class=\"col-sm-6 margin-auto\">\n      <div class=\"form-group\">\n          <label for=\"fullName\" class=\"txt-color onhover\"><span style=\"color:red\">*&nbsp;</span>Type:</label>\n          <input matInput type=\"text\" class=\"form-control\" formControlName=\"type\" id=\"name\" placeholder=\"Enter Type\" required>\n      </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6 margin-auto\">\n      <div class=\"form-group\">\n          <label for=\"fullName\" class=\"txt-color onhover\"><span style=\"color:red\">*&nbsp;</span>Section:</label>\n          <input matInput type=\"text\" class=\"form-control\" formControlName=\"section\" id=\"name\" placeholder=\"Enter section\" required>\n      </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6 margin-auto\">\n      <div class=\"form-group\">\n          <label for=\"fullName\" class=\"txt-color onhover\"><span style=\"color:red\">*&nbsp;</span>Question 1 image:</label>\n          <input  type=\"file\" class=\"form-control\" formControlName=\"q1\" id=\"q1\" placeholder=\"Enter Full Name\" required>\n      </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6 margin-auto\">\n      <div class=\"form-group\">\n          <label for=\"fullName\" class=\"txt-color onhover\">Question 2 image:</label>\n          <input type=\"file\" class=\"form-control\" formControlName=\"q2\" id=\"name\" placeholder=\"Enter Full Name\" required>\n      </div>\n  </div>\n</div><div class=\"row\">\n  <div class=\"col-sm-6 margin-auto\">\n      <div class=\"form-group\">\n          <label for=\"fullName\" class=\"txt-color onhover\"><span style=\"color:red\">*&nbsp;</span>Answer 1 image:</label>\n          <input type=\"file\" class=\"form-control\" formControlName=\"opt1\" id=\"name\" placeholder=\"Enter Full Name\" required>\n      </div>\n  </div>\n</div><div class=\"row\">\n  <div class=\"col-sm-6 margin-auto\">\n      <div class=\"form-group\">\n          <label for=\"fullName\" class=\"txt-color onhover\"><span style=\"color:red\">*&nbsp;</span>Answer 2 image:</label>\n          <input type=\"file\" class=\"form-control\" formControlName=\"opt2\" id=\"name\" placeholder=\"Enter Full Name\" required>\n      </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6 margin-auto\">\n      <div class=\"form-group\">\n          <label for=\"fullName\" class=\"txt-color onhover\"><span style=\"color:red\">*&nbsp;</span>Answer 3 image:</label>\n          <input type=\"file\" class=\"form-control\" formControlName=\"opt3\" id=\"name\" placeholder=\"Enter Full Name\" required>\n      </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6 margin-auto\">\n      <div class=\"form-group\">\n          <label for=\"fullName\" class=\"txt-color onhover\"><span style=\"color:red\">*&nbsp;</span>Answer 4 image:</label>\n          <input type=\"file\" class=\"form-control\" formControlName=\"opt4\" id=\"name\" placeholder=\"Enter Full Name\" required>\n      </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6 margin-auto\">\n      <div class=\"form-group\">\n          <label for=\"fullName\" class=\"txt-color onhover\"><span style=\"color:red\">*&nbsp;</span>Correct Answer:</label>\n          <select name=\"status\" id=\"status\" formControlName=\"ans\" class=\"form-control\">\n            <option  [value]=\"a\">A\n            </option>\n            <option  [value]=\"b\">B\n            </option>\n            <option  [value]=\"c\">C\n            </option>\n            <option  [value]=\"d\">D\n            </option>\n        </select>\n      </div>\n  </div>\n</div>\n    <div class=\"row\">\n        <div class=\"col-sm-6 margin-auto center\">\n            <button type=\"submit\" class=\"btn btn-lg btn-primary btn-submit-contact float-right\">Submit</button>\n        </div>\n        <!-- <div class=\"col-sm-6 margin-auto center\">\n            <button routerLink=\"/\" class=\"btn btn-lg btn-primary btn-submit-contact float-left\">Back</button>\n        </div> -->\n    </div>\n</mat-card-content>\n</form>\n</mat-card-content>\n</mat-card>\n</div>\n\n</mat-sidenav-container>");

/***/ }),

/***/ "./src/app/admin/add-question/add-question-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/add-question/add-question-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddQuestionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionRoutingModule", function() { return AddQuestionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _add_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-question.component */ "./src/app/admin/add-question/add-question.component.ts");




var routes = [
    { path: '', component: _add_question_component__WEBPACK_IMPORTED_MODULE_3__["AddQuestionComponent"] }
];
var AddQuestionRoutingModule = /** @class */ (function () {
    function AddQuestionRoutingModule() {
    }
    AddQuestionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AddQuestionRoutingModule);
    return AddQuestionRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/add-question/add-question.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/add-question/add-question.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".drop-zone {\n  font-size: 1.25rem;\n  /* 20 */\n  background-color: #c8dadf;\n  position: relative;\n  padding: 100px 20px;\n}\n.drop-zone .dragndrop,\n.drop-zone .icon {\n  display: none;\n}\n.drop-zone.has-drag-n-drop {\n  outline: 2px dashed #92b0b3;\n  outline-offset: -10px;\n  transition: outline-offset 0.15s ease-in-out, background-color 0.15s linear;\n}\n.drop-zone.has-drag-n-drop .icon {\n  width: 100%;\n  height: 80px;\n  fill: #92b0b3;\n  display: block;\n  margin-bottom: 40px;\n}\n.drop-zone.has-drag-n-drop .dragndrop {\n  display: inline;\n}\n.drop-zone.has-drag-n-drop.is-over {\n  outline-offset: -20px;\n  outline-color: #c8dadf;\n  background-color: #fff;\n}\n.drop-zone input[type=file] {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.drop-zone input[type=file] + label {\n  max-width: 80%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n}\n.drop-zone input[type=file]:focus + label {\n  outline: 1px dotted #000;\n  outline: -webkit-focus-ring-color auto 5px;\n}\n.drop-zone input[type=file]:focus + label strong, .drop-zone input[type=file] + label:hover strong {\n  color: #39bfd3;\n}\nfooter {\n  color: #92b0b3;\n  margin-top: 40px;\n  text-align: center;\n}\nfooter a:hover,\nfooter a:focus {\n  color: #39bfd3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvbXktYXBwL3NyYy9hcHAvYWRtaW4vYWRkLXF1ZXN0aW9uL2FkZC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRkLXF1ZXN0aW9uL2FkZC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQW9CLE9BQUE7RUFDcEIseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRUo7QURBSTs7RUFFRSxhQUFBO0FDRU47QURDSTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7RUFHQSwyRUFBQTtBQ0FOO0FERU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREdNO0VBQ0UsZUFBQTtBQ0RSO0FESU07RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUNGUjtBRE1JO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNKTjtBRE1NO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0pSO0FET007RUFDRSx3QkFBQTtFQUNBLDBDQUFBO0FDTFI7QURRTTtFQUVJLGNBQUE7QUNQVjtBRFlFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNUSjtBRFdJOztFQUVFLGNBQUE7QUNUTiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC1xdWVzdGlvbi9hZGQtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcC16b25lIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07IC8qIDIwICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZGFkZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTAwcHggMjBweDtcbiAgXG4gICAgLmRyYWduZHJvcCxcbiAgICAuaWNvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgXG4gICAgJi5oYXMtZHJhZy1uLWRyb3Age1xuICAgICAgb3V0bGluZTogMnB4IGRhc2hlZCAjOTJiMGIzO1xuICAgICAgb3V0bGluZS1vZmZzZXQ6IC0xMHB4O1xuICBcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGxpbmVhcjtcbiAgICAgIHRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XG4gIFxuICAgICAgLmljb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBmaWxsOiAjOTJiMGIzO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgIH1cbiAgXG4gICAgICAuZHJhZ25kcm9wIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgfVxuICBcbiAgICAgICYuaXMtb3ZlciB7XG4gICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtMjBweDtcbiAgICAgICAgb3V0bGluZS1jb2xvcjogI2M4ZGFkZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICAgIHdpZHRoOiAwLjFweDtcbiAgICAgIGhlaWdodDogMC4xcHg7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IC0xO1xuICBcbiAgICAgICYgKyBsYWJlbCB7XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gIFxuICAgICAgJjpmb2N1cyArIGxhYmVsIHtcbiAgICAgICAgb3V0bGluZTogMXB4IGRvdHRlZCAjMDAwO1xuICAgICAgICBvdXRsaW5lOiAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byA1cHg7XG4gICAgICB9XG4gIFxuICAgICAgJjpmb2N1cyArIGxhYmVsIHN0cm9uZyxcbiAgICAgICYgKyBsYWJlbDpob3ZlciBzdHJvbmcge1xuICAgICAgICAgIGNvbG9yOiAjMzliZmQzO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBmb290ZXIge1xuICAgIGNvbG9yOiAjOTJiMGIzO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBhOmhvdmVyLFxuICAgIGE6Zm9jdXMge1xuICAgICAgY29sb3I6ICMzOWJmZDM7XG4gICAgfVxuICB9XG4gICIsIi5kcm9wLXpvbmUge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIC8qIDIwICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGRhZGY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTAwcHggMjBweDtcbn1cbi5kcm9wLXpvbmUgLmRyYWduZHJvcCxcbi5kcm9wLXpvbmUgLmljb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmRyb3Atem9uZS5oYXMtZHJhZy1uLWRyb3Age1xuICBvdXRsaW5lOiAycHggZGFzaGVkICM5MmIwYjM7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvdXRsaW5lLW9mZnNldCAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGxpbmVhcjtcbn1cbi5kcm9wLXpvbmUuaGFzLWRyYWctbi1kcm9wIC5pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgZmlsbDogIzkyYjBiMztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uZHJvcC16b25lLmhhcy1kcmFnLW4tZHJvcCAuZHJhZ25kcm9wIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmRyb3Atem9uZS5oYXMtZHJhZy1uLWRyb3AuaXMtb3ZlciB7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMjBweDtcbiAgb3V0bGluZS1jb2xvcjogI2M4ZGFkZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5kcm9wLXpvbmUgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHdpZHRoOiAwLjFweDtcbiAgaGVpZ2h0OiAwLjFweDtcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbn1cbi5kcm9wLXpvbmUgaW5wdXRbdHlwZT1maWxlXSArIGxhYmVsIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5kcm9wLXpvbmUgaW5wdXRbdHlwZT1maWxlXTpmb2N1cyArIGxhYmVsIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCAjMDAwO1xuICBvdXRsaW5lOiAtd2Via2l0LWZvY3VzLXJpbmctY29sb3IgYXV0byA1cHg7XG59XG4uZHJvcC16b25lIGlucHV0W3R5cGU9ZmlsZV06Zm9jdXMgKyBsYWJlbCBzdHJvbmcsIC5kcm9wLXpvbmUgaW5wdXRbdHlwZT1maWxlXSArIGxhYmVsOmhvdmVyIHN0cm9uZyB7XG4gIGNvbG9yOiAjMzliZmQzO1xufVxuXG5mb290ZXIge1xuICBjb2xvcjogIzkyYjBiMztcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuZm9vdGVyIGE6aG92ZXIsXG5mb290ZXIgYTpmb2N1cyB7XG4gIGNvbG9yOiAjMzliZmQzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/add-question/add-question.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/add-question/add-question.component.ts ***!
  \**************************************************************/
/*! exports provided: AddQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionComponent", function() { return AddQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");




var AddQuestionComponent = /** @class */ (function () {
    function AddQuestionComponent(_router, fb) {
        this._router = _router;
        this.fb = fb;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            section: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            q1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            q2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            opt1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            opt2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            opt3: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            opt4: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            ans: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("")
        });
    }
    Object.defineProperty(AddQuestionComponent.prototype, "formControls", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    AddQuestionComponent.prototype.ngOnInit = function () {
    };
    AddQuestionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    AddQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-question',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-question/add-question.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-question.component.scss */ "./src/app/admin/add-question/add-question.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AddQuestionComponent);
    return AddQuestionComponent;
}());



/***/ }),

/***/ "./src/app/admin/add-question/add-question.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/add-question/add-question.module.ts ***!
  \***********************************************************/
/*! exports provided: AddQuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionModule", function() { return AddQuestionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sidenav.es5.js");
/* harmony import */ var _add_question_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-question-routing.module */ "./src/app/admin/add-question/add-question-routing.module.ts");
/* harmony import */ var _add_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-question.component */ "./src/app/admin/add-question/add-question.component.ts");








var AddQuestionModule = /** @class */ (function () {
    function AddQuestionModule() {
    }
    AddQuestionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_question_component__WEBPACK_IMPORTED_MODULE_7__["AddQuestionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _add_question_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddQuestionRoutingModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]
        })
    ], AddQuestionModule);
    return AddQuestionModule;
}());



/***/ })

}]);
//# sourceMappingURL=add-question-add-question-module.js.map