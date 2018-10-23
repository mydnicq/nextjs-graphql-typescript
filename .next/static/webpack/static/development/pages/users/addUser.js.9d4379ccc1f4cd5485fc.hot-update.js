webpackHotUpdate("static/development/pages/users/addUser.js",{

/***/ "./components/forms/users/addUserForm.tsx":
false,

/***/ "./components/forms/users/addUserFormSetup.ts":
false,

/***/ "./forms/users/addUserForm.tsx":
/*!*************************************!*\
  !*** ./forms/users/addUserForm.tsx ***!
  \*************************************/
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

/***/ }),

/***/ "./forms/users/addUserFormSetup.ts":
/*!*****************************************!*\
  !*** ./forms/users/addUserFormSetup.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddUserForm; });
/* harmony import */ var mobx_react_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx-react-form */ "./node_modules/mobx-react-form/lib/index.js");
/* harmony import */ var mobx_react_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx_react_form__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validatorjs */ "./node_modules/validatorjs/src/validator.js");
/* harmony import */ var validatorjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validatorjs__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var AddUserForm =
/*#__PURE__*/
function (_Form) {
  _inherits(AddUserForm, _Form);

  function AddUserForm() {
    _classCallCheck(this, AddUserForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddUserForm).apply(this, arguments));
  }

  _createClass(AddUserForm, [{
    key: "plugins",

    /*
        Below we are returning a `plugins` object using the `validatorjs` package
        to enable `DVR` functionalities (Declarative Validation Rules).
      */
    value: function plugins() {
      return {
        dvr: validatorjs__WEBPACK_IMPORTED_MODULE_1___default.a
      };
    }
    /*
        Return the `fields` as a collection into the `setup()` method
        with a `rules` property for the validation.
      */

  }, {
    key: "setup",
    value: function setup() {
      return {
        fields: [{
          name: "name",
          label: "Name",
          placeholder: "Insert Name",
          rules: "required|string|between:5,25"
        }]
      };
    }
    /*
        Event Hooks
      */

  }, {
    key: "hooks",
    value: function hooks() {
      return {
        /*
            Success Validation Hook
          */
        onSuccess: function onSuccess(form) {
          this.mutation({
            variables: {
              data: _objectSpread({}, form.values())
            }
          });
          console.log("Form Values!", form.values());
        },

        /*
            Error Validation Hook
          */
        onError: function onError(form) {
          // get all form errors
          console.log("All form errors", form.errors());
        }
      };
    }
  }]);

  return AddUserForm;
}(mobx_react_form__WEBPACK_IMPORTED_MODULE_0__["Form"]);



/***/ }),

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
//# sourceMappingURL=addUser.js.9d4379ccc1f4cd5485fc.hot-update.js.map