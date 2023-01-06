"use strict";
exports.id = 798;
exports.ids = [798];
exports.modules = {

/***/ 1798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ze": () => (/* binding */ ThemeContextProvider)
/* harmony export */ });
/* unused harmony export themeContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const themeContext = {
    footerFixed: false,
    footerColorClass: "bg-transparent",
    backgroundColor: "#ffffff",
    backgroundIsDark: false,
    darkElements: [],
    setBackgroundColor: ()=>{},
    setBackgroundIsDark: ()=>{},
    setIsFooterFixed: ()=>{},
    setFooterColorClass: ()=>{},
    setDarkElements: ()=>{}
};
const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(themeContext);
function ThemeContextProvider(props) {
    const [isFooterFixed, setIsFooterFixed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [footerColorClass, setFooterColorClass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("bg-transparent");
    const [pageBackground, setPageBackground] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("#ffffff");
    const [isDark, setIsDark] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [darkEls, setDarkEls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const themeCtx = {
        footerFixed: isFooterFixed,
        footerColorClass,
        backgroundColor: pageBackground,
        backgroundIsDark: isDark,
        darkElements: darkEls,
        setBackgroundColor: setPageBackground,
        setBackgroundIsDark: setIsDark,
        setIsFooterFixed,
        setFooterColorClass,
        setDarkElements: (newEl)=>{
            setDarkEls([
                ...darkEls,
                ...newEl
            ]);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: themeCtx,
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContext);


/***/ })

};
;