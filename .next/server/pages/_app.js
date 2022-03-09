"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hy": () => (/* binding */ APP_HOME_URL),
/* harmony export */   "c5": () => (/* binding */ APP_CONTACT_URL),
/* harmony export */   "ki": () => (/* binding */ APP_PROJECTS_URL),
/* harmony export */   "vZ": () => (/* binding */ APP_WEBSITE_URL),
/* harmony export */   "p2": () => (/* binding */ APP_TITLE_SUFFIX),
/* harmony export */   "AK": () => (/* binding */ APP_SLOGAN),
/* harmony export */   "PB": () => (/* binding */ APP_DESCRIPTION),
/* harmony export */   "Kd": () => (/* binding */ GITHUB_URL),
/* harmony export */   "Hk": () => (/* binding */ LINKEDIN_URL),
/* harmony export */   "Dl": () => (/* binding */ PERSONAL_EMAIL),
/* harmony export */   "fe": () => (/* binding */ PERSONAL_PHONE_NUMBER),
/* harmony export */   "_I": () => (/* binding */ PERSONAL_ADDRESS)
/* harmony export */ });
const APP_HOME_URL = '/';
const APP_CONTACT_URL = '/contact';
const APP_PROJECTS_URL = '/projects';
const APP_WEBSITE_URL = 'https://rydkvist.com';
const APP_TITLE_SUFFIX = 'Niklas Rydkvist';
const APP_SLOGAN = 'Software Engineer based in Stockholm, Sweden';
const APP_DESCRIPTION = 'Niklas Rydkvist is a software engineer based in Stockholm, Sweden. He is passionate about building software that improves the lives of people.';
const GITHUB_URL = 'https://github.com/Nojze';
const LINKEDIN_URL = 'https://www.linkedin.com/in/niklasrydkvist/';
const PERSONAL_EMAIL = 'niklas@rydkvist.com';
const PERSONAL_PHONE_NUMBER = '+46 70 377 11 04';
const PERSONAL_ADDRESS = 'Stockholm, Sweden';


/***/ }),

/***/ 683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(780);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(704);
;// CONCATENATED MODULE: ./src/styles/colors/colors.ts
const colors = {
    white: '#FFFFFF',
    whiteGrey: '#F6F6F6',
    customWhite: '#e2e8f0',
    customBlack: '#121212',
    lightBlack: '#222222',
    transparent: 'transparent',
    cyanGreen: '#3ab497',
    cyanGreen70: '#48c89b',
    cyanGreen50: '#3aa8b4',
    cyanGreen30: '#48c5d2',
    cyan: '#03A9F4',
    darkCyan: '#29B6F6',
    lightCyan: '#b3e5fc',
    lightgreen: '#b3e5cc'
};
// I got the cyan colors from: https://github.com/vuetifyjs/vuetify/issues/4921
/* harmony default export */ const colors_colors = (colors);

;// CONCATENATED MODULE: ./src/styles/colors/index.ts


;// CONCATENATED MODULE: ./src/styles/breakpoints/breakpoints.ts
/* harmony default export */ const breakpoints = ({
    breakpoints: {
        xs: 0,
        md: 768,
        lg: 992
    }
});

;// CONCATENATED MODULE: ./src/styles/breakpoints/index.ts


;// CONCATENATED MODULE: ./src/styles/index.ts


/* harmony default export */ const styles = ({
    colors: colors_colors,
    ...breakpoints
});

;// CONCATENATED MODULE: ./src/utils/useMediaQuery.ts


const useMediaQuery = (mediaBreakpoint)=>{
    const query = `(max-width: ${getMediaBreakpoint(mediaBreakpoint)}px)`;
    const mediaQueryList =  false ? 0 : null;
    var ref1;
    const { 0: matches , 1: setMatches  } = (0,external_react_.useState)((ref1 = mediaQueryList === null || mediaQueryList === void 0 ? void 0 : mediaQueryList.matches) !== null && ref1 !== void 0 ? ref1 : false);
    (0,external_react_.useEffect)(()=>{
        var ref;
        const handler = ()=>{
            return setMatches((ref = mediaQueryList === null || mediaQueryList === void 0 ? void 0 : mediaQueryList.matches) !== null && ref !== void 0 ? ref : false);
        };
        mediaQueryList === null || mediaQueryList === void 0 ? void 0 : mediaQueryList.addEventListener('change', handler);
        return ()=>{
            return mediaQueryList === null || mediaQueryList === void 0 ? void 0 : mediaQueryList.removeEventListener('change', handler);
        };
    }, [
        mediaQueryList
    ]);
    return matches;
};
const getMediaBreakpoint = (mediaBreakpoint)=>{
    switch(mediaBreakpoint){
        case 'desktop':
            return breakpoints.breakpoints.lg;
        case 'tablet':
            return breakpoints.breakpoints.lg;
        case 'mobile':
            return breakpoints.breakpoints.md;
    }
};

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./src/components/Navigation/MobileNavigation.tsx







const MobileNavigation = ()=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const onToggleMenu = ()=>{
        setIsOpen(!isOpen);
    };
    const closeMenu = ()=>{
        setIsOpen(false);
    };
    (0,external_react_.useEffect)(()=>{
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [
        isOpen
    ]);
    const router = (0,router_namespaceObject.useRouter)();
    const StyledNavLink = ({ href , title , iconName  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
            className: "inline-flex align-center justify-center m-0 border-b hover:underline",
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: href,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    onClick: closeMenu,
                    title: title,
                    className: `flex flex-row align-center justify-center text-2xl p-0 py-6 w-full text-center`,
                    style: router.asPath === href ? {
                        color: 'white',
                        backgroundColor: styles.colors.cyanGreen30,
                        textDecoration: 'underline'
                    } : {},
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-2xl font-light",
                        style: {
                            fontFamily: 'Source Sans Pro'
                        },
                        children: title
                    })
                })
            })
        })
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: `sticky flex justify-around items-center top-0 py-4 px-2 z-50`,
                style: {
                    background: isOpen ? styles.colors.white : `linear-gradient(
            90deg,
            rgba(66, 171, 232, 1) 0%,
            rgba(58, 168, 180, 1) 50%,
            rgba(58, 180, 151, 1) 100%
          )`,
                    transition: 'all 0.5s ease',
                    borderBottom: `1px solid ${isOpen ? styles.colors.customWhite : styles.colors.transparent}`
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: config/* APP_HOME_URL */.Hy,
                        passHref: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            onClick: closeMenu,
                            title: "Home",
                            href: config/* APP_HOME_URL */.Hy,
                            className: "inline-flex text-white hover:text-opacity-75",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-12 h-12 border rounded-full mr-4 relative overflow-hidden",
                                    style: {
                                        borderColor: isOpen ? styles.colors.customBlack : styles.colors.white,
                                        transition: 'all 0.5s ease'
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: "/images/NiklasVaxholm.png",
                                        alt: "Brand Logo – Niklas Rydkvist",
                                        layout: "fill",
                                        objectFit: "cover",
                                        objectPosition: '0% 10%'
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-xl self-center uppercase tracking-widest m-0",
                                    style: {
                                        color: isOpen ? styles.colors.customBlack : styles.colors.white
                                    },
                                    children: "Niklas Rydkvist"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        "aria-label": isOpen ? 'Close Menu' : 'Open Menu',
                        "aria-expanded": isOpen ? true : false,
                        "aria-controls": "navigation",
                        onClick: onToggleMenu,
                        className: `hamburger hamburger--spring px-1 py-2 ${isOpen ? 'is-active' : ''}`,
                        style: {
                            color: isOpen ? styles.colors.customBlack : styles.colors.white,
                            transition: 'all 0.5s ease'
                        },
                        type: "button",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "hamburger-box",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "hamburger-inner hamburger.is-active-dark hamburger-inner-dark"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                role: "navigation",
                className: "flex flex-col items-center z-50 fixed overflow-y-hidden pb-auto bg-white w-full z-50",
                style: {
                    fontFamily: 'Source Sans Pro',
                    transition: 'all 0.5s ease',
                    visibility: isOpen ? 'visible' : 'hidden',
                    height: isOpen ? '100%' : '0%',
                    opacity: isOpen ? '100%' : '0%',
                    color: isOpen ? styles.colors.customBlack : styles.colors.white
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "relative flex flex-col m-0 p-0 list-none w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledNavLink, {
                                href: config/* APP_HOME_URL */.Hy,
                                title: "Home",
                                iconName: "fa fa-home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledNavLink, {
                                href: config/* APP_PROJECTS_URL */.ki,
                                title: "Projects",
                                iconName: "fa fa-home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledNavLink, {
                                href: config/* APP_CONTACT_URL */.c5,
                                title: "Contact",
                                iconName: "fa fa-envelope-o"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "flex flex-row justify-center m-0 mt-8 list-none w-full p-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "mr-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "p-4 text-2xl hover:opacity-75",
                                    href: config/* LINKEDIN_URL */.Hk,
                                    title: "LinkedIn – Niklas Rydkvist",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-linkedin fa-lg"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "p-4 text-2xl hover:opacity-75",
                                    href: config/* GITHUB_URL */.Kd,
                                    title: "GitHub – Nojze",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-github fa-lg"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "flex flex-col items-center justify-center m-0 list-none w-full p-8 pt-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "mb-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-2xl p-2 font-light hover:opacity-75",
                                    href: `mailto:${config/* PERSONAL_EMAIL */.Dl}`,
                                    title: config/* PERSONAL_EMAIL */.Dl,
                                    children: config/* PERSONAL_EMAIL */.Dl
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-2xl p-2 font-light hover:opacity-75",
                                    href: `tel:${config/* PERSONAL_PHONE_NUMBER */.fe}`,
                                    title: config/* PERSONAL_PHONE_NUMBER */.fe,
                                    children: config/* PERSONAL_PHONE_NUMBER */.fe
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/Navigation/Navigation.tsx









const Navigation = ()=>{
    const isMobile = useMediaQuery('mobile');
    const router = (0,router_namespaceObject.useRouter)();
    const StyledNavLink = ({ href , title  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
            className: "flex items-center m-0 mr-8",
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: href,
                passHref: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: `border-b border-transparent hover:border-white ${router.asPath == href ? 'text-white border-white' : ''}`,
                    style: {
                        padding: '0rem 0.125rem',
                        fontFamily: 'Source Sans Pro'
                    },
                    target: "_parent",
                    title: title,
                    children: title
                })
            })
        })
    ;
    return isMobile ? /*#__PURE__*/ jsx_runtime_.jsx(MobileNavigation, {}) : /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "m-0 py-4",
        style: {
            color: styles.colors.white
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "relative flex justify-around items-center",
            role: "navigation",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: config/* APP_HOME_URL */.Hy,
                    passHref: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: "inline-flex text-white hover:text-opacity-75",
                        title: "Home",
                        role: "img",
                        "aria-label": "Brand Logo – Niklas Rydkvist",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-12 h-12 border rounded-full mr-4 relative overflow-hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: "/images/NiklasVaxholm.png",
                                    alt: "Brand Logo – Niklas Rydkvist",
                                    layout: "fill",
                                    objectFit: "cover",
                                    objectPosition: '0% 10%'
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-xl self-center uppercase tracking-widest",
                                children: "Niklas Rydkvist"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "flex flex-row m-0 p-0 list-none",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(StyledNavLink, {
                            href: config/* APP_HOME_URL */.Hy,
                            title: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(StyledNavLink, {
                            href: config/* APP_PROJECTS_URL */.ki,
                            title: "Projects"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(StyledNavLink, {
                            href: config/* APP_CONTACT_URL */.c5,
                            title: "Contact"
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Footer.tsx

const Footer = ()=>/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "flex justify-center items-center w-full h-20 md:h-16 mt-12",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
            className: "text-lg text-white",
            children: [
                "Niklas Rydkvist \xa9 ",
                new Date().getFullYear().toString()
            ]
        })
    })
;

;// CONCATENATED MODULE: ./src/pages/_app.tsx






const App = ({ Component , pageProps  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            role: "main",
            className: "min-h-full h-full block",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    src: "https://kit.fontawesome.com/260eef81bd.js",
                    crossOrigin: "anonymous"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    }));
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664], () => (__webpack_exec__(683)));
module.exports = __webpack_exports__;

})();