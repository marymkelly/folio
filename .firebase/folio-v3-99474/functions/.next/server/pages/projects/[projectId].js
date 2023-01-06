"use strict";
(() => {
var exports = {};
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 6184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@heroicons/react/24/outline"
const outline_namespaceObject = require("@heroicons/react/24/outline");
;// CONCATENATED MODULE: ./components/common/Button.tsx



function Button(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: ()=>props.onClick ? props.onClick() : null,
        className: `inline-flex items-center ${props.className}`,
        children: [
            props.icon && /*#__PURE__*/ jsx_runtime_.jsx(props.icon, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: `${props?.showArrow && "mr-2.5"}`,
                children: props.label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.ArrowLongRightIcon, {
                className: `h-6 w-6 ${!props?.showArrow ? "hidden" : ""}`
            })
        ]
    });
}


/***/ }),

/***/ 1274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Projects),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/projects/ProjectHeader.tsx


function ProjectPageHeader(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full flex flex-col items-center pt-40",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-[1100px] w-full flex flex-col items-start px-16 lg:px-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "font-itc font-medium text-6xl lg:text-8xl mb-16",
                    children: props.title
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col lg:flex-row lg:items-center lg:justify-between w-full mb-20",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center w-auto mb-4 lg:mb-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `font-stolzl font-normal text-base lg:text-lg mr-5 ${props?.textClasses}`,
                                    children: "Role"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-custom-black font-stolzl font-light lg:text-lg",
                                    children: props.role
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center w-fu-auto mb-4 lg:mb-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `font-stolzl font-normal text-base lg:text-lg mr-5 ${props?.textClasses}`,
                                    children: "Dates"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-custom-black font-stolzl font-light lg:text-lg",
                                    children: props.dates
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center w-fu-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `font-stolzl font-normal text-base lg:text-lg mr-5 ${props?.textClasses}`,
                                    children: "Platforms"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-custom-black font-stolzl font-light lg:text-lg",
                                    children: props.platforms
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/projects/sinpin/SinpinOverview.tsx


function ParrotOverview(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `w-full flex flex-col items-center pt-[72px] pb-24 ${props?.overviewClasses}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-[1100px] flex flex-col items-start px-16 lg:px-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col w-full mb-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: `font-stolzl mb-5 ${props.textClasses}`,
                            children: "Overview"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "font-gothic text-lg mb-6 tracking-[0.02em]",
                            children: [
                                "I was hired as Sin Pin’s primary in-house software developer in 2022. From day one,",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-stolzl font-light text-2xl mx-2 leading-10",
                                    children: "I was faced with the huge undertaking of redesigning and building an update for the front-end of their existing web platform,"
                                }),
                                " ",
                                "as well as assisting in the migration of their technology stack to more current technologies."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "font-gothic text-lg mb-4 mt-2 tracking-[0.02em]",
                            children: [
                                "I currently continue to work with company leadership to advance new and existing areas of their system.",
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col w-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: `font-stolzl mb-5 ${props.textClasses}`,
                            children: "Technologies"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-stolzl font-light text-2xl",
                            children: "NextJS, NodeJS, ReactJS, MongoDB, Tailwind CSS, MUI Datagrid"
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/projects/ProjectSections.tsx



function ImageSection(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col w-full",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: props.classes ? `${props.classes}` : `h-[75vh] md:min-h-[400px] lg:h-[800px] w-full lg:my-12 lg:py-10 flex items-center justify-center`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col w-full h-full md:px-16 lg:px-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative w-[100%] h-[100%]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: props.path,
                            className: props?.imgClasses ? `${"object-contain-cover md:object-contain"}` : "object-contain",
                            fill: true,
                            alt: "Image preview",
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: props.caption && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-gothic text-xs -mt-20",
                            children: props.caption
                        })
                    })
                ]
            })
        })
    });
}
const InfoPoint = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col w-full items-center px-16 lg:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-[1100px] flex flex-col items-start w-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    className: `font-stolzl mt-10 mb-5 ${props.textClasses}`,
                    children: props.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "font-gothic font-light text-lg tracking-[0.02em] leading-8",
                    children: props.text
                })
            ]
        })
    });
};
const FeaturePoint = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col w-full items-center px-16 lg:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-[1100px] flex flex-col items-start w-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    className: "font-stolzl text-xl mb-5 mt-12 text-custom-black",
                    children: props.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "font-gothic font-light text-lg tracking-[0.02em] leading-8",
                    children: props.text
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./context/ThemeCtx.tsx
var ThemeCtx = __webpack_require__(1798);
;// CONCATENATED MODULE: ./components/projects/sinpin/SinpinPage.tsx






function SinPinPage() {
    const projectData = {
        title: "Sin Pin",
        role: "Lead Software Developer & Interface Designer",
        platforms: "Web",
        dates: "April 2022 - Present (ongoing)",
        textClasses: "text-project-sinpin-red-text",
        overviewClasses: "bg-project-sinpin-red-fade",
        colorClasses: "bg-project-sinpin-red-logo"
    };
    const themeCtx = (0,external_react_.useContext)(ThemeCtx/* default */.ZP);
    (0,external_react_.useEffect)(()=>{
        themeCtx.setFooterColorClass("bg-[#E9151D]");
        return ()=>{
            themeCtx.setFooterColorClass("bg-transparent");
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ProjectPageHeader, {
                ...projectData
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ParrotOverview, {
                textClasses: "text-project-sinpin-red-text",
                overviewClasses: "bg-project-sinpin-red-fade"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/sinpin/intro.png",
                classes: "bg-project-sinpin-red-logo h-[50vh] min-h-[600px] lg:h-[800px] w-full mb-10 pt-8 py-12 flex items-center justify-center"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "font-stolzl font-light text-2xl mt-12 mb-2 lg:w-[1100px] self-center px-16 lg:px-0",
                children: "With the existing platform affording three different account roles, the strategy that was decided upon early on, was to work from the top down, starting with the administrative portal."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InfoPoint, {
                textClasses: "text-project-sinpin-red-text",
                title: "Internal Interviews",
                text: "To gain a better understanding of what the current platform lacked and what users desired, I interviewed different employees within company and used the information in early wireframe concepts I created for the updated platform. "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InfoPoint, {
                textClasses: "text-project-sinpin-red-text",
                title: "Wireframes",
                text: "Due to the pace and direction of the project from executive leadership, I only created wireframes for more complex areas of the platform which required a major update (behaivor or design did not have to mimic existing systems). "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/sinpin/wireframes.png",
                classes: "h-[50vh] md:[75vh] min-h-[400px] lg:h-[500px] max-w-[1300px] w-full flex self-center items-center justify-center px-8 lg:px-0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InfoPoint, {
                textClasses: "text-project-sinpin-red-text",
                title: "Design & Branding",
                text: "When I first joined the Sin Pin team, the company had no official brand colors or design system, but it was generally accepted that red, teal, and black were their brand colors, based off certain versions of their existing logo. I was able to discern “official” brand colors of red and orange though existing copies of the company’s logo, and used them as a foundaton to work from, as I tried to establish a balanced color scheme. An effort was made to try and work teal in, but ultimately I chose to pursue a split-complementary theme and use a bluer hue. "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/sinpin/designbranding.png",
                classes: "h-[60vh] md:min-h-[400px] lg:h-[800px] 2xl:h-[815px] w-full mt-16 mb-10 items-center justify-center px-12 md:px-0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/sinpin/beforeAfterAccount.png",
                classes: "bg-project-sinpin-red-logo h-[75vh] md:min-h-[400px] lg:h-[800px] w-full mt-16 py-20 items-center justify-center"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/sinpin/beforeAfterServices.png",
                classes: "bg-project-sinpin-red-logo h-[60vh] md:min-h-[400px] lg:h-[800px] w-full mb-10 lg:py-12 items-center justify-center"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "font-stolzl font-light text-2xl mt-12 mb-2 lg:w-[1100px] self-center px-16 lg:px-0",
                children: "The redesign needed to bring a fresh, current face to the existing platform and have high legibility."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "font-gothic font-light text-lg tracking-[0.02em] lg:w-[1100px] pt-8 pb-12 leading-8 self-center px-16 lg:px-0",
                children: [
                    "Due to this, I chose to keep the design clean and simple as to not confuse the viewer’s eye unncessarily.",
                    " "
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InfoPoint, {
                textClasses: "text-project-sinpin-red-text",
                title: "Site Information & Architecture",
                text: "The rebuild of this platform opended a hugh opportunity for efficiency through restructuing the paths to access information. Previously, administrative users often would have to click six (6) or more times to get to their end goal. I have been able to reduce this for platform users, regardless of account type, to an average of two (2) or less clicks (or actions) to access their target area or content."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "font-stolzl font-light text-2xl mt-12 mb-2 lg:w-[1100px] self-center px-16 lg:px-0",
                children: "Speed and efficiency were priorities, both for user and software performance."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InfoPoint, {
                textClasses: "text-project-sinpin-red-text",
                title: "Building the Solution",
                text: "The front-end of the web platform is React application built using NextJS. Tailwind CSS is used for styling, and much of the platform functionality is custom built with the primary exception being data tables. "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FeaturePoint, {
                title: "Internationalization",
                text: "The Sin Pin platform currently supports three languages: English, Spanish, and French."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FeaturePoint, {
                title: "MUI Datagrid",
                text: "Due to all the functionality required by the company in relation to tables, it made sense to utilize a pre-existing solution. We use Material UI’s Datagrid Pro for displaying tabular data and have built upon it to fit custom needs. User’s can take advantage of inline editing, exporting data, filtering, sorting, and more."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/sinpin/internationalization.png",
                classes: "bg-project-sinpin-red-logo h-[75vh] md:min-h-[400px] lg:h-[800px] w-full mt-16 mb-10 py-24 items-center justify-center"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FeaturePoint, {
                title: "Saved User Preferences",
                text: "For convenience, user preferences including language, sidebar display, and theme (dark mode is planned to be offered in the future) are saved. "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FeaturePoint, {
                title: "Branded Loading Animation",
                text: "Per the request of company leadership, I built a custom CSS loading animation incorporating a version of the Sin Pin logo. "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/sinpin/loader.gif",
                classes: "h-[50vh] md:min-h-[400px] lg:h-[800px] max-w-[1100px] w-full flex self-center items-center justify-center px-16 lg:px-0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FeaturePoint, {
                title: "Custom Dashboards",
                text: "Dashboards have been tailored to best fit the needs of each role level, displaying useful data via chart or graph, announcements, and promotional materials where relevant."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FeaturePoint, {
                title: "Command Palette",
                text: "I built a custom command palette that makes navigating, searching certain data, and other actions accessible at the stroke of the keyboard (or by clicking the search icon available upon login)."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/sinpin/command.png",
                classes: "h-[50vh] md:min-h-[400px] lg:h-[800px] max-w-[1100px] w-full flex self-center items-center justify-center px-16 lg:px-0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FeaturePoint, {
                title: "Dynamic Sidebar",
                text: "The sidebar is dynamic both in it’s layout, which users can fix open or allow to collapse (also extended to layouts with a nested sidebar), and in how it displays data, which generates based off the authenticated user’s permissions."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/sinpin/sidebars.gif",
                classes: "bg-project-sinpin-red-logo h-[75vh] md:min-h-[400px] lg:h-[800px] w-full mt-16 py-24 items-center justify-center"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/projects/parrot/ParrotOverview.tsx


function ParrotOverview_ParrotOverview(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `w-full flex flex-col items-center pt-[72px] pb-24 ${props?.overviewClasses}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-[1100px] flex flex-col items-start px-16 lg:px-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col w-full mb-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: `font-stolzl mb-5 ${props.textClasses}`,
                            children: "Overview"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-gothic text-lg mb-6 tracking-[0.02em]",
                            children: "Research studies have shown that the development of social media has allowed for a culture of alienation and isolation from behind a computer keyboard, as well as the promotion of an unhealthy, superficial culture based around likes."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-gothic text-lg mb-4 tracking-[0.02em]",
                            children: "Concerned with this,"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-stolzl font-light text-2xl",
                            children: "Parrot Social Media sought to bring a new platform to the scene, geared towards encouraging the “social” aspect of “social media.”"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col w-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: `font-stolzl mb-5 ${props.textClasses}`,
                            children: "The Challenge"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-stolzl font-light text-2xl",
                            children: "Design a sleek, mobile-based, social media platform that encourages interactions between users and shared experiences."
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/projects/parrot/ParrotPage.tsx




function ParrotProjectPage() {
    const projectData = {
        title: "Parrot Social Media",
        role: "Lead Business Analyst",
        platforms: "iOS",
        dates: "September - October 2020 (6 Weeks)",
        textClasses: "text-project-parrot-green-text",
        overviewClasses: "bg-project-parrot-green-fade",
        colorClasses: "bg-project-parrot-green-logo"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ProjectPageHeader, {
                ...projectData
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ParrotOverview_ParrotOverview, {
                textClasses: "text-project-parrot-green-text",
                overviewClasses: "bg-project-parrot-green-fade"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/parrot/intro.png",
                classes: "bg-project-parrot-green-logo h-[75vh] min-h-[600px] lg:h-[800px] w-full mb-10 pt-8 flex items-center justify-center",
                imgClasses: "object-contain-cover md:object-contain"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full flex justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-4 w-full max-w-[1100px] mt-20 px-16 lg:px-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "font-itc text-5xl mb-4",
                        children: "Process"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InfoPoint, {
                textClasses: "text-project-parrot-green-text",
                title: "Weekly Meetings",
                text: "Throughout the weeks of this analysis, calls were held at least once a week with major stakeholder(s). During these meetings, it was common for questions to be discuss, brainstorming to occur, and the review of any wireframes, screen designs, or other visual assets would be reviewed. Notes about the meeting were documented for reference."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InfoPoint, {
                textClasses: "text-project-parrot-green-text",
                title: "Research & Interviews",
                text: "Competitor research was conducted to assess Parrot's value proposition and it was confirmed that none of the major social media platforms (Facebook, Instagram, Twitter, TikTok, Snapchat) offered a feature similar to the concept that Parrot was proposing, at the time. Additionally, informal interviews with the target demographic supported the notion of sufficent interest in the solution to move the project forward."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InfoPoint, {
                textClasses: "text-project-parrot-green-text",
                title: "WBS",
                text: "A Work Breakdown Structure, or WBS, is a document that helps detail the tasks or steps needed within a process. After gaining a sufficent understanding of project requirements, I created a WBS to help outline the various features anticipated for this project."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/parrot/wbs.png",
                classes: "h-[50vh] md:[75vh] min-h-[400px] lg:h-[800px] max-w-[1100px] w-full flex self-center items-center justify-center px-8 lg:px-0",
                caption: "Example of WBS"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InfoPoint, {
                textClasses: "text-project-parrot-green-text",
                title: "Wireframes",
                text: "I designed all of the wireframes for the project."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/parrot/wireframes.png",
                classes: "bg-project-parrot-green-logo h-[75vh] md:min-h-[400px] lg:h-[800px] w-full mt-16 mb-10 py-24 items-center justify-center"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InfoPoint, {
                textClasses: "text-project-parrot-green-text",
                title: "User Flows",
                text: "As the wireframes for different feature areas were completed, I constructed user flows, which I used as a tool when presenting wireframes to stakeholders and provided as a deliverable at the end of the phase. User flows are a great tool in helping viewers identify interactable elements available to them and understand the correlation between each screen."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/parrot/userflows.png",
                classes: "h-[60vh] md:min-h-[400px] lg:h-[800px] 2xl:h-[1400px] w-full mt-16 mb-10 items-center justify-center px-12 md:px-0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InfoPoint, {
                textClasses: "text-project-parrot-green-text",
                title: "Design & Branding",
                text: "Parrot provided swatches of a mint green color as examples for the primary color of their branding. It was important for the design to appeal to Parrot's target demographic of teens and young adults and have a sense of sophistication."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "font-stolzl font-light text-2xl mt-12 mb-2 lg:w-[1100px] self-center px-16 lg:px-0",
                children: "Therefore, the design direction chosen was a clean, modern look."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/parrot/designbranding.png",
                classes: "bg-project-parrot-green-logo h-[60vh] md:min-h-[400px] lg:h-[800px] w-full mt-16 mb-10 lg:py-24 items-center justify-center"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FeaturePoint, {
                title: "Group Posts",
                text: "All content on Parrot will be of a shared format. This means, in order for a post to be shared, more than one user must participate."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FeaturePoint, {
                title: "Shared Likes",
                text: "To encourage inclusion and equality, any “likes” received by a post are applied to all of its collaborators and helps its performance in content feeds."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FeaturePoint, {
                title: "Collaborations",
                text: "Users can see and interact with content shared between them and other users under their collaborations. To start a collaboration, users can share content with others to start a collaboration. When all users respond or the time limit ends, eligible posts will become public"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/parrot/collaborations.png",
                classes: "h-[50vh] md:min-h-[400px] lg:h-[800px] max-w-[1100px] w-full flex self-center items-center justify-center px-16 lg:px-0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FeaturePoint, {
                title: "Collaborative Editing",
                text: "Content sharing is a cornerstone of today's social media. Users will be able to edit their own content, as well as content that has been share with them, using built-in editors."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/parrot/collab-editing.png",
                classes: "h-[50vh] md:min-h-[400px] lg:h-[800px] max-w-[1100px] w-full flex self-center items-center justify-center px-16 lg:px-0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FeaturePoint, {
                title: "Interest-cultivated Content",
                text: "The content automatically generated by the Parrot platform as a suggestion specific to each user, will adapt based on different posts and connections that a users express interest in (likes or follows)."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/parrot/interest-cultivation.png",
                classes: "bg-project-parrot-green-logo h-[75vh] md:min-h-[400px] lg:h-[800px] w-full mt-16 mb-10 py-24 items-center justify-center"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(InfoPoint, {
                textClasses: "text-project-parrot-green-text",
                title: "Functional Requirements Document",
                text: "I wrote a Functional Requirements Document (FRS) that works in conjunction with the visual components to detail the solution was produced. The document aids in the project's preparedness for moving into development, in addition to providing other benefits."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ImageSection, {
                path: "/images/projects/parrot/frd.png",
                classes: "h-[475px] md:min-h-[400px] w-full mt-16 mb-10 items-center justify-center"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full flex justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full max-w-[1100px] mt-20 mb-12 px-16 lg:px-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "font-itc text-5xl mb-4",
                        children: "Reflection"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col w-full items-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-[1100px] flex flex-col items-start w-full pb-40 px-16 lg:px-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-gothic font-light text-lg tracking-[0.02em] leading-10 mb-8",
                            children: "Something I learned from this project was that sometimes it's better not to reinvent the wheel. One of the concerns at the start of the project was being “different enough” from other social media platforms. Ultimately, the core feature concept for this project was unique enough in itself, so then the question was, how do we deliver it to the users?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-gothic font-light text-lg tracking-[0.02em] leading-10",
                            children: "When designing wireframes, my primary concern was making app intuitive for the user, so I chose to pull inspiration from existing social media applications and adapted it for functionality needed. This decision seemed to be positively reinforced by the full-color designs, which have a fresh look but have elements of familiarity, making it easy for the user to navigate correctly based on assumption."
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/common/Button.tsx + 1 modules
var Button = __webpack_require__(6184);
// EXTERNAL MODULE: ./components/common/GithubIcon.tsx
var GithubIcon = __webpack_require__(5424);
;// CONCATENATED MODULE: ./components/projects/galactor/GalactorPage.tsx







function GalactorPage(props) {
    const router = (0,router_.useRouter)();
    const themeCtx = (0,external_react_.useContext)(ThemeCtx/* default */.ZP);
    const overviewCategories = [
        "dates",
        "platforms",
        "role",
        "technologies"
    ];
    (0,external_react_.useEffect)(()=>{
        themeCtx.setBackgroundColor("#092636");
        themeCtx.setBackgroundIsDark(true);
        themeCtx.setIsFooterFixed(true);
        return ()=>{
            themeCtx.setIsFooterFixed(false);
            themeCtx.setBackgroundColor("#ffffff");
            themeCtx.setBackgroundIsDark(false);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full flex flex-col items-center bg-[#092636] text-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex w-full max-w-[1200px] h-auto py-20 px-4 lg:h-screen flex-col",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/images/projects/galactor/galactor.png",
                    alt: "Galactor Screenshot",
                    className: "border-[4px] border-slate-200 rounded-2xl",
                    width: 2400,
                    height: 1525,
                    priority: true
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col w-full h-full bg-[#EEF9FF] relative lg:p-40 px-8 pt-12 pb-16",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute w-auto flex flex-col md:-ml-8 left-0 top-0 mb-2 mt-2 font-gravesend font-bold leading-none -ml-8 tracking-[0.01em] text-stroke text-stroke-[1.5px] text-stroke-custom-gray-blue opacity-[14%] text-transparent text-[100px] sm:text-[120px] md:text-[280px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "",
                            children: "Galactor"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col lg:flex-row w-full max-w-6xl justify-between self-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col w-full lg:w-8/12",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "text-[#001723] font-itc text-5xl flex items-center mb-10",
                                        children: [
                                            "Overview ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "w-[360px] h-[1.5px] bg-[#001723] ml-7"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "prose mb-8",
                                        children: "The most recent release of a previously existing project, Galactor (version 3), brings a fresh, modern update to its former basic, interface."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "prose mb-8",
                                        children: "Historically, the Galactor project was intended to be a collaborative project, built by a team of approximately five individuals, for the purpose of coding (web development) practice, experience building, and keeping accountability. Through group ideation, the main concept for this project was determined:"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                        className: "prose mb-8",
                                        children: [
                                            "A platform where users can search ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "line-through",
                                                children: "and “nickname”"
                                            }),
                                            " stars based on a geographical location on Earth."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "prose mb-8",
                                        children: "To cut to the chase, that was the only thing the group did together on this project and it eventually turned into a personal project due to me being the only contributor. More on building the earlier versions can be read here. As a result, I chose to deviate from the original concept and omit the nickname feature."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "prose mb-8",
                                        children: "The lack of the nickname feature and minimalistic styling applied in the previous versions(s) always left more to be desired from the star search. Therefore, a primary goal for version 3 was to make it more enticing, either through incorporation of a new feature or through its design."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex w-full lg:w-4/12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "border-[#A5EAC8] bg-[#A5EAC8]/20 border-2 py-3 px-9 flex flex-col w-full h-min mt-[22px] max-w-[380px]",
                                    children: overviewCategories.map((key, i)=>{
                                        return Object.getOwnPropertyNames(props).includes(key) ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col mb-[30px] last:mb-4 text-custom-black first:mt-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    className: "tracking-wider font-gravesend font-bold text-[15px] mb-3 leading-none",
                                                    children: key === "dates" ? props.dates?.search(/[-]/) === -1 ? "Date" : key : key
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "font-light font-stolzl leading-7",
                                                    children: typeof props[key] === "string" ? props[key] : props[key]?.toString().split(",").join(", ")
                                                })
                                            ]
                                        }, `overview-category-${i}`) : undefined;
                                    }).filter((entry)=>entry)
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "py-20 px-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-full flex-col lg:flex-row mb-6 lg:pt-16",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col w-full lg:w-6/12",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                        className: "font-itc tracking-wide text-[22px] flex items-center mb-10",
                                        children: [
                                            "Determining Direction ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "hidden lg:flex w-[250px] h-[1.5px] ml-7"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "prose mb-8 text-slate-50",
                                        children: "The previous version provided the user with basic search functionality and was limited to displaying a max of 10 stars at a time."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "prose mb-8 text-slate-50",
                                        children: "Based on this, one concept I considered was showing searched locations on a 3D globe with its relative stars render around the model. After confirming this concept to be reasonably feasible to implement through the use of Globe.gl (built on Three.js), the choice for how to proceed with the new version was nearly made, although I did revisit my other concepts one more time."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex w-full lg:w-6/12 mb-8 lg:ml-8 lg:justify-end",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/projects/galactor/galactor-v2.png",
                                    alt: "Galactor v2",
                                    width: 474,
                                    height: 281
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-full flex-col prose max-w-6xl text-slate-50 mb-12",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "prose max-w-6xl mb-3 w-full text-slate-50",
                                children: [
                                    "Building the original concept and displaying stars in a navigable 3D outer space were also considered, but ultimately the globe was determined to be the strongest because:",
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "lg:columns-2 w-full",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mt-0 w-11/12 -ml-4",
                                        children: "It is highly recognizable and easy to understand (versus something like 3D outer space)"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "w-11/12 -ml-4",
                                        children: "It is a modern, intractable element (with a cool aesthetic) that users can engage with. "
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "w-11/12 -ml-4 lg:ml-0",
                                        children: [
                                            "It aids in building user confidence that the stars that are showing are indeed nearby them.",
                                            " "
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col lg:px-8 lg:pr-0 md:px-4",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex w-full flex-col lg:flex-row",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row lg:columns-2 w-full lg:w-5/12 lg:mb-24 self-end",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col w-full lg:w-6/12 my-12 lg:my-0 lg:-ml-[18px]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "font-itc tracking-wide text-[22px] flex items-center mb-10",
                                                    children: "New Features"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "prose text-slate-50 -ml-1",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Interactable 3D Globe"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Set star quantity"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Set star altitude"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col w-full lg:w-6/12 mb-24 lg:mb-0 lg:ml-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "font-itc tracking-wide text-[22px] flex items-center mb-10 whitespace-nowrap",
                                                    children: "New Technologies"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "prose text-slate-50 -ml-1",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "React.js"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Globe.gl (Three.js)"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: "Tailwind CSS"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex w-full h-auto lg:w-7/12 mb-8 lg:ml-20 lg:justify-end",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/images/projects/galactor/galactor-day.png",
                                        alt: "Galactor v3",
                                        className: "w-full h-auto",
                                        width: 1104,
                                        height: 640
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-full flex-col text-slate-50 mt-12",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                className: "text-white font-itc tracking-wide text-[22px] flex items-center mb-10",
                                children: [
                                    "The Build",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "hidden lg:flex w-[478px] h-[1.5px] bg-white ml-7"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "prose max-w-6xl mb-6 w-full text-slate-50",
                                children: "This version of Galactor is built for web using Node.js and Express.js framework to handle the backend with React.js and Tailwind CSS for the front-end. Additionally, for visualization, Globe.gl is used to render the interactive 3D globe and Aladin Lite to display the high-definition, also intractable, stars, and for location and geocoding, APIs under the Google Maps umbrella are used. The code is bundled using Webpack and Babel."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "prose max-w-6xl mb-10 w-full text-slate-50",
                                children: "Custom elements that I created or coded include the svg marker that is used as the location pin on the globe, conversion functions for celestial (i.e. outer space) versus geodetic (i.e. Earth) coordinates, the range sliders, and the 3D star object selected state."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                className: "w-full text-white font-itc tracking-wide text-[22px] flex items-center mt-12 lg:mt-[70px] mb-10",
                                children: [
                                    "Reflection ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "hidden lg:flex w-[468px] bg-white h-[1.5px] ml-7"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "prose max-w-6xl mb-6 w-full text-slate-50",
                                children: "Writing this version update was more satisfying and refreshing than I expected it to be. I believe this to be because I never brought version 2 up to its fullest potential, therefore it did not reflect my usual or best work, so this has finally redeemed that. It took a few hours over the span of two days to create this new version of Galactor. Being as I cannot think of any practical uses for this project, I feel that the project features are appropriate as they currently are, so this is likely to be the final version of this project unless some other opportunity or use for it presents itself."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "prose max-w-6xl mb-20 w-full text-slate-50",
                                children: "The code repository is public and available, should anyone want to use it for any reason (links available below)."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col w-full lg:flex-row mb-20",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                onClick: ()=>{
                                    if (router && props?.url?.live) {
                                        router.push(props.url.live);
                                    }
                                },
                                label: "Visit live site",
                                showArrow: true,
                                className: "bg-logo-blue max-w-[250px] mr-16 hover:text-opacity-80 hover:brightness-[.9] text-white py-2.5 px-6 inline-flex flex-auto font-stolzl text-lg mb-4 lg:mb-0"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                onClick: ()=>{
                                    if (router && props?.url?.github) {
                                        router.push(props.url.github);
                                    }
                                },
                                label: "Github",
                                icon: ()=>/*#__PURE__*/ jsx_runtime_.jsx(GithubIcon/* GithubIcon */.E, {
                                        className: "text-white w-6 h-6 mr-3 group-hover:text-opacity-80"
                                    }),
                                showArrow: true,
                                className: "bg-logo-blue max-w-[250px] group hover:text-opacity-80 hover:brightness-[.9] text-white py-2.5 px-6 inline-flex flex-auto font-stolzl text-lg"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./lib/data/projects.ts
var projects = __webpack_require__(3407);
;// CONCATENATED MODULE: ./pages/projects/[projectId].tsx








const projectPages = {
    sinpin: SinPinPage,
    "parrot-social": ParrotProjectPage,
    galactor: GalactorPage
};
function Projects(props) {
    const themeCtx = (0,external_react_.useContext)(ThemeCtx/* default */.ZP);
    const Component = projectPages[props.projectId];
    const projectIndex = projects/* projects.findIndex */.q.findIndex((p)=>p.id === props.projectId);
    const prevProject = projectIndex === 0 ? projects/* projects */.q[projects/* projects.length */.q.length - 1] : projects/* projects */.q[projectIndex - 1];
    const nextProject = projectIndex + 1 === projects/* projects.length */.q.length ? projects/* projects.0 */.q[0] : projects/* projects */.q[projectIndex + 1];
    const cardColors = {
        "#CF0008": "border-[3px] border-[#CF0008] text-[#CF0008] hover:bg-[#CF0008] hover:text-white hover:brightness-105 hover:cursor-pointer",
        "#E51B22": "border-[3px] border-[#E51B22] text-[#E51B22] hover:bg-[#E51B22] hover:text-white hover:brightness-105 hover:cursor-pointer",
        "#092636": "border-[3px] border-[#092636] text-[#092636] hover:bg-[#092636] hover:text-white hover:brightness-105 hover:cursor-pointer",
        "#1C3E51": "border-[3px] border-[#1C3E51] text-[#1C3E51] hover:bg-[#1C3E51] hover:text-white hover:brightness-105 hover:cursor-pointer",
        "#06D378": "border-[3px] border-[#06D378] text-[#06D378] hover:bg-[#06D378] hover:text-white hover:brightness-105 hover:cursor-pointer",
        "#00C86F": "border-[3px] border-[#00C86F] text-[#00C86F] hover:bg-[#00C86F] hover:text-white hover:brightness-105 hover:cursor-pointer"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...props,
                ...projects/* projects */.q[projectIndex],
                dates: (0,projects/* getPreviewDateString */.Vn)(projects/* projects */.q[projectIndex].dates)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `w-full flex pb-20 ${themeCtx.footerColorClass}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: prevProject.href,
                        className: `w-6/12 px-12 items-center flex flex-col`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `w-8/12 pl-[72px] py-12 self-end ${prevProject.preview ? cardColors[prevProject.preview.colors.overlay] : ""} `,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xl",
                                    children: "Previous Project"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-3xl capitalize font-gravesend",
                                    children: prevProject.name
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: nextProject.href,
                        className: `w-6/12 px-12 flex flex-col`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `w-8/12 pl-[72px] py-12 ${nextProject.preview ? cardColors[nextProject.preview.colors.overlay] : ""}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xl",
                                    children: "Next Project"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-3xl capitalize font-gravesend",
                                    children: nextProject.name
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    projectId: "parrot-social"
                }
            },
            {
                params: {
                    projectId: "sinpin"
                }
            },
            {
                params: {
                    projectId: "galactor"
                }
            }
        ],
        fallback: "blocking"
    };
}
async function getStaticProps(context) {
    const projectId = context.params.projectId;
    if (Object.keys(projectPages).includes(projectId.toLowerCase())) {
        return {
            props: {
                projectId
            }
        };
    } else {
        return {
            notFound: true
        };
    }
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,798,407,424], () => (__webpack_exec__(1274)));
module.exports = __webpack_exports__;

})();