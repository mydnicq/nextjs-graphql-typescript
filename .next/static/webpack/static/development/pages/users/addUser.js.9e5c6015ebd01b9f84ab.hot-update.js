webpackHotUpdate("static/development/pages/users/addUser.js",{

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



/***/ })

})
//# sourceMappingURL=addUser.js.9e5c6015ebd01b9f84ab.hot-update.js.map