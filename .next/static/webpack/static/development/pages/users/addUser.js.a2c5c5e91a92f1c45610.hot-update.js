webpackHotUpdate("static/development/pages/users/addUser.js",{

/***/ "./pages/users/addUser.tsx":
/*!*********************************!*\
  !*** ./pages/users/addUser.tsx ***!
  \*********************************/
/*! exports provided: addUserMutation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUserMutation", function() { return addUserMutation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/App */ "./components/App.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var _forms_users_addUserForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../forms/users/addUserForm */ "./forms/users/addUserForm.tsx");
/* harmony import */ var _forms_users_addUserFormSetup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/users/addUserFormSetup */ "./forms/users/addUserFormSetup.ts");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_6__);


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation createUser($data: UserCreateInput!) {\n    createUser(data: $data) {\n      id\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var addUserMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
var form = new _forms_users_addUserFormSetup__WEBPACK_IMPORTED_MODULE_4__["default"]();
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_6__["Mutation"], {
    mutation: addUserMutation
  }, function (createUser, _ref) {
    var data = _ref.data;
    console.log(data);
    form.mutation = createUser;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_users_addUserForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      form: form
    });
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/users/addUser")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=addUser.js.a2c5c5e91a92f1c45610.hot-update.js.map