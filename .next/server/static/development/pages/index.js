module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.tsx":
/*!****************************!*\
  !*** ./components/App.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-664422056"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "664422056",
    css: "*{font-family:Menlo,Monaco,\"Lucida Console\",\"Liberation Mono\", \"DejaVu Sans Mono\",\"Bitstream Vera Sans Mono\",\"Courier New\", monospace,serif;}body{margin:0;padding:25px 50px;}a{color:#22bad9;}p{font-size:14px;line-height:24px;}article{margin:0 auto;max-width:650px;}button{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#22bad9;border:0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px 7px;}button:active{background-color:#1b9db7;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;}button:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWRlanN0YW5pYy9Xb3JrL1N0dWR5L3dpdGgtdHMtbm9kZS1hcHAvY29tcG9uZW50cy9BcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUV1QixBQUsyQixBQUdULEFBSUssQUFHQyxBQUlELEFBSUssQUFRTSxBQUlaLFNBMUJLLElBMkJwQixDQXZCQSxBQU9rQixDQUpDLFVBZ0JnQixFQXRCbkMsR0FXQSxFQUpBLDZEQU8yQixNQVMzQixtQkFSVyxTQUNHLFdBcEJkLENBcUJlLDBFQUNHLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvdGFkZWpzdGFuaWMvV29yay9TdHVkeS93aXRoLXRzLW5vZGUtYXBwL2NvbXBvbmVudHMvQXBwLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+ICg8bWFpbj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgXCJMdWNpZGEgQ29uc29sZVwiLCBcIkxpYmVyYXRpb24gTW9ub1wiLFxuICAgICAgICAgIFwiRGVqYVZ1IFNhbnMgTW9ub1wiLCBcIkJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsXG4gICAgICAgICAgbW9ub3NwYWNlLCBzZXJpZjtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggNTBweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzIyYmFkOTtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgfVxuICAgICAgYXJ0aWNsZSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgICAgfVxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyYmFkOTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDVweCA3cHg7XG4gICAgICB9XG4gICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiOWRiNztcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICAgICAgfVxuICAgICAgYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbWFpbj4pO1xuIl19 */\n/*@ sourceURL=/Users/tadejstanic/Work/Study/with-ts-node-app/components/App.tsx */"
  }));
});

/***/ }),

/***/ "./components/ChangeStatusBtn.tsx":
/*!****************************************!*\
  !*** ./components/ChangeStatusBtn.tsx ***!
  \****************************************/
/*! exports provided: changeStatusMutation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeStatusMutation", function() { return changeStatusMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeStatusBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation updateNetworkStatus($isConnected: Boolean!) {\n    updateNetworkStatus(isConnected: $isConnected) @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var changeStatusMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
function ChangeStatusBtn(_ref) {
  var status = _ref.status;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: changeStatusMutation
  }, function (updateNetworkStatus) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: function onClick() {
        return updateNetworkStatus({
          variables: {
            isConnected: !status
          }
        });
      }
    }, "Change status");
  });
}

/***/ }),

/***/ "./components/ErrorMessage.tsx":
/*!*************************************!*\
  !*** ./components/ErrorMessage.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.message);
});

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle
  }, "Users")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/courses"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle
  }, "Courses")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/UserList.tsx":
/*!*********************************!*\
  !*** ./components/UserList.tsx ***!
  \*********************************/
/*! exports provided: allUserQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allUserQuery", function() { return allUserQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserList; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.tsx");
/* harmony import */ var _ChangeStatusBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChangeStatusBtn */ "./components/ChangeStatusBtn.tsx");



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query getAllUsers {\n    getAllUsers {\n      id\n      name\n      courses {\n        title\n      }\n    }\n    isConnected @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var allUserQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
function UserList() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: allUserQuery
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        _ref$data = _ref.data,
        getAllUsers = _ref$data.getAllUsers,
        isConnected = _ref$data.isConnected;
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: "Error loading users."
    });
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-2082547622"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2082547622" + " " + "status"
    }, "Status ", "".concat(isConnected)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-2082547622"
    }, getAllUsers.map(function (user, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: user.id,
        className: "jsx-2082547622"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2082547622"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2082547622"
      }, index + 1, ". "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2082547622"
      }, user.name)));
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ChangeStatusBtn__WEBPACK_IMPORTED_MODULE_5__["default"], {
      status: isConnected
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "2082547622",
      css: "section.jsx-2082547622{padding-bottom:20px;}li.jsx-2082547622{display:block;margin-bottom:10px;}div.jsx-2082547622{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-2082547622{font-size:14px;margin-right:10px;-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;}span.jsx-2082547622{font-size:14px;margin-right:5px;}ul.jsx-2082547622{margin:0;padding:0;}button.jsx-2082547622:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:\"\";height:0;margin-right:5px;width:0;}.status.jsx-2082547622{padding:10px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWRlanN0YW5pYy9Xb3JrL1N0dWR5L3dpdGgtdHMtbm9kZS1hcHAvY29tcG9uZW50cy9Vc2VyTGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0N3QixBQUdxQyxBQUdOLEFBSUssQUFJSixBQU9BLEFBSU4sQUFJUyxBQVVILFNBYkwsS0FuQlMsQ0FRRCxBQU9ELEFBa0JuQixJQWJBLENBdkJBLFlBbUJBLENBZkEsQUFRdUIsc0NBY0YsWUFiRixPQWNVLEdBcEJkLE9BT0osU0FDWCxRQWEyRCxrREFwQjNELE9BcUJhLFdBQ0YsU0FDUSxpQkFDVCxRQUNWIiwiZmlsZSI6Ii9Vc2Vycy90YWRlanN0YW5pYy9Xb3JrL1N0dWR5L3dpdGgtdHMtbm9kZS1hcHAvY29tcG9uZW50cy9Vc2VyTGlzdC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJyZWFjdC1hcG9sbG9cIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xuaW1wb3J0IENoYW5nZVN0YXR1c0J0biBmcm9tIFwiLi9DaGFuZ2VTdGF0dXNCdG5cIjtcbmV4cG9ydCBjb25zdCBhbGxVc2VyUXVlcnkgPSBncWwgYFxuICBxdWVyeSBnZXRBbGxVc2VycyB7XG4gICAgZ2V0QWxsVXNlcnMge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGNvdXJzZXMge1xuICAgICAgICB0aXRsZVxuICAgICAgfVxuICAgIH1cbiAgICBpc0Nvbm5lY3RlZCBAY2xpZW50XG4gIH1cbmA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyTGlzdCgpIHtcbiAgICByZXR1cm4gKDxRdWVyeSBxdWVyeT17YWxsVXNlclF1ZXJ5fT5cbiAgICAgIHsoeyBsb2FkaW5nLCBlcnJvciwgZGF0YTogeyBnZXRBbGxVc2VycywgaXNDb25uZWN0ZWQgfSB9KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgIHJldHVybiA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9XCJFcnJvciBsb2FkaW5nIHVzZXJzLlwiLz47XG4gICAgICAgIGlmIChsb2FkaW5nKVxuICAgICAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PjtcbiAgICAgICAgcmV0dXJuICg8c2VjdGlvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzXCI+U3RhdHVzIHtgJHtpc0Nvbm5lY3RlZH1gfTwvZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7Z2V0QWxsVXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT4gKDxsaSBrZXk9e3VzZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2luZGV4ICsgMX0uIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3VzZXIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPikpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxDaGFuZ2VTdGF0dXNCdG4gc3RhdHVzPXtpc0Nvbm5lY3RlZH0vPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBidXR0b246YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDZweCA0cHggMCA0cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zdGF0dXMge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvc2VjdGlvbj4pO1xuICAgIH19XG4gICAgPC9RdWVyeT4pO1xufVxuIl19 */\n/*@ sourceURL=/Users/tadejstanic/Work/Study/with-ts-node-app/components/UserList.tsx */"
    }));
  });
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ "./components/App.tsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_UserList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UserList */ "./components/UserList.tsx");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserList__WEBPACK_IMPORTED_MODULE_3__["default"], null));
});

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map