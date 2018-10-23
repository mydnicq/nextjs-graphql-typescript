webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/InitApollo.ts":
/*!***************************!*\
  !*** ./lib/InitApollo.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var apollo_link_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-state */ "./node_modules/apollo-link-state/lib/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var InitApollo =
/*#__PURE__*/
function () {
  function InitApollo() {
    _classCallCheck(this, InitApollo);

    this.isBrowser = null;
    console.log(this.isBrowser);
    this.isBrowser = typeof window !== "undefined"; // Polyfill fetch() on the server (used by apollo-client)

    if (!this.isBrowser) {
      global.fetch = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default.a;
    }
  }

  _createClass(InitApollo, [{
    key: "create",
    value: function create(initialState) {
      var cache = new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]().restore(initialState || {});
      var httpLink = new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["HttpLink"]({
        credentials: "same-origin",
        uri: "http://localhost:3000/graphql" // Server URL (must be absolute)

      });
      var stateLink = Object(apollo_link_state__WEBPACK_IMPORTED_MODULE_1__["withClientState"])({
        cache: cache,
        defaults: {
          isConnected: true
        },
        resolvers: {
          Mutation: {
            updateNetworkStatus: function updateNetworkStatus(_, _ref, _ref2) {
              var isConnected = _ref.isConnected;
              var cache = _ref2.cache;
              cache.writeData({
                data: {
                  isConnected: isConnected
                }
              });
              return null;
            }
          }
        }
      });
      return new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
        cache: cache,
        connectToDevTools: this.isBrowser,
        link: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].from([stateLink, httpLink]),
        ssrMode: !this.isBrowser // Disables forceFetch on the server (so queries are only run once)

      });
    }
  }, {
    key: "getApolloClient",
    value: function getApolloClient(initialState) {
      // Make sure to create a new client for every server-side request so that data
      // isn't shared between connections (which would be bad)
      if (!this.isBrowser) {
        return this.create(initialState);
      } // Reuse client on the client-side


      if (!this.apolloClient) {
        this.apolloClient = this.create(initialState);
      }

      return this.apolloClient;
    }
  }]);

  return InitApollo;
}();

/* harmony default export */ __webpack_exports__["default"] = (new InitApollo());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=_app.js.f764835ba56fe6f5db22.hot-update.js.map