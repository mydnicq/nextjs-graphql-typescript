webpackHotUpdate("static/development/pages/users/addUser.js",{

/***/ "./components/forms/users/addUserForm.tsx":
/*!************************************************!*\
  !*** ./components/forms/users/addUserForm.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (_ref) {
  var form = _ref.form;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: form.onSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: form.$("name").id
  }, form.$("name").label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", form.$("name").bind()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, form.$("name").error), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    onClick: form.onSubmit
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: form.onClear
  }, "Clear"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: form.onReset
  }, "Reset"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, form.error));
}));

/***/ })

})
//# sourceMappingURL=addUser.js.21d261ac4ca51edea635.hot-update.js.map