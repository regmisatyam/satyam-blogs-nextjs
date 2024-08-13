/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[slug]/page",{

/***/ "(app-pages-browser)/./app/[slug]/page.js":
/*!****************************!*\
  !*** ./app/[slug]/page.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context_ThemeContex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ThemeContex */ \"(app-pages-browser)/./app/context/ThemeContex.js\");\n/* harmony import */ var _page_components_SingleBlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page_components/SingleBlog */ \"(app-pages-browser)/./app/page_components/SingleBlog.js\");\n/* harmony import */ var _page_components_SingleBlog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_components_SingleBlog__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n // Adjust the path if needed\n // Adjust the path if needed\nconst BlogPage = (param)=>{\n    let { params } = param;\n    _s();\n    const { slug } = params;\n    const { isDarkMode } = (0,_context_ThemeContex__WEBPACK_IMPORTED_MODULE_1__.useTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:mx-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_page_components_SingleBlog__WEBPACK_IMPORTED_MODULE_2___default()), {\n            slug: slug,\n            isDarkMode: isDarkMode\n        }, void 0, false, {\n            fileName: \"/workspaces/satyam-blogs-nextjs/app/[slug]/page.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspaces/satyam-blogs-nextjs/app/[slug]/page.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BlogPage, \"rqvHAxWK5bFT/4scWU48sLiYheY=\", false, function() {\n    return [\n        _context_ThemeContex__WEBPACK_IMPORTED_MODULE_1__.useTheme\n    ];\n});\n_c = BlogPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPage);\nvar _c;\n$RefreshReg$(_c, \"BlogPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bc2x1Z10vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWtELENBQUMsNEJBQTRCO0FBQ3hCLENBQUMsNEJBQTRCO0FBRXBGLE1BQU1FLFdBQVc7UUFBQyxFQUFFQyxNQUFNLEVBQUU7O0lBQzFCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdEO0lBQ2pCLE1BQU0sRUFBRUUsVUFBVSxFQUFFLEdBQUdMLDhEQUFRQTtJQUUvQixxQkFDRSw4REFBQ007UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ04sb0VBQVVBO1lBQUNHLE1BQU1BO1lBQU1DLFlBQVlBOzs7Ozs7Ozs7OztBQUcxQztHQVRNSDs7UUFFbUJGLDBEQUFRQTs7O0tBRjNCRTtBQVdOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9bc2x1Z10vcGFnZS5qcz82ZWQ3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICcuLi9jb250ZXh0L1RoZW1lQ29udGV4JzsgLy8gQWRqdXN0IHRoZSBwYXRoIGlmIG5lZWRlZFxuaW1wb3J0IFNpbmdsZUJsb2cgZnJvbSAnLi4vcGFnZV9jb21wb25lbnRzL1NpbmdsZUJsb2cnOyAvLyBBZGp1c3QgdGhlIHBhdGggaWYgbmVlZGVkXG5cbmNvbnN0IEJsb2dQYWdlID0gKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBzbHVnIH0gPSBwYXJhbXM7XG4gIGNvbnN0IHsgaXNEYXJrTW9kZSB9ID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtZDpteC01Jz5cbiAgICAgIDxTaW5nbGVCbG9nIHNsdWc9e3NsdWd9IGlzRGFya01vZGU9e2lzRGFya01vZGV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nUGFnZTsiXSwibmFtZXMiOlsidXNlVGhlbWUiLCJTaW5nbGVCbG9nIiwiQmxvZ1BhZ2UiLCJwYXJhbXMiLCJzbHVnIiwiaXNEYXJrTW9kZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[slug]/page.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/page_components/SingleBlog.js":
/*!*******************************************!*\
  !*** ./app/page_components/SingleBlog.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});