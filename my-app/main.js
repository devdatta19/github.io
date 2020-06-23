(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/instructions/instructions.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/instructions/instructions.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n  <mat-card style=\"text-align: center;\" *ngIf=\"chooseoption == true\">\n    <mat-card-title></mat-card-title>\n    <mat-card-content>\n        \n        \n    \n    \n    <form (ngSubmit)=\"submitInstructions()\">\n      <h2>You have registered for two exams, Please choose one to give</h2>\n      <br><br>\n      <div class=\"button\"><button  style=\"margin-right:5px;\" class=\"btn btn-primary btn-block\" mat-raised-button color=\"primary\">Engineering</button></div><br>\n        <div class=\"button\"><button  style=\"margin-right:5px;\" class=\"btn btn-primary btn-block\" mat-raised-button color=\"accent\">Medical</button></div>\n    </form>\n  </mat-card-content>\n  </mat-card>\n<mat-card style=\"text-align: center;\" *ngIf=\"chooseInsructions == true\">\n\t<mat-card-title>Instructions</mat-card-title>\n\t<mat-card-content>\n\t\t<form [formGroup]=\"form\" (ngSubmit)=\"submit()\" autocomplete=\"off\">\n\t\t\t\n      <p>\n        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n        bred for hunting.\n      </p>\n      <p>\n        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n        bred for hunting.\n      </p>\n      <p>\n        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n        bred for hunting.\n      </p>\n      <p>\n        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n        bred for hunting.\n      </p>\n      <p>\n        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n        bred for hunting.\n      </p>\n   \n            <mat-checkbox formControlName=\"checked\" [(ngModel)]=\"checked\">I have read the above instructions</mat-checkbox>\n\n\t\t\n\t\t\t\n\t\t\t<div class=\"button\">\n\t\t\t\t<button  type=\"submit\" mat-flat-button color=\"primary\" class=\"btn btn-primary btn-block\" color=\"primary\">Start</button>\n\t\t\t</div>\n\t\t</form>\n\t</mat-card-content>\n</mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card style=\"text-align: center;\">\n\t<!-- <div class=\"row\">\n\t\t<div class=\"landscape col-sm-6\">\n\t\t\t<img class=\"center\" src=\"https://aayaa.in/wp-content/uploads/2020/06/header_logo.png\">\n\t\t</div>\n\t</div> -->\n\t\n\t<mat-card-header>\n\t\t<div fxLayout=\"column\" fxLayoutAlign=\"space-around center\" >\n\t\t\t<div class=\"imgrow\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n\t\t\t\t<div class=\"imgcolumn\">\n\t\t\t\t\t<img mat-card-image src=\"https://aayaa.in/wp-content/uploads/2020/06/header_logo.png\" alt=\"Logo\">\n\t\t\t\t  </div>\n\t\t\t</div>\n\t\t</div></mat-card-header>\n\t<mat-card-title>CSRL Open Test</mat-card-title>\n\t<mat-card-content>\n\t\t<!-- <div class=\"form-group\">\n\t\t\t<label for=\"phoneNumber\">Phone Number</label>\n\t\t\t<input name=\"phoneNumber\" [(ngModel)]=\"phoneNumber\" type=\"text\" class=\"form-control\">\n\t\t  </div>\n\t\t  <div id=\"recaptcha-container\"></div>\n\t\t  <button \n\t\t\tclass=\"btn btn-primary btn-block\"\n\t\t\t[disabled]=\"disableOTPSendButton\"\n\t\t\t(click)=\"sendOTP()\">Send OTP</button>\n\t\t  <hr>\n\t\t  <div class=\"form-group\">\n\t\t\t<label for=\"otp\">OTP</label>\n\t\t\t<input name=\"otp\" [(ngModel)]=\"otp\" type=\"text\" class=\"form-control\">\n\t\t  </div>\n\t\t  <button mat-flat-button color=\"primary\" class=\"btn btn-primary btn-block\" (click)=\"verifyOTP()\">Verify OTP</button>\n\t\t  <button mat-flat-button color=\"primary\" class=\"btn btn-primary btn-block\" (click)=\"togglePhoneSignIn()\">Cancel</button> -->\n\t\t<form [formGroup]=\"form\">\n\t\t\t\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input type=\"text\" matInput placeholder=\"Phone number\" maxlength=\"10\" formControlName=\"phoneNumber\">\n\t\t\t</mat-form-field>\n\t\t\t<div id=\"recaptcha-container\"></div>\n\t\t\t<div class=\"button\">\n\t\t\t\t<button  class=\"btn btn-primary btn-block\"\n\t\t\t[disabled]=\"disableOTPSendButton\"\n\t\t\t(click)=\"sendOTP()\" mat-flat-button color=\"primary\" color=\"primary\">Send OTP</button>\n\t\t\t</div>\n            <mat-form-field>\n\t\t\t\t\t<input type=\"text\" matInput placeholder=\"Enter OTP\" maxlength=\"6\" formControlName=\"otp\">\n            </mat-form-field>\n\t\t\n\t\t\t<p *ngIf=\"error\" class=\"error\">\n\t\t\t\t{{ error }}\n\t\t\t</p>\n\t\t\t<div class=\"button\">\n\t\t\t\t<button mat-flat-button color=\"primary\" class=\"btn btn-primary btn-block\" (click)=\"verifyOTP()\">Sign in</button>\n\t\t\t\t\n\t\t\t</div>\n\t\t\t\n\t\t</form>\n\t</mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/questions/questions.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/questions/questions.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n  <mat-card style=\"text-align: center;\">\n  <mat-card-title>Exam</mat-card-title>\n<div class=\"row\">\n  <div class=\"col-sm-4\">Time: 00:00:00</div>\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">Question 1/1</div>\n  <!-- <div class=\"float-left\"></div>\n  <div class=\"float-right\"></div> -->\n</div>\n  <!-- <mat-card-content> -->\n    \n  <!--</mat-card-content>  -->\n  <!-- <mat-card-content></mat-card-content> -->\n  \n  <!-- <mat-card-content>\n    \n  </mat-card-content> -->\n  \n\t<mat-card-content>\n\t\t<form [formGroup]=\"form\" (ngSubmit)=\"submit()\" autocomplete=\"off\">\n      <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\" >\n        <div class=\"imgrow\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n          <div class=\"imgcolumn\">\n            <img mat-card-image width=\"innerWidth\" class =\"ansimg\" src=\"assets/images/Q1.png\"  alt=\"A\">\n          </div>\n          <div class=\"imgcolumn\">\n            <img mat-card-image width=\"innerWidth\" class =\"ansimg\" src=\"assets/images/Q1.1.png\"  alt=\"A\">\n          </div>\n        </div>\n    \n        <div class=\"imgrow\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n          <div class=\"answercolumn\">\n            <mat-radio-button value=\"a\" class=\"float-left\">A</mat-radio-button><img  class =\"ansimg\" mat-card-image src=\"assets/images/a.png\" \n                alt=\"A\">\n          </div>\n          <div class=\"answercolumn\">\n            <mat-radio-button value=\"b\" class=\"float-left\">B</mat-radio-button><img class =\"ansimg\" mat-card-image src=\"assets/images/b.png\"    \n                alt=\"A\">\n          </div>\n        </div>\n        <div class=\"imgrow\">\n          <div class=\"answercolumn\">\n            <mat-radio-button value=\"c\" class=\"float-left\">C</mat-radio-button><img class =\"ansimg\" mat-card-image src=\"assets/images/c.png\" \n                alt=\"A\">\n          </div>\n          <div class=\"answercolumn\">\n            <mat-radio-button value=\"d\" class=\"float-left\">D</mat-radio-button><img class =\"ansimg\" mat-card-image src=\"assets/images/d.png\" \n                alt=\"A\">\n          </div>\n        </div>\n    \n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-4 margin-auto center\" style=\"margin-top: 10px;\">\n          <button mat-flat-button color=\"warn\" class=\"btn btn-primary btn-block\" type=\"submit\" mat-button>Previous</button>\n        </div>\n        <div class=\"col-sm-4 margin-auto center\" style=\"margin-top: 10px;\">\n          <button mat-flat-button color=\"primary\" class=\"btn btn-primary btn-block\" type=\"submit\" mat-button>Submit</button>\n        </div>\n        <div class=\"col-sm-4 margin-auto center\" style=\"margin-top: 10px;\">\n          <button mat-flat-button color=\"warn\" class=\"btn btn-primary btn-block\" type=\"submit\" mat-button>Next</button>\n        </div>\n      </div>\n\t\t\t<!-- <div class=\"button\">\n        <button mat-flat-button color=\"primary\" class=\"btn btn-primary btn-block float-left\" type=\"submit\" mat-button>Submit</button>\n\t\t\t\t<button mat-flat-button color=\"primary\" class=\"btn btn-primary btn-block float-right\" type=\"submit\" mat-button>Submit</button>\n      </div> -->\n      \n\t\t</form>\n  </mat-card-content>\n  \n</mat-card>\n<mat-card style=\"text-align: center;\"><mat-card-content>\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-around center\" >\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n  <button style=\"margin-left: 5px; margin-bottom: 5px;\"  class=\"btn btn-primary btn-circle btn-sm\">1</button>\n  <button  style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">2</button>\n  <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">3</button>\n  <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">4</button>\n  <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">5</button>\n  <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">6</button>\n  <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">7</button>\n  <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">8</button>\n  <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">9</button>\n  <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">10</button>\n  <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">11</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">12</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">13</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">14</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">15</button>\n  </div>\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">16</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">17</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">18</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">19</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">20</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">21</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">22</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">23</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">24</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">25</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">26</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">27</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">28</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">29</button>\n    <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">30</button>\n    </div>\n    \n    <!-- <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n      <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">31</button>\n      <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">32</button>\n      <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">33</button>\n      <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">34</button>\n      <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">35</button>\n      <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">36</button>\n      <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">37</button>\n      <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">38</button>\n      <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">39</button>\n      <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">40</button>\n      <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">41</button>\n      <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">42</button>\n      <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">43</button>\n      <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">44</button>\n      <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">45</button>\n      </div>\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n        <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">46</button>\n        <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">47</button>\n        <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">48</button>\n        <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">49</button>\n        <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">50</button>\n        <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">51</button>\n        <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">52</button>\n        <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">53</button>\n        <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">54</button>\n        <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">55</button>\n        <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">56</button>\n        <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">57</button>\n        <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">58</button>\n        <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">59</button>\n        <button style=\"margin-left: 5px; margin-bottom: 5px;\" class=\"btn btn-primary btn-circle btn-sm\">60</button>\n        </div> -->\n  </div>\n</mat-card-content></mat-card>\n</div>\n<!-- <div class=\"container\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\"> -->\n  \n  <!-- </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/result/result.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/result/result.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card style=\"text-align: center;\">\n\t<mat-card-title></mat-card-title>\n\t<mat-card-content>\n\t\t\t\n     <h2>Your test has been completed.</h2>\n\t</mat-card-content>\n</mat-card>\n");

/***/ }),

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

/***/ "./src/app/app-firebase/app-firebase.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/app-firebase/app-firebase.module.ts ***!
  \*****************************************************/
/*! exports provided: AppFirebaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFirebaseModule", function() { return AppFirebaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");





var AppFirebaseModule = /** @class */ (function () {
    function AppFirebaseModule() {
    }
    AppFirebaseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"]
            ],
            exports: [
                angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"]
            ]
        })
    ], AppFirebaseModule);
    return AppFirebaseModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instructions/instructions.component */ "./src/app/instructions/instructions.component.ts");
/* harmony import */ var _quiz_questions_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz/questions/questions.component */ "./src/app/quiz/questions/questions.component.ts");
/* harmony import */ var _quiz_result_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz/result/result.component */ "./src/app/quiz/result/result.component.ts");







/* import { StudentsComponent } from './students/students.component';
import { AddQuestionComponent} from './add-question/add-question.component'; */
var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'instructions', component: _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_4__["InstructionsComponent"] },
    { path: 'test', component: _quiz_questions_questions_component__WEBPACK_IMPORTED_MODULE_5__["QuestionsComponent"] },
    { path: 'complete', component: _quiz_result_result_component__WEBPACK_IMPORTED_MODULE_6__["ResultComponent"] },
    { path: 'admin', loadChildren: function () { return __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "./src/app/admin/admin.module.ts")).then(function (m) { return m.AdminModule; }); } },
    /* { path: 'students', component: StudentsComponent },
    { path: 'add-question', component: AddQuestionComponent }, */
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _app_firebase_app_firebase_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-firebase/app-firebase.module */ "./src/app/app-firebase/app-firebase.module.ts");
/* harmony import */ var _common_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/auth/auth.service */ "./src/app/common/auth/auth.service.ts");
/* harmony import */ var _common_window_window_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/window/window.service */ "./src/app/common/window/window.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./instructions/instructions.component */ "./src/app/instructions/instructions.component.ts");
/* harmony import */ var _quiz_questions_questions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./quiz/questions/questions.component */ "./src/app/quiz/questions/questions.component.ts");
/* harmony import */ var _quiz_result_result_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./quiz/result/result.component */ "./src/app/quiz/result/result.component.ts");

















/*import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StudentsComponent } from './students/students.component';
import { AddQuestionComponent } from './add-question/add-question.component'; */
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__["QuizComponent"],
                _instructions_instructions_component__WEBPACK_IMPORTED_MODULE_14__["InstructionsComponent"],
                _quiz_questions_questions_component__WEBPACK_IMPORTED_MODULE_15__["QuestionsComponent"],
                _quiz_result_result_component__WEBPACK_IMPORTED_MODULE_16__["ResultComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["NoopAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_firebase_app_firebase_module__WEBPACK_IMPORTED_MODULE_5__["AppFirebaseModule"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            providers: [_common_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                _common_window_window_service__WEBPACK_IMPORTED_MODULE_7__["WindowService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/common/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, http, router) {
        this.afAuth = afAuth;
        this.http = http;
        this.router = router;
        this.signInMode = false;
        this.phoneSignIn = false;
    }
    AuthService.prototype.verifyPhone = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].verifyPhone;
        return this.http
            .post(this.apiUrl, data, httpOptions);
    };
    AuthService.prototype.getProviderInstance = function (provider) {
        var providerInstance;
        switch (provider) {
            /* case environment.providers.GOOGLE:
              providerInstance = new auth.GoogleAuthProvider();
              break;
            case environment.providers.FACEBOOK:
              providerInstance = new auth.FacebookAuthProvider();
              break;
            case environment.providers.TWITTER:
              providerInstance = new auth.TwitterAuthProvider();
              break;
            case environment.providers.GITHUB:
              providerInstance = new auth.GithubAuthProvider();
              break; */
            default:
                providerInstance = new firebase__WEBPACK_IMPORTED_MODULE_6__["auth"].GoogleAuthProvider();
                break;
        }
        return providerInstance;
    };
    /*
      signIn(mode: string, provider: string) {
        mode === environment.modes.POPUP ? this.afAuth.auth.signInWithPopup(this.getProviderInstance(provider))
          : this.afAuth.auth.signInWithRedirect(this.getProviderInstance(provider));
      } */
    AuthService.prototype.signInOrSignUp = function (email, password) {
        this.signInMode ? this.afAuth.auth.signInWithEmailAndPassword(email, password)
            : this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signInAnonymously = function () {
        this.afAuth.auth.signInAnonymously();
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService.ctorParameters = function () { return [
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/common/window/window.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common/window/window.service.ts ***!
  \*************************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "windowRef", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    WindowService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WindowService);
    return WindowService;
}());



/***/ }),

/***/ "./src/app/instructions/instructions.component.css":
/*!*********************************************************!*\
  !*** ./src/app/instructions/instructions.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    display: flex;\n    justify-content: center;\n    margin: 100px 0px;\n  }\n  \n  .mat-form-field {\n    width: 100%;\n    min-width: 300px;\n  }\n  \n  mat-card-title,\n  mat-card-content {\n    display: flex;\n    justify-content: center;\n  }\n  \n  .error {\n    padding: 16px;\n    width: 300px;\n    color: white;\n    background-color: red;\n  }\n  \n  .button {\n    display: flex;\n    justify-content: flex-end;\n  }\n  \n  .container{\n    background: white;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n  }\n  \n  .container {\n\tmax-width: 90%;\n}\n  \n  .btn-submit-contact {\n    width: 33% !important; \n}\n  \n  .span-error{\n    color: #FF0000;\n    font-size: 14px;\n}\n  \n  .center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n  \n  /* \nMax width before this PARTICULAR table gets nasty\nThis query will take effect for any screen smaller than 760px\nand also iPads specifically.\n*/\n  \n  @media \nonly screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px)  {\n    \n    .btn-submit-contact {\n        width: 100%;\n        margin-left: 0px;\n        margin-bottom: 2%;\n    }\n\t\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zdHJ1Y3Rpb25zL2luc3RydWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBOztJQUVFLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztFQUVBO0NBQ0QsY0FBYztBQUNmOztFQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztFQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0VBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0VBRUE7Ozs7Q0FJQzs7RUFDRDs7O0lBSUk7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2luc3RydWN0aW9ucy9pbnN0cnVjdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMTAwcHggMHB4O1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gIH1cbiAgXG4gIG1hdC1jYXJkLXRpdGxlLFxuICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuZXJyb3Ige1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cbiAgXG4gIC5idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gIC5jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuXHRtYXgtd2lkdGg6IDkwJTtcbn1cblxuLmJ0bi1zdWJtaXQtY29udGFjdCB7XG4gICAgd2lkdGg6IDMzJSAhaW1wb3J0YW50OyBcbn1cbi5zcGFuLWVycm9ye1xuICAgIGNvbG9yOiAjRkYwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cblxuLyogXG5NYXggd2lkdGggYmVmb3JlIHRoaXMgUEFSVElDVUxBUiB0YWJsZSBnZXRzIG5hc3R5XG5UaGlzIHF1ZXJ5IHdpbGwgdGFrZSBlZmZlY3QgZm9yIGFueSBzY3JlZW4gc21hbGxlciB0aGFuIDc2MHB4XG5hbmQgYWxzbyBpUGFkcyBzcGVjaWZpY2FsbHkuXG4qL1xuQG1lZGlhIFxub25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSxcbihtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpICB7XG4gICAgXG4gICAgLmJ0bi1zdWJtaXQtY29udGFjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICB9XG5cdFxufSJdfQ== */");

/***/ }),

/***/ "./src/app/instructions/instructions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/instructions/instructions.component.ts ***!
  \********************************************************/
/*! exports provided: InstructionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsComponent", function() { return InstructionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");




var InstructionsComponent = /** @class */ (function () {
    function InstructionsComponent(_router) {
        this._router = _router;
        this.checked = false;
        this.chooseoption = true;
        this.chooseInsructions = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            checked: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
        });
    }
    InstructionsComponent.prototype.ngOnInit = function () {
    };
    InstructionsComponent.prototype.submitInstructions = function () {
        this.chooseoption = false;
        this.chooseInsructions = true;
    };
    InstructionsComponent.prototype.submit = function () {
        this._router.navigate(["/test"]);
    };
    InstructionsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    InstructionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-instructions',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./instructions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/instructions/instructions.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./instructions.component.css */ "./src/app/instructions/instructions.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InstructionsComponent);
    return InstructionsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    display: flex;\n    justify-content: center;\n    margin: 100px 0px;\n  }\n  \n  .mat-form-field {\n    width: 100%;\n    min-width: 300px;\n  }\n  \n  mat-card-title,\n  mat-card-content {\n    display: flex;\n    justify-content: center;\n  }\n  \n  .error {\n    padding: 16px;\n    width: 300px;\n    color: white;\n    background-color: red;\n  }\n  \n  .button {\n    display: flex;\n    justify-content: flex-end;\n  }\n  \n  .img-div{\n    margin: 0px auto !important;\n    padding-top: 2%;\n    /* background-color: #fff; */\n    width:100%\n}\n  \n  img {\n    max-width: 100%;\n    max-height: 100%;\n}\n  \n  .portrait {\n    height: 80px;\n    width: 150px;\n}\n  \n  .landscape {\n    height: 100px;\n    width: 300px;\n}\n  \n  .square {\n    height: 75px;\n    width: 75px;\n}\n  \n  .container {\n\tmax-width: 90%;\n}\n  \n  .btn-submit-contact {\n    width: 33% !important; \n}\n  \n  .span-error{\n    color: #FF0000;\n    font-size: 14px;\n}\n  \n  .center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n  \n  /* \nMax width before this PARTICULAR table gets nasty\nThis query will take effect for any screen smaller than 760px\nand also iPads specifically.\n*/\n  \n  @media \nonly screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px)  {\n    \n    .btn-submit-contact {\n        width: 100%;\n        margin-left: 0px;\n        margin-bottom: 2%;\n    }\n\t\n}\n  \n  /* Create four equal columns that sits next to each other */\n  \n  .imgcolumn {\n  flex: 100%;\n  max-width: 100%;\n  padding: 0 4px;\n  margin: 0 auto;\n}\n  \n  .answercolumn {\n  flex: 100%;\n  max-width: 50%;\n  padding: 0 4px;\n  margin: 0 auto;\n}\n  \n  .imgcolumn img {\n  margin-top: 8px;\n  vertical-align: middle;\n  width: 100%;\n}\n  \n  .ansimg {\n  display: block;\n  max-width:230px;\n  max-height:95px;\n  width: auto;\n  height: auto;\n}\n  \n  .questimg {\n  display: block;\n  max-width:230px;\n  max-height:95px;\n  width: auto;\n  height: auto;\n}\n  \n  .btn-circle.btn-sm { \n  width: 30px; \n  height: 30px; \n  padding: 6px 0px; \n  border-radius: 15px; \n  font-size: 8px; \n  text-align: center; \n}\n  \n  /* Responsive layout - makes a two column-layout instead of four columns */\n  \n  @media screen and (max-width: 800px) {\n  .imgcolumn {\n    flex: 50%;\n    max-width: 50%;\n  }\n  .answercolumn {\n    flex: 50%;\n    max-width: 50%;\n  }\n}\n  \n  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n  \n  @media screen and (max-width: 600px) {\n  .imgcolumn {\n    flex: 100%;\n    max-width: 100%;\n  }\n  .answercolumn {\n    flex: 100%;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTs7SUFFRSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCO0FBQ0o7O0VBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztFQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0VBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7RUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0VBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0VBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0VBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7RUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7RUFFQTs7OztDQUlDOztFQUNEOzs7SUFJSTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztBQUVKOztFQUVBLDJEQUEyRDs7RUFDM0Q7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztFQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7RUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztFQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7RUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0VBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7RUFFQSwwRUFBMEU7O0VBQzFFO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsY0FBYztFQUNoQjtFQUNBO0lBQ0UsU0FBUztJQUNULGNBQWM7RUFDaEI7QUFDRjs7RUFFQSx1R0FBdUc7O0VBQ3ZHO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwMHB4IDBweDtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG4gIFxuICBtYXQtY2FyZC10aXRsZSxcbiAgbWF0LWNhcmQtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmVycm9yIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG4gIFxuICAuYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cblxuICAuaW1nLWRpdntcbiAgICBtYXJnaW46IDBweCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXG4gICAgd2lkdGg6MTAwJVxufVxuXG5pbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4ucG9ydHJhaXQge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTUwcHg7XG59XG5cbi5sYW5kc2NhcGUge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG4uc3F1YXJlIHtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG59XG5cbi5jb250YWluZXIge1xuXHRtYXgtd2lkdGg6IDkwJTtcbn1cblxuLmJ0bi1zdWJtaXQtY29udGFjdCB7XG4gICAgd2lkdGg6IDMzJSAhaW1wb3J0YW50OyBcbn1cbi5zcGFuLWVycm9ye1xuICAgIGNvbG9yOiAjRkYwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cblxuLyogXG5NYXggd2lkdGggYmVmb3JlIHRoaXMgUEFSVElDVUxBUiB0YWJsZSBnZXRzIG5hc3R5XG5UaGlzIHF1ZXJ5IHdpbGwgdGFrZSBlZmZlY3QgZm9yIGFueSBzY3JlZW4gc21hbGxlciB0aGFuIDc2MHB4XG5hbmQgYWxzbyBpUGFkcyBzcGVjaWZpY2FsbHkuXG4qL1xuQG1lZGlhIFxub25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSxcbihtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpICB7XG4gICAgXG4gICAgLmJ0bi1zdWJtaXQtY29udGFjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICB9XG5cdFxufVxuXG4vKiBDcmVhdGUgZm91ciBlcXVhbCBjb2x1bW5zIHRoYXQgc2l0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbi5pbWdjb2x1bW4ge1xuICBmbGV4OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFuc3dlcmNvbHVtbiB7XG4gIGZsZXg6IDEwMCU7XG4gIG1heC13aWR0aDogNTAlO1xuICBwYWRkaW5nOiAwIDRweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pbWdjb2x1bW4gaW1nIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFuc2ltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6MjMwcHg7XG4gIG1heC1oZWlnaHQ6OTVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnF1ZXN0aW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDoyMzBweDtcbiAgbWF4LWhlaWdodDo5NXB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYnRuLWNpcmNsZS5idG4tc20geyBcbiAgd2lkdGg6IDMwcHg7IFxuICBoZWlnaHQ6IDMwcHg7IFxuICBwYWRkaW5nOiA2cHggMHB4OyBcbiAgYm9yZGVyLXJhZGl1czogMTVweDsgXG4gIGZvbnQtc2l6ZTogOHB4OyBcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn0gXG5cbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gbWFrZXMgYSB0d28gY29sdW1uLWxheW91dCBpbnN0ZWFkIG9mIGZvdXIgY29sdW1ucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmltZ2NvbHVtbiB7XG4gICAgZmxleDogNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG4gIC5hbnN3ZXJjb2x1bW4ge1xuICAgIGZsZXg6IDUwJTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxufVxuXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIG1ha2VzIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmltZ2NvbHVtbiB7XG4gICAgZmxleDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmFuc3dlcmNvbHVtbiB7XG4gICAgZmxleDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/auth/auth.service */ "./src/app/common/auth/auth.service.ts");
/* harmony import */ var _common_window_window_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/window/window.service */ "./src/app/common/window/window.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");


//import { NgxUiLoaderService } from 'ngx-ui-loader';






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, fb, afAuth, authService, windowService) {
        this._router = _router;
        this.fb = fb;
        this.afAuth = afAuth;
        this.authService = authService;
        this.windowService = windowService;
        this.disableOTPSendButton = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](""),
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("")
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.windowRef = this.windowService.windowRef;
    };
    Object.defineProperty(LoginComponent.prototype, "formControls", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.windowRef.recaptchaVerifier = new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].RecaptchaVerifier('recaptcha-container', {
            'size': 'normal',
            'callback': function (response) {
                _this.disableOTPSendButton = false;
            }
        });
        this.windowRef.recaptchaVerifier.render();
    };
    LoginComponent.prototype.sendOTP = function () {
        var phoneData = {
            phone: this.form.value.phoneNumber,
        };
        this.authService.verifyPhone(phoneData)
            .subscribe(function (response) {
            console.log(response);
        });
        /* this.phoneNumber = '+91' + this.form.value.phoneNumber;
        this.afAuth.auth.signInWithPhoneNumber(this.phoneNumber, this.windowRef.recaptchaVerifier).then((confirmationResult) => {
          this.windowRef.confirmationResult = confirmationResult;
        }); */
    };
    LoginComponent.prototype.verifyOTP = function () {
        this.windowRef.confirmationResult.confirm(this.form.value.otp)
            .then(function (userCredentials) { return console.log(userCredentials); }, this._router.navigate(["/instructions"]));
    };
    LoginComponent.prototype.togglePhoneSignIn = function () {
        this.authService.phoneSignIn = !this.authService.phoneSignIn;
    };
    LoginComponent.prototype.submit = function () {
        if (this.form.value.phoneNumber == '9999999999') {
            this._router.navigate(["/admin"]);
        }
        else {
            this._router.navigate(["/instructions"]);
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _common_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _common_window_window_service__WEBPACK_IMPORTED_MODULE_5__["WindowService"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _common_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _common_window_window_service__WEBPACK_IMPORTED_MODULE_5__["WindowService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/material.es5.js");









var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/quiz/questions/questions.component.css":
/*!********************************************************!*\
  !*** ./src/app/quiz/questions/questions.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    display: flex;\n    justify-content: center;\n    margin: 100px 0px;\n  }\n  \n  .mat-form-field {\n    width: 100%;\n    min-width: 300px;\n  }\n  \n  mat-card-title,\n  mat-card-content {\n    display: flex;\n    justify-content: center;\n  }\n  \n  .error {\n    padding: 16px;\n    width: 300px;\n    color: white;\n    background-color: red;\n  }\n  \n  .button {\n    display: flex;\n    justify-content: flex-end;\n  }\n  \n  .container{\n    background: white;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n  }\n  \n  .container {\n\tmax-width: 90%;\n}\n  \n  .btn-submit-contact {\n    width: 33% !important; \n}\n  \n  .span-error{\n    color: #FF0000;\n    font-size: 14px;\n}\n  \n  .center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n  \n  /* \nMax width before this PARTICULAR table gets nasty\nThis query will take effect for any screen smaller than 760px\nand also iPads specifically.\n*/\n  \n  @media \nonly screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px)  {\n    \n    .btn-submit-contact {\n        width: 100%;\n        margin-left: 0px;\n        margin-bottom: 2%;\n    }\n\t\n}\n  \n  .imgrow {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 4px;\n}\n  \n  /* Create four equal columns that sits next to each other */\n  \n  .imgcolumn {\n  flex: 100%;\n  max-width: 100%;\n  padding: 0 4px;\n  margin: 0 auto;\n}\n  \n  .answercolumn {\n  flex: 100%;\n  max-width: 50%;\n  padding: 0 4px;\n  margin: 0 auto;\n}\n  \n  .imgcolumn img {\n  margin-top: 8px;\n  vertical-align: middle;\n  width: 100%;\n}\n  \n  .ansimg {\n  display: block;\n  max-width:230px;\n  max-height:95px;\n  width: auto;\n  height: auto;\n}\n  \n  .questimg {\n  display: block;\n  max-width:230px;\n  max-height:95px;\n  width: auto;\n  height: auto;\n}\n  \n  .btn-circle.btn-sm { \n  width: 30px; \n  height: 30px; \n  padding: 6px 0px; \n  border-radius: 15px; \n  font-size: 8px; \n  text-align: center; \n}\n  \n  /* Responsive layout - makes a two column-layout instead of four columns */\n  \n  @media screen and (max-width: 800px) {\n  .imgcolumn {\n    flex: 50%;\n    max-width: 50%;\n  }\n  .answercolumn {\n    flex: 50%;\n    max-width: 50%;\n  }\n}\n  \n  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n  \n  @media screen and (max-width: 600px) {\n  .imgcolumn {\n    flex: 100%;\n    max-width: 100%;\n  }\n  .answercolumn {\n    flex: 100%;\n    max-width: 100%;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7O0VBRUE7Q0FDRCxjQUFjO0FBQ2Y7O0VBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0VBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7RUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7RUFFQTs7OztDQUlDOztFQUNEOzs7SUFJSTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCOztBQUVKOztFQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztFQUVBLDJEQUEyRDs7RUFDM0Q7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztFQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7RUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztFQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7RUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0VBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7RUFFQSwwRUFBMEU7O0VBQzFFO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsY0FBYztFQUNoQjtFQUNBO0lBQ0UsU0FBUztJQUNULGNBQWM7RUFDaEI7QUFDRjs7RUFFQSx1R0FBdUc7O0VBQ3ZHO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMDBweCAwcHg7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxuICBcbiAgbWF0LWNhcmQtdGl0bGUsXG4gIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5lcnJvciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxuICBcbiAgLmJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgLmNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG5cdG1heC13aWR0aDogOTAlO1xufVxuXG4uYnRuLXN1Ym1pdC1jb250YWN0IHtcbiAgICB3aWR0aDogMzMlICFpbXBvcnRhbnQ7IFxufVxuLnNwYW4tZXJyb3J7XG4gICAgY29sb3I6ICNGRjAwMDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuXG4vKiBcbk1heCB3aWR0aCBiZWZvcmUgdGhpcyBQQVJUSUNVTEFSIHRhYmxlIGdldHMgbmFzdHlcblRoaXMgcXVlcnkgd2lsbCB0YWtlIGVmZmVjdCBmb3IgYW55IHNjcmVlbiBzbWFsbGVyIHRoYW4gNzYwcHhcbmFuZCBhbHNvIGlQYWRzIHNwZWNpZmljYWxseS5cbiovXG5AbWVkaWEgXG5vbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLFxuKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgIHtcbiAgICBcbiAgICAuYnRuLXN1Ym1pdC1jb250YWN0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIH1cblx0XG59XG5cbi5pbWdyb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDAgNHB4O1xufVxuXG4vKiBDcmVhdGUgZm91ciBlcXVhbCBjb2x1bW5zIHRoYXQgc2l0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbi5pbWdjb2x1bW4ge1xuICBmbGV4OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgNHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFuc3dlcmNvbHVtbiB7XG4gIGZsZXg6IDEwMCU7XG4gIG1heC13aWR0aDogNTAlO1xuICBwYWRkaW5nOiAwIDRweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pbWdjb2x1bW4gaW1nIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFuc2ltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6MjMwcHg7XG4gIG1heC1oZWlnaHQ6OTVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnF1ZXN0aW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDoyMzBweDtcbiAgbWF4LWhlaWdodDo5NXB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYnRuLWNpcmNsZS5idG4tc20geyBcbiAgd2lkdGg6IDMwcHg7IFxuICBoZWlnaHQ6IDMwcHg7IFxuICBwYWRkaW5nOiA2cHggMHB4OyBcbiAgYm9yZGVyLXJhZGl1czogMTVweDsgXG4gIGZvbnQtc2l6ZTogOHB4OyBcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn0gXG5cbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gbWFrZXMgYSB0d28gY29sdW1uLWxheW91dCBpbnN0ZWFkIG9mIGZvdXIgY29sdW1ucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmltZ2NvbHVtbiB7XG4gICAgZmxleDogNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG4gIC5hbnN3ZXJjb2x1bW4ge1xuICAgIGZsZXg6IDUwJTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxufVxuXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIG1ha2VzIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmltZ2NvbHVtbiB7XG4gICAgZmxleDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmFuc3dlcmNvbHVtbiB7XG4gICAgZmxleDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/quiz/questions/questions.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/quiz/questions/questions.component.ts ***!
  \*******************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");




var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(_router) {
        this._router = _router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
    };
    QuestionsComponent.prototype.submit = function () {
        this._router.navigate(["/complete"]);
    };
    QuestionsComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
    };
    QuestionsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], QuestionsComponent.prototype, "onResize", null);
    QuestionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./questions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/questions/questions.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./questions.component.css */ "./src/app/quiz/questions/questions.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var QuizComponent = /** @class */ (function () {
    function QuizComponent() {
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/quiz.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/quiz/result/result.component.css":
/*!**************************************************!*\
  !*** ./src/app/quiz/result/result.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/quiz/result/result.component.ts":
/*!*************************************************!*\
  !*** ./src/app/quiz/result/result.component.ts ***!
  \*************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
    }
    ResultComponent.prototype.ngOnInit = function () {
    };
    ResultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/result/result.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./result.component.css */ "./src/app/quiz/result/result.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ResultComponent);
    return ResultComponent;
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
    firebase: {
        apiKey: 'AIzaSyA0jR0D91AdSCdS4RpmbtHNiugOOlRyt9g',
        authDomain: 'http://lucky-nature-110604.firebaseapp.com/',
        databaseURL: 'https://lucky-nature-110604.firebaseio.com/',
        projectId: 'lucky-nature-110604',
        storageBucket: 'http://lucky-nature-110604.appspot.com/',
        messagingSenderId: '370705515329'
    },
    verifyPhone: 'http://test.aayaa.in/aras/numberCheck',
    login: 'http://test.aayaa.in/aras/loginResult',
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map