"use strict";
exports.id = 469;
exports.ids = [469];
exports.modules = {

/***/ 8469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MdxLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_data_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3407);




function MdxLayout({ children , title  }) {
    const articleIndex = _lib_data_projects__WEBPACK_IMPORTED_MODULE_3__/* .articles.findIndex */ .Dq.findIndex((article)=>article.title === title);
    const prevArticle = articleIndex === 0 ? _lib_data_projects__WEBPACK_IMPORTED_MODULE_3__/* .articles */ .Dq[_lib_data_projects__WEBPACK_IMPORTED_MODULE_3__/* .articles.length */ .Dq.length - 1] : _lib_data_projects__WEBPACK_IMPORTED_MODULE_3__/* .articles */ .Dq[articleIndex - 1];
    const nextArticle = articleIndex + 1 === _lib_data_projects__WEBPACK_IMPORTED_MODULE_3__/* .articles.length */ .Dq.length ? _lib_data_projects__WEBPACK_IMPORTED_MODULE_3__/* .articles[0] */ .Dq[0] : _lib_data_projects__WEBPACK_IMPORTED_MODULE_3__/* .articles */ .Dq[articleIndex + 1];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full h-fit relative flex flex-col items-center pt-20 pb-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "w-10/12 prose xl:prose-xl",
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `w-10/12 px-8 pt-12 xs:w-full xs:px-0 xs:pl-12 sm:pl-0 sm:w-[84%] sm:px-0 md:w-[46%] md:min-w-[635px] lg:w-[50%] xl:min-w-[800px] l xl:w-[54%] 2xl:w-[46%] flex flex-col xs:flex-row self-start sm:self-auto`,
                children: [
                    _lib_data_projects__WEBPACK_IMPORTED_MODULE_3__/* .articles.length */ .Dq.length > 2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `w-full xs:w-6/12 flex flex-col my-8 sm:my-12 xs:pr-5 xl:pr-8`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-semibold tracking-[0.018em] mb-1 text-slate-400",
                                children: "Previous Article"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: prevArticle.href,
                                className: "text-xl capitalize text-slate-800 font-stolzl hover:text-custom-orange/90 hover:underline hover:underline-offset-2 hover:decoration-[1.2px]",
                                children: prevArticle.title
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `w-full flex flex-col my-8 sm:my-12 ${_lib_data_projects__WEBPACK_IMPORTED_MODULE_3__/* .articles.length */ .Dq.length > 2 ? "xs:w-6/12 xs:pl-5 xl:pl-8" : "xs:w-10/12 sm:w-8/12 xl:w-7/12"}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-semibold tracking-[0.018em] mb-1 text-slate-400",
                                children: "Next Article"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: nextArticle.href,
                                className: "text-xl capitalize text-slate-800 font-stolzl hover:text-custom-orange/90 hover:underline hover:underline-offset-2 hover:decoration-[1.2px]",
                                children: nextArticle.title
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;