"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[slug]/page",{

/***/ "(app-pages-browser)/./app/page_components/SingleBlog.js":
/*!*******************************************!*\
  !*** ./app/page_components/SingleBlog.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotFound */ \"(app-pages-browser)/./app/page_components/NotFound.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SingleBlog = (param)=>{\n    let { slug, isDarkMode } = param;\n    _s();\n    const [blog, setBlog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchBlog = async ()=>{\n            try {\n                const response = await fetch(\"https://satyamregmi.com.np/api/blog/?slug=\".concat(slug));\n                if (!response.ok) throw new Error(\"Page Not found\");\n                const data = await response.json();\n                // console.log('Fetched Data:', data); // Log raw response\n                // Check if data is an array and has at least one item\n                if (Array.isArray(data) && data.length > 0) {\n                    setBlog(data[0]); // Use the first item in the array\n                } else {\n                    // console.error('Invalid data format:', data);\n                    setError(\"Data format is incorrect\");\n                }\n            } catch (error) {\n                // console.error('Fetch Error:', error);\n                setError(error.message);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchBlog();\n    }, [\n        slug\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex space-x-2 justify-center items-center bg h-dvh\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"sr-only\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-8 w-8 ld-bg rounded-full animate-bounce [animation-delay:-0.3s]\"\n            }, void 0, false, {\n                fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-8 w-8 ld-bg rounded-full animate-bounce [animation-delay:-0.15s]\"\n            }, void 0, false, {\n                fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-8 w-8 ld-bg rounded-full animate-bounce\"\n            }, void 0, false, {\n                fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NotFound__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n    if (!blog) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No blog data available\"\n    }, void 0, false, {\n        fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n        lineNumber: 50,\n        columnNumber: 21\n    }, undefined);\n    const imageLink = \"https://blogs.satyamregmi.com.np/uploads/\";\n    const cate = blog.category;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-1 mx-auto mt-2 max-w-4xl \".concat(isDarkMode ? \"text-white\" : \"text-black\", \" rounded-lg\"),\n        children: [\n            blog.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative mb-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: \"\".concat(imageLink).concat(blog.image),\n                    alt: blog.title,\n                    width: 700,\n                    height: 400,\n                    className: \"w-full max-h-96 object-cover rounded-lg\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"md:text-3xl font-extrabold mb-6\",\n                children: blog.title || \"Default Title\"\n            }, void 0, false, {\n                fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n                lineNumber: 72,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center text-sm text-gray-600 mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mr-4\",\n                        children: [\n                            \"By \",\n                            blog.author || \"Unknown Author\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n                        lineNumber: 76,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: new Date(blog.date).toLocaleDateString() || \"Unknown Date\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n                        lineNumber: 77,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n                lineNumber: 75,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6\",\n                children: cate ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/category/\".concat(blog.category),\n                    className: \"text-blue-500 font-semibold hover:text-blue-600 mr-2\",\n                    children: blog.category\n                }, void 0, false, {\n                    fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n                    lineNumber: 83,\n                    columnNumber: 13\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-blue-500 font-semibold hover:text-blue-600 mr-2\",\n                    children: \"Uncategorized\"\n                }, void 0, false, {\n                    fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n                    lineNumber: 90,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n                lineNumber: 81,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"blog-content text-base leading-relaxed\",\n                dangerouslySetInnerHTML: {\n                    __html: blog.content || \"Default Content\"\n                }\n            }, void 0, false, {\n                fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n                lineNumber: 97,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/satyam-blogs-nextjs/app/page_components/SingleBlog.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SingleBlog, \"bquYYmQ1V+ZOcW861xTlHd+EFds=\");\n_c = SingleBlog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleBlog);\nvar _c;\n$RefreshReg$(_c, \"SingleBlog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlX2NvbXBvbmVudHMvU2luZ2xlQmxvZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFNEM7QUFDZjtBQUNFO0FBQ0c7QUFFbEMsTUFBTUssYUFBYTtRQUFDLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFOztJQUN0QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1ksT0FBT0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUVuQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDZDQUFrRCxPQUFMVjtnQkFDMUUsSUFBSSxDQUFDUyxTQUFTRSxFQUFFLEVBQUUsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQyxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7Z0JBQ2hDLDBEQUEwRDtnQkFFMUQsc0RBQXNEO2dCQUN0RCxJQUFJQyxNQUFNQyxPQUFPLENBQUNILFNBQVNBLEtBQUtJLE1BQU0sR0FBRyxHQUFHO29CQUMxQ2QsUUFBUVUsSUFBSSxDQUFDLEVBQUUsR0FBRyxrQ0FBa0M7Z0JBQ3RELE9BQU87b0JBQ0wsK0NBQStDO29CQUMvQ04sU0FBUztnQkFDWDtZQUNGLEVBQUUsT0FBT0QsT0FBTztnQkFDZCx3Q0FBd0M7Z0JBQ3hDQyxTQUFTRCxNQUFNWSxPQUFPO1lBQ3hCLFNBQVU7Z0JBQ1JiLFdBQVc7WUFDYjtRQUNGO1FBRUFHO0lBQ0YsR0FBRztRQUFDUjtLQUFLO0lBRVQsSUFBSUksU0FBUyxxQkFDWCw4REFBQ2U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFLRCxXQUFVOzBCQUFVOzs7Ozs7MEJBQzFCLDhEQUFDRDtnQkFBSUMsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDRDtnQkFBSUMsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDRDtnQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7O0lBR25CLElBQUlkLE9BQU8scUJBQ1QsOERBQUNSLGlEQUFRQTs7Ozs7SUFFWCxJQUFJLENBQUNJLE1BQU0scUJBQU8sOERBQUNvQjtrQkFBRTs7Ozs7O0lBRXJCLE1BQU1DLFlBQVk7SUFDaEIsTUFBTUMsT0FBT3RCLEtBQUt1QixRQUFRO0lBQzVCLHFCQUVFLDhEQUFDTjtRQUNEQyxXQUFXLDhCQUF1RSxPQUF6Q25CLGFBQWEsZUFBZSxjQUFhOztZQUVqRkMsS0FBS3dCLEtBQUssa0JBQ1QsOERBQUNQO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDdkIsa0RBQUtBO29CQUNKOEIsS0FBSyxHQUFlekIsT0FBWnFCLFdBQXVCLE9BQVhyQixLQUFLd0IsS0FBSztvQkFDOUJFLEtBQUsxQixLQUFLMkIsS0FBSztvQkFDZkMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUlgsV0FBVTs7Ozs7Ozs7Ozs7MEJBTWhCLDhEQUFDWTtnQkFBR1osV0FBVTswQkFBbUNsQixLQUFLMkIsS0FBSyxJQUFJOzs7Ozs7MEJBRy9ELDhEQUFDVjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFFRixXQUFVOzs0QkFBTzs0QkFBSWxCLEtBQUsrQixNQUFNLElBQUk7Ozs7Ozs7a0NBQ3ZDLDhEQUFDWDtrQ0FBRyxJQUFJWSxLQUFLaEMsS0FBS2lDLElBQUksRUFBRUMsa0JBQWtCLE1BQU07Ozs7Ozs7Ozs7OzswQkFJbEQsOERBQUNqQjtnQkFBSUMsV0FBVTswQkFDWEkscUJBQ0ksOERBQUM1QixpREFBSUE7b0JBQ0h5QyxNQUFNLGFBQTJCLE9BQWRuQyxLQUFLdUIsUUFBUTtvQkFDaENMLFdBQVU7OEJBRVRsQixLQUFLdUIsUUFBUTs7Ozs7OENBR2hCLDhEQUFDSjtvQkFBS0QsV0FBVTs4QkFBdUQ7Ozs7Ozs7Ozs7OzBCQU8vRSw4REFBQ0Q7Z0JBQ0NDLFdBQVU7Z0JBQ1ZrQix5QkFBeUI7b0JBQUVDLFFBQVFyQyxLQUFLc0MsT0FBTyxJQUFJO2dCQUFrQjs7Ozs7Ozs7Ozs7O0FBSzNFO0dBaEdNekM7S0FBQUE7QUFrR04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2VfY29tcG9uZW50cy9TaW5nbGVCbG9nLmpzPzM0MTEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL05vdEZvdW5kJztcblxuY29uc3QgU2luZ2xlQmxvZyA9ICh7IHNsdWcsIGlzRGFya01vZGUgfSkgPT4ge1xuICBjb25zdCBbYmxvZywgc2V0QmxvZ10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hCbG9nID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9zYXR5YW1yZWdtaS5jb20ubnAvYXBpL2Jsb2cvP3NsdWc9JHtzbHVnfWApO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ1BhZ2UgTm90IGZvdW5kJyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdGZXRjaGVkIERhdGE6JywgZGF0YSk7IC8vIExvZyByYXcgcmVzcG9uc2VcblxuICAgICAgICAvLyBDaGVjayBpZiBkYXRhIGlzIGFuIGFycmF5IGFuZCBoYXMgYXQgbGVhc3Qgb25lIGl0ZW1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2V0QmxvZyhkYXRhWzBdKTsgLy8gVXNlIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBhcnJheVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgZGF0YSBmb3JtYXQ6JywgZGF0YSk7XG4gICAgICAgICAgc2V0RXJyb3IoJ0RhdGEgZm9ybWF0IGlzIGluY29ycmVjdCcpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdGZXRjaCBFcnJvcjonLCBlcnJvcik7XG4gICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoQmxvZygpO1xuICB9LCBbc2x1Z10pO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmcgaC1kdmgnPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzci1vbmx5Jz5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCB3LTggbGQtYmcgcm91bmRlZC1mdWxsIGFuaW1hdGUtYm91bmNlIFthbmltYXRpb24tZGVsYXk6LTAuM3NdJz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTggdy04IGxkLWJnIHJvdW5kZWQtZnVsbCBhbmltYXRlLWJvdW5jZSBbYW5pbWF0aW9uLWRlbGF5Oi0wLjE1c10nPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2gtOCB3LTggbGQtYmcgcm91bmRlZC1mdWxsIGFuaW1hdGUtYm91bmNlJz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbiAgaWYgKGVycm9yKSByZXR1cm4gKFxuICAgIDxOb3RGb3VuZCAvPlxuICApO1xuICBpZiAoIWJsb2cpIHJldHVybiA8cD5ObyBibG9nIGRhdGEgYXZhaWxhYmxlPC9wPjtcblxuICBjb25zdCBpbWFnZUxpbmsgPSBcImh0dHBzOi8vYmxvZ3Muc2F0eWFtcmVnbWkuY29tLm5wL3VwbG9hZHMvXCI7XG4gICAgY29uc3QgY2F0ZSA9IGJsb2cuY2F0ZWdvcnk7XG4gIHJldHVybiAoXG4gIFxuICAgIDxkaXZcbiAgICBjbGFzc05hbWU9e2BwLTEgbXgtYXV0byBtdC0yIG1heC13LTR4bCAke2lzRGFya01vZGUgPyAndGV4dC13aGl0ZScgOiAndGV4dC1ibGFjayd9IHJvdW5kZWQtbGdgfT5cbiAgICB7LyogRmVhdHVyZWQgSW1hZ2UgKi99XG4gICAge2Jsb2cuaW1hZ2UgJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYi02XCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17YCR7aW1hZ2VMaW5rfSR7YmxvZy5pbWFnZX1gfVxuICAgICAgICAgIGFsdD17YmxvZy50aXRsZX1cbiAgICAgICAgICB3aWR0aD17NzAwfVxuICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtaC05NiBvYmplY3QtY292ZXIgcm91bmRlZC1sZ1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICBcbiAgICB7LyogVGl0bGUgKi99XG4gICAgPGgxIGNsYXNzTmFtZT1cIm1kOnRleHQtM3hsIGZvbnQtZXh0cmFib2xkIG1iLTZcIj57YmxvZy50aXRsZSB8fCAnRGVmYXVsdCBUaXRsZSd9PC9oMT5cbiAgXG4gICAgey8qIEF1dGhvciBhbmQgRGF0ZSAqL31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTYwMCBtYi02XCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtci00XCI+Qnkge2Jsb2cuYXV0aG9yIHx8ICdVbmtub3duIEF1dGhvcid9PC9wPlxuICAgICAgPHA+e25ldyBEYXRlKGJsb2cuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCkgfHwgJ1Vua25vd24gRGF0ZSd9PC9wPlxuICAgIDwvZGl2PlxuICBcbiAgICB7LyogQ2F0ZWdvcmllcyAqL31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICB7Y2F0ZSA/IChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e2AvY2F0ZWdvcnkvJHtibG9nLmNhdGVnb3J5fWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LWJsdWUtNjAwIG1yLTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YmxvZy5jYXRlZ29yeX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtYmx1ZS02MDAgbXItMlwiPlxuICAgICAgICAgICAgICBVbmNhdGVnb3JpemVkXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgXG4gICAgey8qIENvbnRlbnQgKi99XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiYmxvZy1jb250ZW50IHRleHQtYmFzZSBsZWFkaW5nLXJlbGF4ZWRcIlxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBibG9nLmNvbnRlbnQgfHwgJ0RlZmF1bHQgQ29udGVudCcgfX1cbiAgICAvPlxuICA8L2Rpdj5cbiAgXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVCbG9nOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJJbWFnZSIsIk5vdEZvdW5kIiwiU2luZ2xlQmxvZyIsInNsdWciLCJpc0RhcmtNb2RlIiwiYmxvZyIsInNldEJsb2ciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaEJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJwIiwiaW1hZ2VMaW5rIiwiY2F0ZSIsImNhdGVnb3J5IiwiaW1hZ2UiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJhdXRob3IiLCJEYXRlIiwiZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImhyZWYiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page_components/SingleBlog.js\n"));

/***/ })

});