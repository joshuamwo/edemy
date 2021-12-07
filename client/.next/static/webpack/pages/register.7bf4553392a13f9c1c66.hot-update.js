webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_edemy_master_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_edemy_master_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_edemy_master_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_edemy_master_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_edemy_master_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);






var _jsxFileName = "C:\\edemy-master\\client\\pages\\register.js",
    _this = undefined,
    _s = $RefreshSig$();




var Register = function Register() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("josh"),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("josh@gmail.com"),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("yullujosh"),
      password = _useState3[0],
      setPassword = _useState3[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_edemy_master_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_edemy_master_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      var _yield$axios$post$the, _yield$axios$post$the2, data;

      return C_edemy_master_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); //console.table({ name, email, password });

              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("http://localhost:8001/auth/register", {
                name: name,
                email: email,
                password: password
              }).then(function (response) {
                var result = response.data;
                console.log(result);
              }, function (error) {
                console.log(error);
              });

            case 3:
              _yield$axios$post$the = _context.sent;
              _yield$axios$post$the2 = Object(C_edemy_master_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_yield$axios$post$the, 1);
              data = _yield$axios$post$the2[0];
              console.log("REGISTER RESPONSE", data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "jumbotron text-center bg-primary square",
      children: "Register"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container col-md-4 offset-md-4 pb-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          className: "form-control mb-4 p-4",
          value: name,
          onChange: function onChange(e) {
            return setName(e.target.value);
          },
          placeholder: "Enter name",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          className: "form-control mb-4 p-4",
          value: email,
          onChange: function onChange(e) {
            return setEmail(e.target.value);
          },
          placeholder: "Enter email",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          className: "form-control mb-4 p-4",
          value: password,
          onChange: function onChange(e) {
            return setPassword(e.target.value);
          },
          placeholder: "Enter password",
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-block btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Register, "YQaIyPbnhitEv0tyjh3ZlVFL+gY=");

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxNQUFELENBRFg7QUFBQSxNQUNkQyxJQURjO0FBQUEsTUFDUkMsT0FEUTs7QUFBQSxtQkFFS0Ysc0RBQVEsQ0FBQyxnQkFBRCxDQUZiO0FBQUEsTUFFZEcsS0FGYztBQUFBLE1BRVBDLFFBRk87O0FBQUEsbUJBR1dKLHNEQUFRLENBQUMsV0FBRCxDQUhuQjtBQUFBLE1BR2RLLFFBSGM7QUFBQSxNQUdKQyxXQUhJOztBQUtyQixNQUFNQyxZQUFZO0FBQUEsb1FBQUcsaUJBQU9DLENBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkEsZUFBQyxDQUFDQyxjQUFGLEdBRG1CLENBRW5COztBQUZtQjtBQUFBLHFCQUdFQyw0Q0FBSyxDQUN2QkMsSUFEa0Isd0NBQzBCO0FBQzNDVixvQkFBSSxFQUFKQSxJQUQyQztBQUUzQ0UscUJBQUssRUFBTEEsS0FGMkM7QUFHM0NFLHdCQUFRLEVBQVJBO0FBSDJDLGVBRDFCLEVBTWxCTyxJQU5rQixDQU9qQixVQUFDQyxRQUFELEVBQWM7QUFDWixvQkFBSUMsTUFBTSxHQUFHRCxRQUFRLENBQUNFLElBQXRCO0FBQ0FDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWjtBQUNELGVBVmdCLEVBV2pCLFVBQUNJLEtBQUQsRUFBVztBQUNURix1QkFBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVo7QUFDRCxlQWJnQixDQUhGOztBQUFBO0FBQUE7QUFBQTtBQUdaSCxrQkFIWTtBQWtCbkJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsSUFBakM7O0FBbEJtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaUixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQXFCQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLHlDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFHRTtBQUFLLGVBQVMsRUFBQyxxQ0FBZjtBQUFBLDZCQUNFO0FBQU0sZ0JBQVEsRUFBRUEsWUFBaEI7QUFBQSxnQ0FDRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsbUJBQVMsRUFBQyx1QkFGWjtBQUdFLGVBQUssRUFBRU4sSUFIVDtBQUlFLGtCQUFRLEVBQUUsa0JBQUNPLENBQUQ7QUFBQSxtQkFBT04sT0FBTyxDQUFDTSxDQUFDLENBQUNXLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUEsV0FKWjtBQUtFLHFCQUFXLEVBQUMsWUFMZDtBQU1FLGtCQUFRO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVVFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxtQkFBUyxFQUFDLHVCQUZaO0FBR0UsZUFBSyxFQUFFakIsS0FIVDtBQUlFLGtCQUFRLEVBQUUsa0JBQUNLLENBQUQ7QUFBQSxtQkFBT0osUUFBUSxDQUFDSSxDQUFDLENBQUNXLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsV0FKWjtBQUtFLHFCQUFXLEVBQUMsYUFMZDtBQU1FLGtCQUFRO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRixlQW1CRTtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsbUJBQVMsRUFBQyx1QkFGWjtBQUdFLGVBQUssRUFBRWYsUUFIVDtBQUlFLGtCQUFRLEVBQUUsa0JBQUNHLENBQUQ7QUFBQSxtQkFBT0YsV0FBVyxDQUFDRSxDQUFDLENBQUNXLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLFdBSlo7QUFLRSxxQkFBVyxFQUFDLGdCQUxkO0FBTUUsa0JBQVE7QUFOVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CRixlQTRCRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUMsMkJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQSxrQkFERjtBQXdDRCxDQWxFRDs7R0FBTXJCLFE7O0tBQUFBLFE7QUFvRVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjdiZjQ1NTMzOTJhMTNmOWMxYzY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJqb3NoXCIpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiam9zaEBnbWFpbC5jb21cIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJ5dWxsdWpvc2hcIik7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy9jb25zb2xlLnRhYmxlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pO1xuICAgIGNvbnN0IFtkYXRhXSA9IGF3YWl0IGF4aW9zXG4gICAgICAucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDAxL2F1dGgvcmVnaXN0ZXJgLCB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pXG4gICAgICAudGhlbihcbiAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIGNvbnNvbGUubG9nKFwiUkVHSVNURVIgUkVTUE9OU0VcIiwgZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImp1bWJvdHJvbiB0ZXh0LWNlbnRlciBiZy1wcmltYXJ5IHNxdWFyZVwiPlJlZ2lzdGVyPC9oMT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sLW1kLTQgb2Zmc2V0LW1kLTQgcGItNVwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtNFwiXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5hbWVcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIlxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==