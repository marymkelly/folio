"use strict";
exports.id = 930;
exports.ids = [930];
exports.modules = {

/***/ 3930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AboutPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./lib/classes/canvas.ts + 1 modules
var classes_canvas = __webpack_require__(3686);
;// CONCATENATED MODULE: ./lib/data/timeline.ts
const timelineData = [
    {
        year: 2011,
        title: "Off to College",
        summary: "Began pursuing an undergraduate degree at the Florida State University.",
        image: {
            src: "/images/timeline/fsu-watercolor-opaque.png",
            alt: "Watercolor of FSU/'s Wescott Fountain",
            dimensions: {
                height: 180,
                width: 376
            },
            className: "opacity-60 w-auto"
        }
    },
    {
        year: 2012,
        title: "First-time Coding",
        summary: "I first started to learn how program in C++ by taking the 'Intro to C++' (and later 'Object Oriented Programming') course(s) through my University."
    },
    {
        year: 2014,
        title: "",
        summary: "Took a web development class and extended coding knowledge in the direcion of web languages."
    },
    {
        year: 2014,
        title: "Practical Experience",
        summary: `Started fall internship with a startup company named Student Opportunity Center (SOC), Inc., where I was able to apply my skills and gain more exposure to web-related products and programming.`,
        image: {
            src: "/images/timeline/SOC.png",
            alt: "Student Opportunity Center Original Logo",
            dimensions: {
                height: 75,
                width: 75
            },
            className: "h-auto bg-blend-multiply"
        }
    },
    {
        year: 2014,
        title: "Career Choice",
        summary: "My experiences that semester revealed a genuine interest and led me to my resolve of pursuing a career path in software development and/or the field of human-computer interaction."
    },
    {
        year: 2015,
        title: "First Web Development Job",
        summary: "Stayed on with SOC as a web developer; a position extended to me near end of my internship",
        image: {
            src: "/images/timeline/SOC2-transparent.png",
            alt: "Student Opportunity Center Updated Logo",
            dimensions: {
                height: 75,
                width: 75
            },
            className: "h-auto bg-blend-multiply"
        }
    },
    {
        year: 2015,
        title: "B.S. Sociology",
        summary: "Graduated with a Bachelor of Science in Sociology with a minor in Psychology.",
        image: {
            src: "/images/timeline/gradcap.png",
            alt: "Image of Graduation Cap",
            dimensions: {
                height: 60.3,
                width: 90
            },
            className: "w-auto"
        }
    },
    {
        year: 2016,
        title: "More Web Development Experience",
        summary: "Contract job as a web application at the National High Manget Laboratory.",
        image: {
            src: "/images/timeline/maglab-transparent.png",
            alt: "National High Magnet Laboratory Logo",
            dimensions: {
                height: 59.2,
                width: 200
            },
            className: "h-auto"
        }
    },
    {
        year: 2016,
        title: "Left Student Opportunity Center",
        summary: "Even thought the company relocated late 2015 and I did not move with them, I continued working remote for them until eventually leaving late 2016."
    },
    {
        year: 2017,
        title: "Time for a Move",
        summary: "After difficulty finding new opportunities to work in tech where I lived, I decided to move back to my hometown of Stuart, FL for a fresh start and to figure out how to advance towards my career goals."
    },
    {
        year: 2017,
        title: "Back to School",
        summary: "Decided that going back to school would be advantageous for my goals of working in software development or human-computer interaction and started taking classes again."
    },
    {
        year: 2018,
        title: "Business Analysis Intern",
        summary: "Began a business analysis internship with custom software development company, Mercury Development",
        image: {
            src: "/images/timeline/mercury.png",
            alt: "Mercury Development Logo",
            dimensions: {
                height: 75,
                width: 100
            },
            className: "h-auto"
        }
    },
    {
        year: 2019,
        title: "Hired as a Business Analyst",
        summary: "Transitioned into full-time role as a Business Analyst with, Mercury Development",
        image: {
            src: "/images/timeline/mercury.png",
            alt: "Mercury Development Logo",
            dimensions: {
                height: 75,
                width: 100
            },
            className: "h-auto"
        }
    },
    {
        year: 2020,
        title: "",
        summary: "Started actively coding in free-time and reignited my love for coding."
    },
    {
        year: 2021,
        title: "Digital Arts Degree",
        summary: "Accepted by the University of Florida to pursue a second bachelor's in Digital Arts and Science and started attending in August 2021.",
        image: {
            src: "/images/timeline/uf-watercolor.png",
            alt: "Watercolor of UF/'s Century Tower",
            dimensions: {
                height: 200,
                width: 358
            },
            className: "opacity-60 w-auto"
        }
    },
    {
        year: 2022,
        title: "Lead Developer",
        summary: "After working for as a BA for four years, I decided to leave Mercury Development and accepted a new role working as the full-time lead developer for a telecomunications company, Sin Pin.",
        image: {
            src: "/images/timeline/sinpin.png",
            alt: "Sin Pin Logo",
            dimensions: {
                height: 20,
                width: 150
            },
            className: "h-auto"
        }
    }
];

;// CONCATENATED MODULE: ./components/about/timeline/VerticalYears.tsx


function VerticalYears(props) {
    const [percentTranslate, setPercentTranslate] = (0,external_react_.useState)(0);
    const translateClass = {
        0: "-translate-y-0",
        100: "-translate-y-100",
        200: "-translate-y-200",
        300: "-translate-y-300",
        400: "-translate-y-400",
        500: "-translate-y-500",
        600: "-translate-y-600",
        700: "-translate-y-700",
        800: "-translate-y-800",
        900: "-translate-y-900",
        1000: "-translate-y-1000",
        1100: "-translate-y-1100",
        1200: "-translate-y-1200"
    };
    (0,external_react_.useEffect)(()=>{
        if (props.activeTick !== undefined) {
            let offset = Math.abs(props.activeTick * 100);
            if (percentTranslate !== offset) {
                setPercentTranslate(offset);
            }
        }
    }, [
        props.activeTick,
        props.ticks,
        percentTranslate
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `h-full transition-all duration-300 ${translateClass[percentTranslate.toString()]}`,
        children: props.years.map((year, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: `year-${i}`,
                className: `h-full min-h-[234px] flex justify-center items-center`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "-mt-1.5",
                    children: year
                })
            }, `year-${i}`))
    });
}

;// CONCATENATED MODULE: ./components/about/timeline/Tickmark.tsx


function Tickmark(props) {
    const active = props.activeIndex === props.index;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: `tick-${props.index}`,
        className: `w-14 h-14 left-[${props.percent - 8}%] flex group items-center justify-center`,
        onClick: ()=>props.setActiveTick(props.index),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${active ? "w-2 h-2 rotate-45 bg-custom-teal mb-1" : `w-[5px] rounded-full h-[5px] mb-1 ${props.activeIndex >= props.index ? "opacity-70 bg-logo-teal" : "bg-slate-300"}`} group-hover:h-[22px] group-hover:w-[22px] group-hover:border-[1.5px] group-hover:rounded-full group-hover:opacity-100 transition-all group-hover:border-custom-teal group-hover:bg-[#F1F6F9]`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: `${active ? "text-sm" : "text-xs"} ml-1 group-hover:text-sm hidden`,
                children: props.year.toString().slice(2)
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/timeline/ArrowControls.tsx

function ArrowControls() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        id: "arrow-controls",
        className: "fill-custom-gray-blue/80",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 355.64 235.02",
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            id: "Layer_1-2",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "opacity-60",
                        d: "m230.11,114.18h-104.58c-2.65,0-4.8-2.15-4.8-4.8V4.8c0-2.65,2.15-4.8,4.8-4.8h104.58c2.65,0,4.8,2.15,4.8,4.8v104.58c0,2.65-2.15,4.8-4.8,4.8ZM125.53,2.4c-1.32,0-2.4,1.08-2.4,2.4v104.58c0,1.32,1.08,2.4,2.4,2.4h104.58c1.32,0,2.4-1.08,2.4-2.4V4.8c0-1.32-1.08-2.4-2.4-2.4h-104.58Z"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                id: "right-arrow-container",
                                className: "peer group",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        id: "arrow-controls-right",
                                        x: "243.86",
                                        y: "123.24",
                                        width: "109.38",
                                        height: "109.38",
                                        rx: "2.4",
                                        ry: "2.4",
                                        className: "group-[.pressed]:fill-logo-blue fill-none opacity-70"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        className: "group-[.pressed]:fill-custom-navy group-[.pressed]:opacity-70",
                                        d: "m350.84,235.02h-104.58c-2.65,0-4.8-2.15-4.8-4.8v-104.58c0-2.65,2.15-4.8,4.8-4.8h104.58c2.65,0,4.8,2.15,4.8,4.8v104.58c0,2.65-2.15,4.8-4.8,4.8Zm-104.58-111.78c-1.32,0-2.4,1.08-2.4,2.4v104.58c0,1.32,1.08,2.4,2.4,2.4h104.58c1.32,0,2.4-1.08,2.4-2.4v-104.58c0-1.32-1.08-2.4-2.4-2.4h-104.58Z"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "peer-[.pressed]:fill-custom-navy group-[.pressed]:opacity-70",
                                d: "m309.68,179.04l-8.08,8.06c-.34.32-.7.46-1.08.46-.84,0-1.46-.61-1.46-1.44,0-.42.15-.8.42-1.06l2.13-2.17,4.07-3.69-2.98.21h-14.31c-.89,0-1.5-.61-1.5-1.5s.61-1.5,1.5-1.5h14.31l2.98.21-4.07-3.69-2.13-2.15c-.27-.27-.42-.65-.42-1.08,0-.82.61-1.41,1.46-1.41.38,0,.74.15,1.08.46l8.08,8.04c.32.32.51.72.51,1.12s-.19.82-.51,1.12Z"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "opacity-60",
                        d: "m230.11,235.02h-104.58c-2.65,0-4.8-2.15-4.8-4.8v-104.58c0-2.65,2.15-4.8,4.8-4.8h104.58c2.65,0,4.8,2.15,4.8,4.8v104.58c0,2.65-2.15,4.8-4.8,4.8Zm-104.58-111.78c-1.32,0-2.4,1.08-2.4,2.4v104.58c0,1.32,1.08,2.4,2.4,2.4h104.58c1.32,0,2.4-1.08,2.4-2.4v-104.58c0-1.32-1.08-2.4-2.4-2.4h-104.58Z"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                id: "left-arrow-container",
                                className: "peer group",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        id: "arrow-controls-left",
                                        x: "2.4",
                                        y: "123.24",
                                        width: "109.38",
                                        height: "109.38",
                                        rx: "2.4",
                                        ry: "2.4",
                                        className: "group-[.pressed]:fill-logo-blue fill-none opacity-70"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        className: "group-[.pressed]:fill-custom-navy group-[.pressed]:opacity-70",
                                        d: "m109.38,235.02H4.8c-2.65,0-4.8-2.15-4.8-4.8v-104.58c0-2.65,2.15-4.8,4.8-4.8h104.58c2.65,0,4.8,2.15,4.8,4.8v104.58c0,2.65-2.15,4.8-4.8,4.8ZM4.8,123.24c-1.32,0-2.4,1.08-2.4,2.4v104.58c0,1.32,1.08,2.4,2.4,2.4h104.58c1.32,0,2.4-1.08,2.4-2.4v-104.58c0-1.32-1.08-2.4-2.4-2.4H4.8Z"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                className: "peer-[.pressed]:fill-custom-navy group-[.pressed]:opacity-70",
                                d: "m45.94,176.8l8.1-8.04c.32-.32.68-.46,1.06-.46.84,0,1.48.59,1.48,1.41,0,.42-.17.8-.44,1.08l-2.11,2.15-4.07,3.69,2.95-.21h14.31c.91,0,1.52.61,1.52,1.5s-.61,1.5-1.52,1.5h-14.31l-2.98-.21,4.09,3.69,2.11,2.17c.27.25.44.63.44,1.06,0,.82-.63,1.44-1.48,1.44-.38,0-.74-.15-1.06-.46l-8.1-8.06c-.32-.3-.49-.72-.49-1.12s.17-.8.49-1.12Z"
                            })
                        ]
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./lib/constants.ts
var constants = __webpack_require__(8038);
// EXTERNAL MODULE: ./lib/utils/animation.ts
var animation = __webpack_require__(6693);
;// CONCATENATED MODULE: ./components/about/timeline/WalkJourney.tsx











function ExperienceJourney() {
    const router = (0,router_.useRouter)();
    const [ticks, setTicks] = (0,external_react_.useState)([]);
    const [years, setYears] = (0,external_react_.useState)([]);
    const [percentage, setPercentage] = (0,external_react_.useState)(0);
    const [activeTick, setActiveTick] = (0,external_react_.useState)(0);
    const [activeEvent, setActiveEvent] = (0,external_react_.useState)();
    const canvasRef = (0,external_react_.useRef)(null);
    const canvasControllerRef = (0,external_react_.useRef)();
    const timelineRef = (0,external_react_.useRef)(null);
    const timelineBlurbRef = (0,external_react_.useRef)(null);
    const [canvasDimensions, setCanvasDimensions] = (0,external_react_.useState)({
        width: 4000,
        height: 400
    });
    function generateTimelineTicks() {
        const timelineTicks = [];
        const yearsArr = [];
        const eventData = [
            ...timelineData
        ];
        for(let i = 0; i < 12; i++){
            const yearEvents = [];
            const yr = 2011 + i;
            const percent = 8 * (i + 1);
            while(eventData?.length > 0 && eventData[0].year === yr){
                const event = eventData.shift();
                yearEvents.push(event);
            }
            const eventPercentInverval = Math.floor(8 / yearEvents.length);
            const eventPercentSpace = Math.floor((Math.floor(8 / yearEvents.length) - Math.floor(8 / yearEvents.length + 1)) / yearEvents.length);
            for(let j = 0; j < yearEvents.length; j++){
                const eventPercent = 8 * i + eventPercentInverval * (j + 1) - eventPercentSpace * (j + 1);
                yearEvents[j] = {
                    ...yearEvents[j],
                    percent: eventPercent
                };
            }
            const tick = {
                year: yr,
                percent,
                index: i,
                events: yearEvents
            };
            yearsArr.push(yr);
            timelineTicks.push(tick);
        }
        if (yearsArr.length > 0) setYears(yearsArr);
        setTicks(timelineTicks);
    }
    // INIT
    (0,external_react_.useEffect)(()=>{
        let canvasHeight = 400;
        let canvasWidth = Math.floor(window.visualViewport.width * 2 * 0.85);
        let ctx;
        let canvas;
        canvasRef.current.width = canvasWidth;
        canvasRef.current.height = canvasHeight;
        setCanvasDimensions({
            height: canvasHeight,
            width: canvasWidth
        });
        if (!canvasControllerRef.current) {
            ctx = canvasRef.current.getContext("2d");
            canvas = new classes_canvas/* CanvasController */.G(canvasWidth, canvasHeight, "/images/sprites/Sprite_Board_Extended.png", constants/* timelineAnimations */.J);
            canvas.listeners = animation/* input.saga */.q.saga(window);
            canvas.update = animation/* update.saga */.V.saga;
            canvas.timeline = timelineRef.current;
            canvas.timelineInformation = timelineBlurbRef.current;
            canvas.setPercent = (num)=>{
                setPercentage(num);
            };
            canvasControllerRef.current = canvas;
            animate();
            generateTimelineTicks();
        }
        function animate(timestamp) {
            if (timestamp !== canvasControllerRef.current.lastAnimation) {
                ctx.clearRect(0, 0, Math.floor(window.visualViewport.width * 2 * 0.85), canvasDimensions.height);
                canvas.render(ctx, timestamp);
            }
            requestAnimationFrame(animate);
        }
        function resizeCanvas() {
            setCanvasDimensions({
                height: canvasHeight,
                width: Math.floor(window.visualViewport.width * 2 * 0.85)
            });
            if (window.visualViewport.height < 728) {
                document.getElementById("blurbContainer").classList.remove("top-[15%]");
                document.getElementById("blurbContainer").classList.add("top-[2%]");
            } else {
                document.getElementById("blurbContainer").classList.add("top-[15%]");
                document.getElementById("blurbContainer").classList.remove("top-[2%]");
            }
        }
        const handleRouteChange = ()=>{
            if (canvasControllerRef.current) {
                canvasControllerRef.current.remove();
            }
        };
        router.events.on("routeChangeStart", handleRouteChange);
        window.addEventListener("resize", resizeCanvas);
        return ()=>{
            window.removeEventListener("resize", resizeCanvas);
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);
    // CONTROL RESIZE
    (0,external_react_.useEffect)(()=>{
        canvasRef.current.width = Math.floor(window.visualViewport.width * 2 * 0.85);
        canvasRef.current.height = canvasDimensions.height;
        canvasControllerRef.current.resize(canvasDimensions);
        canvasRef.current?.getContext("2d").clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);
    }, [
        canvasDimensions
    ]);
    // CALCULATE NEAREST TICK/EVENT
    (0,external_react_.useEffect)(()=>{
        const nearIndex = (percentage - percentage % 8) / 8;
        const activeIndex = nearIndex >= 11 ? 11 : nearIndex;
        const indexEvents = ticks[activeIndex]?.events;
        let currentEvent = null;
        if (indexEvents && indexEvents?.length > 0 && percentage > 0) {
            for (let e of indexEvents){
                if (Math.abs(e.percent - percentage) <= Math.floor(8 / indexEvents.length + 1)) {
                    currentEvent = e;
                }
            }
        }
        if (timelineBlurbRef.current) {
            const infoStyles = window.getComputedStyle(timelineBlurbRef.current);
            const infoWidth = Number.parseFloat(infoStyles.width.slice(0, -2));
            const screenWidth = window.visualViewport.width;
            const infoMinPercentX = 10;
            const infoMaxPercentX = Math.floor((screenWidth - 70 - infoWidth) / screenWidth * 100);
            const infoXPixels = percentage / 100 * (infoMaxPercentX - infoMinPercentX) / 100 * screenWidth;
            const multiplier = (infoXPixels - infoXPixels % infoWidth) / infoWidth;
            const translatePercent = 100 * multiplier + Math.floor((infoXPixels - multiplier * infoWidth) / infoWidth * 100);
            timelineBlurbRef.current.animate([
                {
                    transform: `translateX(${translatePercent}%)`
                }
            ], {
                duration: 100,
                iterations: 1
            });
            timelineBlurbRef.current.style.transform = `translateX(${translatePercent}%)`;
        }
        setActiveEvent(currentEvent);
        setActiveTick(activeIndex);
    }, [
        percentage
    ]);
    // PORTAL ANIMATION
    (0,external_react_.useEffect)(()=>{
        if (ticks.length > 0) {
            canvasControllerRef.current.activeTick = !canvasControllerRef.current.activeTick ? ticks[0] : ticks[activeTick];
            const currentX = canvasControllerRef.current.sprite.x;
            const xPos = Math.floor(ticks[activeTick].percent / 100 * (canvasControllerRef.current.width - 300));
            const differenceX = xPos - currentX;
            if (canvasControllerRef.current.currentKeys.length === 0) {
                const animation = Math.sign(differenceX) < 0 ? "portal_entry_left" : "portal_entry_right";
                canvasControllerRef.current.sprite.setAnimation(animation);
            }
        }
    }, [
        activeTick,
        ticks
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " lg:flex min-h-[800px] w-full flex-col flex-1 relative bg-[#5eadcc] bg-opacity-[10%]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-6/12 lg:w-[30%] absolute ml-24 mt-16",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: `font-itc font-bold md:whitespace-nowrap text-7xl tracking-wide mb-8 transition-all duration-500 delay-100 ${canvasControllerRef?.current?.sprite && canvasControllerRef?.current?.sprite.x > 50 ? "text-custom-navy opacity-[10%]" : "text-custom-black"}`,
                        children: "My Journey"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: `font-itc text-sm font-medium tracking-[0.021em] transition-all duration-500 delay-100 ${canvasControllerRef?.current?.sprite && canvasControllerRef?.current?.sprite.x > 50 ? "text-custom-navy opacity-0" : "text-custom-black"}`,
                        children: "A overview of events leading up to the current year. Use left and right arrow keys to navigate timeline."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "blurbContainer",
                className: "w-full h-[38%] absolute top-[0%]",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full min-h-[400px] h-full overflow-hidden flex flex-col justify-end flex-auto relative",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        ref: timelineBlurbRef,
                        className: `w-full max-w-[450px] ${activeEvent ? "translate-y-0 bg-[#71E3DC] bg-opacity-[20%]" : "translate-y-[140%]"} h-auto flex flex-col p-8 absolute left-[10%] transition-all`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `self-end font-stolzl tracking-wide text-custom-gray-blue opacity-60 absolute ${!activeEvent?.image ? !activeEvent?.title ? "-mt-3" : "-mt-2" : ""}`,
                                children: activeEvent?.year
                            }),
                            activeEvent?.image && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mb-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: !activeEvent.image?.className ? "w-auto" : `${activeEvent.image.className}`,
                                    src: activeEvent.image.src,
                                    alt: activeEvent.image.alt,
                                    width: activeEvent.image.dimensions.width,
                                    height: activeEvent.image.dimensions.height
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: !activeEvent?.image ? !activeEvent?.title ? "pt-4" : "pt-2" : "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: `mb-3 font-bold font-gravesend text-lg ${!activeEvent?.title && "hidden"}`,
                                        children: activeEvent?.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-gothic leading-6 tracking-[0.018em]",
                                        children: activeEvent?.summary
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-[15%] absolute left-8 h-[90%] items-center justify-end flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "max-w-[180px] h-auto w-5/12 self-center flex flex-col items-center justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowControls, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-xs mt-3 text-custom-gray-blue/75",
                        children: "Use Left and Right Arrow Keys Navigate"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full h-auto absolute bottom-[15%] mb-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute h-full w-[15%] left-12 xl:left-9 2xl:left-2 items-end justify-items-center flex flex-col text-8xl overflow-y-clip outline-text text-transparent",
                        children: years.length === 12 && /*#__PURE__*/ jsx_runtime_.jsx(VerticalYears, {
                            percentage: percentage,
                            activeTick: activeTick,
                            ticks: ticks,
                            years: years
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative flex flex-col items-end justify-items-end h-full w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "sm:min-w-[520px] sm:max-w-[550px] sm:w-[65%] md:min-w-[700px] md:max-w-[800px] md:w-[75%] lg:w-[78%] lg:min-w-[800px] lg:max-w-[1000px] xl:w-[calc(85%-50px)] xl:pl-[25px] xl:pr-[25px] xl:max-w-none self-end flex justify-between h-auto absolute flex-1 top-[207px] z-10",
                                children: ticks.length === 12 && ticks.map((tick, i)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx(Tickmark, {
                                        ...tick,
                                        activeIndex: activeTick,
                                        setActiveTick: setActiveTick
                                    }, i);
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-[85%] self-end",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-full flex flex-col-reverse items-end justify-end",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "timelineContainer",
                                            className: "w-[95%] h-0.5 bg-slate-300 self-end flex justify-between rounded-full",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                ref: timelineRef,
                                                className: "h-0.5 bg-custom-teal rounded-full w-full"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-full h-auto flex pt-8",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex flex-col items-center w-full",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("canvas", {
                                                    ref: canvasRef,
                                                    id: "canvas",
                                                    className: `w-[${Math.floor(canvasDimensions.width / 2).toString()}px] h-[200px] border-none border-custom-gray-blue border-[1px]`
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./context/ThemeCtx.tsx
var ThemeCtx = __webpack_require__(1798);
;// CONCATENATED MODULE: ./components/about/tools/after-effects.tsx


function AfterEffectsIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: props.className,
        version: "1.1",
        viewBox: "0 0 240 234",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            id: "vlpa",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    id: "vlpb",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        id: "vlpc",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                            id: "vlpd",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#00005B",
                                d: "M42.5,0h155C221,0,240,19,240,42.5v149c0,23.5-19,42.5-42.5,42.5h-155C19,234,0,215,0,191.5v-149 C0,19,19,0,42.5,0z"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    id: "vlpe",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        id: "vlpf",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#9999FF",
                                d: "m96.4 140h-37.2l-7.6 23.6c-0.2 0.9-1 1.5-1.9 1.4h-18.8c-1.1 0-1.4-0.6-1.1-1.8l32.2-92.3c0.3-1 0.6-1.9 1-3.1 0.4-2.1 0.6-4.3 0.6-6.5-0.1-0.5 0.3-1 0.8-1.1h0.3 25.6c0.7 0 1.2 0.3 1.3 0.8l36.5 102c0.3 1.1 0 1.6-1 1.6h-20.9c-0.7 0.1-1.4-0.4-1.6-1.1l-8.2-24zm-31.4-19.9h25.4c-0.6-2.1-1.4-4.6-2.3-7.2-0.9-2.7-1.8-5.6-2.7-8.6-1-3.1-1.9-6.1-2.9-9.2s-1.9-6-2.7-8.9c-0.8-2.8-1.5-5.4-2.2-7.8h-0.2c-0.9 4.3-2 8.6-3.4 12.9-1.5 4.8-3 9.8-4.6 14.8-1.3 5.1-2.9 9.8-4.4 14z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#9999FF",
                                d: "m187 131h-31.7c0.4 3.1 1.4 6.2 3.1 8.9 1.8 2.7 4.3 4.8 7.3 6 4 1.7 8.4 2.6 12.8 2.5 3.5-0.1 7-0.4 10.4-1.1 3.1-0.4 6.1-1.2 8.9-2.3 0.5-0.4 0.8-0.2 0.8 0.8v15.3c0 0.4-0.1 0.8-0.2 1.2-0.2 0.3-0.4 0.5-0.7 0.7-3.2 1.4-6.5 2.4-10 3-4.7 0.9-9.4 1.3-14.2 1.2-7.6 0-14-1.2-19.2-3.5-4.9-2.1-9.2-5.4-12.6-9.5-3.2-3.9-5.5-8.3-6.9-13.1-1.4-4.7-2.1-9.6-2.1-14.6 0-5.4 0.8-10.7 2.5-15.9 1.6-5 4.1-9.6 7.5-13.7 3.3-4 7.4-7.2 12.1-9.5s10.3-3.1 16.7-3.1c5.3-0.1 10.6 0.9 15.5 3.1 4.1 1.8 7.7 4.5 10.5 8 2.6 3.4 4.7 7.2 6 11.4 1.3 4 1.9 8.1 1.9 12.2 0 2.4-0.1 4.5-0.2 6.4-0.2 1.9-0.3 3.3-0.4 4.2-0.1 0.7-0.7 1.3-1.4 1.3-0.6 0-1.7 0.1-3.3 0.2-1.6 0.2-3.5 0.3-5.8 0.3s-4.7-0.4-7.3-0.4zm-31.7-14.6h21.1c2.6 0 4.5 0 5.7-0.1 0.8-0.1 1.6-0.3 2.3-0.8v-1c0-1.3-0.2-2.5-0.6-3.7-1.8-5.6-7.1-9.4-13-9.2-5.5-0.3-10.7 2.6-13.3 7.6-1.2 2.3-1.9 4.7-2.2 7.2z"
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/about/tools/balsamiq.tsx


function BalsamiqIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: props.className,
        id: "Layer_2",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 987.74 1036.05",
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            id: "Layer_1-2",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "m985.19,474.32c-2.04-14.88-3.66-29.8-6.23-44.62-4.61-26.64-11.79-52.54-20.87-78-5.46-15.29-11.69-30.23-18.62-44.88-8.14-17.17-17.36-33.77-27.53-49.85-27.47-43.4-60.98-81.46-100.36-114.4-12.78-10.7-26.87-19.71-39.71-30.25-20.15-16.54-41.95-30.27-64.89-42.45-20.95-11.11-42.87-20.13-64.25-30.33-12.71-6.07-25.79-11.38-38.37-17.71-11.33-5.7-22.19-12.32-33.26-18.51-2.87-1.61-5.83-3.03-9.2-3.21-10.32-.55-20.34.87-30.05,4.42-9.88,3.61-19.62,7.56-27.48,14.82-4.9,4.52-4.59,6.19,1.08,9.6,3.87,2.33,7.76,4.61,11.64,6.91-7.99,1.66-15.69,1.37-23.36,2.11-13.47,1.29-27.07,1.23-40.57,2.33-5.28.43-10.57.52-15.83.97-16.99,1.46-33.96,3.24-50.94,4.91-5.91.57-11.82,1.1-17.71,1.79-11.57,1.35-23.09,3.14-34.69,4.1-9.34.78-18.54,2.43-27.8,3.72-10.12,1.42-20.13,3.61-30.23,5.27-15.31,2.52-30.42,5.91-44.89,11.55-27.98,10.88-52.05,27.84-73.46,48.67-33.27,32.38-58.38,70.57-79.13,111.83-6.04,11.99-11.53,24.24-17.05,36.48-5.22,11.6-9.16,23.66-13.76,35.48-7.36,18.94-13.16,38.37-18.43,57.92-5.2,19.28-9.78,38.75-13.49,58.41-2.74,14.56-5.65,29.09-7.61,43.76-1.66,12.5-2.83,25.08-4.4,37.58-2.23,17.73-3.11,35.5-3.49,53.26-.5,23.07-.24,46.17.61,69.26.5,13.54,1.73,26.94,3.07,40.39,1.82,18.24,4.69,36.33,8.36,54.23,4.78,23.32,10.79,46.34,18.78,68.86,7.63,21.5,16.8,42.2,27.75,62.16,8.4,15.32,18.09,29.79,29.03,43.4,29.4,36.62,65.26,65.41,106.58,87.56,12.26,6.57,24.81,12.57,37.58,18.04,11.83,5.07,24.16,8.87,36.36,12.95,13.61,4.56,27.51,7.94,41.47,11.06,16.23,3.63,32.59,6.42,49.17,8.27,13.42,1.49,26.89,3.42,40.29,3.47,23.35.09,46.71,1.41,70.13-1.32,13.18-1.54,26.58-1.84,39.85-3.43,17.89-2.13,35.61-5.26,53.12-9.28,26.71-6.12,53.15-13.27,78.98-22.58,24.02-8.65,47.55-18.39,70.37-29.82,51.39-25.72,98.18-57.98,139.13-98.48,40.62-40.18,72.86-86.08,95.4-138.72,9.73-22.71,16.74-46.21,22.82-70.09,4.35-17.11,8.08-34.32,10.87-51.75,1.66-10.35,3.38-20.66,4.07-31.16.75-11.27,3.36-22.47,3.47-33.72.24-23.66.93-47.32-2.32-70.98Zm-69.63,28.24c-.36,18.64-2.28,37.17-4.45,55.7-1.25,10.78-2.71,21.53-4.7,32.16-2.38,12.74-5.9,25.29-9.26,37.84-7.34,27.45-16.77,54.18-28.7,79.99-27.24,58.97-63.4,111.61-111.56,155.56-37.31,34.06-79.41,60.31-127.43,76.6-19.5,6.61-39.47,11.71-59.69,15.28-16.3,2.87-32.82,4.64-49.33,6.4-27.51,2.93-55.06,2.15-82.56,1.58-15.85-.33-31.74-2.33-47.55-4.5-21.97-3.01-43.75-6.77-65.24-12.25-19.79-5.04-39.19-11.19-58.22-18.66-39.17-15.38-75.38-35.57-106.59-64.11-16.21-14.82-29.91-31.67-41.03-50.67-10.16-17.37-18.3-35.6-24.97-54.57-4.79-13.65-9.44-27.38-12.69-41.43-3.39-14.59-6.32-29.32-8.72-44.16-2.34-14.53-4.12-29.11-5.68-43.71-2.31-21.6-2.5-43.34-2.09-65.07,0-12.49-.66-25.03.2-37.47.73-10.64,1.47-21.31,2.51-31.95,1.02-10.27,2.41-20.5,3.36-30.78.82-8.91,2.39-17.76,3.99-26.58,2.89-15.97,5.86-31.92,9.86-47.67,5.03-19.77,10.49-39.41,17.11-58.7,9.08-26.47,20.36-52.09,34.15-76.35,21.73-38.22,48.33-72.51,85.76-97.09,18.68-12.27,39.4-20.07,60.11-27.88,29.51-11.13,59.55-20.67,90.58-26.49,14.4-2.7,28.89-5.17,43.56-6.59,18.44-1.79,36.82-4.2,55.38-3.78,16.77.38,33.01,4.24,49.15,8.45,19.35,5.03,37.08,13.88,54.92,22.63,14.41,7.08,28.63,14.42,42.55,22.42,6.42,3.69,13.39,6.37,19.88,10.03,5.16,2.91,10.93,1.34,16.33.18,10.77-2.33,21.14-5.93,30.98-10.9,1.38-.69,2.33-1.03,3.6-.31,13.06,7.41,26.65,13.81,39.82,21.02,34.39,18.81,66.33,40.55,92.4,70.38,22.61,25.87,42.01,53.78,56.52,84.91,10.18,21.84,18.45,44.4,24.27,67.9,3.86,15.55,6.76,31.17,8.93,47.02,2.98,21.79,4.96,43.64,4.54,65.62Z",
                        fill: "#3f3f3f"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "m911.02,436.94c-2.17-15.85-5.07-31.47-8.93-47.02-5.82-23.5-14.09-46.06-24.27-67.9-14.51-31.13-33.91-59.04-56.52-84.91-26.07-29.83-58.01-51.57-92.4-70.38-13.17-7.21-26.76-13.61-39.82-21.02-1.27-.72-2.22-.38-3.6.31-9.84,4.97-20.21,8.57-30.98,10.9-5.4,1.16-11.17,2.73-16.33-.18-6.49-3.66-13.46-6.34-19.88-10.03-13.92-8-28.14-15.34-42.55-22.42-17.84-8.75-35.57-17.6-54.92-22.63-16.14-4.21-32.38-8.07-49.15-8.45-18.56-.42-36.94,1.99-55.38,3.78-14.67,1.42-29.16,3.89-43.56,6.59-31.03,5.82-61.07,15.36-90.58,26.49-20.71,7.81-41.43,15.61-60.11,27.88-37.43,24.58-64.03,58.87-85.76,97.09-13.79,24.26-25.07,49.88-34.15,76.35-6.62,19.29-12.08,38.93-17.11,58.7-4,15.75-6.97,31.7-9.86,47.67-1.6,8.82-3.17,17.67-3.99,26.58-.95,10.28-2.34,20.51-3.36,30.78-1.04,10.64-1.78,21.31-2.51,31.95-.86,12.44-.2,24.98-.2,37.47-.41,21.73-.22,43.47,2.09,65.07,1.56,14.6,3.34,29.18,5.68,43.71,2.4,14.84,5.33,29.57,8.72,44.16,3.25,14.05,7.9,27.78,12.69,41.43,6.67,18.97,14.81,37.2,24.97,54.57,11.12,19,24.82,35.85,41.03,50.67,31.21,28.54,67.42,48.73,106.59,64.11,19.03,7.47,38.43,13.62,58.22,18.66,21.49,5.48,43.27,9.24,65.24,12.25,15.81,2.17,31.7,4.17,47.55,4.5,27.5.57,55.05,1.35,82.56-1.58,16.51-1.76,33.03-3.53,49.33-6.4,20.22-3.57,40.19-8.67,59.69-15.28,48.02-16.29,90.12-42.54,127.43-76.6,48.16-43.95,84.32-96.59,111.56-155.56,11.93-25.81,21.36-52.54,28.7-79.99,3.36-12.55,6.88-25.1,9.26-37.84,1.99-10.63,3.45-21.38,4.7-32.16,2.17-18.53,4.09-37.06,4.45-55.7.42-21.98-1.56-43.83-4.54-65.62Zm-307.73-26.26c4.07-14.27,15.58-22.14,29.16-26.04,21.35-6.13,42.09.05,53.95,21.22,3.86,6.88,5.13,14.43,5.58,20.42-.56,27.43-18.17,45.48-40.72,50.73-13.35,3.12-24.77-.69-33.97-10.03-15.6-15.83-20.02-35.2-14-56.3Zm-327.69-8.84c6.55-17.58,20.13-24.89,37.89-25.6,25.7-1.01,44.36,17.01,47.66,41.65,1.58,11.78.7,22.95-4.32,33.57-5.48,11.62-16.71,20.77-38.28,20.65-25.74,1.52-43.63-20.55-45.67-41.52-.96-9.82-.76-19.39,2.72-28.75Zm472.35,189.49c-2.6,20.09-7.27,39.67-15.55,58.21-13.38,29.97-33.89,54.21-60.2,73.64-29.76,21.98-63.38,35.3-99.09,43.75-15.95,3.78-32.13,6.13-48.52,7.4-11.13.86-22.25.51-29.55,1.03-19.56.17-35.27-.59-50.93-2.37-22.62-2.57-44.83-7.36-66.49-14.23-17.21-5.47-34.32-11.39-50.46-19.73-32.65-16.87-62.39-37.5-85.68-66.42-10.97-13.61-20.32-28.33-26.75-44.54-5.91-14.88-10.32-30.26-11.87-46.43-.71-7.46-.69-14.87-.84-22.3-.13-6.2,2.7-9.66,8.09-11.04,6.59-1.68,9.9-.26,13.31,5.65,3.54,6.15,4.6,13.18,6.99,19.74,6.83,18.76,18.51,34.13,32.14,48.22,14.2,14.7,30.61,26.62,48.12,37.08,30.66,18.31,63.51,31.08,98.32,38.94,14.01,3.17,28.17,5.26,42.4,7.24,20.19,2.81,40.4,2.13,60.57,1.62,13.69-.35,27.26-3,40.83-5.5,29.69-5.46,57.74-15.22,84.17-29.61,35.76-19.48,65.46-45.95,89.42-78.87,2.35-3.22,4.62-6.53,7.85-9,3.1-2.36,6.44-2.45,9.85-.87,3.62,1.67,4.33,4.85,3.87,8.39Z",
                        fill: "#fff"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "m495.04,775.36c-19.56.17-35.27-.59-50.93-2.37-22.62-2.57-44.83-7.36-66.49-14.23-17.21-5.46-34.33-11.38-50.46-19.72-32.65-16.87-62.39-37.5-85.68-66.43-10.96-13.61-20.31-28.32-26.75-44.53-5.91-14.88-10.32-30.26-11.87-46.43-.71-7.46-.7-14.87-.84-22.3-.12-6.21,2.7-9.67,8.09-11.04,6.59-1.68,9.9-.26,13.31,5.65,3.54,6.14,4.6,13.18,6.98,19.74,6.83,18.76,18.52,34.13,32.14,48.22,14.21,14.69,30.62,26.62,48.13,37.07,30.66,18.31,63.51,31.08,98.32,38.95,14.01,3.17,28.17,5.26,42.4,7.24,20.19,2.81,40.4,2.13,60.57,1.62,13.69-.35,27.26-3,40.83-5.5,29.7-5.46,57.75-15.22,84.17-29.61,35.76-19.48,65.46-45.94,89.42-78.86,2.35-3.23,4.62-6.54,7.85-9,3.1-2.36,6.44-2.45,9.85-.87,3.62,1.67,4.33,4.84,3.87,8.39-2.61,20.09-7.28,39.67-15.56,58.21-13.38,29.96-33.89,54.2-60.2,73.64-29.76,21.98-63.38,35.3-99.09,43.75-15.95,3.77-32.12,6.13-48.52,7.4-11.13.86-22.24.51-29.55,1.03Z",
                        fill: "#3f3f3f"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "m318.55,472.12c-25.74,1.52-43.63-20.55-45.67-41.52-.96-9.82-.76-19.39,2.73-28.75,6.55-17.58,20.13-24.89,37.89-25.6,25.7-1.02,44.36,17.01,47.66,41.64,1.58,11.78.69,22.95-4.32,33.57-5.49,11.62-16.71,20.77-38.28,20.65Z",
                        fill: "#3f3f3f"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "m691.98,426.28c-.56,27.43-18.17,45.48-40.71,50.74-13.36,3.11-24.77-.7-33.98-10.04-15.6-15.83-20.02-35.2-14-56.3,4.07-14.26,15.58-22.14,29.16-26.04,21.35-6.13,42.09.06,53.95,21.22,3.86,6.88,5.13,14.43,5.57,20.42Z",
                        fill: "#3f3f3f"
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/about/tools/confluence.tsx


function ConfluenceIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        width: "256px",
        height: "246px",
        viewBox: "0 0 256 246",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        x1: "99.140087%",
                        y1: "112.708084%",
                        x2: "33.8589812%",
                        y2: "37.7549606%",
                        id: "linearGradient-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#0052CC",
                                offset: "18%"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#2684FF",
                                offset: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        x1: "0.92569163%",
                        y1: "-12.5823074%",
                        x2: "66.1800713%",
                        y2: "62.3057471%",
                        id: "linearGradient-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#0052CC",
                                offset: "18%"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#2684FF",
                                offset: "100%"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.26054484,187.329971 C6.61939782,191.637072 3.65318655,196.634935 1.13393863,200.616972 C-1.12098385,204.42751 0.0895487945,209.341911 3.85635171,211.669157 L56.6792921,244.175582 C58.5334859,245.320393 60.7697695,245.67257 62.8860683,245.153045 C65.0023672,244.633521 66.8213536,243.285826 67.9346417,241.412536 C70.0475593,237.877462 72.7699724,233.285929 75.7361837,228.369333 C96.6621947,193.831256 117.710105,198.057091 155.661356,216.179423 L208.037333,241.087471 C210.020997,242.031639 212.302415,242.132457 214.361632,241.366949 C216.420848,240.601441 218.082405,239.034833 218.967618,237.024168 L244.119464,180.137925 C245.896483,176.075046 244.088336,171.3377 240.056161,169.492071 C229.003977,164.291043 207.021507,153.92962 187.233221,144.380857 C116.044151,109.802148 55.5415672,112.036965 9.26054484,187.329971 Z",
                        fill: "url(#linearGradient-1)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M246.11505,58.2319428 C248.756197,53.9248415 251.722408,48.9269787 254.241656,44.9449416 C256.496579,41.1344037 255.286046,36.2200025 251.519243,33.8927572 L198.696303,1.38633231 C196.82698,0.127283893 194.518741,-0.298915762 192.323058,0.209558312 C190.127374,0.718032386 188.241461,2.11550922 187.115889,4.06811236 C185.002971,7.60318607 182.280558,12.1947186 179.314347,17.1113153 C158.388336,51.6493918 137.340426,47.4235565 99.3891748,29.3012247 L47.1757299,4.5150757 C45.1920661,3.57090828 42.9106475,3.47008979 40.8514312,4.2355977 C38.7922149,5.00110562 37.1306578,6.56771434 36.2454445,8.57837881 L11.0935983,65.4646223 C9.31657942,69.5275012 11.1247267,74.2648471 15.1569014,76.1104765 C26.2090859,81.3115044 48.1915557,91.6729274 67.9798418,101.22169 C139.331444,135.759766 199.834028,133.443683 246.11505,58.2319428 Z",
                        fill: "url(#linearGradient-2)"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/asana.tsx


function AsanaIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        width: "751",
        height: "495",
        viewBox: "0 0 751 495",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M115.339 475.157C115.961 482.186 121.575 491.1 131.304 491.1H137.004C139.211 491.1 141.011 489.3 141.011 487.093V361.929H140.989C140.882 359.829 139.125 358.136 137.004 358.136H119.346C117.204 358.136 115.468 359.829 115.361 361.929H115.339V372.107C104.518 358.779 87.4822 353.271 70.3822 353.271C31.5107 353.25 0.0107422 384.75 0.0107422 423.6C0.0107422 462.472 31.5107 493.972 70.3822 493.972C87.4607 493.972 106.104 487.35 115.339 475.157ZM70.4465 469.35C45.7393 469.35 25.7036 448.864 25.7036 423.6C25.7036 398.336 45.7393 377.871 70.4465 377.871C95.1536 377.871 115.189 398.357 115.189 423.6C115.189 448.864 95.1536 469.35 70.4465 469.35Z",
                // fill='#0D0E10'
                fill: "#ffffff"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M402.868 475.157C403.489 482.186 409.103 491.1 418.832 491.1H424.532C426.739 491.1 428.539 489.3 428.539 487.093V361.929H428.518C428.411 359.829 426.653 358.136 424.532 358.136H406.875C404.732 358.136 402.996 359.829 402.868 361.929V361.929V372.107C392.046 358.779 375.011 353.271 357.911 353.271C319.061 353.271 287.539 384.771 287.539 423.643C287.539 462.514 319.039 494.014 357.911 494.014C375.011 493.971 393.653 487.35 402.868 475.157ZM357.996 469.35C333.289 469.35 313.253 448.864 313.253 423.6C313.253 398.336 333.289 377.871 357.996 377.871C382.703 377.871 402.739 398.357 402.739 423.6C402.739 448.864 382.703 469.35 357.996 469.35Z",
                // fill='#0D0E10'
                fill: "#ffffff"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M724.319 475.157C724.94 482.186 730.555 491.1 740.283 491.1H745.983C748.19 491.1 750.012 489.3 750.012 487.093V361.929H749.99C749.883 359.829 748.126 358.136 746.005 358.136H728.347C726.205 358.136 724.469 359.829 724.362 361.929H724.34V372.107C713.519 358.779 696.483 353.271 679.383 353.271C640.512 353.271 609.012 384.771 609.012 423.643C609.012 462.514 640.512 494.014 679.383 494.014C696.462 493.971 715.083 487.35 724.319 475.157ZM679.426 469.35C654.719 469.35 634.683 448.864 634.683 423.6C634.683 398.336 654.719 377.871 679.426 377.871C704.133 377.871 724.169 398.357 724.169 423.6C724.19 448.864 704.155 469.35 679.426 469.35Z",
                // fill='#0D0E10'
                fill: "#ffffff"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M586.683 479.444V414.665C586.683 378.151 563.647 353.529 526.918 353.529C509.39 353.529 493.34 363.579 489.933 372.386C488.84 365.572 485.218 358.415 474.011 358.415H468.29C466.083 358.415 464.283 360.215 464.283 362.444V475.458V475.479V487.393V487.608H464.304C464.411 489.708 466.168 491.401 468.29 491.401H480.247H485.947C486.226 491.401 486.483 491.379 486.74 491.315C486.847 491.293 486.976 491.251 487.083 491.208C487.211 491.165 487.34 491.143 487.468 491.079C487.618 491.015 487.768 490.929 487.918 490.843C487.983 490.801 488.068 490.758 488.133 490.715C488.304 490.608 488.476 490.458 488.626 490.329C488.647 490.308 488.69 490.286 488.711 490.265C488.883 490.093 489.054 489.901 489.183 489.708C489.633 489.108 489.89 488.379 489.933 487.586H489.954V487.372V479.422V477.343V413.658C489.954 394.051 505.854 378.151 525.461 378.151C545.068 378.151 560.968 394.051 560.968 413.658L560.99 475.458V475.436C560.99 475.501 560.99 475.543 560.99 475.608V487.372V487.586H561.011C561.118 489.686 562.876 491.379 564.997 491.379H576.954H582.654C582.933 491.379 583.19 491.358 583.447 491.293C583.554 491.272 583.64 491.229 583.747 491.208C583.897 491.165 584.047 491.122 584.175 491.079C584.325 491.015 584.454 490.929 584.583 490.865C584.668 490.822 584.754 490.779 584.84 490.736C585.011 490.629 585.161 490.501 585.29 490.372C585.333 490.329 585.375 490.308 585.397 490.286C585.568 490.115 585.718 489.943 585.847 489.772C585.847 489.751 585.868 489.751 585.868 489.729C586.297 489.129 586.576 488.401 586.618 487.629H586.64V487.415L586.683 479.444Z",
                // fill='#0D0E10'
                fill: "#ffffff"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M183.182 457.221C194.968 465.386 207.825 469.35 220.189 469.35C231.954 469.35 244.125 463.243 244.125 452.614C244.125 438.429 217.597 436.221 200.947 430.564C184.275 424.907 169.918 413.186 169.918 394.243C169.918 365.229 195.761 353.25 219.889 353.25C235.168 353.25 250.939 358.286 261.182 365.507C264.697 368.186 262.554 371.25 262.554 371.25L252.782 385.2C251.689 386.764 249.761 388.136 247.018 386.421C244.254 384.729 234.611 377.893 219.889 377.893C205.168 377.893 196.297 384.686 196.297 393.107C196.297 403.221 207.825 406.393 221.325 409.843C244.854 416.186 270.504 423.814 270.504 452.636C270.504 478.2 246.589 493.993 220.168 493.993C200.132 493.993 183.097 488.293 168.804 477.793C165.825 474.814 167.904 472.05 167.904 472.05L177.611 458.186C179.604 455.571 182.089 456.471 183.182 457.221Z",
                // fill='#0D0E10'
                fill: "#ffffff"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M436.875 61.7571C436.875 95.85 409.232 123.514 375.139 123.514C341.025 123.514 313.382 95.8714 313.382 61.7571C313.382 27.6429 341.025 0 375.139 0C409.232 0 436.875 27.6429 436.875 61.7571ZM294.91 138.943C260.818 138.943 233.153 166.586 233.153 200.679C233.153 234.771 260.796 262.436 294.91 262.436C329.025 262.436 356.668 234.793 356.668 200.679C356.668 166.586 329.025 138.943 294.91 138.943ZM455.346 138.943C421.232 138.943 393.589 166.586 393.589 200.7C393.589 234.814 421.232 262.457 455.346 262.457C489.439 262.457 517.103 234.814 517.103 200.7C517.103 166.586 489.46 138.943 455.346 138.943Z",
                fill: "#F06A6A"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/bootstrap.tsx


function BootstrapIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        width: "512",
        height: "408",
        viewBox: "0 0 512 408",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_1700_53992)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M56.481 53.32C55.515 25.58 77.128 0 106.342 0H405.695C434.909 0 456.522 25.58 455.556 53.32C454.628 79.967 455.833 114.485 464.52 142.63C473.235 170.862 487.931 188.707 512 191V217C487.931 219.293 473.235 237.138 464.52 265.37C455.833 293.515 454.628 328.033 455.556 354.681C456.522 382.42 434.909 408 405.695 408H106.342C77.128 408 55.515 382.42 56.482 354.681C57.409 328.033 56.204 293.515 47.516 265.37C38.802 237.138 24.07 219.293 0 217V191C24.069 188.707 38.802 170.862 47.516 142.63C56.204 114.485 57.409 79.967 56.481 53.32V53.32Z",
                        fill: "url(#paint0_linear_1700_53992)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        filter: "url(#filter0_d_1700_53992)",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M267.103 312.457C314.4 312.457 342.901 289.299 342.901 251.102C342.901 222.229 322.565 201.326 292.369 198.017V196.814C314.554 193.205 331.963 172.603 331.963 149.595C331.963 116.812 306.081 95.457 266.641 95.457H177.901V312.457H267.103ZM212.411 122.977H258.322C283.28 122.977 297.453 134.105 297.453 154.256C297.453 175.761 280.969 187.791 251.081 187.791H212.411V122.977V122.977ZM212.411 284.938V213.507H258.013C290.674 213.507 307.621 225.537 307.621 248.997C307.621 272.456 291.137 284.938 260.016 284.938H212.411V284.938Z",
                                fill: "url(#paint1_linear_1700_53992)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M267.103 312.457C314.4 312.457 342.901 289.299 342.901 251.102C342.901 222.229 322.565 201.326 292.369 198.017V196.814C314.554 193.205 331.963 172.603 331.963 149.595C331.963 116.812 306.081 95.457 266.641 95.457H177.901V312.457H267.103ZM212.411 122.977H258.322C283.28 122.977 297.453 134.105 297.453 154.256C297.453 175.761 280.969 187.791 251.081 187.791H212.411V122.977V122.977ZM212.411 284.938V213.507H258.013C290.674 213.507 307.621 225.537 307.621 248.997C307.621 272.456 291.137 284.938 260.016 284.938H212.411V284.938Z",
                                stroke: "white"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("filter", {
                        id: "filter0_d_1700_53992",
                        x: "161.401",
                        y: "82.957",
                        width: "198",
                        height: "250",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feOffset", {
                                dy: "4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feGaussianBlur", {
                                stdDeviation: "8"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_1700_53992"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_1700_53992",
                                result: "shape"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint0_linear_1700_53992",
                        x1: "76.079",
                        y1: "10.798",
                        x2: "523.48",
                        y2: "365.945",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#9013FE"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "#6610F2"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint1_linear_1700_53992",
                        x1: "193.508",
                        y1: "109.74",
                        x2: "293.514",
                        y2: "278.872",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "#F1E5FC"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                        id: "clip0_1700_53992",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            width: "512",
                            height: "408",
                            fill: "white"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/cplusplus.tsx


function CPlusPlusIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        width: "2222",
        height: "2500",
        viewBox: "0 0 256 288",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMinYMin meet",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.395 12.39 32.59 51.237 12.385 62.94 4.064 67.757.015 75.129.013 84.711 0 124.166.013 163.62 0 203.076c.002 4.724.991 8.909 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345",
                fill: "#5C8DBC"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M128.182 143.509L2.988 215.593c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252l-124.413-72.074",
                fill: "#1A4674"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M91.101 164.861c7.285 12.718 20.98 21.296 36.69 21.296 15.807 0 29.58-8.687 36.828-21.541l-36.437-21.107-37.081 21.352",
                fill: "#1A4674"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761l-124.263 71.55 124.413 72.074c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345",
                fill: "#1B598E"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M248.728 148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722v9.721M213.253 148.661h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721v9.721",
                fill: "#FFF"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M164.619 164.616c-7.248 12.854-21.021 21.541-36.828 21.541-15.71 0-29.405-8.578-36.69-21.296a42.062 42.062 0 0 1-5.574-20.968c0-23.341 18.923-42.263 42.264-42.263 15.609 0 29.232 8.471 36.553 21.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876 0-84.875 38-84.875 84.874 0 15.378 4.091 29.799 11.241 42.238 14.646 25.48 42.137 42.637 73.634 42.637 31.555 0 59.089-17.226 73.714-42.781l-36.886-21.371",
                fill: "#FFF"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/css-3.tsx


function CssIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        fill: "none",
        height: "2500",
        width: "2183",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 124 141.53",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z",
                fill: "#1b73ba"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M62.468 129.275V12.085l51.064.17-9.106 104.85z",
                fill: "#1c88c7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z",
                fill: "#fff"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/firebase.tsx


function FirebaseIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        width: "256px",
        height: "351px",
        viewBox: "0 0 256 351",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M1.25273437,280.731641 L2.85834533,277.600858 L102.211177,89.0833546 L58.0613266,5.6082033 C54.3920011,-1.28304578 45.0741245,0.473674398 43.8699203,8.18789086 L1.25273437,280.731641 Z",
                        id: "path-1"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("filter", {
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        filterUnits: "objectBoundingBox",
                        id: "filter-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("feGaussianBlur", {
                                stdDeviation: "17.5",
                                in: "SourceAlpha",
                                result: "shadowBlurInner1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feOffset", {
                                dx: "0",
                                dy: "0",
                                in: "shadowBlurInner1",
                                result: "shadowOffsetInner1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feComposite", {
                                in: "shadowOffsetInner1",
                                in2: "SourceAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1",
                                result: "shadowInnerInner1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feColorMatrix", {
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0",
                                type: "matrix",
                                in: "shadowInnerInner1"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M134.417103,148.974235 L166.455722,116.161738 L134.417104,55.1546874 C131.374828,49.3635911 123.983911,48.7568362 120.973828,54.5646483 L103.26875,88.6738296 L102.739423,90.4175473 L134.417103,148.974235 Z",
                        id: "path-3"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("filter", {
                        x: "-50%",
                        y: "-50%",
                        width: "200%",
                        height: "200%",
                        filterUnits: "objectBoundingBox",
                        id: "filter-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("feGaussianBlur", {
                                stdDeviation: "3.5",
                                in: "SourceAlpha",
                                result: "shadowBlurInner1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feOffset", {
                                dx: "1",
                                dy: "-9",
                                in: "shadowBlurInner1",
                                result: "shadowOffsetInner1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feComposite", {
                                in: "shadowOffsetInner1",
                                in2: "SourceAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1",
                                result: "shadowInnerInner1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feColorMatrix", {
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0",
                                type: "matrix",
                                in: "shadowInnerInner1"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M0,282.99762 L2.12250746,280.0256 L102.527363,89.5119284 L102.739423,87.4951323 L58.478806,4.35817711 C54.7706269,-2.60604179 44.3313035,-0.845245771 43.1143483,6.95065473 L0,282.99762 Z",
                        fill: "#FFC24A"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                fill: "#FFA712",
                                fillRule: "evenodd",
                                href: "#path-1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                fill: "black",
                                fillOpacity: "1",
                                filter: "url(#filter-2)",
                                href: "#path-1"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M135.004975,150.380704 L167.960199,116.629461 L134.995423,53.6993114 C131.866109,47.7425353 123.128817,47.7253411 120.032618,53.6993112 L102.421015,87.2880848 L102.421015,90.1487443 L135.004975,150.380704 Z",
                        fill: "#F4BD62"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                fill: "#FFA50E",
                                fillRule: "evenodd",
                                href: "#path-3"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                fill: "black",
                                fillOpacity: "1",
                                filter: "url(#filter-4)",
                                href: "#path-3"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                        fill: "#F6820C",
                        points: "0 282.99762 0.962097168 282.030396 4.45771144 280.60956 132.935323 152.60956 134.563025 148.178595 102.513123 87.1048584"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M139.120971,347.551268 L255.395916,282.703666 L222.191698,78.2093373 C221.153051,71.8112478 213.303658,69.2818149 208.724314,73.8694368 L0.000254726368,282.997875 L115.608454,347.545536 C122.914643,351.624979 131.812872,351.62689 139.120971,347.551268",
                        fill: "#FDE068"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M254.354084,282.159837 L221.401937,79.2179369 C220.371175,72.8684188 213.843792,70.2409553 209.299213,74.79375 L1.28945312,282.600785 L115.627825,346.509458 C122.878548,350.557931 131.709226,350.559827 138.961846,346.515146 L254.354084,282.159837 Z",
                        fill: "#FCCA3F"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M139.120907,345.64082 C131.812808,349.716442 122.914579,349.714531 115.60839,345.635089 L0.93134768,282.014551 L0.000191044776,282.997875 L115.60839,347.545536 C122.914579,351.624979 131.812808,351.62689 139.120907,347.551268 L255.395853,282.703666 L255.111196,280.951785 L139.120907,345.64082 Z",
                        fill: "#EEAB37"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/figma.tsx


function FigmaIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 300",
        width: "1667",
        height: "2500",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                id: "path0_fill",
                fill: "#0acf83",
                d: "M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                id: "path1_fill",
                fill: "#a259ff",
                d: "M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                id: "path1_fill_1_",
                fill: "#f24e1e",
                d: "M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                id: "path2_fill",
                fill: "#ff7262",
                d: "M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                id: "path3_fill",
                fill: "#1abcfe",
                d: "M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/github.tsx


function GithubIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: props.className,
        width: "2500",
        height: "2432",
        viewBox: "0 0 256 249",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMinYMin meet",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            fill: "#f9f9f9",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/about/tools/gae.tsx


function GaeIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        width: "1171",
        height: "1042",
        viewBox: "0 0 1171 1042",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_1708_55271)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        x: "235",
                        y: "170",
                        width: "705",
                        height: "677",
                        fill: "white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M832 1042H339C337.86 1041.77 336.73 1041.46 335.58 1041.33C298.38 1037.36 271.03 1018.7 252.41 986.4C179.92 860.62 107.22 734.97 34.8 609.16C20.52 584.36 2.98 560.88 0 531V506C3.95 491.5 8.37 477.26 16.25 464.19C28.19 444.39 39.49 424.2 51.05 404.17C118.52 287.3 186 170.44 253.44 53.56C267.46 29.26 287.69 12.72 314.48 4.31C319.6 2.7 324.82 1.43 330 0C499.33 0 668.67 0 838 0C838.74 0.3 839.45 0.77 840.22 0.89C874.34 6.2 899.98 23.87 917.23 53.75C997.05 192 1076.87 330.25 1156.7 468.5C1161.73 477.21 1165.39 486.47 1167.81 496.21C1168.95 500.79 1169.94 505.4 1171.01 510V532C1170.7 532.34 1170.16 532.64 1170.12 533.01C1168.1 551.66 1160.05 567.91 1150.65 583.79C1133.3 613.1 1116.34 642.65 1099.21 672.1C1097.35 670.44 1095.41 668.87 1093.65 667.12C1041.94 615.44 990.25 563.74 938.53 512.07C936.06 509.61 933.35 507.39 930.75 505.06C927.54 498.46 921.13 496.54 914.97 494.23C913.81 492.82 912.76 491.3 911.48 490.02C811.11 389.62 710.72 289.24 610.33 188.87C608.7 187.24 607.23 185.32 604.69 184.98C600.54 175.19 592.37 174.43 583.17 174.73C569.47 175.17 566.25 177.24 562.15 190.33C555.85 210.45 549.38 230.52 543.27 250.69C540.73 259.07 537.11 267.16 536.04 275.96C546.69 286.95 557.35 297.94 568 308.93C559.94 310.12 551.8 310.92 543.83 312.57C450.98 331.84 385.22 404.42 373.83 500.02C362.87 489.36 351.91 478.7 340.94 468.04C310.54 477.51 280.1 486.88 249.75 496.53C242.51 498.83 238.88 504.16 239.09 512.09C239.34 521.23 239.53 530.39 239.03 539.51C238.6 547.33 241.12 553.09 247.94 556.93C248.45 559.61 250.6 561.09 252.34 562.84C410.19 720.73 568.07 878.61 725.87 1036.55C729.07 1039.76 732.32 1041.11 736.84 1041.1C768.66 1041.03 800.48 1041.19 832.3 1041.28C832.35 1041.59 832.24 1041.83 831.97 1042H832Z",
                        fill: "#4486F7"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M1099.21 672.09C1083.33 699.81 1067.52 727.56 1051.56 755.23C1006.82 832.8 962.15 910.4 917.2 987.84C898.35 1020.32 870.28 1038.81 832.33 1041.27C800.51 1041.18 768.69 1041.02 736.87 1041.09C732.34 1041.1 729.1 1039.74 725.9 1036.54C568.1 878.59 410.22 720.72 252.37 562.83C250.63 561.09 248.47 559.61 247.97 556.92C250.9 557.33 253.84 558.09 256.77 558.1C281.9 558.2 307.02 558.17 332.15 558.12C334.05 558.12 336.12 558.79 338.06 557.2C333.76 527.36 334.85 497.61 340.96 468.03C351.92 478.69 362.88 489.35 373.85 500.01C372.6 514.82 372.61 529.62 374.19 544.39C386.64 660.85 493.48 745.66 610.28 731.8C718.88 718.92 799.67 625.98 797.54 516.39C795.86 430.32 742.24 353.79 662.08 322.74C631.73 310.98 600.32 307.06 568.01 308.91C557.36 297.92 546.7 286.93 536.05 275.94C569.55 268.86 603.07 269.55 637.12 276.24C626.14 245.33 615.42 215.14 604.7 184.95C607.24 185.28 608.71 187.2 610.34 188.84C710.73 289.21 811.12 389.59 911.49 489.99C912.77 491.27 913.82 492.79 914.98 494.2C886.78 485.51 858.58 476.81 829.49 467.85C836.02 498.06 836.7 527.8 832.54 558.09C861.61 558.09 889.9 558.44 918.18 557.85C925.19 557.7 930.91 552.72 931.21 544.96C931.72 531.67 932.25 518.33 930.75 505.04C933.35 507.37 936.07 509.59 938.53 512.05C990.25 563.72 1041.94 615.43 1093.65 667.1C1095.41 668.86 1097.35 670.43 1099.21 672.08V672.09Z",
                        fill: "#407BDE"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M585.48 681.83C496.34 681.85 424.52 609.65 424.52 520.03C424.52 430.41 496.82 359.99 587.59 360.01C674.33 360.03 746.28 433.14 746.16 521.14C746.04 609.62 673.85 681.81 585.48 681.83V681.83ZM641.39 471.32C608.31 440.41 563.24 444.12 536.31 468.2C522.36 480.67 513.71 496.14 511.23 514.65C507.89 539.54 515.19 561.3 532.75 580.13C525.88 586.75 519.34 593.07 512.85 599.33C532.36 624.29 577.68 637.27 613.16 627.24C656.52 614.98 682.98 586.06 690.55 541.74C696.46 507.13 685.55 476.97 660.93 451.08C654.09 458.17 647.86 464.64 641.4 471.33L641.39 471.32Z",
                        fill: "#407BDE"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M585.47 569.16C558.55 569.18 536.78 547.5 536.86 520.74C536.94 494.16 558.54 472.51 585.14 472.36C611.71 472.2 633.88 494.31 633.83 520.92C633.78 547.47 612.06 569.14 585.47 569.17V569.16Z",
                        fill: "#407BDE"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_1708_55271",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "1171",
                        height: "1042",
                        fill: "white"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/google.tsx


function GoogleIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                fill: "#4285F4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                fill: "#34A853"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                fill: "#FBBC05"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                fill: "#EA4335"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M1 1h22v22H1z",
                fill: "none"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/html.tsx


function HtmlIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        fill: "none",
        height: "2500",
        width: "2183",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 124 141.53199999999998",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z",
                fill: "#e34f26"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M62.468 129.277V12.085l51.064.17-9.106 104.851z",
                fill: "#ef652a"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z",
                fill: "#fff"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/illustrator.tsx


function IllustratorIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 240 234",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#300",
                d: "M42.5 0h155C221 0 240 19 240 42.5v149c0 23.5-19 42.5-42.5 42.5h-155C19 234 0 215 0 191.5v-149C0 19 19 0 42.5 0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#ff9a00",
                d: "M116 140H78.8l-7.6 23.5c-.2.9-1 1.5-1.9 1.4H50.5c-1.1 0-1.4-.6-1.1-1.8l32.2-92.7c.3-1 .6-2.1 1-3.3.4-2.1.6-4.3.6-6.5-.1-.5.3-1 .8-1.1h25.9c.8 0 1.2.3 1.3.8l36.5 103c.3 1.1 0 1.6-1 1.6h-20.9c-.7.1-1.4-.4-1.6-1.1L116 140zm-31.4-20.3H110c-.6-2.1-1.4-4.6-2.3-7.2-.9-2.7-1.8-5.6-2.7-8.6-1-3.1-1.9-6.1-2.9-9.2s-1.9-6-2.7-8.9c-.8-2.8-1.5-5.4-2.2-7.8H97c-.9 4.3-2 8.6-3.4 12.9-1.5 4.8-3 9.8-4.6 14.8-1.4 5.1-2.9 9.8-4.4 14zM170 77c-3.3.1-6.5-1.2-8.9-3.5-2.3-2.5-3.5-5.8-3.4-9.2-.1-3.4 1.2-6.6 3.6-8.9s5.6-3.5 8.9-3.5c3.9 0 6.9 1.2 9.1 3.5 2.2 2.4 3.4 5.6 3.3 8.9.1 3.4-1.1 6.7-3.5 9.2-2.3 2.4-5.7 3.7-9.1 3.5zm-11.2 86.8v-77c0-1 .4-1.4 1.3-1.4h19.8c.9 0 1.3.5 1.3 1.4v77c0 1.1-.4 1.6-1.3 1.6h-19.6c-1 0-1.5-.6-1.5-1.6z"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/javascript-2.tsx


function JsIcon2(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        width: "2500",
        height: "2500",
        viewBox: "0 0 1052 1052",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#f0db4f",
                d: "M0 0h1052v1052H0z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z",
                fill: "#323330"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/invision.tsx


function InvisionIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        width: "2500",
        height: "2500",
        viewBox: "0 0 256 256",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMinYMin meet",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M232.793 0H23.207C10.39 0 0 10.39 0 23.207v209.586C0 245.61 10.39 256 23.207 256h209.586C245.61 256 256 245.61 256 232.793V23.207C256 10.39 245.61 0 232.793 0",
                fill: "#DC395F"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M85.555 80.545c8.51 0 15.639-6.67 15.639-15.412 0-8.736-7.129-15.405-15.639-15.405s-15.637 6.669-15.637 15.405c0 8.741 7.127 15.412 15.637 15.412M53.129 163.065c-.919 3.91-1.38 8.132-1.38 11.576 0 13.571 7.359 22.58 22.998 22.58 12.97 0 23.485-7.702 31.056-20.139l-4.623 18.553h25.755l14.72-59.039c3.68-14.948 10.809-22.707 21.619-22.707 8.509 0 13.798 5.292 13.798 14.028 0 2.531-.23 5.288-1.15 8.279l-7.59 27.137c-1.15 3.91-1.608 7.822-1.608 11.499 0 12.883 7.587 22.306 23.456 22.306 13.569 0 24.377-8.735 30.357-29.664l-10.118-3.906c-5.06 14.021-9.43 16.556-12.88 16.556-3.45 0-5.29-2.298-5.29-6.895 0-2.07.462-4.367 1.15-7.133l7.361-26.438c1.839-6.208 2.53-11.713 2.53-16.771 0-19.778-11.96-30.1-26.448-30.1-13.568 0-27.368 12.239-34.266 25.12l5.058-23.12H108.31l-5.52 20.364h18.399l-11.33 45.36c-8.897 19.778-25.24 20.099-27.291 19.64-3.368-.76-5.522-2.039-5.522-6.415 0-2.525.46-6.152 1.61-10.525l17.25-68.424H52.21l-5.52 20.364h18.167L53.13 163.065",
                fill: "#FFF"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/jest.tsx


function JestIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: props.className,
        id: "Layer_2",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 801.21 884.86",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            id: "Layer_1-2",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "m751.05,435.67c0-45.49-36.88-82.36-82.36-82.36-2.93,0-5.81.16-8.66.46L773.15,20.12h-480.74l112.97,333.36c-1.67-.11-3.34-.16-5.01-.16-45.49,0-82.36,36.87-82.36,82.36,0,36.77,24.1,67.9,57.35,78.49-17.56,30.42-39.67,57.83-64.76,81.51-34.12,32.19-73.18,56.6-115.41,71.64-50.29-25.83-74.03-83.29-52.61-133.66,2.42-5.69,4.89-11.46,7.25-17.2,36.43-8.5,63.58-41.16,63.58-80.19,0-45.49-36.88-82.36-82.36-82.36s-82.36,36.87-82.36,82.36c0,27.89,13.88,52.53,35.09,67.43-20.39,46.41-50.35,94.99-59.69,151.29-11.19,67.47-.04,139.09,58.32,179.54,135.9,94.19,283.43-58.39,438.97-96.75,56.37-13.9,118.25-11.66,167.92-40.42,37.3-21.6,61.89-57.4,68.86-97.59,6.9-39.7-3.15-79.24-26.27-111.29,12.4-14.79,19.18-33.49,19.16-52.79",
                    fill: "#99425b"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "m738.34,596.31c-6.06,34.89-27.61,65.37-59.12,83.63-29.38,17.01-64.59,22.09-101.86,27.47-19.97,2.88-40.62,5.86-60.79,10.83-53.34,13.15-105,38.81-154.95,63.63-99.98,49.66-186.33,92.54-267.74,36.12-59.64-41.33-56.89-117.81-49.94-159.71,6.44-38.83,23.85-74.58,40.68-109.16,2.87-5.88,5.71-11.76,8.53-17.66,8.49,3.39,17.39,5.63,26.47,6.64-17.14,56.56,9.81,118.05,66.38,147.11l7.74,3.98,8.2-2.92c44.72-15.93,85.92-41.48,122.47-75.96,23.62-22.29,43.94-46.95,60.63-73.29,5.08.77,10.2,1.15,15.33,1.15,51.92,0,94.91-38.81,101.56-88.94,21.25-.78,43.82-.78,65.19,0,6.65,50.13,49.64,88.95,101.56,88.95,21.71,0,41.84-6.8,58.43-18.36,11.52,23.57,15.81,50.1,11.23,76.52h0ZM131.05,374.01c34.32,0,62.25,27.93,62.25,62.25,0,12.33-3.62,23.82-9.83,33.51-10.35,16.14-27.93,27.2-48.14,28.58-1.41.09-2.84.16-4.28.16-7.65,0-14.98-1.4-21.75-3.93-13.64-5.13-25.07-14.86-32.31-27.52-5.37-9.37-8.2-19.99-8.19-30.8,0-34.32,27.93-62.25,62.25-62.25h0Zm207.08,61.66c0-31.19,23.05-57.08,53.01-61.56,3.02-.45,6.1-.69,9.24-.69,19.96,0,37.72,9.45,49.12,24.1,2.85,3.65,5.29,7.61,7.27,11.8,3.87,8.24,5.87,17.24,5.86,26.34,0,4.98-.6,9.81-1.71,14.45-6.07,25.4-27.72,44.81-54.26,47.48-2.06.21-4.16.31-6.28.31-11.97,0-23.69-3.45-33.73-9.97-17.14-11.1-28.51-30.38-28.51-52.27h0Zm259.8-74.02c-13.55,12.93-23.29,29.32-28.19,47.39-23.46-.86-46.95-.86-70.41,0-5.27-19.54-16.18-36.78-30.87-49.87l64.41-130.24,65.06,132.72ZM320.47,40.24h424.62l-100.29,295.79c-4.31,1.03-8.56,2.35-12.7,3.93l-99.07-202.1-99.35,200.9c-4.33-1.49-8.76-2.68-13.25-3.57L320.47,40.24Zm410.46,395.44c0,6.24-.93,12.26-2.65,17.96-4.07,13.4-12.52,25.04-23.99,33.06-10.43,7.32-22.86,11.24-35.61,11.23-28.74,0-52.98-19.59-60.11-46.11-1.42-5.26-2.13-10.69-2.13-16.14,0-8.51,1.72-16.62,4.82-24.02,1.6-3.78,3.57-7.4,5.89-10.79,11.2-16.54,30.1-27.44,51.54-27.44,1.97,0,3.9.1,5.83.28,31.6,2.94,56.42,29.6,56.42,61.96h0Zm40.23,0c0-50.03-36.05-91.78-83.53-100.69L801.21,0H264.36l113.75,335.66c-45.83,10.2-80.21,51.15-80.21,100.01,0,36.69,19.39,68.91,48.45,87.02-13.98,20.82-30.55,40.42-49.54,58.34-30.12,28.41-63.68,49.97-99.86,64.15-36.44-22.89-51.84-66.06-35.85-103.66l1.25-2.95,2.35-5.53c40.02-13.96,68.83-52.05,68.83-96.77,0-56.51-45.97-102.48-102.48-102.48s-102.48,45.97-102.48,102.48c0,28.52,11.73,54.35,30.59,72.95-3.52,7.46-7.09,14.89-10.72,22.29-17.25,35.43-36.8,75.59-44.2,120.19-14.69,88.57,9,159.37,66.71,199.36,35.01,24.27,70.57,33.81,106.36,33.81,67.38,0,135.53-33.85,202.2-66.96,48.01-23.84,97.66-48.5,146.69-60.6,18.25-4.5,37.02-7.21,56.9-10.07,39.42-5.69,80.18-11.57,116.28-32.47,41.85-24.24,70.5-64.9,78.6-111.56,6.95-40.05-1.41-80.17-21.82-114.19,9.83-16.05,15.03-34.51,15.01-53.33h0Z",
                    fill: "#fff"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/about/tools/jira.tsx


function JiraIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        width: "256px",
        height: "256px",
        viewBox: "0 0 256 256",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        x1: "98.0308675%",
                        y1: "0.160599572%",
                        x2: "58.8877062%",
                        y2: "40.7655246%",
                        id: "linearGradient-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#0052CC",
                                offset: "18%"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#2684FF",
                                offset: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        x1: "100.665247%",
                        y1: "0.45503212%",
                        x2: "55.4018095%",
                        y2: "44.7269807%",
                        id: "linearGradient-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#0052CC",
                                offset: "18%"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#2684FF",
                                offset: "100%"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M244.657778,0 L121.706667,0 C121.706667,14.7201046 127.554205,28.837312 137.962891,39.2459977 C148.371577,49.6546835 162.488784,55.5022222 177.208889,55.5022222 L199.857778,55.5022222 L199.857778,77.3688889 C199.877391,107.994155 224.699178,132.815943 255.324444,132.835556 L255.324444,10.6666667 C255.324444,4.77562934 250.548815,3.60722001e-16 244.657778,0 Z",
                        fill: "#2684FF"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M183.822222,61.2622222 L60.8711111,61.2622222 C60.8907238,91.8874888 85.7125112,116.709276 116.337778,116.728889 L138.986667,116.728889 L138.986667,138.666667 C139.025905,169.291923 163.863607,194.097803 194.488889,194.097778 L194.488889,71.9288889 C194.488889,66.0378516 189.71326,61.2622222 183.822222,61.2622222 Z",
                        fill: "url(#linearGradient-1)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M122.951111,122.488889 L0,122.488889 C3.75391362e-15,153.14192 24.8491913,177.991111 55.5022222,177.991111 L78.2222222,177.991111 L78.2222222,199.857778 C78.241767,230.45532 103.020285,255.265647 133.617778,255.324444 L133.617778,133.155556 C133.617778,127.264518 128.842148,122.488889 122.951111,122.488889 Z",
                        fill: "url(#linearGradient-2)"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/material-ui.tsx


function MuiIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        viewBox: "0 0 600 476.30000000000007",
        xmlns: "http://www.w3.org/2000/svg",
        width: "2500",
        height: "1985",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0 259.8V0l225 129.9v86.6L75 129.9v173.2z",
                fill: "#00b0ff"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z",
                fill: "#0081cb"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M225 303.1v86.6l150 86.6v-86.6z",
                fill: "#00b0ff"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z",
                fill: "#0081cb"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/maya.tsx


function MayaIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "480px",
        height: "480px",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#0097a7",
                d: "M36 18.14L36 42 35 42 33 40 33 22.91z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#00838f",
                d: "M43 7c0 0-2 25-7 35h-1c0 0-.12-10-1.5-17.5L33 22.91l3-4.77L43 7zM12 23h2v1l1 16c0 0-2 2-8 2-1 0-2 0-2 0L12 23z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#0097a7",
                d: "M35 42c0 0 6.25-17.625 8-35v35H35zM5 7L5 42 14 24 14 23 14 7z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#33bdcd",
                d: "M28 35L43 7 31.505 7 20 35 20.248 35z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#80d5e0",
                d: "M5 7L16.5 6 28 35 20 35 14 24z"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/microsoft-office.tsx


function MsOfficeIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        width: "64",
        height: "64",
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_1697_53964)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        className: "mix-blend-multiply",
                        opacity: "0.2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M19.93 49C19.2256 49.0075 18.5431 49.2459 17.9871 49.6785C17.4312 50.1111 17.0324 50.714 16.8519 51.395C16.6715 52.0759 16.7193 52.7973 16.9881 53.4484C17.2569 54.0996 17.7318 54.6446 18.34 55L29.7 61.44C30.6357 61.9719 31.6937 62.251 32.77 62.25C33.3491 62.2496 33.9251 62.1654 34.48 62L51.57 57.13C52.8448 56.7637 53.966 55.9933 54.765 54.9346C55.564 53.8759 55.9974 52.5863 56 51.26V49H19.93Z",
                            fill: "white"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        className: "mix-blend-multiply",
                        opacity: "0.12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M19.93 49C19.2256 49.0075 18.5431 49.2459 17.9871 49.6785C17.4312 50.1111 17.0324 50.714 16.8519 51.395C16.6715 52.0759 16.7193 52.7973 16.9881 53.4484C17.2569 54.0996 17.7318 54.6446 18.34 55L29.7 61.44C30.6357 61.9719 31.6937 62.251 32.77 62.25C33.3491 62.2496 33.9251 62.1654 34.48 62L51.57 57.13C52.8448 56.7637 53.966 55.9933 54.765 54.9346C55.564 53.8759 55.9974 52.5863 56 51.26V49H19.93Z",
                            fill: "white"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M34.41 2L39 12.5V49L34.48 62L51.57 57.13C52.8448 56.7637 53.9661 55.9933 54.765 54.9346C55.564 53.8759 55.9974 52.5863 56 51.26V12.74C56.0006 11.4103 55.5674 10.1166 54.7661 9.05544C53.9648 7.99426 52.8391 7.22345 51.56 6.86L34.41 2Z",
                        fill: "url(#paint0_linear_1697_53964)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.74 48.6098L17.74 45.9098C18.4257 45.5329 18.9974 44.9785 19.395 44.3046C19.7927 43.6307 20.0016 42.8623 20 42.0798V22.4298C20.0009 21.5347 20.2767 20.6615 20.79 19.9283C21.3033 19.195 22.0293 18.637 22.87 18.3298L39 12.4998V8.06981C38.9981 6.69678 38.5492 5.3617 37.721 4.26652C36.8929 3.17135 35.7306 2.37566 34.41 1.99981C33.8476 1.83832 33.2651 1.75751 32.68 1.75981V1.75981C31.5794 1.76233 30.4981 2.04817 29.54 2.58981L11.08 13.1198C10.1446 13.6528 9.36687 14.424 8.82591 15.3548C8.28495 16.2857 8 17.3432 8.00001 18.4198V45.7798C7.99861 46.3367 8.1421 46.8843 8.41638 47.369C8.69067 47.8536 9.08632 48.2586 9.56446 48.544C10.0426 48.8295 10.5868 48.9857 11.1435 48.9972C11.7003 49.0087 12.2505 48.8752 12.74 48.6098V48.6098Z",
                        fill: "url(#paint1_linear_1697_53964)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M39 49H19.93C19.2256 49.0075 18.5431 49.2459 17.9871 49.6785C17.4312 50.1111 17.0324 50.714 16.8519 51.395C16.6715 52.0759 16.7193 52.7973 16.9881 53.4484C17.2569 54.0996 17.7318 54.6446 18.34 55L29.7 61.44C30.6357 61.9719 31.6937 62.251 32.77 62.25V62.25C33.3491 62.2496 33.9251 62.1654 34.48 62C35.7845 61.6294 36.9321 60.8426 37.7481 59.7594C38.5641 58.6763 39.0037 57.3561 39 56V49Z",
                        fill: "url(#paint2_linear_1697_53964)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12.74 48.6098L17.74 45.9098C18.4257 45.5329 18.9974 44.9785 19.395 44.3046C19.7927 43.6307 20.0016 42.8623 20 42.0798V22.4298C20.0009 21.5347 20.2767 20.6615 20.79 19.9283C21.3033 19.195 22.0293 18.637 22.87 18.3298L39 12.4998V8.06981C38.9981 6.69678 38.5492 5.3617 37.721 4.26652C36.8929 3.17135 35.7306 2.37566 34.41 1.99981C33.8476 1.83832 33.2651 1.75751 32.68 1.75981V1.75981C31.5794 1.76233 30.4981 2.04817 29.54 2.58981L11.08 13.1198C10.1446 13.6528 9.36687 14.424 8.82591 15.3548C8.28495 16.2857 8 17.3432 8.00001 18.4198V45.7798C7.99861 46.3367 8.1421 46.8843 8.41638 47.369C8.69067 47.8536 9.08632 48.2586 9.56446 48.544C10.0426 48.8295 10.5868 48.9857 11.1435 48.9972C11.7003 49.0087 12.2505 48.8752 12.74 48.6098V48.6098Z",
                        fill: "url(#paint3_linear_1697_53964)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M39 49H19.93C19.2256 49.0075 18.5431 49.2459 17.9871 49.6785C17.4312 50.1111 17.0324 50.714 16.8519 51.395C16.6715 52.0759 16.7193 52.7973 16.9881 53.4484C17.2569 54.0996 17.7318 54.6446 18.34 55L29.7 61.44C30.6357 61.9719 31.6937 62.251 32.77 62.25V62.25C33.3491 62.2496 33.9251 62.1654 34.48 62C35.7845 61.6294 36.9321 60.8426 37.7481 59.7594C38.5641 58.6763 39.0037 57.3561 39 56V49Z",
                        fill: "url(#paint4_linear_1697_53964)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint0_linear_1697_53964",
                        x1: "45.2",
                        y1: "-1.42",
                        x2: "45.2",
                        y2: "57.8",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#FFB900"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.17",
                                stopColor: "#EF8400"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.31",
                                stopColor: "#E25C01"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.43",
                                stopColor: "#DB4401"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.5",
                                stopColor: "#D83B01"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint1_linear_1697_53964",
                        x1: "34.52",
                        y1: "0.669814",
                        x2: "3.16001",
                        y2: "45.4498",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#800600"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.6",
                                stopColor: "#C72127"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.73",
                                stopColor: "#C13959"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.85",
                                stopColor: "#BC4B81"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.94",
                                stopColor: "#B95799"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "#B85BA2"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint2_linear_1697_53964",
                        x1: "18.5",
                        y1: "55.63",
                        x2: "59.44",
                        y2: "55.63",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#F32B44"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.6",
                                stopColor: "#A4070A"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint3_linear_1697_53964",
                        x1: "35.16",
                        y1: "-0.240187",
                        x2: "28.52",
                        y2: "9.23981",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopOpacity: "0.4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint4_linear_1697_53964",
                        x1: "46.32",
                        y1: "56.55",
                        x2: "27.99",
                        y2: "54.95",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopOpacity: "0.4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopOpacity: "0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                        id: "clip0_1697_53964",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            width: "64",
                            height: "64",
                            fill: "white"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/miro.tsx


function MiroIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: props.className,
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 48 48",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#FFD02F",
                    d: "M10.4,0h27.2C43.3,0,48,4.7,48,10.4v27.2C48,43.3,43.3,48,37.6,48H10.4C4.7,48,0,43.3,0,37.6V10.4 C0,4.7,4.7,0,10.4,0z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#050038",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M33.3,6h-5.3l4.4,7.7L22.8,6h-5.3l4.8,9.4L12.3,6H7l5.3,12L7,42h5.3l10.1-25.7L17.5,42h5.3l9.7-27.4L28.1,42 h5.3L43,12L33.3,6z"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/about/tools/mongodb.tsx


function MongoIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: props.className,
        id: "Layer_2",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 256 256",
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            id: "Layer_1-2",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "m200.5,256H55.5c-30.65,0-55.5-24.85-55.5-55.5V55C0,24.62,24.62,0,55,0h145.5c30.65,0,55.5,24.85,55.5,55.5v145c0,30.65-24.85,55.5-55.5,55.5Z",
                        fill: "#001e2b"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "m141.77,66.63c-6.65-7.87-12.38-15.85-13.55-17.51-.12-.12-.31-.12-.43,0-1.17,1.66-6.9,9.65-13.55,17.51-57.09,72.57,8.99,121.55,8.99,121.55l.55.37c.49,7.56,1.72,18.44,1.72,18.44h4.93s1.23-10.82,1.72-18.44l.55-.43c.06,0,66.15-48.92,9.05-121.49Zm-13.8,120.45s-2.96-2.52-3.76-3.81v-.12l3.57-79.03c0-.25.37-.25.37,0l3.57,79.03v.12c-.8,1.29-3.76,3.81-3.76,3.81Z",
                        fill: "#00ed64"
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/about/tools/mysql.tsx


function MySqlIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: props.className,
        id: "Layer_2",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 134.12 91.08",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            id: "Layer_1-2",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "m32.24,82.98h-5.17c-.18-8.74-.69-16.95-1.51-24.64h-.05l-7.88,24.64h-3.94l-7.83-24.64h-.05c-.58,7.39-.95,15.6-1.1,24.64H0c.3-10.99,1.07-21.3,2.29-30.92h6.41l7.47,22.72h.05l7.51-22.72h6.14c1.34,11.27,2.14,21.57,2.38,30.92m22.44-22.81c-2.11,11.43-4.89,19.74-8.34,24.93-2.69,3.99-5.63,5.99-8.84,5.99-.85,0-1.91-.26-3.16-.77v-2.76c.61.09,1.33.14,2.15.14,1.5,0,2.7-.41,3.62-1.24,1.1-1.01,1.65-2.14,1.65-3.39,0-.86-.43-2.61-1.28-5.27l-5.68-17.64h5.08l4.08,13.19c.92,3,1.3,5.09,1.15,6.28,2.23-5.95,3.79-12.44,4.67-19.47h4.9Z",
                    fill: "#5d87a1"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "m123.57,82.98h-14.7v-30.92h4.94v27.11h9.75v3.81Zm-18.55.75l-5.68-2.81c.5-.41.99-.86,1.42-1.38,2.42-2.84,3.62-7.03,3.62-12.59,0-10.23-4.01-15.35-12.04-15.35-3.94,0-7.01,1.3-9.21,3.89-2.41,2.84-3.62,7.02-3.62,12.55s1.07,9.42,3.21,11.95c1.96,2.29,4.9,3.44,8.84,3.44,1.47,0,2.82-.18,4.05-.54l7.4,4.31,2.02-3.47Zm-18.41-6.93c-1.25-2.01-1.88-5.25-1.88-9.71,0-7.78,2.36-11.68,7.1-11.68,2.47,0,4.29.93,5.45,2.79,1.25,2.02,1.88,5.22,1.88,9.62,0,7.85-2.37,11.77-7.1,11.77-2.48,0-4.29-.93-5.45-2.8m-9.26-2.38c0,2.62-.96,4.77-2.88,6.46-1.92,1.68-4.5,2.52-7.74,2.52-3.02,0-5.96-.97-8.79-2.89l1.33-2.65c2.44,1.22,4.65,1.83,6.64,1.83,1.86,0,3.32-.41,4.38-1.23,1.06-.82,1.68-1.97,1.68-3.43,0-1.84-1.28-3.41-3.63-4.72-2.17-1.19-6.5-3.68-6.5-3.68-2.35-1.71-3.53-3.55-3.53-6.58,0-2.51.88-4.53,2.63-6.07,1.76-1.54,4.02-2.32,6.8-2.32s5.48.77,7.83,2.29l-1.19,2.66c-2.01-.85-3.99-1.28-5.95-1.28-1.58,0-2.81.38-3.66,1.15-.86.76-1.39,1.74-1.39,2.93,0,1.83,1.31,3.42,3.72,4.76,2.2,1.19,6.64,3.72,6.64,3.72,2.41,1.71,3.61,3.53,3.61,6.53",
                    fill: "#f8981d"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "m129.78,41.7c-2.99-.08-5.3.22-7.25,1.05-.56.22-1.45.22-1.53.93.3.3.34.78.6,1.2.45.75,1.23,1.75,1.94,2.28.78.6,1.57,1.19,2.39,1.72,1.45.9,3.1,1.42,4.52,2.32.82.52,1.65,1.19,2.47,1.76.41.3.67.78,1.19.97v-.11c-.26-.34-.34-.82-.6-1.2l-1.12-1.08c-1.08-1.46-2.43-2.73-3.88-3.77-1.2-.82-3.81-1.94-4.3-3.32l-.08-.08c.82-.08,1.8-.38,2.58-.6,1.27-.33,2.43-.26,3.73-.59.6-.15,1.2-.34,1.8-.52v-.34c-.68-.67-1.16-1.57-1.87-2.2-1.9-1.64-4-3.25-6.16-4.6-1.16-.75-2.65-1.23-3.89-1.87-.44-.22-1.19-.34-1.46-.71-.67-.82-1.05-1.9-1.53-2.88-1.08-2.05-2.13-4.33-3.06-6.5-.67-1.46-1.08-2.91-1.91-4.26-3.85-6.35-8.03-10.2-14.46-13.97-1.38-.79-3.02-1.12-4.78-1.53l-2.8-.15c-.6-.26-1.2-.97-1.72-1.31-2.13-1.34-7.62-4.26-9.19-.41-1.01,2.43,1.49,4.82,2.35,6.05.64.86,1.46,1.83,1.9,2.8.26.63.34,1.31.6,1.98.6,1.64,1.16,3.47,1.94,5.01.41.78.86,1.6,1.38,2.31.3.41.82.6.94,1.27-.52.74-.56,1.87-.86,2.8-1.34,4.22-.82,9.45,1.09,12.55.6.93,2.02,2.99,3.92,2.2,1.68-.67,1.31-2.8,1.79-4.67.11-.45.04-.75.26-1.04v.07c.52,1.05,1.05,2.05,1.53,3.1,1.16,1.83,3.18,3.74,4.86,5,.89.68,1.6,1.83,2.72,2.25v-.11h-.07c-.23-.33-.56-.49-.86-.75-.67-.67-1.42-1.5-1.94-2.24-1.57-2.09-2.95-4.41-4.18-6.8-.6-1.16-1.12-2.43-1.61-3.59-.23-.45-.23-1.12-.6-1.35-.56.82-1.38,1.53-1.79,2.54-.71,1.61-.79,3.59-1.05,5.65l-.15.07c-1.19-.3-1.6-1.53-2.06-2.57-1.12-2.65-1.31-6.91-.34-9.98.26-.78,1.39-3.25.94-3.99-.22-.72-.97-1.12-1.38-1.69-.48-.71-1.01-1.6-1.35-2.39-.9-2.09-1.35-4.41-2.31-6.5-.45-.97-1.23-1.98-1.87-2.88-.71-1.01-1.5-1.72-2.06-2.91-.19-.41-.45-1.08-.15-1.53.07-.3.22-.41.52-.49.48-.41,1.87.11,2.35.34,1.39.56,2.54,1.08,3.7,1.87.52.38,1.08,1.08,1.75,1.27h.79c1.19.26,2.54.07,3.66.41,1.98.64,3.77,1.57,5.38,2.58,4.89,3.1,8.93,7.51,11.65,12.78.45.86.64,1.64,1.04,2.54.79,1.83,1.76,3.7,2.54,5.49.79,1.76,1.53,3.55,2.65,5.01.56.78,2.81,1.19,3.81,1.61.74.33,1.9.63,2.58,1.04,1.27.78,2.54,1.68,3.73,2.54.6.45,2.46,1.38,2.58,2.13M91.67,9.24c-.52,0-1.03.06-1.53.19v.08h.07c.3.6.82,1.01,1.2,1.53.3.6.56,1.19.86,1.79l.07-.07c.53-.37.79-.97.79-1.87-.23-.26-.26-.52-.45-.78-.22-.37-.71-.56-1.01-.86",
                    fill: "#5d87a1"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/about/tools/nextjs.tsx


function NextIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: props.className,
        fill: "white",
        stroke: "white",
        height: "1509",
        preserveAspectRatio: "xMidYMid",
        viewBox: "0 0 512 308.883",
        width: "2500",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "m120.81 80.561h96.568v7.676h-87.716v57.767h82.486v7.675h-82.486v63.423h88.722v7.675h-97.574zm105.22 0h10.26l45.467 63.423 46.473-63.424 63.211-80.56-103.85 150.65 53.515 74.127h-10.663l-48.686-67.462-48.888 67.462h-10.461l53.917-74.128zm118.898 7.676v-7.677h110.048v7.676h-50.699v136.54h-8.852v-136.539zm-344.928-7.677h11.065l152.58 228.323-63.053-84.107-91.338-133.308-.402 133.31h-8.852zm454.084 134.224c-1.809 0-3.165-1.4-3.165-3.212 0-1.81 1.356-3.212 3.165-3.212 1.83 0 3.165 1.401 3.165 3.212s-1.335 3.212-3.165 3.212zm8.698-8.45h4.737c.064 2.565 1.937 4.29 4.693 4.29 3.079 0 4.823-1.854 4.823-5.325v-21.99h4.823v22.011c0 6.252-3.617 9.853-9.603 9.853-5.62 0-9.473-3.493-9.473-8.84zm25.384-.28h4.78c.409 2.953 3.294 4.828 7.45 4.828 3.875 0 6.717-2.005 6.717-4.764 0-2.371-1.809-3.794-5.921-4.764l-4.005-.97c-5.62-1.316-8.181-4.032-8.181-8.602 0-5.54 4.521-9.227 11.303-9.227 6.308 0 10.916 3.686 11.196 8.925h-4.694c-.452-2.867-2.95-4.657-6.567-4.657-3.81 0-6.35 1.833-6.35 4.635 0 2.22 1.635 3.493 5.683 4.441l3.423.841c6.373 1.488 9 4.075 9 8.753 0 5.95-4.607 9.68-11.97 9.68-6.89 0-11.52-3.558-11.864-9.12z"
        })
    });
}

;// CONCATENATED MODULE: ./components/about/tools/node.tsx


function NodeIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        id: "Layer_2",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 94.44 107.49",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "linear-gradient",
                        x1: "64.35",
                        y1: "18.79",
                        x2: "26.28",
                        y2: "96.44",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0",
                                stopColor: "#3f873f"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: ".33",
                                stopColor: "#3e8a3d"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: ".64",
                                stopColor: "#3e9537"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: ".93",
                                stopColor: "#3da82d"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "#3dae2b"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                        id: "clippath",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "m49.77.68c-1.57-.91-3.51-.91-5.09,0L2.55,25C.97,25.9,0,27.58,0,29.4v48.67c0,1.82.97,3.5,2.54,4.41l42.13,24.33c1.58.91,3.52.91,5.09,0l42.12-24.33c1.57-.91,2.54-2.59,2.54-4.41V29.4c0-1.82-.97-3.5-2.55-4.41L49.77.68Z",
                            clipRule: "evenodd",
                            fill: "url(#linear-gradient)"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "linear-gradient-2",
                        x1: "40.8",
                        y1: "59.43",
                        x2: "147.61",
                        y2: "-19.49",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: ".14",
                                stopColor: "#3f873f"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: ".4",
                                stopColor: "#519f44"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: ".71",
                                stopColor: "#63b649"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: ".91",
                                stopColor: "#6abf4b"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "linear-gradient-3",
                        x1: "-1.49",
                        y1: "53.73",
                        x2: "95.93",
                        y2: "53.73",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: ".09",
                                stopColor: "#6abf4b"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: ".29",
                                stopColor: "#63b649"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: ".6",
                                stopColor: "#519f44"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: ".86",
                                stopColor: "#3f873f"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("linearGradient", {
                        id: "linear-gradient-4",
                        x1: "-1.49",
                        y1: "94.11",
                        x2: "95.93",
                        y2: "94.11",
                        href: "#linear-gradient-3"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("linearGradient", {
                        id: "linear-gradient-5",
                        x1: "110.12",
                        y1: "16.49",
                        x2: "50.04",
                        y2: "139.05",
                        href: "#linear-gradient"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                id: "Layer_1-2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "m49.77.68c-1.57-.91-3.51-.91-5.09,0L2.55,25C.97,25.9,0,27.58,0,29.4v48.67c0,1.82.97,3.5,2.54,4.41l42.13,24.33c1.58.91,3.52.91,5.09,0l42.12-24.33c1.57-.91,2.54-2.59,2.54-4.41V29.4c0-1.82-.97-3.5-2.55-4.41L49.77.68Z",
                            fill: "url(#linear-gradient)",
                            fillRule: "evenodd"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                            clipPath: "url(#clippath)",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "m44.59.68L2.37,25c-1.58.91-2.72,2.59-2.72,4.41v48.67c0,1.2.51,2.34,1.31,3.24L48.4.16c-1.27-.31-2.65-.14-3.81.53Z",
                                            fill: "none"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "m48.63,107.3c.41-.11.81-.28,1.19-.49l42.18-24.33c1.57-.91,2.65-2.59,2.65-4.41V29.4c0-1.34-.6-2.6-1.54-3.53l-44.47,81.44Z",
                                            fill: "none"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "m91.97,25L49.72.68c-.42-.24-.86-.41-1.32-.53L.96,81.31c.41.46.89.86,1.42,1.17l42.32,24.33c1.2.69,2.62.85,3.93.49L93.11,25.87c-.34-.34-.72-.63-1.13-.87Z",
                                            fill: "url(#linear-gradient-2)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "m94.65,78.07V29.4c0-1.82-1.1-3.5-2.67-4.41L49.72.68c-.49-.28-1.01-.46-1.55-.57l46.32,79.13c.1-.38.16-.77.16-1.17Z",
                                            fill: "none"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "m2.37,25c-1.58.91-2.72,2.59-2.72,4.41v48.67c0,1.82,1.16,3.5,2.73,4.41l42.32,24.33c1,.57,2.15.78,3.26.63L2.62,24.85l-.25.15Z",
                                            fill: "none"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "m92,82.48c1.23-.71,2.14-1.89,2.49-3.24L48.17.11c-1.21-.24-2.49-.06-3.58.57L2.62,24.85l45.34,82.59c.65-.09,1.28-.3,1.86-.63l42.18-24.33Z",
                                            fill: "url(#linear-gradient-3)"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "m92,82.48l-42.18,24.33c-.58.33-1.21.54-1.86.63l.84,1.53,46.85-27.12v-.64l-1.16-1.98c-.35,1.35-1.26,2.53-2.49,3.24Z",
                                            fill: "url(#linear-gradient-4)"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "m92,82.48l-42.18,24.33c-.58.33-1.21.54-1.86.63l.84,1.53,46.85-27.12v-.64l-1.16-1.98c-.35,1.35-1.26,2.53-2.49,3.24Z",
                                            fill: "url(#linear-gradient-5)"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/photoshop.tsx


function PhotoshopIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: props.className,
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 240 234",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            id: "Layer_2_1_",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    id: "Surfaces",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        id: "Photo_Surface",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                            id: "Outline_no_shadow",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#001E36",
                                d: "M42.5,0h155C221,0,240,19,240,42.5v149c0,23.5-19,42.5-42.5,42.5h-155C19,234,0,215,0,191.5v-149 C0,19,19,0,42.5,0z"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    id: "Outlined_Mnemonics_Logos",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        id: "Ps",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#31A8FF",
                                d: "M54,164.1V61.2c0-0.7,0.3-1.1,1-1.1c1.7,0,3.3,0,5.6-0.1c2.4-0.1,4.9-0.1,7.6-0.2c2.7-0.1,5.6-0.1,8.7-0.2 c3.1-0.1,6.1-0.1,9.1-0.1c8.2,0,15,1,20.6,3.1c5,1.7,9.6,4.5,13.4,8.2c3.2,3.2,5.7,7.1,7.3,11.4c1.5,4.2,2.3,8.5,2.3,13 c0,8.6-2,15.7-6,21.3c-4,5.6-9.6,9.8-16.1,12.2c-6.8,2.5-14.3,3.4-22.5,3.4c-2.4,0-4,0-5-0.1c-1-0.1-2.4-0.1-4.3-0.1v32.1 c0.1,0.7-0.4,1.3-1.1,1.4c-0.1,0-0.2,0-0.4,0H55.2C54.4,165.4,54,165,54,164.1z M75.8,79.4V113c1.4,0.1,2.7,0.2,3.9,0.2H85 c3.9,0,7.8-0.6,11.5-1.8c3.2-0.9,6-2.8,8.2-5.3c2.1-2.5,3.1-5.9,3.1-10.3c0.1-3.1-0.7-6.2-2.3-8.9c-1.7-2.6-4.1-4.6-7-5.7 c-3.7-1.5-7.7-2.1-11.8-2c-2.6,0-4.9,0-6.8,0.1C77.9,79.2,76.5,79.3,75.8,79.4L75.8,79.4z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#31A8FF",
                                d: "M192,106.9c-3-1.6-6.2-2.7-9.6-3.4c-3.7-0.8-7.4-1.3-11.2-1.3c-2-0.1-4.1,0.2-6,0.7c-1.3,0.3-2.4,1-3.1,2 c-0.5,0.8-0.8,1.8-0.8,2.7c0,0.9,0.4,1.8,1,2.6c0.9,1.1,2.1,2,3.4,2.7c2.3,1.2,4.7,2.3,7.1,3.3c5.4,1.8,10.6,4.3,15.4,7.3 c3.3,2.1,6,4.9,7.9,8.3c1.6,3.2,2.4,6.7,2.3,10.3c0.1,4.7-1.3,9.4-3.9,13.3c-2.8,4-6.7,7.1-11.2,8.9c-4.9,2.1-10.9,3.2-18.1,3.2 c-4.6,0-9.1-0.4-13.6-1.3c-3.5-0.6-7-1.7-10.2-3.2c-0.7-0.4-1.2-1.1-1.1-1.9v-17.4c0-0.3,0.1-0.7,0.4-0.9 c0.3-0.2,0.6-0.1,0.9,0.1c3.9,2.3,8,3.9,12.4,4.9c3.8,1,7.8,1.5,11.8,1.5c3.8,0,6.5-0.5,8.3-1.4c1.6-0.7,2.7-2.4,2.7-4.2 c0-1.4-0.8-2.7-2.4-4c-1.6-1.3-4.9-2.8-9.8-4.7c-5.1-1.8-9.8-4.2-14.2-7.2c-3.1-2.2-5.7-5.1-7.6-8.5c-1.6-3.2-2.4-6.7-2.3-10.2 c0-4.3,1.2-8.4,3.4-12.1c2.5-4,6.2-7.2,10.5-9.2c4.7-2.4,10.6-3.5,17.7-3.5c4.1,0,8.3,0.3,12.4,0.9c3,0.4,5.9,1.2,8.6,2.3 c0.4,0.1,0.8,0.5,1,0.9c0.1,0.4,0.2,0.8,0.2,1.2v16.3c0,0.4-0.2,0.8-0.5,1C192.9,107.1,192.4,107.1,192,106.9z"
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/about/tools/postgresql.tsx


function PostgreIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        width: "577",
        height: "594",
        viewBox: "0 0 577 594",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_1697_53978)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M430.94 432.302C434.717 400.834 433.585 396.22 457.024 401.317L462.975 401.84C480.997 402.66 504.573 398.941 518.424 392.506C548.24 378.672 565.92 355.573 536.52 361.642C469.457 375.477 464.847 352.769 464.847 352.769C535.661 247.698 565.264 114.321 539.712 81.6729C470.019 -7.37909 349.381 34.7316 347.363 35.8249L346.72 35.9436C333.469 33.1942 318.64 31.5516 301.981 31.2822C271.633 30.7836 248.605 39.2382 231.137 52.4876C231.137 52.4876 15.9267 -36.1764 25.9387 163.992C28.068 206.573 86.9747 486.198 157.232 401.738C182.911 370.854 207.727 344.741 207.727 344.741C220.049 352.928 234.803 357.104 250.276 355.604L251.472 354.584C251.097 358.418 251.263 362.169 251.951 366.609C233.855 386.832 239.172 390.382 202.987 397.83C166.377 405.376 187.885 418.809 201.924 422.32C218.948 426.577 258.331 432.608 284.948 395.354L283.888 399.605C290.988 405.285 290.508 440.43 291.515 465.541C292.523 490.653 294.204 514.086 299.323 527.902C304.441 541.716 310.481 577.302 358.037 567.11C397.783 558.593 428.171 546.334 430.94 432.301",
                        fill: "black"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M430.94 432.302C434.717 400.834 433.585 396.22 457.024 401.317L462.975 401.84C480.997 402.66 504.573 398.941 518.424 392.506C548.24 378.672 565.92 355.573 536.52 361.642C469.457 375.477 464.847 352.769 464.847 352.769C535.661 247.698 565.264 114.321 539.712 81.6729C470.019 -7.37909 349.381 34.7316 347.363 35.8249L346.72 35.9436C333.469 33.1942 318.64 31.5516 301.981 31.2822C271.633 30.7836 248.605 39.2382 231.137 52.4876C231.137 52.4876 15.9267 -36.1764 25.9387 163.992C28.068 206.573 86.9747 486.198 157.232 401.738C182.911 370.854 207.727 344.741 207.727 344.741C220.049 352.928 234.803 357.104 250.276 355.604L251.472 354.584C251.097 358.418 251.263 362.169 251.951 366.609C233.855 386.832 239.172 390.382 202.987 397.83C166.377 405.376 187.885 418.809 201.924 422.32C218.948 426.577 258.331 432.608 284.948 395.354L283.888 399.605C290.988 405.285 290.508 440.43 291.515 465.541C292.523 490.653 294.204 514.086 299.323 527.902C304.441 541.716 310.481 577.302 358.037 567.11C397.783 558.593 428.171 546.334 430.94 432.301",
                        stroke: "black",
                        strokeWidth: "49.8604"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M536.527 361.64C469.457 375.474 464.847 352.766 464.847 352.766C535.661 247.689 565.264 114.309 539.717 81.6649C470.024 -7.3818 349.381 34.7315 347.368 35.8249L346.72 35.9409C333.469 33.1902 318.64 31.5515 301.973 31.2795C271.625 30.7822 248.605 39.2355 231.137 52.4822C231.137 52.4822 15.9227 -36.1778 25.932 163.989C28.0613 206.573 86.9667 486.198 157.227 401.738C182.907 370.854 207.719 344.741 207.719 344.741C220.043 352.928 234.796 357.104 250.263 355.604L251.464 354.584C251.091 358.418 251.261 362.169 251.945 366.609C233.845 386.832 239.164 390.382 202.981 397.83C166.369 405.376 187.877 418.809 201.92 422.32C218.944 426.577 258.329 432.608 284.941 395.354L283.88 399.605C290.972 405.285 295.952 436.553 295.117 464.897C294.283 493.242 293.725 512.702 299.313 527.902C304.901 543.102 310.471 577.302 358.036 567.11C397.781 558.593 418.377 536.521 421.243 499.704C423.276 473.529 427.877 477.398 428.168 453.997L431.859 442.918C436.115 407.437 432.535 395.99 457.021 401.314L462.972 401.837C480.995 402.657 504.583 398.938 518.427 392.504C548.237 378.669 565.917 355.57 536.524 361.64H536.527Z",
                        fill: "#336791"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M287.821 381.979C285.975 448 288.285 514.481 294.745 530.639C301.209 546.796 315.043 578.222 362.612 568.032C402.353 559.512 416.813 543.024 423.088 506.63C427.709 479.854 436.619 405.492 437.761 390.256",
                        stroke: "white",
                        strokeWidth: "16.6201",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M230.805 51.0081C230.805 51.0081 15.444 -37.0133 25.456 163.153C27.5853 205.737 86.4947 485.372 156.753 400.908C182.428 370.02 205.648 345.795 205.648 345.795",
                        stroke: "white",
                        strokeWidth: "16.6201",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M347.132 34.9425C339.677 37.2798 466.929 -11.5762 539.248 80.8318C564.793 113.477 535.191 246.857 464.377 351.937",
                        stroke: "white",
                        strokeWidth: "16.6201",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M464.376 351.938C464.376 351.938 468.991 374.653 536.061 360.809C565.448 354.739 547.763 377.841 517.959 391.682C493.499 403.034 438.66 405.943 437.764 390.257C435.459 349.783 466.627 362.079 464.377 351.938C462.344 342.805 448.405 333.841 439.185 311.487C431.136 291.977 328.791 142.355 467.568 164.577C472.652 163.525 431.373 32.574 301.497 30.4447C171.651 28.3153 175.911 190.127 175.911 190.127",
                        stroke: "white",
                        strokeWidth: "16.6201",
                        strokeLinecap: "round",
                        strokeLinejoin: "bevel"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M251.472 365.779C233.369 386 238.693 389.551 202.508 397.002C165.896 404.548 187.407 417.979 201.445 421.488C218.469 425.748 257.855 431.779 284.467 394.516C292.571 383.171 284.419 365.068 273.287 360.454C267.908 358.226 260.716 355.434 251.472 365.779V365.779Z",
                        stroke: "white",
                        strokeWidth: "16.6201",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M250.287 365.426C248.463 353.537 254.193 339.389 260.335 322.837C269.564 298.002 290.859 273.163 273.824 194.385C261.127 135.679 175.963 182.167 175.909 190.127C175.857 198.085 179.761 230.474 174.487 268.191C167.604 317.409 205.804 359.034 249.792 354.775",
                        stroke: "white",
                        strokeWidth: "16.6201",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M230.023 188.932C229.639 191.651 235 198.906 241.991 199.875C248.969 200.848 254.943 195.179 255.321 192.463C255.7 189.744 250.345 186.75 243.352 185.776C236.369 184.802 230.393 186.22 230.024 188.932H230.023Z",
                        fill: "white",
                        stroke: "white",
                        strokeWidth: "5.54"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M442.588 183.391C442.967 186.11 437.612 193.364 430.62 194.334C423.636 195.307 417.663 189.638 417.28 186.922C416.911 184.203 422.267 181.208 429.252 180.235C436.237 179.262 442.209 180.679 442.588 183.392V183.391Z",
                        fill: "white",
                        stroke: "white",
                        strokeWidth: "2.77"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M467.568 164.576C468.719 185.902 462.975 200.427 462.251 223.128C461.179 256.125 477.983 293.894 452.663 331.708",
                        stroke: "white",
                        strokeWidth: "16.6201",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_1697_53978",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "576.095",
                        height: "593.844",
                        fill: "white"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/postman.tsx


function PostmanIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        width: "317",
        height: "285",
        viewBox: "0 0 317 285",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_1710_55286)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M2.55696e-07 282.07V239.13C0.000564766 238.88 0.0554179 238.634 0.160753 238.408C0.266089 238.182 0.419383 237.981 0.61 237.82C1.0438 237.451 1.60066 237.258 2.17 237.28H14.28C17.8617 237.104 21.3773 238.29 24.12 240.6C26.58 242.813 27.81 246.303 27.81 251.07V251.65C27.81 256.423 26.5567 259.927 24.05 262.16C21.2539 264.49 17.6852 265.685 14.05 265.51H5.44V282.07C5.44793 282.354 5.37748 282.635 5.23638 282.882C5.09528 283.129 4.88895 283.333 4.64 283.47C4.06964 283.809 3.41846 283.988 2.755 283.988C2.09154 283.988 1.44036 283.809 0.87 283.47C0.608731 283.341 0.388761 283.142 0.235 282.894C0.0812399 282.647 -0.000166506 282.361 2.55696e-07 282.07V282.07ZM5.36 261.07H14.03C15.171 261.14 16.3141 260.973 17.3878 260.581C18.4614 260.188 19.4426 259.579 20.27 258.79C21.0689 257.86 21.6762 256.782 22.0572 255.616C22.4381 254.451 22.5852 253.222 22.49 252V251.22C22.6888 248.753 21.9013 246.307 20.3 244.42C19.4717 243.634 18.4898 243.027 17.416 242.638C16.3422 242.249 15.1997 242.087 14.06 242.16H5.44L5.36 261.07Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M46.5601 270.44V251.2C46.5601 246.4 47.8101 242.877 50.3101 240.63C53.1952 238.467 56.704 237.297 60.3101 237.297C63.9161 237.297 67.4249 238.467 70.3101 240.63C72.8367 242.877 74.1034 246.4 74.1101 251.2V270.44C74.1101 275.247 72.8534 278.77 70.3401 281.01C67.4526 283.199 63.9285 284.384 60.3051 284.384C56.6816 284.384 53.1575 283.199 50.2701 281.01C47.8001 278.76 46.5601 275.27 46.5601 270.44ZM51.9401 270.44C51.9401 276.48 54.7267 279.503 60.3001 279.51C61.4383 279.584 62.5794 279.421 63.6517 279.032C64.7239 278.643 65.7039 278.036 66.5301 277.25C68.1288 275.357 68.919 272.911 68.7301 270.44V251.2C68.8294 249.977 68.6861 248.747 68.3086 247.58C67.931 246.414 67.3266 245.333 66.5301 244.4C65.7039 243.614 64.7239 243.007 63.6517 242.618C62.5794 242.229 61.4383 242.066 60.3001 242.14C54.7201 242.14 51.9401 245.14 51.9401 251.2V270.44Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M93.0801 277.4C93.0979 276.67 93.3582 275.966 93.8201 275.4C93.9829 275.124 94.2078 274.89 94.4769 274.717C94.7459 274.543 95.0518 274.435 95.3701 274.4C95.9369 274.498 96.4545 274.783 96.8401 275.21C97.4301 275.74 98.0601 276.33 98.7001 276.99C99.5638 277.79 100.586 278.4 101.7 278.78C103.195 279.341 104.784 279.61 106.38 279.57C108.721 279.714 111.034 279.003 112.89 277.57C113.708 276.83 114.347 275.913 114.758 274.889C115.168 273.865 115.34 272.76 115.26 271.66C115.305 270.61 115.137 269.562 114.766 268.579C114.394 267.596 113.828 266.698 113.1 265.94C111.616 264.458 109.828 263.315 107.86 262.59C105.8 261.83 103.76 261.03 101.62 260.13C99.5563 259.259 97.7442 257.883 96.3501 256.13C94.8514 254.112 94.0891 251.642 94.1901 249.13C94.1416 247.107 94.577 245.101 95.4601 243.28C96.2183 241.731 97.4054 240.433 98.8801 239.54C100.265 238.719 101.76 238.099 103.32 237.7C104.926 237.303 106.576 237.108 108.23 237.12C110.8 237.108 113.357 237.493 115.81 238.26C118.21 239.04 119.43 240.1 119.43 241.38C119.395 242.066 119.174 242.73 118.79 243.3C118.628 243.602 118.387 243.854 118.093 244.03C117.799 244.206 117.463 244.299 117.12 244.3C116.135 243.999 115.176 243.621 114.25 243.17C112.382 242.339 110.355 241.923 108.31 241.95C106.122 241.849 103.953 242.392 102.07 243.51C101.265 244.07 100.62 244.83 100.199 245.716C99.7779 246.602 99.5956 247.582 99.6701 248.56C99.6257 249.469 99.7932 250.376 100.159 251.209C100.526 252.042 101.08 252.778 101.78 253.36C103.345 254.64 105.131 255.623 107.05 256.26C109.12 256.99 111.18 257.82 113.28 258.76C115.384 259.772 117.182 261.325 118.49 263.26C120.011 265.603 120.769 268.359 120.66 271.15C120.66 275.55 119.38 278.85 116.82 281.1C113.97 283.438 110.352 284.632 106.67 284.45C103.31 284.558 99.9868 283.731 97.0701 282.06C94.3901 280.52 93.0801 279 93.0801 277.4V277.4Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M136.66 239.65C136.639 239.055 136.819 238.471 137.17 237.99C137.318 237.757 137.526 237.568 137.773 237.443C138.019 237.318 138.294 237.262 138.57 237.28H164.57C164.845 237.262 165.121 237.318 165.367 237.443C165.613 237.568 165.822 237.757 165.97 237.99C166.31 238.476 166.488 239.057 166.48 239.65C166.499 240.269 166.321 240.879 165.97 241.39C165.826 241.63 165.62 241.826 165.373 241.958C165.127 242.09 164.849 242.153 164.57 242.14H154.37V282.07C154.375 282.354 154.304 282.634 154.163 282.881C154.022 283.127 153.817 283.331 153.57 283.47C152.999 283.809 152.348 283.988 151.685 283.988C151.021 283.988 150.37 283.809 149.8 283.47C149.552 283.331 149.347 283.127 149.206 282.881C149.065 282.634 148.994 282.354 149 282.07V242.14H138.65C138.373 242.156 138.098 242.098 137.852 241.971C137.605 241.844 137.398 241.654 137.25 241.42C136.864 240.911 136.656 240.289 136.66 239.65V239.65Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M184.7 282.07V240C184.601 239.39 184.748 238.766 185.108 238.264C185.467 237.762 186.011 237.423 186.62 237.32C186.898 237.281 187.181 237.281 187.46 237.32C189.16 237.32 190.58 238.44 191.75 240.71L201.75 259.94L211.86 240.71C213.09 238.44 214.51 237.32 216.13 237.32C216.738 237.225 217.36 237.374 217.858 237.736C218.356 238.098 218.691 238.642 218.79 239.25C218.83 239.472 218.83 239.698 218.79 239.92V282C218.798 282.285 218.729 282.566 218.59 282.814C218.451 283.063 218.247 283.269 218 283.41C217.426 283.744 216.774 283.92 216.11 283.92C215.446 283.92 214.794 283.744 214.22 283.41C213.973 283.269 213.769 283.063 213.629 282.814C213.49 282.566 213.421 282.285 213.43 282V248.52L203.78 266.66C203.63 267.103 203.348 267.489 202.973 267.768C202.598 268.046 202.147 268.204 201.68 268.22C201.227 268.195 200.793 268.033 200.435 267.754C200.078 267.475 199.814 267.093 199.68 266.66L190.03 248.21V282.07C190.036 282.354 189.964 282.634 189.823 282.881C189.682 283.127 189.477 283.331 189.23 283.47C188.699 283.843 188.069 284.048 187.42 284.06C186.757 284.079 186.103 283.901 185.54 283.55C185.272 283.411 185.049 283.197 184.9 282.935C184.751 282.672 184.681 282.372 184.7 282.07V282.07Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M237.16 281.77C237.174 281.591 237.218 281.415 237.29 281.25L250.37 239.16C250.74 237.93 251.82 237.31 253.62 237.31C255.42 237.31 256.51 237.93 256.88 239.16L270 281.46C269.99 281.536 269.99 281.614 270 281.69C270.02 281.752 270.02 281.818 270 281.88C269.988 282.206 269.89 282.522 269.714 282.797C269.538 283.071 269.291 283.293 269 283.44C268.298 283.872 267.484 284.087 266.66 284.06C266.251 284.114 265.835 284.024 265.485 283.805C265.135 283.586 264.871 283.252 264.74 282.86L261.94 273.51H245.14L242.34 282.86C242.213 283.273 241.94 283.625 241.572 283.852C241.204 284.078 240.766 284.163 240.34 284.09C239.57 284.09 238.817 283.868 238.17 283.45C237.86 283.295 237.6 283.054 237.421 282.757C237.242 282.459 237.152 282.117 237.16 281.77V281.77ZM246.44 268.97H260.73L253.58 245.09L246.44 268.97Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M288.53 282.07V239.13C288.53 237.9 289.42 237.28 291.21 237.28C292.04 237.259 292.85 237.54 293.49 238.07C294.246 238.813 294.857 239.692 295.29 240.66L311.21 271.84V239.1C311.209 238.821 311.282 238.547 311.423 238.306C311.564 238.065 311.766 237.866 312.01 237.73C312.588 237.415 313.236 237.25 313.895 237.25C314.554 237.25 315.202 237.415 315.78 237.73C316.023 237.866 316.224 238.066 316.363 238.307C316.502 238.548 316.573 238.822 316.57 239.1V282.1C316.578 282.383 316.508 282.663 316.369 282.91C316.23 283.156 316.026 283.36 315.78 283.5C315.214 283.853 314.557 284.03 313.89 284.01C313.153 283.973 312.442 283.724 311.842 283.293C311.243 282.862 310.78 282.267 310.51 281.58L293.89 249.45V282.1C293.898 282.383 293.828 282.663 293.689 282.91C293.55 283.156 293.346 283.36 293.1 283.5C292.528 283.839 291.875 284.018 291.21 284.018C290.545 284.018 289.892 283.839 289.32 283.5C289.069 283.358 288.862 283.149 288.723 282.897C288.583 282.644 288.517 282.358 288.53 282.07V282.07Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M257.48 112.74C259.999 93.1224 256.644 73.1983 247.84 55.4875C239.035 37.7766 225.176 23.0743 208.016 13.2401C190.855 3.40585 171.164 -1.11871 151.432 0.238606C131.7 1.59592 112.813 8.77414 97.1612 20.8655C81.5088 32.9568 69.7936 49.4182 63.4971 68.1679C57.2006 86.9175 56.6055 107.113 61.7872 126.201C66.9689 145.289 77.6945 162.412 92.6078 175.404C107.521 188.395 125.952 196.673 145.57 199.19C171.874 202.564 198.441 195.352 219.428 179.14C240.415 162.928 254.102 139.043 257.48 112.74Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M194.36 64.27L152.2 106.43L140.25 94.49C181.76 53 185.88 56.65 194.36 64.27Z",
                        fill: "white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M152.2 107.44C152.068 107.439 151.937 107.413 151.815 107.361C151.693 107.31 151.583 107.235 151.49 107.14L139.49 95.14C139.304 94.9527 139.199 94.6992 139.199 94.435C139.199 94.1708 139.304 93.9174 139.49 93.73C181.69 51.53 186.13 55.52 194.98 63.47C195.081 63.5612 195.163 63.6721 195.219 63.796C195.276 63.9198 195.307 64.0539 195.31 64.19C195.315 64.3266 195.292 64.4628 195.242 64.5901C195.192 64.7173 195.116 64.833 195.02 64.93L152.9 107.14C152.715 107.328 152.464 107.436 152.2 107.44V107.44ZM141.67 94.44L152.2 105L192.91 64.29C185.52 57.76 180.5 55.73 141.67 94.49V94.44Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M164.28 118.52L152.76 107L194.93 64.83C206.28 76.19 189.45 94.71 164.28 118.52Z",
                        fill: "white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M164.28 119.52H164.23C163.977 119.499 163.739 119.39 163.56 119.21L152.05 107.71C151.867 107.518 151.763 107.265 151.76 107C151.759 106.868 151.784 106.738 151.834 106.616C151.884 106.494 151.957 106.383 152.05 106.29L194.22 64.13C194.407 63.9438 194.661 63.8392 194.925 63.8392C195.189 63.8392 195.442 63.9438 195.63 64.13C196.892 65.3295 197.892 66.7782 198.565 68.3843C199.238 69.9904 199.57 71.7189 199.54 73.46C199.38 84.55 186.75 98.64 164.97 119.24C164.784 119.419 164.537 119.519 164.28 119.52V119.52ZM154.18 107C160.63 113.46 163.24 116.06 164.3 117.12C181.14 101.12 197.38 84.73 197.54 73.44C197.607 70.8006 196.663 68.2353 194.9 66.27L154.18 107Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M140.54 94.78L149.05 103.28C149.102 103.333 149.139 103.398 149.156 103.47C149.174 103.542 149.172 103.617 149.151 103.688C149.129 103.758 149.089 103.822 149.034 103.872C148.979 103.921 148.912 103.955 148.84 103.97L131.29 107.75C130.941 107.827 130.577 107.789 130.252 107.641C129.927 107.493 129.658 107.244 129.487 106.93C129.316 106.617 129.251 106.256 129.302 105.903C129.353 105.55 129.517 105.222 129.77 104.97L140 94.78C140.075 94.7146 140.171 94.6786 140.27 94.6786C140.369 94.6786 140.465 94.7146 140.54 94.78V94.78Z",
                        fill: "white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M130.93 108.79C130.406 108.789 129.894 108.632 129.459 108.339C129.024 108.046 128.685 107.632 128.486 107.147C128.287 106.662 128.236 106.129 128.34 105.615C128.444 105.101 128.698 104.629 129.07 104.26L139.25 94.07C139.516 93.8062 139.875 93.6582 140.25 93.6582C140.625 93.6582 140.984 93.8062 141.25 94.07L149.75 102.58C149.931 102.758 150.06 102.982 150.124 103.228C150.188 103.473 150.183 103.732 150.111 103.975C150.039 104.219 149.903 104.438 149.716 104.61C149.529 104.781 149.299 104.899 149.05 104.95L131.5 108.73C131.313 108.77 131.122 108.79 130.93 108.79V108.79ZM140.25 95.9L130.48 105.67C130.376 105.768 130.308 105.899 130.288 106.041C130.268 106.183 130.297 106.327 130.37 106.45C130.432 106.578 130.538 106.68 130.667 106.738C130.797 106.797 130.943 106.808 131.08 106.77L147.57 103.22L140.25 95.9Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M216.72 40.86C214.542 38.7679 211.823 37.3269 208.869 36.6998C205.916 36.0728 202.845 36.2849 200.006 37.312C197.166 38.3391 194.671 40.1403 192.802 42.5118C190.933 44.8833 189.765 47.7305 189.43 50.7314C189.094 53.7323 189.606 56.7671 190.906 59.4925C192.205 62.2179 194.242 64.5252 196.785 66.1534C199.328 67.7816 202.276 68.6657 205.295 68.7057C208.314 68.7458 211.285 67.9401 213.87 66.3799L202.53 55.05L216.72 40.86Z",
                        fill: "white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M205.5 69.72C202.687 69.7209 199.917 69.0315 197.432 67.7123C194.948 66.393 192.825 64.4842 191.25 62.1534C189.676 59.8225 188.697 57.1408 188.4 54.3435C188.103 51.5463 188.498 48.7189 189.548 46.1095C190.599 43.5001 192.274 41.1884 194.426 39.3773C196.578 37.5661 199.142 36.3108 201.893 35.7214C204.643 35.1321 207.497 35.2268 210.202 35.9972C212.907 36.7676 215.382 38.1901 217.41 40.14C217.506 40.2317 217.583 40.3418 217.636 40.4637C217.69 40.5856 217.718 40.7169 217.72 40.85C217.722 40.9832 217.697 41.1156 217.648 41.2393C217.598 41.3629 217.524 41.4753 217.43 41.57L204 55.05L214.63 65.67C214.737 65.778 214.817 65.9089 214.866 66.0527C214.914 66.1965 214.929 66.3494 214.91 66.5C214.892 66.6518 214.839 66.7975 214.756 66.9257C214.673 67.054 214.561 67.1615 214.43 67.24C211.736 68.8677 208.647 69.7254 205.5 69.72V69.72ZM205.5 37.38C203.217 37.3817 200.964 37.899 198.91 38.8931C196.855 39.8871 195.051 41.3324 193.633 43.121C192.215 44.9096 191.219 46.9954 190.719 49.2228C190.22 51.4501 190.23 53.7615 190.748 55.9844C191.267 58.2074 192.281 60.2845 193.714 62.0609C195.148 63.8372 196.964 65.2669 199.027 66.2432C201.091 67.2196 203.348 67.7174 205.63 67.6995C207.913 67.6816 210.162 67.1485 212.21 66.14L201.83 55.75C201.641 55.5653 201.534 55.3137 201.53 55.05C201.53 54.9177 201.557 54.7868 201.609 54.6649C201.66 54.543 201.735 54.4326 201.83 54.34L215.27 40.9C212.531 38.6175 209.076 37.3714 205.51 37.38H205.5Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M217 41.08L216.75 40.86L202.53 55.05L213.87 66.38C215.007 65.7184 216.058 64.919 217 64C218.506 62.4955 219.7 60.709 220.515 58.7426C221.33 56.7763 221.75 54.6686 221.75 52.54C221.75 50.4114 221.33 48.3037 220.515 46.3373C219.7 44.371 218.506 42.5845 217 41.08V41.08Z",
                        fill: "white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M213.87 67.38C213.738 67.3808 213.608 67.3555 213.486 67.3058C213.364 67.256 213.253 67.1827 213.16 67.09L201.83 55.75C201.641 55.5654 201.534 55.3138 201.53 55.05C201.53 54.9177 201.557 54.7868 201.609 54.6649C201.66 54.5431 201.735 54.4326 201.83 54.34L216 40.15C216.187 39.9668 216.438 39.8641 216.7 39.8641C216.962 39.8641 217.213 39.9668 217.4 40.15L217.66 40.38C219.51 42.222 220.916 44.4623 221.769 46.93C222.623 49.3976 222.901 52.0276 222.584 54.6193C222.267 57.2111 221.362 59.6961 219.938 61.885C218.515 64.0739 216.61 65.9089 214.37 67.25C214.217 67.3364 214.045 67.3812 213.87 67.38V67.38ZM204 55.05L214 65.11C214.805 64.5671 215.558 63.9512 216.25 63.27C219.017 60.5028 220.609 56.7746 220.695 52.8623C220.78 48.9501 219.353 45.1557 216.71 42.27L204 55.05Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M196.1 66C194.944 64.8477 193.378 64.2007 191.745 64.2007C190.113 64.2007 188.547 64.8477 187.39 66L149.68 103.72L156 110L195.86 75C196.492 74.4403 197.003 73.7567 197.359 72.9916C197.716 72.2264 197.912 71.3961 197.935 70.5521C197.957 69.7081 197.806 68.8686 197.49 68.0855C197.175 67.3024 196.702 66.5926 196.1 66V66Z",
                        fill: "white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M156 111C155.868 111.001 155.738 110.975 155.616 110.926C155.494 110.876 155.383 110.803 155.29 110.71L149 104.43C148.906 104.337 148.832 104.226 148.781 104.105C148.73 103.983 148.704 103.852 148.704 103.72C148.704 103.588 148.73 103.457 148.781 103.335C148.832 103.214 148.906 103.103 149 103.01L186.68 65.3C188.025 63.9608 189.847 63.209 191.745 63.209C193.643 63.209 195.464 63.9608 196.81 65.3C197.502 65.9916 198.044 66.8179 198.403 67.7275C198.763 68.6372 198.932 69.611 198.9 70.5886C198.868 71.5663 198.636 72.527 198.218 73.4113C197.8 74.2956 197.205 75.0848 196.47 75.73L156.61 110.73C156.443 110.887 156.228 110.982 156 111V111ZM151.14 103.73L156.04 108.63L195.2 74.24C195.732 73.7874 196.167 73.2314 196.478 72.6057C196.789 71.9801 196.969 71.2978 197.009 70.6003C197.048 69.9028 196.946 69.2045 196.707 68.5478C196.469 67.8911 196.099 67.2897 195.622 66.78C195.144 66.2703 194.567 65.863 193.927 65.5827C193.287 65.3024 192.597 65.1549 191.899 65.1493C191.2 65.1437 190.507 65.28 189.863 65.55C189.219 65.82 188.636 66.218 188.15 66.72L151.14 103.73Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M120.76 146.58C120.583 146.672 120.441 146.82 120.356 147.001C120.271 147.181 120.248 147.385 120.29 147.58L121.98 154.8C122.13 155.243 122.119 155.725 121.95 156.162C121.782 156.598 121.465 156.962 121.056 157.189C120.647 157.416 120.171 157.493 119.711 157.405C119.251 157.318 118.837 157.072 118.54 156.71L107.61 145.78L143.5 109.9L155.85 110.09L164.28 118.51C162.19 120.26 150.1 131.87 120.76 146.58V146.58Z",
                        fill: "white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M120 158.33C119.601 158.33 119.207 158.25 118.839 158.095C118.472 157.941 118.139 157.715 117.86 157.43L106.9 146.49C106.715 146.304 106.611 146.052 106.61 145.79C106.609 145.658 106.634 145.528 106.684 145.406C106.734 145.284 106.807 145.173 106.9 145.08L142.79 109.19C142.884 109.096 142.997 109.022 143.121 108.972C143.244 108.923 143.377 108.898 143.51 108.9L155.87 109.09C156.129 109.094 156.376 109.198 156.56 109.38L164.98 117.81C165.079 117.907 165.157 118.024 165.209 118.153C165.261 118.283 165.285 118.421 165.28 118.56C165.273 118.698 165.237 118.834 165.176 118.958C165.114 119.082 165.026 119.192 164.92 119.28L164.21 119.9C153.63 129.19 139.21 138.45 121.28 147.43L122.96 154.58C123.119 155.226 123.059 155.907 122.79 156.515C122.52 157.123 122.056 157.624 121.47 157.94C121.02 158.191 120.515 158.325 120 158.33V158.33ZM109 145.79L119.25 156C119.382 156.233 119.602 156.405 119.861 156.476C120.12 156.547 120.396 156.513 120.63 156.38C120.863 156.247 121.034 156.028 121.106 155.769C121.177 155.51 121.142 155.233 121.01 155L119.32 147.78C119.223 147.364 119.269 146.928 119.45 146.542C119.632 146.155 119.938 145.841 120.32 145.65C138.06 136.75 152.32 127.59 162.82 118.42L155.44 111.04L143.91 110.86L109 145.79Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M99 154.38L107.59 145.79L120.36 158.56L99.96 157.16C99.6544 157.125 99.3649 157.005 99.1249 156.812C98.885 156.62 98.7043 156.363 98.6039 156.073C98.5035 155.782 98.4874 155.469 98.5575 155.169C98.6276 154.87 98.781 154.596 99 154.38Z",
                        fill: "white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M120.38 159.56H120.32L99.9099 158.16C99.4137 158.109 98.9421 157.919 98.5497 157.611C98.1573 157.303 97.8602 156.89 97.6927 156.42C97.5253 155.95 97.4944 155.442 97.6036 154.956C97.7128 154.469 97.9577 154.023 98.3098 153.67L106.9 145.08C106.993 144.986 107.103 144.912 107.225 144.861C107.347 144.81 107.478 144.784 107.61 144.784C107.742 144.784 107.873 144.81 107.994 144.861C108.116 144.912 108.227 144.986 108.32 145.08L121.09 157.85C121.237 157.994 121.336 158.18 121.373 158.382C121.411 158.584 121.385 158.793 121.3 158.98C121.219 159.155 121.089 159.303 120.926 159.406C120.762 159.509 120.573 159.562 120.38 159.56V159.56ZM107.61 147.2L99.7299 155.08C99.6419 155.163 99.5799 155.269 99.5514 155.386C99.523 155.503 99.5294 155.626 99.5698 155.74C99.6076 155.855 99.6776 155.957 99.7716 156.033C99.8656 156.109 99.9795 156.157 100.1 156.17L117.79 157.38L107.61 147.2Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M139.86 114.53C139.664 114.529 139.472 114.47 139.308 114.361C139.145 114.252 139.017 114.097 138.941 113.915C138.866 113.734 138.845 113.534 138.882 113.341C138.919 113.148 139.013 112.97 139.15 112.83L148.87 103.11C148.963 103.016 149.074 102.942 149.196 102.891C149.317 102.84 149.448 102.814 149.58 102.814C149.712 102.814 149.843 102.84 149.965 102.891C150.087 102.942 150.197 103.016 150.29 103.11L156.55 109.38C156.68 109.507 156.773 109.668 156.819 109.844C156.865 110.02 156.862 110.205 156.81 110.38C156.758 110.552 156.662 110.706 156.53 110.828C156.398 110.949 156.236 111.033 156.06 111.07L140.06 114.52C139.994 114.532 139.927 114.536 139.86 114.53V114.53ZM149.58 105.23L143 111.84L153.87 109.49L149.58 105.23Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M155.85 110.09L144.85 112.45C144.53 112.522 144.195 112.488 143.896 112.352C143.597 112.217 143.35 111.988 143.193 111.699C143.036 111.411 142.977 111.08 143.025 110.755C143.073 110.43 143.226 110.13 143.46 109.9L149.54 103.82L155.85 110.09Z",
                        fill: "white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M144.56 113.48C144.063 113.48 143.577 113.333 143.164 113.056C142.751 112.78 142.429 112.387 142.24 111.927C142.05 111.468 142.001 110.962 142.099 110.475C142.197 109.988 142.438 109.54 142.79 109.19L148.87 103.11C148.963 103.016 149.074 102.942 149.196 102.891C149.317 102.84 149.448 102.814 149.58 102.814C149.712 102.814 149.843 102.84 149.965 102.891C150.087 102.942 150.197 103.016 150.29 103.11L156.55 109.38C156.68 109.507 156.773 109.668 156.819 109.844C156.865 110.02 156.862 110.205 156.81 110.38C156.758 110.552 156.662 110.706 156.53 110.828C156.398 110.949 156.236 111.033 156.06 111.07L145.06 113.44C144.895 113.47 144.728 113.484 144.56 113.48ZM149.56 105.23L144.18 110.6C144.099 110.677 144.047 110.78 144.032 110.891C144.018 111.002 144.042 111.114 144.1 111.21C144.145 111.315 144.227 111.4 144.33 111.448C144.434 111.496 144.551 111.504 144.66 111.47L153.82 109.47L149.56 105.23Z",
                        fill: "#FF6C37"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M217.07 50.69C217.019 50.5326 216.934 50.388 216.823 50.266C216.711 50.1439 216.574 50.0472 216.422 49.9823C216.27 49.9174 216.105 49.8858 215.94 49.8897C215.774 49.8936 215.612 49.9329 215.463 50.0049C215.314 50.0769 215.182 50.18 215.076 50.3072C214.97 50.4344 214.892 50.5828 214.849 50.7424C214.805 50.902 214.796 51.0691 214.822 51.2326C214.848 51.396 214.909 51.552 215 51.69C215.298 52.2917 215.415 52.9664 215.339 53.6333C215.263 54.3002 214.996 54.931 214.57 55.45C214.375 55.6863 214.28 55.9905 214.309 56.296C214.337 56.6014 214.485 56.8833 214.72 57.08C214.959 57.2719 215.263 57.3627 215.568 57.3328C215.873 57.3028 216.153 57.1546 216.35 56.92C217.056 56.0604 217.499 55.0157 217.627 53.9109C217.754 52.8061 217.561 51.6879 217.07 50.69V50.69Z",
                        fill: "#FF6C37"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_1710_55286",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "316.55",
                        height: "284.52",
                        fill: "white"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/prisma.tsx


function PrismaIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "#f9f9f9",
        width: "2065",
        height: "2500",
        viewBox: "0 -0.4499053178651202 258.5539889530368 310.4499053178651",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M254.313 235.519L148 9.749A17.063 17.063 0 0 0 133.473.037a16.87 16.87 0 0 0-15.533 8.052L2.633 194.848a17.465 17.465 0 0 0 .193 18.747L59.2 300.896a18.13 18.13 0 0 0 20.363 7.489l163.599-48.392a17.929 17.929 0 0 0 11.26-9.722 17.542 17.542 0 0 0-.101-14.76l-.008.008zm-23.802 9.683l-138.823 41.05c-4.235 1.26-8.3-2.411-7.419-6.685l49.598-237.484c.927-4.443 7.063-5.147 9.003-1.035l91.814 194.973a6.63 6.63 0 0 1-4.18 9.18h.007z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "rgba(0, 0, 0, 0)",
                d: "M0 0h256v310H0z"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/react.tsx


function ReactIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: props.className,
        height: "2500",
        viewBox: "175.7 78 490.6 436.9",
        width: "2194",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            fill: "#61dafb",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                    cx: "420.9",
                    cy: "296.5",
                    r: "45.7"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/about/tools/redux.tsx


function ReduxIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            fill: "#764ABC",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/about/tools/sass.tsx


function SassIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 547.8 410.6",
        enableBackground: "new 0 0 547.8 410.6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "#CD6799",
                d: "M471.4,236c-19.1,0.1-35.7,4.7-49.6,11.5c-5.1-10.1-10.2-19.1-11.1-25.7c-1-7.7-2.2-12.4-1-21.6 c1.2-9.2,6.6-22.3,6.5-23.3s-1.2-5.7-12.2-5.8c-11-0.1-20.5,2.1-21.6,5c-1.1,2.9-3.2,9.5-4.6,16.3c-1.9,10-22,45.7-33.5,64.4 c-3.7-7.3-6.9-13.7-7.6-18.8c-1-7.7-2.2-12.4-1-21.6c1.2-9.2,6.6-22.3,6.5-23.3c-0.1-1-1.2-5.7-12.2-5.8c-11-0.1-20.5,2.1-21.6,5 c-1.1,2.9-2.3,9.7-4.6,16.3c-2.3,6.6-29,66.2-36,81.6c-3.6,7.9-6.7,14.2-8.9,18.5c0,0,0,0,0,0s-0.1,0.3-0.4,0.8 c-1.9,3.7-3,5.7-3,5.7s0,0,0,0.1c-1.5,2.7-3.1,5.2-3.9,5.2c-0.6,0-1.7-7.2,0.2-17c4-20.7,13.5-52.9,13.4-54c0-0.6,1.8-6.2-6.2-9.1 c-7.8-2.9-10.6,1.9-11.3,1.9c-0.7,0-1.2,1.7-1.2,1.7s8.7-36.2-16.6-36.2c-15.8,0-37.6,17.3-48.4,32.9c-6.8,3.7-21.3,11.6-36.8,20.1 c-5.9,3.3-12,6.6-17.7,9.7c-0.4-0.4-0.8-0.9-1.2-1.3c-30.6-32.7-87.2-55.8-84.8-99.7c0.9-16,6.4-58,108.7-109 C233.9,19,300.9,30.5,312.5,56c16.6,36.4-35.9,104-122.9,113.8c-33.2,3.7-50.6-9.1-55-13.9c-4.6-5-5.3-5.3-7-4.3c-2.8,1.5-1,6,0,8.6 c2.6,6.8,13.3,18.8,31.4,24.7c16,5.2,54.9,8.1,102-10.1c52.7-20.4,93.9-77.1,81.8-124.6C330.7,2,250.7-13.9,175,13 C130,29,81.2,54.2,46.1,87c-41.7,39-48.3,72.9-45.6,87.1c9.7,50.4,79.2,83.2,107,107.5c-1.4,0.8-2.7,1.5-3.8,2.1 c-13.9,6.9-66.9,34.6-80.1,63.9c-15,33.2,2.4,57,13.9,60.2c35.7,9.9,72.4-7.9,92.1-37.3c19.7-29.4,17.3-67.6,8.2-85.1 c-0.1-0.2-0.2-0.4-0.4-0.6c3.6-2.1,7.3-4.3,10.9-6.4c7.1-4.2,14.1-8.1,20.1-11.3c-3.4,9.3-5.9,20.4-7.1,36.4 c-1.5,18.8,6.2,43.2,16.3,52.8c4.5,4.2,9.8,4.3,13.2,4.3c11.8,0,17.1-9.8,23-21.4c7.2-14.2,13.7-30.7,13.7-30.7s-8.1,44.6,13.9,44.6 c8,0,16.1-10.4,19.7-15.7c0,0.1,0,0.1,0,0.1s0.2-0.3,0.6-1c0.8-1.3,1.3-2.1,1.3-2.1s0-0.1,0-0.2c3.2-5.6,10.4-18.3,21.1-39.4 c13.8-27.2,27.1-61.2,27.1-61.2s1.2,8.3,5.3,22.1c2.4,8.1,7.4,17,11.4,25.6c-3.2,4.5-5.2,7-5.2,7s0,0,0.1,0.1 c-2.6,3.4-5.4,7.1-8.5,10.7c-10.9,13-23.9,27.9-25.7,32.2c-2.1,5.1-1.6,8.8,2.4,11.8c2.9,2.2,8.1,2.5,13.4,2.2 c9.8-0.7,16.7-3.1,20.1-4.6c5.3-1.9,11.5-4.8,17.3-9.1c10.7-7.9,17.2-19.2,16.6-34.1c-0.3-8.2-3-16.4-6.3-24.1 c1-1.4,1.9-2.8,2.9-4.2c16.9-24.7,30-51.8,30-51.8s1.2,8.3,5.3,22.1c2,7,6.1,14.6,9.7,22c-15.9,12.9-25.7,27.9-29.2,37.7 c-6.3,18.2-1.4,26.4,7.9,28.3c4.2,0.9,10.2-1.1,14.6-3c5.6-1.8,12.2-4.9,18.5-9.5c10.7-7.9,21-18.9,20.4-33.8 c-0.3-6.8-2.1-13.5-4.6-20c13.5-5.6,30.9-8.7,53.1-6.1c47.6,5.6,57,35.3,55.2,47.8c-1.8,12.5-11.8,19.3-15.1,21.4 c-3.3,2.1-4.4,2.8-4.1,4.3c0.4,2.2,2,2.1,4.8,1.7c3.9-0.7,25-10.1,25.9-33.1C548.9,267.8,520.9,235.7,471.4,236z M104.2,359.8 C88.4,377,66.4,383.5,56.9,378c-10.2-5.9-6.2-31.3,13.2-49.5c11.8-11.1,27-21.4,37.1-27.7c2.3-1.4,5.7-3.4,9.8-5.9 c0.7-0.4,1.1-0.6,1.1-0.6l0,0c0.8-0.5,1.6-1,2.4-1.5C127.6,318.8,120.8,341.7,104.2,359.8z M219.2,281.6c-5.5,13.4-17,47.7-24,45.8 c-6-1.6-9.7-27.6-1.2-53.3c4.3-12.9,13.4-28.3,18.7-34.3c8.6-9.6,18.1-12.8,20.4-8.9C236,236,222.6,273.2,219.2,281.6z M314.1,327 c-2.3,1.2-4.5,2-5.5,1.4c-0.7-0.4,1-2,1-2s11.9-12.8,16.6-18.6c2.7-3.4,5.9-7.4,9.3-11.9c0,0.4,0,0.9,0,1.3 C335.5,312.5,320.7,322.8,314.1,327z M387.3,310.3c-1.7-1.2-1.4-5.2,4.3-17.7c2.2-4.9,7.4-13.1,16.3-21c1,3.2,1.7,6.3,1.6,9.2 C409.4,300.1,395.6,307.3,387.3,310.3z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {})
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/sketch.tsx


function SketchIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 394 356",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            fill: "none",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#FDB300",
                    d: "M85.790323 11.7151549 196.602823 0l110.8125 11.7151549 85.790322 115.1659291-196.602822 228.941925L0 126.881084z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#EA6C00",
                    d: "m79.634 126.881084 116.969 228.942L0 126.881084z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#EA6C00",
                    d: "m313.571468 126.881084-116.969 228.942 196.603-228.942z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#FDAD00",
                    d: "M79.634 126.881084h233.938l-116.969 228.942z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#FDD231",
                    d: "M196.603 0 85.79 11.715l-6.156 115.166z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#FDD231",
                    d: "m196.602396 0 110.813 11.715 6.156 115.166z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#FDAD00",
                    d: "m393.205968 126.881-85.791-115.166 6.157 115.166zM0 126.881 85.79 11.715l-6.156 115.166z"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#FEEEB7",
                    d: "M196.603 0 79.634 126.881h233.938z"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/about/tools/sublime-text.tsx


function SublimeIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        viewBox: "26.599999999999998 26.599999999999998 446.79999999999995 446.7",
        xmlns: "http://www.w3.org/2000/svg",
        width: "2500",
        height: "2499",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                id: "a",
                gradientUnits: "userSpaceOnUse",
                x1: "136.178",
                x2: "372.681",
                y1: "369.638",
                y2: "287.81",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                        offset: ".233",
                        stopColor: "#f89822"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                        offset: "1",
                        stopColor: "#c27818"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M456.1 473.3H43.9c-9.5 0-17.3-7.8-17.3-17.3V43.9c0-9.5 7.8-17.3 17.3-17.3h412.2c9.5 0 17.3 7.8 17.3 17.3v412.2c-.1 9.5-7.8 17.2-17.3 17.2z",
                fill: "#4d4d4e"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M129.6 161.5l233.8-74.2s16.6-8.7 12.6 7.4l.6 71.5s2.9 10.5-11.5 13.1l-95 29.7z",
                fill: "#f89820"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M129.6 161.5s-9.2 2.2-6.5 17.9l-.5 68.9s-.8 8.7 15.7 12.2L370 335.1s7.8 3.1 6.9-6.5l.1-76.8s2.2-7.9-12.2-13.1L270.1 209z",
                fill: "#f89820"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M231.7 290.5l-98.6 30.1s-11.9.4-10.5 22.7-.1 67.2-.1 67.2 1 8.3 12.4 3.5l233.8-74.6s8.3-2.1 1.3-4.4c-7-2.2-138.3-44.5-138.3-44.5z",
                fill: "url(#a)"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/tailwind.tsx


function TailwindIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        width: "1000",
        height: "1000",
        viewBox: "0 0 1000 1000",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z",
                fill: "#07B6D5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z",
                fill: "#07B6D5"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/trello.tsx


function TrelloIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        width: "383",
        height: "384",
        viewBox: "0 0 383 384",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                clipPath: "url(#clip0_1701_54005)",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M382.74 49C383.23 21.42 363.68 2.83 343.07 0.6C342.76 0.57 47.84 0 47.84 0C42.33 0 36.82 0.69 31.53 2.28C28.57 3.17 25.68 4.27 22.94 5.85C10.43 13.1 2.78001 23.77 0.0900097 38.01C-0.0699903 38.86 0.0300097 344.24 0.0300097 344.24C1.11001 361.48 15.73 378.01 33.91 382.47C34.77 382.68 36.66 383.01 38.48 383.32C41.25 383.77 44.04 384 46.85 383.99C82.71 383.93 343.55 383.48 343.48 383.26C361.85 381.64 378.62 365.43 381.86 346.08C382.29 343.5 382.6 340.87 382.6 338.26C382.63 281.64 382.19 80.18 382.74 49V49ZM164.71 274.12C164.71 285.66 158.7 291.72 147.24 291.72C127.16 291.73 107.07 291.73 86.99 291.72C76.61 291.71 70.43 285.58 70.4 275.25C70.33 254 70.3 232.75 70.25 211.51C70.31 210.01 70.42 208.52 70.42 207.03C70.42 167.56 70.41 128.09 70.4 88.61C70.4 76.64 76.05 71 88.02 71C107.6 70.99 127.17 70.99 146.74 71C158.8 71 164.49 76.74 164.51 88.97L164.8 163.52C164.75 165.01 164.69 238.75 164.71 274.12ZM312.1 187.49C312.03 198.1 305.98 204.24 295.36 204.27C274.9 204.31 254.44 204.32 233.98 204.26C223.8 204.23 217.76 198.12 217.66 187.89C217.58 179.77 217.59 172.65 217.55 164.52V163.52C217.6 154.28 217.69 145.05 217.7 135.81C217.72 119.57 217.65 103.34 217.72 87.1C217.76 77.15 223.92 71.04 233.87 71.01C254.43 70.96 275 70.96 295.57 71.01C305.58 71.03 311.63 77.07 311.69 87.1C311.82 112.08 311.87 137.06 311.97 162.04C311.98 163.53 312.14 165.02 312.22 166.51C312.18 173.5 312.14 180.5 312.1 187.49V187.49Z",
                    fill: "url(#paint0_linear_1701_54005)"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint0_linear_1701_54005",
                        x1: "191.37",
                        y1: "0",
                        x2: "191.37",
                        y2: "383.99",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.32",
                                stopColor: "#1E79F4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.91",
                                stopColor: "#0A5FD9"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                        id: "clip0_1701_54005",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            width: "382.75",
                            height: "383.99",
                            fill: "white"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/typescript.tsx


function TypescriptIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        fill: "none",
        height: "512",
        viewBox: "0 0 512 512",
        width: "512",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                fill: "#3178c6",
                height: "512",
                rx: "50",
                width: "512"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                fill: "#3178c6",
                height: "512",
                rx: "50",
                width: "512"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                clipRule: "evenodd",
                d: "m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z",
                fill: "#fff",
                fillRule: "evenodd"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/unity.tsx


function UnityIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        width: "310",
        height: "310",
        viewBox: "0 0 310 310",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M283.42 212.459V78.2391L167.18 11.1191V62.6091L212.73 88.8991C213.95 89.6291 214.34 91.2091 213.61 92.4291C213.39 92.7891 213.09 93.0991 212.73 93.3091L158.59 124.569C157.01 125.479 155.07 125.479 153.49 124.569L99.36 93.3091C98.14 92.5891 97.74 91.0191 98.46 89.7991C98.68 89.4291 98.99 89.1191 99.36 88.8991L144.9 62.6091V11.1191L28.65 78.2391V212.459L73.23 186.719V134.119C73.25 132.709 74.41 131.579 75.83 131.599C76.26 131.599 76.68 131.719 77.05 131.929L131.19 163.179C132.77 164.089 133.74 165.779 133.74 167.599V230.109C133.73 231.519 132.57 232.659 131.16 232.649C130.73 232.649 130.31 232.539 129.94 232.329L84.38 205.999L39.79 231.739L156 298.879L272.24 231.759L227.69 205.999L182.14 232.299C180.91 232.989 179.35 232.549 178.66 231.319C178.45 230.949 178.34 230.519 178.33 230.089V167.599C178.33 165.779 179.3 164.089 180.88 163.179L235 131.929C236.24 131.229 237.8 131.669 238.5 132.909C238.71 133.279 238.82 133.699 238.83 134.129V186.719L283.42 212.459V212.459Z",
                fill: "#CCCCCC"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M156 298.879L272.24 231.769L227.69 205.999L182.14 232.299C180.91 232.989 179.35 232.549 178.66 231.319C178.45 230.949 178.34 230.519 178.33 230.089V167.599C178.33 165.779 179.3 164.089 180.88 163.179L235 131.929C236.24 131.229 237.8 131.669 238.5 132.909C238.71 133.279 238.82 133.699 238.83 134.129V186.719L283.41 212.459V78.2285L156 151.779V298.879V298.879Z",
                fill: "black"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M167.18 11.1191V62.6091L212.73 88.8991C213.95 89.6291 214.34 91.2091 213.61 92.4291C213.39 92.7891 213.09 93.0991 212.73 93.3091L158.59 124.569C157.01 125.479 155.07 125.479 153.49 124.569L99.36 93.3091C98.14 92.5891 97.74 91.0191 98.46 89.7991C98.68 89.4291 98.99 89.1191 99.36 88.8991L144.9 62.6091V11.1191L28.65 78.2391L156 151.779L283.39 78.2391L167.18 11.1191Z",
                fill: "#808080"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M129.94 232.328L84.38 205.998L39.79 231.748L156 298.878V151.778L28.65 78.2383V212.458L73.23 186.718V134.118C73.25 132.708 74.41 131.578 75.83 131.598C76.26 131.598 76.68 131.718 77.05 131.928L131.19 163.178C132.77 164.088 133.74 165.778 133.74 167.598V230.108C133.73 231.518 132.57 232.658 131.16 232.648C130.73 232.648 130.31 232.538 129.94 232.328",
                fill: "#4D4D4D"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/vscode.tsx


function VsCodeIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        viewBox: "0 0 100 100",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                id: "mask0",
                "mask-type": "alpha",
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "100",
                height: "100",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M70.9119 99.3171C72.4869 99.9307 74.2828 99.8914 75.8725 99.1264L96.4608 89.2197C98.6242 88.1787 100 85.9892 100 83.5872V16.4133C100 14.0113 98.6243 11.8218 96.4609 10.7808L75.8725 0.873756C73.7862 -0.130129 71.3446 0.11576 69.5135 1.44695C69.252 1.63711 69.0028 1.84943 68.769 2.08341L29.3551 38.0415L12.1872 25.0096C10.589 23.7965 8.35363 23.8959 6.86933 25.2461L1.36303 30.2549C-0.452552 31.9064 -0.454633 34.7627 1.35853 36.417L16.2471 50.0001L1.35853 63.5832C-0.454633 65.2374 -0.452552 68.0938 1.36303 69.7453L6.86933 74.7541C8.35363 76.1043 10.589 76.2037 12.1872 74.9905L29.3551 61.9587L68.769 97.9167C69.3925 98.5406 70.1246 99.0104 70.9119 99.3171ZM75.0152 27.2989L45.1091 50.0001L75.0152 72.7012V27.2989Z",
                    fill: "white"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                mask: "url(#mask0)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M96.4614 10.7962L75.8569 0.875542C73.4719 -0.272773 70.6217 0.211611 68.75 2.08333L1.29858 63.5832C-0.515693 65.2373 -0.513607 68.0937 1.30308 69.7452L6.81272 74.754C8.29793 76.1042 10.5347 76.2036 12.1338 74.9905L93.3609 13.3699C96.086 11.3026 100 13.2462 100 16.6667V16.4275C100 14.0265 98.6246 11.8378 96.4614 10.7962Z",
                        fill: "#0065A9"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        filter: "url(#filter0_d)",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M96.4614 89.2038L75.8569 99.1245C73.4719 100.273 70.6217 99.7884 68.75 97.9167L1.29858 36.4169C-0.515693 34.7627 -0.513607 31.9063 1.30308 30.2548L6.81272 25.246C8.29793 23.8958 10.5347 23.7964 12.1338 25.0095L93.3609 86.6301C96.086 88.6974 100 86.7538 100 83.3334V83.5726C100 85.9735 98.6246 88.1622 96.4614 89.2038Z",
                            fill: "#007ACC"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        filter: "url(#filter1_d)",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M75.8578 99.1263C73.4721 100.274 70.6219 99.7885 68.75 97.9166C71.0564 100.223 75 98.5895 75 95.3278V4.67213C75 1.41039 71.0564 -0.223106 68.75 2.08329C70.6219 0.211402 73.4721 -0.273666 75.8578 0.873633L96.4587 10.7807C98.6234 11.8217 100 14.0112 100 16.4132V83.5871C100 85.9891 98.6234 88.1786 96.4586 89.2196L75.8578 99.1263Z",
                            fill: "#1F9CF0"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        className: "mix-blend-overlay",
                        opacity: "0.25",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M70.8511 99.3171C72.4261 99.9306 74.2221 99.8913 75.8117 99.1264L96.4 89.2197C98.5634 88.1787 99.9392 85.9892 99.9392 83.5871V16.4133C99.9392 14.0112 98.5635 11.8217 96.4001 10.7807L75.8117 0.873695C73.7255 -0.13019 71.2838 0.115699 69.4527 1.44688C69.1912 1.63705 68.942 1.84937 68.7082 2.08335L29.2943 38.0414L12.1264 25.0096C10.5283 23.7964 8.29285 23.8959 6.80855 25.246L1.30225 30.2548C-0.513334 31.9064 -0.515415 34.7627 1.29775 36.4169L16.1863 50L1.29775 63.5832C-0.515415 65.2374 -0.513334 68.0937 1.30225 69.7452L6.80855 74.754C8.29285 76.1042 10.5283 76.2036 12.1264 74.9905L29.2943 61.9586L68.7082 97.9167C69.3317 98.5405 70.0638 99.0104 70.8511 99.3171ZM74.9544 27.2989L45.0483 50L74.9544 72.7012V27.2989Z",
                            fill: "url(#paint0_linear)"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("filter", {
                        id: "filter0_d",
                        x: "-8.39411",
                        y: "15.8291",
                        width: "116.727",
                        height: "92.2456",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feOffset", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("feGaussianBlur", {
                                stdDeviation: "4.16667"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feBlend", {
                                mode: "overlay",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow",
                                result: "shape"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("filter", {
                        id: "filter1_d",
                        x: "60.4167",
                        y: "-8.07558",
                        width: "47.9167",
                        height: "116.151",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feOffset", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("feGaussianBlur", {
                                stdDeviation: "4.16667"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feBlend", {
                                mode: "overlay",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow",
                                result: "shape"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint0_linear",
                        x1: "49.9392",
                        y1: "0.257812",
                        x2: "49.9392",
                        y2: "99.7423",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "white"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "white",
                                stopOpacity: "0"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/xd.tsx


function XdIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: props.className,
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 240 234",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            id: "Layer_2_1_",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    id: "Surfaces",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        id: "UI_UX_Surface",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                            id: "Outline_no_shadow",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#470137",
                                d: "M42.5,0h155C221,0,240,19,240,42.5v149c0,23.5-19,42.5-42.5,42.5h-155C19,234,0,215,0,191.5v-149 C0,19,19,0,42.5,0z"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    id: "Outlined_Mnemonics_Logos",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                        id: "Xd",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#FF61F6",
                                d: "M126.2,61.5L96.2,111l32,52.5c0.2,0.4,0.3,0.8,0.2,1.2c-0.1,0.4-0.5,0.1-1.1,0.2h-22.9 c-1.6,0-2.7-0.1-3.4-1.1c-2.1-4.2-4.3-8.3-6.4-12.5c-2.1-4.1-4.4-8.3-6.8-12.6c-2.4-4.3-4.8-8.6-7.2-13h-0.2 c-2.1,4.3-4.4,8.6-6.7,12.9c-2.3,4.3-4.6,8.6-6.8,12.8c-2.3,4.2-4.6,8.5-6.9,12.6c-0.4,1-1.2,1.1-2.3,1.1H35.7 c-0.4,0-0.7,0.2-0.7-0.3c-0.1-0.4,0-0.8,0.2-1.1l31.1-51L36,61.4c-0.3-0.4-0.4-0.8-0.2-1c0.2-0.3,0.6-0.4,1-0.4h22.7 c0.5,0,1,0.1,1.4,0.2c0.4,0.2,0.7,0.5,1,0.9c1.9,4.3,4.1,8.6,6.4,12.9c2.4,4.3,4.7,8.5,7.2,12.7c2.4,4.2,4.6,8.4,6.7,12.7h0.2 c2.1-4.4,4.3-8.7,6.5-12.9c2.2-4.2,4.5-8.4,6.8-12.6c2.3-4.2,4.5-8.5,6.7-12.6c0.1-0.4,0.3-0.8,0.6-1c0.4-0.2,0.8-0.3,1.3-0.2 h21.1c0.5-0.1,1,0.2,1.1,0.7C126.6,60.9,126.4,61.3,126.2,61.5L126.2,61.5z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                fill: "#FF61F6",
                                d: "M172.4,167c-7.4,0.1-14.8-1.4-21.5-4.5c-6.3-2.9-11.5-7.7-15.1-13.6c-3.7-6.1-5.5-13.7-5.5-22.8 c-0.1-7.4,1.8-14.7,5.5-21.1c3.8-6.5,9.3-11.9,15.9-15.5c7-3.9,15.4-5.8,25.3-5.8c0.5,0,1.2,0,2.1,0.1c0.9,0.1,1.9,0.1,3.1,0.2 V52.4c0-0.7,0.3-1.1,1-1.1h20.3c0.5-0.1,0.9,0.3,1,0.7c0,0.1,0,0.2,0,0.2v95.2c0,1.8,0.1,3.8,0.2,6c0.2,2.1,0.3,4.1,0.4,5.8 c0,0.7-0.3,1.3-1,1.6c-5.2,2.2-10.7,3.8-16.3,4.8C182.7,166.5,177.6,167,172.4,167z M182.2,147v-44c-0.9-0.2-1.8-0.4-2.7-0.5 c-1.1-0.1-2.2-0.2-3.3-0.2c-3.9,0-7.8,0.8-11.3,2.6c-3.4,1.7-6.3,4.2-8.5,7.4c-2.2,3.2-3.3,7.5-3.3,12.7c-0.1,3.5,0.5,7,1.7,10.3 c1,2.7,2.5,5.1,4.5,7.1c1.9,1.8,4.2,3.2,6.8,4c2.7,0.9,5.5,1.3,8.3,1.3c1.5,0,2.9-0.1,4.2-0.2C179.9,147.6,181,147.4,182.2,147z"
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/about/tools/zeplin.tsx


function ZeplinIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: props.className,
        enableBackground: "new 0 0 2406.8 1923.8",
        viewBox: "0 0 2406.8 1923.8",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m371 1326.4-125.9 46-6.7 374.5 435.8-159.2c-149.6-50.1-258.7-138.4-303.2-261.3",
                fill: "#fdbd39"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m436.9 930.3-436.9 159.6 245.1 282.6 125.9-46c-44.4-122.5-17-260.8 65.9-396.2",
                fill: "#f69833"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m1172 389.8c-556.3 203.2-915 622.6-801 936.6l2014.5-735.9c-114-314-657.2-403.9-1213.5-200.7",
                fill: "#fecf33"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m1584.4 1527.2c556.3-203.2 915.6-620.7 801-936.6l-2014.5 735.8c114.6 316 657.2 404 1213.5 200.8",
                fill: "#ee6723"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m2385.4 590.5-2014.4 735.9c39.4 108.8 189.9 162.4 400.9 162.4 205.8 0 469.2-50.9 743.8-151.2 556.3-203.2 947.6-532.3 869.7-747.1",
                fill: "#f69833"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m1984.5 428.2c-205.7 0-469.2 50.9-743.8 151.2-556.3 203.2-947.6 532.2-869.7 747l2014.5-735.9c-39.5-108.8-189.9-162.3-401-162.3",
                fill: "#fdbd39"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                fill: "#ee6723",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "m1873.2 1766.8c-59.3 0-146.7-53.5-259.9-159.1-133.9-124.9-287.2-307.9-431.9-515.2-144.6-207.3-263.4-414.5-334.6-583.6-77.5-184.2-88.6-297.4-32.9-336.6 12.9-8.8 28.2-13.3 43.8-12.9 45.3 0 133.7 33.7 297 194.5l3.6 3.5-.5 5c-1.1 11.6-2.1 23.2-3 34.7l-1.8 22.7-16-16.1c-176-177.3-253.4-196.4-278.6-196.4-7.2 0-12.9 1.4-17 4.3-24.2 17-25.8 100.2 49.4 278.7 69.9 166 187 370.1 329.7 574.7 142.8 204.7 293.8 384.9 425.4 507.6 141.8 132.3 205.7 146.6 226.6 146.6 7.2 0 13-1.5 17.4-4.6 25.5-17.9 25.5-107-58.3-299.2l-3.9-8.8 8.4-4.6c8.4-4.6 16.6-9.1 24.2-13.5l10.1-5.7 4.7 10.6c59.4 136.2 115 309.3 42.1 360.5-12.9 8.8-28.3 13.3-44 12.9zm0-21v10.5z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "m1597.9 1521.4-.8 10.4c-14.1 174-51.1 383.2-147.7 391.7-2 .2-4 .2-5.9.2-65.6 0-127.7-94-184.4-279.3-53.8-175.4-95.5-410.8-117.4-662.9-22-252.1-21.7-491.2.9-673.3 24.6-198.4 71.4-302 139.2-308 2-.2 4.1-.3 6.1-.3 47.6 0 119.3 53.9 192.7 304.9l-47.9 9.2c-24.5-83.8-51.2-152-77.7-199-24.5-43.3-48.4-67.2-67.1-67.2-.6 0-1.2 0-1.9.1-29.4 2.6-72.2 73.8-96 266.2-22.2 178.8-22.5 414.4-.8 663.2 21.7 248.9 62.7 480.8 115.5 653 23.6 77.1 49.5 140.7 75 183.8 23.4 39.8 46.1 61.7 63.8 61.7.6 0 1.2 0 1.8-.1 28.1-2.4 81.1-76.6 103.4-337.5z"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/tools/graphql.tsx


function GraphQlIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: props.className,
        version: "1.1",
        id: "GraphQL_Logo",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 400 400",
        enableBackground: "new 0 0 400 400",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            x: "122",
                            y: "-0.4",
                            transform: "matrix(-0.866 -0.5 0.5 -0.866 163.3196 363.3136)",
                            fill: "#E535AB",
                            width: "16.6",
                            height: "320.3"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            x: "39.8",
                            y: "272.2",
                            fill: "#E535AB",
                            width: "320.3",
                            height: "16.6"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            x: "37.9",
                            y: "312.2",
                            transform: "matrix(-0.866 -0.5 0.5 -0.866 83.0693 663.3409)",
                            fill: "#E535AB",
                            width: "185",
                            height: "16.6"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            x: "177.1",
                            y: "71.1",
                            transform: "matrix(-0.866 -0.5 0.5 -0.866 463.3409 283.0693)",
                            fill: "#E535AB",
                            width: "185",
                            height: "16.6"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            x: "122.1",
                            y: "-13",
                            transform: "matrix(-0.5 -0.866 0.866 -0.5 126.7903 232.1221)",
                            fill: "#E535AB",
                            width: "16.6",
                            height: "185"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            x: "109.6",
                            y: "151.6",
                            transform: "matrix(-0.5 -0.866 0.866 -0.5 266.0828 473.3766)",
                            fill: "#E535AB",
                            width: "320.3",
                            height: "16.6"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            x: "52.5",
                            y: "107.5",
                            fill: "#E535AB",
                            width: "16.6",
                            height: "185"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            x: "330.9",
                            y: "107.5",
                            fill: "#E535AB",
                            width: "16.6",
                            height: "185"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            x: "262.4",
                            y: "240.1",
                            transform: "matrix(-0.5 -0.866 0.866 -0.5 126.7953 714.2875)",
                            fill: "#E535AB",
                            width: "14.5",
                            height: "160.9"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#E535AB",
                    d: "M369.5,297.9c-9.6,16.7-31,22.4-47.7,12.8c-16.7-9.6-22.4-31-12.8-47.7c9.6-16.7,31-22.4,47.7-12.8 C373.5,259.9,379.2,281.2,369.5,297.9"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#E535AB",
                    d: "M90.9,137c-9.6,16.7-31,22.4-47.7,12.8c-16.7-9.6-22.4-31-12.8-47.7c9.6-16.7,31-22.4,47.7-12.8 C94.8,99,100.5,120.3,90.9,137"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#E535AB",
                    d: "M30.5,297.9c-9.6-16.7-3.9-38,12.8-47.7c16.7-9.6,38-3.9,47.7,12.8c9.6,16.7,3.9,38-12.8,47.7 C61.4,320.3,40.1,314.6,30.5,297.9"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#E535AB",
                    d: "M309.1,137c-9.6-16.7-3.9-38,12.8-47.7c16.7-9.6,38-3.9,47.7,12.8c9.6,16.7,3.9,38-12.8,47.7 C340.1,159.4,318.7,153.7,309.1,137"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#E535AB",
                    d: "M200,395.8c-19.3,0-34.9-15.6-34.9-34.9c0-19.3,15.6-34.9,34.9-34.9c19.3,0,34.9,15.6,34.9,34.9 C234.9,380.1,219.3,395.8,200,395.8"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#E535AB",
                    d: "M200,74c-19.3,0-34.9-15.6-34.9-34.9c0-19.3,15.6-34.9,34.9-34.9c19.3,0,34.9,15.6,34.9,34.9 C234.9,58.4,219.3,74,200,74"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./lib/data/tools.tsx












































class Technologies {
    constructor(items){
        this.items = items;
        this.categories = items.reduce((acc, curr)=>{
            return curr?.category ? {
                ...acc,
                [curr.category]: acc?.[curr?.category] ? new Set([
                    ...acc?.[curr?.category],
                    ...curr.type
                ]) : [
                    ...curr.type
                ]
            } : curr;
        }, {});
    }
}
const tech = [
    {
        name: "Adobe After Effects",
        category: "Design",
        type: [
            "Motion Design",
            "Animation",
            "Video Production"
        ],
        image: {
            src: "/images/about/tech/after-effects.svg",
            alt: "Adobe After Effects Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: AfterEffectsIcon
    },
    {
        name: "Asana",
        category: "Business",
        type: [
            "Collaboration",
            "Project Management"
        ],
        image: {
            src: "/images/about/tech/asana.svg",
            alt: "Asana Logo",
            dimensions: {
                height: 60,
                width: 60
            }
        },
        component: AsanaIcon
    },
    {
        name: "Balsamiq",
        category: "Design",
        type: [
            "Wireframing"
        ],
        image: {
            src: "/images/about/tech/balsamiq.svg",
            alt: "Balsamiq Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: BalsamiqIcon
    },
    {
        name: "Bootstrap",
        category: "Dev",
        type: [
            "CSS",
            "Framework"
        ],
        image: {
            src: "/images/about/tech/bootstrap.svg",
            alt: "Bootstrap Logo",
            dimensions: {
                height: 56,
                width: 56
            }
        },
        component: BootstrapIcon
    },
    {
        name: "C++",
        category: "Dev",
        type: [
            "Language"
        ],
        image: {
            src: "/images/about/tech/cplusplus.svg",
            alt: "C++ Language Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: CPlusPlusIcon
    },
    {
        name: "Confluence",
        category: "Business",
        type: [
            "Documentation",
            "Collaboration"
        ],
        image: {
            src: "/images/about/tech/confluence.svg",
            alt: "Confluence Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: ConfluenceIcon
    },
    {
        name: "CSS",
        category: "Dev",
        type: [
            "Language"
        ],
        image: {
            src: "/images/about/tech/css-3.svg",
            alt: "CSS-3 Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: CssIcon
    },
    {
        name: "Figma",
        category: "Design",
        type: [
            "UI/UX",
            "Collaboration"
        ],
        image: {
            src: "/images/about/tech/figma.svg",
            alt: "Figma Logo",
            dimensions: {
                height: 38,
                width: 38
            }
        },
        component: FigmaIcon
    },
    {
        name: "Firebase",
        category: "Dev",
        type: [
            "Application"
        ],
        image: {
            src: "/images/about/tech/firebase.svg",
            alt: "Firebase Logo",
            dimensions: {
                height: 42,
                width: 42
            }
        },
        component: FirebaseIcon
    },
    {
        name: "Github",
        category: "Dev",
        type: [
            "DevOps",
            "Project Management",
            "CI"
        ],
        image: {
            src: "/images/about/tech/github.svg",
            alt: "Github Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: GithubIcon
    },
    {
        name: "Google App Engine",
        category: "Dev",
        type: [
            "Application"
        ],
        image: {
            src: "/images/about/tech/gae.svg",
            alt: "Google App Engine Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: GaeIcon
    },
    {
        name: "Google Workspace",
        category: "Business",
        type: [
            "Productivity"
        ],
        image: {
            src: "/images/about/tech/google.svg",
            alt: "Google Logo",
            dimensions: {
                height: 46,
                width: 46
            }
        },
        component: GoogleIcon
    },
    {
        name: "GraphQL",
        category: "Dev",
        type: [
            "Language",
            "Database",
            "Query"
        ],
        image: {
            src: "/images/about/tech/graphql.svg",
            alt: "GraphQL Logo",
            dimensions: {
                height: 54,
                width: 54
            }
        },
        component: GraphQlIcon
    },
    {
        name: "HTML",
        category: "Dev",
        type: [
            "Language"
        ],
        image: {
            src: "/images/about/tech/html.svg",
            alt: "HTML Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: HtmlIcon
    },
    {
        name: "Adobe Illustrator",
        category: "Design",
        type: [
            "2D",
            "Vector",
            "Illustration"
        ],
        image: {
            src: "/images/about/tech/illustrator.svg",
            alt: "Adobe Illustrator Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: IllustratorIcon
    },
    {
        name: "InVision",
        category: "Design",
        type: [
            "UI/UX",
            "Collaboration"
        ],
        image: {
            src: "/images/about/tech/invision.svg",
            alt: "InVision Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: InvisionIcon
    },
    {
        name: "JavaScript",
        category: "Dev",
        type: [
            "Language"
        ],
        image: {
            src: "/images/about/tech/javascript-2.svg",
            alt: "JavaScript Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: JsIcon2
    },
    {
        name: "Jest",
        category: "Dev",
        type: [
            "Framework",
            "Testing"
        ],
        image: {
            src: "/images/about/tech/jest.svg",
            alt: "Jest Logo",
            dimensions: {
                height: 44,
                width: 44
            }
        },
        component: JestIcon
    },
    {
        name: "Jira",
        category: "Business",
        type: [
            "Project Management",
            "Agile"
        ],
        image: {
            src: "/images/about/tech/jira.svg",
            alt: "Jira Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: JiraIcon
    },
    {
        name: "Material UI",
        category: "Dev",
        type: [
            "Library",
            "CSS"
        ],
        image: {
            src: "/images/about/tech/material-ui.svg",
            alt: "Material UI Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: MuiIcon
    },
    {
        name: "Maya",
        category: "Design",
        type: [
            "3D",
            "Modeling",
            "Animation"
        ],
        image: {
            src: "/images/about/tech/maya.svg",
            alt: "Redux Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: MayaIcon
    },
    {
        name: "Microsoft Office",
        category: "Business",
        type: [
            "Productivity"
        ],
        image: {
            src: "/images/about/tech/microsoft-office.svg",
            alt: "Redux Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: MsOfficeIcon
    },
    {
        name: "Miro",
        category: "Design",
        type: [
            "Diagramming",
            "Collaboration"
        ],
        image: {
            src: "/images/about/tech/miro.svg",
            alt: "Miro Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: MiroIcon
    },
    {
        name: "MongoDB",
        category: "Dev",
        type: [
            "Database"
        ],
        image: {
            src: "/images/about/tech/mongodb.svg",
            alt: "MongoDB Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: MongoIcon
    },
    {
        name: "MySQL",
        category: "Dev",
        type: [
            "Database"
        ],
        image: {
            src: "/images/about/tech/mysql.svg",
            alt: "MySQL Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: MySqlIcon
    },
    {
        name: "NextJS",
        category: "Dev",
        type: [
            "Framework",
            "React"
        ],
        image: {
            src: "/images/about/tech/nextjs.svg",
            alt: "NextJS Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: NextIcon
    },
    {
        name: "Node.js",
        category: "Dev",
        type: [
            "Platform",
            "Engine"
        ],
        image: {
            src: "/images/about/tech/node.svg",
            alt: "Node.js Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: NodeIcon
    },
    {
        name: "Adobe Photoshop",
        category: "Design",
        type: [
            "Photography",
            "2D",
            "Editing"
        ],
        image: {
            src: "/images/about/tech/photoshop.svg",
            alt: "Adobe Photoshop Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: PhotoshopIcon
    },
    {
        name: "PostgreSQL",
        category: "Dev",
        type: [
            "Database"
        ],
        image: {
            src: "/images/about/tech/postgresql.svg",
            alt: "PostgreSQL Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: PostgreIcon
    },
    {
        name: "Postman",
        category: "Dev",
        type: [
            "Platform",
            "API"
        ],
        image: {
            src: "/images/about/tech/postman.svg",
            alt: "Postman Logo",
            dimensions: {
                height: 54,
                width: 54
            }
        },
        component: PostmanIcon
    },
    {
        name: "Prisma",
        category: "Dev",
        type: [
            "Database",
            "ORM"
        ],
        image: {
            src: "/images/about/tech/prisma.svg",
            alt: "Prisma Logo",
            dimensions: {
                height: 40,
                width: 40
            }
        },
        component: PrismaIcon
    },
    {
        name: "React",
        category: "Dev",
        type: [
            "Library",
            "JavaScript"
        ],
        image: {
            src: "/images/about/tech/react.svg",
            alt: "React Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: ReactIcon
    },
    {
        name: "Redux",
        category: "Dev",
        type: [
            "Library",
            "JavaScript"
        ],
        image: {
            src: "/images/about/tech/redux.svg",
            alt: "Redux Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: ReduxIcon
    },
    {
        name: "Sass/SCSS",
        category: "Dev",
        type: [
            "Language",
            "CSS"
        ],
        image: {
            src: "/images/about/tech/sass.svg",
            alt: "Sass Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: SassIcon
    },
    {
        name: "Sketch",
        category: "Design",
        type: [
            "UI/UX",
            "Vector"
        ],
        image: {
            src: "/images/about/tech/sketch.svg",
            alt: "Sketch Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: SketchIcon
    },
    {
        name: "Sublime Text",
        category: "Dev",
        type: [
            "Editor"
        ],
        image: {
            src: "/images/about/tech/sublime-text.svg",
            alt: "Sublime Text Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: SublimeIcon
    },
    {
        name: "Tailwind CSS",
        category: "Dev",
        type: [
            "Framework",
            "CSS"
        ],
        image: {
            src: "/images/about/tech/tailwind.svg",
            alt: "Tailwind Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: TailwindIcon
    },
    {
        name: "Trello",
        category: "Business",
        type: [
            "Collaboration",
            "Kanban"
        ],
        image: {
            src: "/images/about/tech/trello.svg",
            alt: "Trello Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: TrelloIcon
    },
    {
        name: "TypeScript",
        category: "Dev",
        type: [
            "Language",
            "JavaScript"
        ],
        image: {
            src: "/images/about/tech/typescript.svg",
            alt: "TypeScript Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: TypescriptIcon
    },
    {
        name: "Unity",
        category: "Dev",
        type: [
            "Platform",
            "Game",
            "Engine"
        ],
        image: {
            src: "/images/about/tech/unity.svg",
            alt: "Unity Logo",
            dimensions: {
                height: 54,
                width: 54
            }
        },
        component: UnityIcon
    },
    {
        name: "VSCode",
        category: "Dev",
        type: [
            "Editor"
        ],
        image: {
            src: "/images/about/tech/vscode.svg",
            alt: "VSCode Logo",
            dimensions: {
                height: 46,
                width: 46
            }
        },
        component: VsCodeIcon
    },
    {
        name: "Adobe XD",
        category: "Design",
        type: [
            "UI/UX"
        ],
        image: {
            src: "/images/about/tech/xd.svg",
            alt: "Adobe XD Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: XdIcon
    },
    {
        name: "Zeplin",
        category: "Design",
        type: [
            "Collaboration"
        ],
        image: {
            src: "/images/about/tech/zeplin.svg",
            alt: "Zeplin.io Logo",
            dimensions: {
                height: 50,
                width: 50
            }
        },
        component: ZeplinIcon
    }
];
const technologies = new Technologies(tech);
const skills = [
    {
        category: "General Skills",
        skills: [
            "Problem Solving",
            "Collaboration",
            "Communication",
            "Logical Thinking",
            "Creative Thinking",
            "Adaptability",
            "Listening"
        ],
        classes: "max-w-[180px]"
    },
    {
        category: "Programming Languages",
        skills: [
            "C++",
            "C#",
            "CSS",
            "HTML",
            "GraphQL",
            "JavaScript",
            "TypeScript"
        ],
        classes: "max-w-[180px]"
    },
    {
        category: "Business Analysis & Product Design",
        skills: [
            "Diagramming",
            "Ideation",
            "Interaction Design",
            "Prototyping",
            "Requirements Analysis",
            "Strategy",
            "System Thinking",
            "User Flows & User Stories",
            "User Interface Design",
            "User Experience Design",
            "User Testing",
            "User & Market Research",
            "Wireframing",
            "Writing & Documentation"
        ],
        classes: "max-w-[520px] -ml-20"
    },
    {
        category: "Digital Arts & Content Creation",
        skills: [
            "Animation",
            "Graphic Design",
            "Illustration",
            "Photo Editing",
            "Video Production",
            "Print Production",
            "3D Modeling"
        ],
        classes: "max-w-[200px] block"
    }
];

;// CONCATENATED MODULE: ./lib/utils/filter.ts
function filter(query, matches) {
    return query === "" ? matches : matches.filter((item)=>{
        let matchedLetters = 0;
        let highestSubmatch = 0;
        let name = item.name;
        const nameWords = name.split(" ").map((word)=>word.toLowerCase());
        const multiwordName = nameWords?.length > 1;
        if (multiwordName && nameWords.includes(query.toLowerCase()) && query?.length <= name?.length) return true;
        for (const word of multiwordName ? nameWords : [
            name
        ]){
            for(let i = 0; i < query.length; i++){
                if (i < word.length && query[i].toLowerCase() === word[i].toLowerCase()) matchedLetters++;
                if (multiwordName) {
                    if (i === word?.length || i + 1 === query?.length) {
                        let avg = matchedLetters / i;
                        if (query?.length <= name?.length) {
                            if (avg > highestSubmatch) highestSubmatch = avg;
                        } else {
                            let percentDiff = (name.length + (name?.length - query?.length)) / name.length;
                            highestSubmatch *= percentDiff;
                        }
                    }
                }
            }
        }
        const matchScore = (multiwordName ? highestSubmatch : matchedLetters) / query.length;
        if (query.length >= 4) {
            return query.length >= 4 && matchScore >= 0.7;
        }
        return name.toLowerCase().includes(query.toLowerCase());
    });
}

;// CONCATENATED MODULE: ./components/about/SkillsTools.tsx





function SkillsAndTools() {
    const [selectedToolCategory, setToolCategory] = (0,external_react_.useState)("All");
    const [query, setQuery] = (0,external_react_.useState)("");
    const filteredTools = filter(query, technologies.items);
    const skillsRef = (0,external_react_.useRef)();
    const themeCtx = (0,external_react_.useContext)(ThemeCtx/* default */.ZP);
    (0,external_react_.useEffect)(()=>{
        themeCtx.setDarkElements([
            skillsRef.current
        ]);
        function handleResize() {
            if (window.visualViewport.width < 768) {
                setToolCategory("All");
            }
        }
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: skillsRef,
        id: "skills-tools",
        className: "relative h-full w-full flex flex-col px-4 lg:px-0 pb-6 bg-custom-dark-navy",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col md:-ml-5 mb-2 font-gravesend font-bold leading-none mt-6 md:mt-16 tracking-[-0.02em] text-stroke text-stroke-[1.5px] text-stroke-custom-white opacity-[12%] text-transparent text-[120px] sm:text-[150px] md:text-[210px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "whitespace-pre-line lg:whitespace-normal 2xl:whitespace-pre",
                    children: "Skills"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full flex justify-center pb-8 mb-12 -mt-16 md:-mt-24",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full flex-col md:flex-row md:w-10/12 px-8 flex justify-between relative",
                    children: skills.map((skillArea, i)=>{
                        skillArea.skills.sort();
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `mb-10 font-stolzl ${skillArea.classes}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: `text-white tracking-wide lg:text-lg whitespace-nowrap md:whitespace-normal lg:mb-6 h-12 ${skillArea.classes}`,
                                    children: skillArea.category
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: `text-slate-100 md:mt-4 lg:mt-0 text-sm lg:text-base list-none ${skillArea.category.startsWith("Business") ? "columns-2" : "columns-1"}`,
                                    children: skillArea.skills.map((item, j)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "font-extralight tracking-wide leading-6 lg:leading-8",
                                            children: item
                                        }, `skill-${j}`))
                                })
                            ]
                        }, `skill-area-${i}`);
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col self-end -ml-5 -mt-28 lg:-mt-20 mb-2 font-gravesend font-bold leading-none tracking-[-0.02em] text-stroke text-stroke-[1.5px] text-stroke-custom-white opacity-[12%] text-transparent text-[120px] sm:text-[150px] md:text-[210px]",
                children: "Tools"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full flex flex-col items-center justify-end pr-4 lg:pr-0 -mt-12 md:-mt-32",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full md:w-10/12 pb-16",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mb-4 flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    onChange: (e)=>{
                                        setQuery(e.target.value);
                                    },
                                    type: "text",
                                    placeholder: "Search",
                                    className: "z-10 h-9 w-60 ml-6 mr-4 align-middle pb-0.5 text-white bg-custom-gray-blue/25 placeholder:text-custom-gray-blue/50 focus-within:placeholder:text-custom-gray-blue/75 text-sm rounded focus:outline-none focus:ring-1 focus:outline-[1.5px] focus:outline-custom-teal/50 focus:outline-offset-0 indent-2 focus:ring-custom-teal"
                                }),
                                [
                                    "All",
                                    ...Object.keys(technologies.categories)
                                ].sort().map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: `hidden md:inline-flex items-center mx-2 rounded-full px-4 md:px-3.5 py-1 border ${selectedToolCategory === item ? "border-transparent bg-custom-teal" : "bg-transparent border-custom-gray-blue/60"}`,
                                        onClick: ()=>{
                                            setToolCategory(item);
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `font-itc tracking-wider text-xs lg:text-sm whitespace-nowrap ${selectedToolCategory === item ? "text-custom-dark-navy font-semibold" : "font-light text-custom-gray-blue/60"}`,
                                            children: item
                                        })
                                    }, `tool-category-${item}`))
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pt-3 pl-2 sm:pl-4 2xl:pl-6 ml-6 mr-2 flex flex-wrap flex-auto h-[400px] lg:h-auto overflow-scroll md:min-h-[386px] lg:min-h-[120px] justify-start min-w-[311px] max-w-[1440px] bg-custom-gray-blue/10",
                            children: filteredTools.length > 0 ? filteredTools.map((item, i)=>{
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `m-1 pt-1.5 pb-2 ${item.category === selectedToolCategory || selectedToolCategory === "All" ? "flex" : "hidden"} flex-col items-center justify-between max-w-[100px] w-[90px] h-[100px] relative`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "p-1 flex items-center justify-center w-[50px] h-[50px] relative",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(item.component, {
                                                className: "h-full w-full"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-[10px] min-h-[34px] text-custom-gray-blue font-stolzl font-light text-center pt-2 leading-tight align-top justify-items-start mt-0",
                                            children: item.name
                                        })
                                    ]
                                }, `tech-item-${i}`);
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full h-full text-sm flex justify-center self-center mb-4 text-custom-gray-blue/75",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "No Matches"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/ExperienceEntry.tsx


function ExperienceItemGroup(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full flex justify-between mb-[45px]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col font-itc",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: "font-bold text-xl tracking-[.02em]",
                        children: [
                            props.title,
                            props.subtitle && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    ",",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-base font-normal ml-2",
                                        children: props.subtitle
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "font-light text-base tracking-[0.035em] mt-2.5",
                        children: props.organization
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "font-stolzl text-right text-base whitespace-nowrap md:whitespace-normal md:text-lg text-custom-navy/50",
                children: [
                    props.startDate,
                    props?.endDate && props.endDate !== props.startDate && ` - ${props.endDate}`
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/clients/Gale.tsx


function GaleLogo(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "167",
        height: "160",
        viewBox: "0 0 167 160",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                className: "mix-blend-mode:luminosity",
                clipPath: "url(#clip0_1574_25376)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M48.8771 66.4002C42.2657 65.8243 36.138 65.0871 30.7014 64.1887C17.2481 61.9657 9.23145 58.8558 9.23145 55.8841C9.23145 52.9124 17.2481 49.8024 30.7014 47.5679C32.8323 47.2109 35.0668 46.8883 37.3935 46.5889C34.56 50.3668 32.8899 55.0663 32.8899 60.1458V62.6107C32.8899 62.6107 32.9129 62.6798 32.9474 62.6913C37.5893 63.9929 42.9222 65.2829 48.8771 66.4002Z",
                        // fill='#e5e0e1'
                        fill: "#bbbbbb"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M157.399 55.8846C157.399 58.8563 149.371 61.9663 135.929 64.1893C130.4 65.1107 124.146 65.8594 117.385 66.4353C118.041 66.3086 118.709 66.1934 119.343 66.0667C120.184 65.9055 121.001 65.7327 121.819 65.5599C122.545 65.4102 123.248 65.2489 123.95 65.0992C124.641 64.938 125.332 64.7882 126.012 64.627C126.691 64.4657 127.348 64.3045 128.005 64.1432C128.661 63.9819 129.295 63.8207 129.928 63.6594C131.172 63.3369 132.37 63.0144 133.533 62.6919C133.533 62.6919 133.568 62.6689 133.579 62.6689V60.1464C133.579 55.0553 131.898 50.3559 129.053 46.5664H129.087C131.46 46.8774 133.752 47.2114 135.918 47.5685C149.359 49.7915 157.387 52.9014 157.387 55.8846H157.399Z",
                        // fill='#e5e0e1'
                        fill: "#bbbbbb"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M166.12 54.916C165.625 45.0449 153.773 41.2784 133.351 38.5371C127.5 32.4439 119.483 29 110.879 29H55.7413C47.1603 29 39.1666 32.4094 33.3154 38.4795C30.4128 38.8596 25.6903 39.5737 20.9563 40.6104C14.3219 42.0616 0.5 45.1025 0.5 55.5264C0.5 56.7819 0.684291 58.0259 1.05287 59.2353L20.6569 123.622L24.7919 125.073C28.2128 126.237 31.7374 127.296 35.2504 128.218C35.4578 128.275 40.4567 129.589 45.8933 130.625C62.8481 133.873 81.5767 134 82.3599 134C83.1892 134 84.0877 134 85.0552 134C93.7054 134 107.827 133.677 124.954 129.876C130.771 128.586 136.588 126.974 142.335 125.05L146.39 123.634L147.668 119.441C150.456 109.973 153.312 100.39 156.088 91.0716L156.664 89.1251C159.59 79.2885 162.619 69.1179 165.579 59.0856C165.844 58.1987 166.005 57.3233 166.086 56.3788C166.12 55.8489 166.132 55.3882 166.097 54.9045L166.12 54.916ZM157.044 57.7264C151.216 77.4801 145.388 97.2339 139.559 116.999C139.548 117.022 139.525 117.045 139.502 117.057C135.586 118.393 129.976 120.121 123.111 121.595C108.829 124.659 97.9441 125.154 83.3735 125.177C70.0585 125.2 60.4177 124.739 47.4943 122.286C43.6703 121.572 40.1687 120.743 37.0127 119.913C33.3499 118.934 30.1709 117.944 27.5563 117.057C27.5217 117.045 27.4987 117.022 27.4987 116.999L9.38054 57.4845C9.38054 57.4845 9.39206 57.45 9.40358 57.4269C9.02348 56.9201 8.80463 56.4018 8.80463 55.8835C8.80463 55.3652 8.9774 54.9045 9.32295 54.4322C9.40358 54.3055 9.50724 54.1788 9.6109 54.0636C10.014 53.6144 10.5669 53.1652 11.258 52.7505C11.2926 52.7275 11.3156 52.7045 11.3386 52.693C11.3386 52.693 11.3617 52.6814 11.3732 52.6699C11.3732 52.6699 11.3962 52.6699 11.4077 52.6584C15.704 50.0207 25.1259 47.7516 37.7614 46.1276H37.7729C41.931 40.8753 48.3812 37.5004 55.6146 37.5004H110.752C117.963 37.5004 124.401 40.8638 128.559 46.093C139.237 47.4522 147.645 49.2605 152.656 51.3684H152.667C155.224 52.4511 156.906 53.6029 157.528 54.8008C157.735 55.1579 157.827 55.5264 157.827 55.895C157.827 56.5055 157.551 57.0929 157.044 57.6803C157.044 57.7034 157.067 57.7149 157.056 57.7379L157.044 57.7264Z",
                        // fill='#e8001a'
                        fill: "currentColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M82.462 76.5708C71.6579 76.5708 62.8926 85.3131 62.8926 96.0942C62.8926 106.875 71.6579 115.618 82.462 115.618C93.2661 115.618 102.031 106.875 102.031 96.0942C102.031 85.3131 93.2661 76.5708 82.462 76.5708ZM95.086 99.446H85.8253V108.684H79.0872V99.446H69.8265V92.7309H79.0872V83.4932H85.8253V92.7309H95.086V99.446Z",
                        // fill='#e8001a'
                        fill: "currentColor"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_1574_25376",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "166.957",
                        height: "160",
                        fill: "white"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/clients/Monster.tsx


function MonsterEnergyLogo(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "168",
        height: "160",
        viewBox: "0 0 168 160",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("mask", {
                id: "path-1-outside-1_563_482",
                maskUnits: "userSpaceOnUse",
                x: "29.5801",
                y: "13.002",
                width: "97",
                height: "136",
                fill: "currentColor",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        fill: "white",
                        x: "29.5801",
                        y: "13.002",
                        width: "97",
                        height: "136"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M81.679 145.259C81.2428 143.013 81.6223 142.048 82.2 140.598C82.302 140.338 82.4096 140.067 82.5228 139.768V137.979C82.6871 137.9 82.8457 137.816 83.0099 137.731L83.0213 137.725V133.707L83.0043 133.702C82.925 133.685 82.8457 133.662 82.7664 133.64C82.6814 133.617 82.5965 133.595 82.5115 133.572C82.2906 133.278 81.7186 130.773 81.8036 130.237C81.8149 130.169 81.8319 130.152 81.8375 130.147L81.8658 130.13L81.8375 130.107C81.3731 129.684 81.3731 129.582 81.3788 129.441C81.3844 129.323 81.3901 129.176 81.1692 128.826C81.0559 128.645 80.8181 128.459 80.5632 128.262C80.2687 128.03 79.9685 127.793 79.8269 127.545C79.6966 127.314 79.2152 125.683 79.3228 125.513C79.4871 125.248 79.691 124.994 79.9062 124.723C80.4216 124.08 80.9483 123.409 81.005 122.545V122.528L80.988 122.523C80.5179 122.286 80.5179 122.286 80.5066 121.693V121.642C80.5009 121.518 80.1327 119.983 79.9968 119.707V117.918C79.9742 117.85 79.9345 117.777 79.9005 117.698C79.725 117.337 79.4588 116.789 79.6627 116.259C79.708 116.14 79.7986 116.005 79.9119 115.847C80.1611 115.48 80.4726 115.023 80.3366 114.571C80.3027 114.453 80.2177 114.329 80.1271 114.182C79.9119 113.843 79.6457 113.426 79.8382 112.918C80.1214 112.173 80.5122 110.678 80.1724 109.814L79.8326 108.906L79.8213 108.9C79.725 108.877 79.6287 108.855 79.5324 108.827C79.4644 108.81 79.4021 108.793 79.3342 108.776C79.3285 108.607 79.2662 107.467 79.1699 107.117C78.7508 105.672 78.966 101.423 79.6683 99.9386L79.6797 99.916L79.657 99.9047C79.2719 99.7242 79.1529 99.363 79.0227 98.9849C78.9377 98.7197 78.8471 98.4488 78.6602 98.24C78.6035 98.1779 78.5526 98.1158 78.4903 98.0538C77.805 97.3032 76.9554 96.3721 76.9894 94.7977C77.4878 94.2221 77.7936 93.3925 78.0655 92.6645C78.2581 92.151 78.4336 91.6657 78.6602 91.3271C78.8924 90.9829 78.8754 90.6104 78.8584 90.2549C78.8414 89.9276 78.8244 89.589 79 89.2673C79.1019 89.0811 79.3455 88.878 79.589 88.6861C79.8269 88.4942 80.0704 88.2967 80.1724 88.1105C80.229 87.5349 80.2857 86.9762 80.3423 86.4119C80.3989 85.825 80.4556 85.2381 80.5122 84.6512H80.8464L81.0163 81.6716C81.1466 81.3105 81.3788 80.9042 81.628 80.4753C82.2453 79.4087 82.942 78.1954 82.5285 76.9088C82.285 76.1639 82.0641 75.4133 81.8489 74.691C81.6223 73.9123 81.4014 73.173 81.1862 72.541V71.3898C81.0843 71.1697 80.8634 71.023 80.6368 70.8706C80.3763 70.6956 80.1044 70.5151 80.0138 70.2273C79.9175 69.9225 80.0761 69.2679 80.2064 68.7375C80.2743 68.4553 80.3366 68.2126 80.348 68.0546C80.365 67.9079 80.314 67.6709 80.263 67.3944C80.1781 66.9486 80.0705 66.3899 80.1781 66.0005C80.4103 65.1653 80.5066 64.4035 80.6028 63.6699C80.6708 63.1451 80.7388 62.6485 80.8464 62.1462C80.8747 62.0277 80.903 61.8979 80.937 61.7625C81.1409 60.8991 81.4241 59.7084 81.0106 58.9127C80.8464 58.6023 80.4556 58.3032 80.0704 58.0154C79.7703 57.7897 79.4927 57.5753 79.3342 57.3665C78.9207 56.8247 79.2662 55.1092 79.4927 53.9805C79.5947 53.4783 79.674 53.0833 79.674 52.8858C79.674 52.7786 79.6797 52.6657 79.6853 52.5585C79.708 51.9546 79.725 51.379 79.3398 51.0743C79.3058 50.9502 79.3851 50.8937 79.5097 50.8147C79.6513 50.7301 79.8326 50.6172 79.674 50.3012C79.1699 49.2911 78.4166 47.3047 79.0113 45.307C79.0566 45.1603 79.1303 44.9515 79.2152 44.7144C79.589 43.6874 80.1497 42.1355 79.6683 41.5599C79.3851 41.0295 78.8584 40.7529 78.3487 40.4877C77.669 40.1322 77.0234 39.7992 76.995 38.8738V38.8625L76.9894 38.8568C76.7685 38.6029 76.7968 37.9991 76.8195 37.5138C76.8195 37.463 76.8251 37.4065 76.8251 37.3614H77.8276L77.8333 37.3445C77.9409 37.1074 77.9862 36.9156 78.0032 36.5601V36.5431L77.9919 36.5375C77.5671 36.2384 77.754 34.4721 77.8956 33.1798C77.9522 32.6775 77.9975 32.2374 78.0032 31.9326V31.9157L77.9862 31.9101C77.9296 31.8875 77.8729 31.8649 77.8163 31.8424C77.4255 31.69 77.148 31.5771 77.0064 31.1821L77.8276 31.058L77.8333 31.0467C77.9239 30.8379 77.9692 30.7307 78.0032 30.3977V30.3808L77.9862 30.3751C77.2499 29.997 76.7402 29.2634 76.2474 28.5524C75.5508 27.5479 74.8315 26.5039 73.4552 26.391L73.4269 26.3798C73.3589 26.3572 73.3306 26.3459 73.308 26.3459C73.2966 26.3459 73.2853 26.3515 73.2683 26.3515C73.2343 26.3628 73.1664 26.3798 72.9455 26.391H72.9228V26.4136C72.9172 26.5829 72.9058 26.6055 72.8775 26.6732C72.8549 26.7296 72.8152 26.8143 72.7642 27.0231C72.0336 26.8594 71.4672 26.645 70.9632 26.4531C70.2495 26.1822 69.6322 25.9509 68.811 25.9509C68.1653 25.9509 67.4573 26.092 66.5794 26.3967C66.3982 26.4588 66.2396 26.5039 66.1037 26.5434C65.4184 26.7409 65.2145 26.803 65.2202 27.8357V27.847L65.2315 27.8526C65.5373 28.1179 66.0074 29.7092 66.0584 29.8785C65.9225 30.0083 65.7979 30.1212 65.6846 30.2171C65.1748 30.6573 64.869 30.9225 64.8917 32.0681V32.0794L64.8973 32.085C65.1409 32.3333 65.2315 32.8412 65.3164 33.3265C65.3787 33.6764 65.4354 34.0093 65.5486 34.2294C64.9086 34.2915 64.7331 34.4721 64.5462 34.6583C64.4329 34.7768 64.314 34.8953 64.0704 35.0025L63.9968 35.0082C63.6909 35.0477 63.3794 35.0872 63.0736 35.1267C62.2127 35.5048 61.3518 36.6955 61.0403 37.5871C60.6722 38.6311 60.8081 39.7146 60.9327 40.7642C61.0743 41.9211 61.2046 43.0102 60.7062 44.0091L60.6892 44.0486H61.0686C61.1762 44.0937 61.3122 44.1219 61.4821 44.1219C61.584 44.1219 61.686 44.1163 61.7879 44.105C61.8899 44.0993 61.9918 44.0881 62.0994 44.0881C62.2863 44.0881 62.4336 44.1163 62.5695 44.1727C62.7734 44.4097 62.7451 44.974 62.7281 45.4255L62.7224 45.5496C62.5016 45.8262 62.4563 46.1873 62.4166 46.5372C62.3826 46.8137 62.3486 47.1015 62.224 47.3498C62.0088 47.7843 61.669 48.2414 61.3405 48.6929C60.978 49.1838 60.6042 49.6917 60.3777 50.1827C60.1511 50.6793 59.749 53.5573 59.8736 53.8056C59.9416 53.9467 60.1228 54.0596 60.321 54.1837C60.5532 54.3361 60.7968 54.4884 60.8817 54.7029C61.0913 55.2277 61.0063 55.7694 60.9214 56.2943C60.8591 56.678 60.8024 57.0448 60.8704 57.3665C60.8081 57.3665 60.7515 57.3552 60.7401 57.3326C60.7401 57.3326 60.7288 57.31 60.7062 57.31C60.6892 57.31 60.6722 57.3157 60.5759 57.3608L60.5249 57.3834L60.5419 57.4116C60.7288 57.6655 60.6835 57.9138 60.6269 58.2242C60.5646 58.5628 60.4909 58.9465 60.7062 59.4657C60.8138 59.7253 61.0347 60.0188 61.2442 60.3066C61.4368 60.5605 61.6124 60.8032 61.7143 61.012C61.8842 61.3675 61.8842 61.7061 61.8842 62.0729C61.8842 62.4284 61.8786 62.7952 62.0485 63.1959C62.1731 63.495 62.2977 63.794 62.4223 64.0988C62.8697 65.1992 63.3398 66.3335 63.8948 67.4395C64.0138 67.6765 64.2517 67.9248 64.5009 68.1901C65.0163 68.7375 65.6053 69.3582 65.4014 70.1257C65.2145 70.8254 64.7387 71.4857 64.2743 72.129C64.0024 72.5015 63.7532 72.8513 63.5607 73.2012C63.3794 73.5342 63.3058 73.8558 63.2322 74.1606C63.1586 74.4935 63.0849 74.8039 62.8924 75.1255C62.7847 75.3061 62.6601 75.4641 62.5412 75.6165C62.275 75.9607 61.9918 76.3106 61.8899 76.937V76.9539L61.9012 76.9652C62.5865 77.4505 63.1982 77.9641 63.2322 78.8613C62.915 79.262 62.343 83.3646 62.5695 83.6411C62.7621 83.9345 63.1076 84.1603 63.4474 84.386C63.8495 84.6512 64.2686 84.9221 64.4102 85.3058C64.6934 86.0564 63.6853 88.8272 63.4021 89.5269C62.9603 90.6217 62.7338 91.6601 62.4959 92.7661C62.292 93.7029 62.0824 94.6735 61.7256 95.7006C61.669 95.8699 61.601 96.0505 61.5387 96.231C61.1196 97.4048 60.5985 98.872 60.5532 100.204C60.5136 101.287 60.9044 102.472 61.3178 103.72L61.3915 103.94C61.4481 104.493 61.4991 105.046 61.5614 105.604C61.6124 105.745 61.6973 105.915 61.7879 106.095C62.0145 106.541 62.292 107.094 62.2297 107.529C62.0881 107.901 61.9465 108.279 61.8106 108.657C61.618 109.182 61.4198 109.701 61.2272 110.226C61.1762 110.497 61.2782 110.898 61.3915 111.321C61.5104 111.772 61.635 112.235 61.5614 112.545C61.4764 112.895 61.2895 113.285 61.1083 113.668C60.9497 114.001 60.8081 114.317 60.7175 114.6C60.5532 115.141 60.8364 115.621 61.0856 116.05C61.2159 116.27 61.3348 116.473 61.3915 116.671C61.4821 116.975 61.4424 117.399 61.4085 117.799C61.3745 118.149 61.3462 118.476 61.3915 118.725C61.1706 120.254 60.9497 121.8 60.7232 123.341C60.8364 123.99 60.8817 124.588 60.9214 125.175C60.9893 126.083 61.0573 127.02 61.3915 128.109V129.644C61.4934 129.904 61.652 130.192 61.8162 130.491C62.0428 130.897 62.275 131.32 62.3996 131.71C62.6715 132.562 62.2863 133.239 61.9805 133.781C61.8842 133.956 61.7879 134.119 61.7313 134.266C61.5444 134.74 61.7993 135.017 62.0428 135.282C62.1844 135.434 62.326 135.592 62.3883 135.79H61.7709C61.6747 135.547 61.5274 135.316 61.3801 135.096C61.2102 134.836 61.0347 134.565 60.9384 134.266C60.7515 133.674 60.9101 133.222 61.063 132.788C61.2272 132.314 61.3971 131.828 61.1083 131.179C60.995 130.925 60.7175 130.632 60.423 130.321C60.0492 129.921 59.6187 129.469 59.4318 128.995C58.7182 127.223 58.5653 125.276 58.401 123.211C58.2594 121.45 58.1178 119.633 57.5911 117.946C57.3646 117.224 57.2116 116.451 57.0474 115.632C56.8378 114.588 56.6226 113.505 56.2488 112.545C56.0846 112.134 55.8693 111.716 55.6654 111.315C55.3766 110.757 55.0764 110.181 54.9122 109.594C54.7139 108.9 55.0821 108.437 55.4389 107.986C55.6598 107.709 55.8637 107.45 55.9146 107.162C55.96 106.908 55.5578 106.27 55.1274 105.599C54.8215 105.113 54.4987 104.611 54.4024 104.323C54.1589 103.567 54.4138 102.896 54.6573 102.252C54.8612 101.716 55.0538 101.208 54.9065 100.723C54.6969 100.063 54.1136 99.6282 53.5472 99.205C52.8732 98.7027 52.1766 98.1836 52.0576 97.275C52.8845 96.8236 53.1904 95.9376 53.4906 95.0911C53.6152 94.7412 53.7398 94.3801 53.8984 94.0584C54.0853 93.6803 54.3458 93.2966 54.6233 92.8903C54.9915 92.3485 55.3766 91.7899 55.5748 91.2255C56.0619 89.8542 55.5238 86.5756 55.2407 85.5598C55.303 84.4199 55.3539 83.2743 55.4106 82.1231V82.0779L55.3936 82.0723C54.7706 81.8014 54.3005 81.4572 53.7964 81.096C53.7171 81.0396 53.6435 80.9832 53.5642 80.9267C53.5869 80.2495 53.8191 79.6288 54.0399 79.025C54.1929 78.6187 54.3345 78.2349 54.4024 77.8568C54.4874 77.3997 54.4138 76.7282 54.3401 76.0115C54.2778 75.4472 54.2155 74.8603 54.2382 74.3863L54.4024 72.8401C53.989 71.48 53.6718 70.1031 53.366 68.7713C52.8562 66.5705 52.3295 64.2906 51.3893 62.1575C51.0835 61.4634 50.5907 60.7298 50.1206 60.0188C49.6506 59.3134 49.1578 58.5797 48.8746 57.9138C48.5688 57.1859 49.0785 55.9669 49.3844 55.239C49.4467 55.0866 49.5033 54.9568 49.5429 54.844C49.7129 53.5968 49.8828 52.361 50.047 51.1251C50.2396 50.5608 50.4548 49.9965 50.6587 49.4491C51.1175 48.2245 51.5876 46.9604 51.8934 45.7189C51.9897 45.3239 51.7971 45.0587 51.6159 44.7991C51.4007 44.5 51.1854 44.1896 51.3893 43.6705C52.1483 41.7518 51.9444 41.2665 51.2647 39.6582C51.1968 39.5002 51.1288 39.3365 51.0552 39.1559V38.1289L51.0495 38.1232C50.7663 37.6379 50.1886 37.288 49.6336 36.9494C48.9143 36.5149 48.1723 36.0635 48.0421 35.3186C48.4668 34.9461 48.9313 33.9868 49.0445 33.5127L49.0502 33.4958L49.0389 33.4845C48.6651 33.1516 48.4895 32.6437 48.3196 32.1527C48.1667 31.7069 48.0024 31.2442 47.6966 30.9169C47.0113 30.1889 45.5953 29.5117 44.1624 29.2352H42.4803C41.2059 28.6878 38.7309 27.8526 36.1539 27.8526C34.8116 27.8526 33.6109 28.0784 32.5801 28.5355V28.3323C32.7783 28.1856 32.9709 28.0276 33.1804 27.8696C33.9564 27.2601 34.755 26.6281 35.7518 26.2895C36.5164 26.2443 37.2866 26.2048 38.0569 26.1653H38.0852C38.3684 26.092 38.6119 25.9114 38.8555 25.7421C39.0537 25.601 39.2406 25.4656 39.4332 25.3922C39.7164 25.2906 39.9769 25.2624 40.2261 25.2342C40.5376 25.2003 40.8321 25.1721 41.1097 25.0028C41.2343 24.9295 41.2682 24.7884 41.3022 24.6586C41.3305 24.5401 41.3589 24.4272 41.4495 24.3595C41.6194 24.2354 41.8686 24.1733 42.1121 24.1112C42.3557 24.0491 42.6049 23.9814 42.7805 23.8573C43.5337 24.004 44.5192 24.083 45.4877 24.083C47.1245 24.083 48.5235 23.8573 49.3164 23.4622C49.7525 23.2478 50.166 22.9205 50.5624 22.6101C51.0155 22.2546 51.4799 21.8878 51.9953 21.6677C52.2899 21.6282 52.5957 21.5887 52.8959 21.5548L52.9922 21.5436C53.383 21.3573 53.5529 21.0187 53.7228 20.6971C53.9437 20.2626 54.1589 19.8562 54.8272 19.7434C55.0594 20.003 55.184 20.319 55.3086 20.6294C55.4389 20.9454 55.5748 21.2727 55.8184 21.5379C57.0587 22.8528 58.7578 23.1011 61.4651 23.1011C61.9465 23.1011 62.4449 23.0954 62.983 23.0898H63.034C63.5154 23.7105 64.0194 24.2918 64.8803 24.6304L64.903 24.6417L64.9143 24.6191C65.2485 23.9475 67.2648 22.7456 68.7487 22.706H68.7713L68.794 22.5932C68.8279 22.4239 68.8279 22.4239 68.9356 22.311L68.9412 22.3054V22.1925H69.4453V21.8031C69.8587 21.679 70.091 21.4928 70.3118 21.3122C70.6064 21.0695 70.8895 20.8438 71.5918 20.7761C71.977 21.0131 73.0134 21.1147 73.8743 21.1147C74.3444 21.1147 74.7805 21.0865 75.126 21.03H75.1373L75.1713 20.9792C75.7207 20.144 76.406 19.1057 78.445 19.1057H78.4789L78.4846 19.1001C78.8697 18.8969 79.3908 18.8461 79.9345 18.7897C80.3536 18.7502 80.7841 18.705 81.1579 18.5865C81.5997 18.4342 82.0018 18.2423 82.4209 18.0335C83.0552 17.7231 83.7122 17.4071 84.5108 17.2886L84.5335 17.283V16.8879C84.76 16.7356 84.8903 16.5945 85.0092 16.4703C85.2811 16.1938 85.4567 16.002 86.4988 16.002C87.0425 17.757 87.6598 17.9263 88.7869 18.2367C89.2514 18.3608 89.8291 18.5245 90.5314 18.8292L92.3664 20.4939C92.6949 20.6801 93.08 20.8099 93.4538 20.9284C94.3147 21.2106 95.1303 21.4758 95.2039 22.3844C94.7338 22.5932 94.5299 23.039 94.5356 23.8178V23.8347L94.5526 23.8403C94.8131 23.9588 94.9094 24.0548 94.9944 24.1281C95.102 24.2354 95.1813 24.3031 95.5664 24.3539C95.8723 24.4724 96.2517 24.5062 96.6595 24.5401C97.5147 24.6191 98.3926 24.6981 98.5569 25.5954C98.234 25.6856 98.0868 25.8267 97.9452 25.9622C97.8376 26.0637 97.7413 26.1597 97.5657 26.233C97.3222 26.3346 97.0277 26.3741 96.7445 26.4193C96.45 26.4644 96.1441 26.5096 95.8949 26.6168C95.4758 26.7974 95.102 27.3222 94.7678 27.7849C94.6319 27.9768 94.5016 28.1574 94.3827 28.2928C94.1731 28.3662 93.9692 28.4508 93.771 28.5298L93.703 28.558V30.5049C93.5048 30.9394 92.9951 31.357 92.5023 31.7521C92.1115 32.0681 91.7491 32.3672 91.5338 32.6719C91.3299 32.9541 91.3186 33.2701 91.3073 33.5805C91.2903 33.9134 91.279 34.2238 91.0354 34.4664C90.9618 34.5398 90.8599 34.6075 90.7466 34.6865C90.52 34.8389 90.2652 35.0195 90.1915 35.2508C90.0953 35.5443 90.7296 37.6379 90.8655 37.8467C91.3073 38.5352 90.9901 39.2011 90.6843 39.8444C90.4577 40.3184 90.2482 40.7642 90.3614 41.1818C90.5597 41.8985 91.2393 42.6321 91.6924 43.1118C91.834 43.2642 91.9586 43.3996 92.0436 43.5012C92.44 44.0091 92.0549 45.0192 91.6811 45.9955C91.3866 46.7686 91.1091 47.4965 91.1997 47.9875C91.3526 48.8058 91.6245 49.4378 91.885 50.0416C91.9983 50.3068 92.1059 50.5551 92.2022 50.8204C92.4004 51.3395 92.4514 51.8926 92.508 52.4287C92.5533 52.8688 92.593 53.2864 92.7119 53.6532C93.3009 55.4534 92.4684 56.1419 91.6641 56.8078C91.0977 57.2818 90.5597 57.722 90.5314 58.529V58.5459L90.5483 58.5515C90.6956 58.6192 90.8032 58.766 90.8768 58.9804C91.2733 60.1485 90.4351 63.2128 89.863 64.2963C89.6761 64.6518 89.9423 65.2895 90.2255 65.9667C90.3388 66.2319 90.4521 66.5084 90.5314 66.7623V68.049L90.537 68.0546C91.143 69.0873 93.0744 74.6515 92.7119 75.2215L92.3777 77.4167C92.1568 77.8173 91.7887 78.1446 91.3979 78.4889C91.1091 78.7485 90.8089 79.0137 90.537 79.3354C90.2652 79.657 90.0669 80.1085 89.8744 80.5374C89.7101 80.9042 89.5572 81.2484 89.3646 81.5193C89.0814 81.9199 89.0984 82.377 89.1154 82.868C89.1267 83.2291 89.1437 83.6072 89.0305 83.9684C88.8436 84.5722 88.583 84.8826 88.3338 85.1873C88.1583 85.4018 87.994 85.5993 87.8524 85.8927L87.7675 86.6038L87.6825 87.3148C87.5862 87.4559 87.4616 87.6421 87.3313 87.8396C86.9745 88.3701 86.5271 89.0247 86.3402 89.4931C86.1816 89.8994 86.1986 90.2775 86.2099 90.6443C86.2269 91.0506 86.2383 91.4343 86.006 91.8011C85.7625 92.1792 85.9607 92.5404 86.1193 92.8282C86.2666 93.0878 86.3402 93.2402 86.1759 93.3417L86.125 93.3756L86.1816 93.3869C86.3459 93.4264 86.5101 93.4659 86.6744 93.511C87.1614 94.2898 86.3855 95.52 86.1646 95.7852L86.1533 95.7965L86.3175 96.1859C85.8701 96.88 86.023 97.0436 86.2722 97.3145C86.3912 97.4443 86.5441 97.608 86.6574 97.8732C86.9406 98.5222 86.6347 99.1655 86.3912 99.6847C86.2779 99.9217 86.1816 100.125 86.1533 100.3V100.305L86.159 100.311C86.159 100.311 86.5611 101.073 86.4875 101.316C86.1023 102.726 86.3459 103.708 86.6574 104.673C86.9406 105.554 86.4931 105.92 86.0627 106.282C85.8135 106.49 85.5756 106.688 85.4793 106.976C85.4113 107.184 85.5133 107.602 85.6266 108.042C85.7115 108.398 85.8021 108.765 85.8135 109.041C85.8361 109.662 85.7851 110.429 85.7285 111.242C85.6662 112.167 85.6039 113.121 85.6436 113.928C85.6605 114.221 85.4623 114.854 85.2754 115.463C85.0602 116.151 84.879 116.744 84.9752 116.891C85.0036 116.93 85.1055 116.981 85.2811 117.066C85.4283 117.139 85.6152 117.224 85.6492 117.274L85.8191 118.934C85.9777 119.193 86.2213 119.498 86.5044 119.848C87.0538 120.531 87.7448 121.377 87.994 122.156C88.2545 122.946 87.7052 123.742 87.2634 124.379C87.0765 124.65 86.9122 124.887 86.8273 125.096L86.9236 126.896L86.9915 128.188C86.7706 128.905 86.4761 129.543 86.159 129.972C86.1193 130.028 86.1533 130.288 86.2269 130.835C86.3232 131.529 86.4591 132.483 86.3232 132.804C86.2836 132.9 86.176 132.923 86.0683 132.946C85.9721 132.962 85.8701 132.985 85.8248 133.058C85.5643 133.465 85.5699 134.119 85.5756 134.746C85.5813 135.186 85.5813 135.603 85.4906 135.891L85.4057 137.708L85.3264 139.486C85.3094 139.497 85.2528 139.52 85.2018 139.537C85.0036 139.616 84.8506 139.684 84.8223 139.74C84.6524 140.067 84.6071 140.389 84.5618 140.699C84.5051 141.094 84.4542 141.467 84.154 141.794C84.0294 141.93 83.9105 142.054 83.7859 142.183C82.9986 143.007 82.3133 143.718 82.302 145.259H81.679ZM111.017 128.803C111.108 128.183 110.955 127.41 110.808 126.665C110.649 125.852 110.496 125.085 110.677 124.599L110.683 124.588L110.677 124.577C110.604 124.447 110.513 124.323 110.434 124.199C110.218 123.883 110.015 123.578 110.009 123.307C109.981 122.229 110.179 120.869 110.513 119.842V118.55C110.536 118.476 110.564 118.386 110.592 118.285C110.796 117.63 111.108 116.637 110.841 115.841C110.626 115.186 110.377 114.667 110.139 114.171C109.641 113.132 109.171 112.15 109.171 110.215C111.187 109.493 111.249 108.076 111.181 105.836C112.003 104.803 111.493 103.81 111 102.85C110.632 102.139 110.286 101.468 110.507 100.819C111.062 99.9273 111.617 99.0244 112.178 98.1215L112.184 98.1159V95.029C112.558 93.8327 112.575 93.2514 112.524 92.2413C112.569 92.2582 112.609 92.2752 112.654 92.2921C112.711 92.3147 112.761 92.3372 112.818 92.3542L112.886 92.3767L112.852 92.3147C112.172 91.1014 112.297 88.5112 112.688 87.1907V85.3848C112.722 85.3115 112.795 85.2212 112.88 85.1083C113.124 84.8092 113.452 84.3973 113.181 83.833C113.169 83.7991 113.101 83.737 112.982 83.6355C112.863 83.5282 112.705 83.3872 112.682 83.3194L112.597 81.4403L112.518 79.7247C112.32 79.1604 112.031 78.63 111.753 78.1221C111 76.7339 110.286 75.4246 111.176 73.4382L111.215 73.3479L110.96 73.5342C110.926 73.5962 110.909 73.5962 110.909 73.5962C110.887 73.5962 110.847 73.4664 110.836 73.3028C111.159 72.8908 111.952 69.1099 112.008 68.1506V68.1336L111.991 68.128C111.17 67.6709 110.989 67.1122 110.757 66.4012C110.649 66.0739 110.524 65.7071 110.326 65.312C110.201 65.0637 109.924 64.7985 109.658 64.5502C109.386 64.2906 109.103 64.0254 108.984 63.7715V62.372C108.938 62.2309 108.848 62.0616 108.752 61.8641C108.474 61.3223 108.1 60.5774 108.315 60.0695C108.355 59.968 108.48 59.8551 108.616 59.7253C108.769 59.5842 108.927 59.4375 108.984 59.2908L108.82 57.0956C108.859 56.9827 108.921 56.8416 109.001 56.678C109.256 56.1362 109.601 55.397 109.324 54.6464C109.142 54.1611 108.746 53.7718 108.355 53.3937C107.891 52.9422 107.415 52.4795 107.313 51.8474C108.372 51.2436 110.558 48.6308 110.994 47.5981L111.006 47.5755L110.977 47.5643C110.02 47.22 109.573 46.7291 109.488 45.9277C109.692 45.6681 110.513 43.4617 110.496 43.219C110.473 42.9933 110.371 42.6773 110.264 42.35C110.105 41.8646 109.947 41.368 109.986 41.0407L109.992 41.0069C110.049 40.5893 110.151 39.8162 110.32 39.2462C110.445 38.8399 110.337 38.3151 110.247 37.8523C110.185 37.542 110.122 37.2429 110.156 37.0567C110.207 36.7576 110.371 36.5488 110.553 36.3287C110.734 36.103 110.921 35.8716 110.994 35.5161L111 35.4935L110.819 35.4258C109.964 35.1041 109.607 34.9687 109.658 33.84V33.8118H109.154V33.3039H109.131C107.93 33.129 106.203 32.4913 105.285 31.8931L105.268 31.8819L105.251 31.8931C104.866 32.2317 103.569 32.655 102.595 32.6606C102.267 32.4575 100.817 32.0342 100.754 32.0173C100.624 31.9101 100.5 31.769 100.369 31.6223C100.148 31.3683 99.9218 31.1031 99.582 30.9902C99.2592 30.883 98.874 30.8266 98.3983 30.8266C98.0245 30.8266 97.6393 30.8604 97.2655 30.8887C96.8974 30.9169 96.5519 30.9451 96.2234 30.9451C95.623 30.9451 95.2209 30.8492 94.9321 30.6291C95.7307 30.3074 96.2914 29.6246 96.8351 28.97C97.4524 28.2194 98.0358 27.514 98.908 27.435C99.0666 27.3673 99.2592 27.3335 99.514 27.3335C99.6953 27.3335 99.8822 27.3504 100.086 27.3617C100.296 27.3786 100.511 27.3955 100.72 27.3955C101.004 27.3955 101.23 27.3673 101.428 27.3052C101.949 27.1416 102.295 26.8594 102.635 26.5886C103.133 26.1879 103.603 25.8042 104.594 25.7647C104.702 25.8437 104.815 25.9339 104.923 26.0186L104.946 26.0355L104.963 26.013C105.132 25.7929 105.444 25.6913 105.744 25.5954C106.01 25.5107 106.288 25.4204 106.469 25.2455C107.007 24.7207 107.862 22.8246 107.981 22.0345C110.003 21.9386 110.796 21.2332 111.64 20.4883C112.031 20.144 112.427 19.7885 112.965 19.4838C113.345 21.4194 114.461 21.4533 115.752 21.4928C116.386 21.5097 117.043 21.5323 117.666 21.7806C118.012 21.916 118.397 22.4747 118.765 23.0221C119.031 23.4114 119.28 23.7783 119.501 23.9645C119.858 24.2579 120.153 24.3087 120.391 24.3482C120.787 24.4103 120.985 24.4441 121.002 25.6066C120.577 25.9791 120.419 26.7635 120.334 27.4125L120.328 27.435L120.351 27.4407C120.572 27.5028 120.81 27.593 121.042 27.672C121.45 27.8188 121.84 27.9599 122.112 27.9599C122.135 27.9599 122.158 27.9598 122.18 27.9542C122.254 28.2646 122.367 28.5693 122.475 28.8628C122.662 29.3763 122.837 29.856 122.843 30.3695C122.849 30.6799 122.616 31.0015 122.367 31.3401C122.146 31.6448 121.914 31.9552 121.84 32.2882L121.835 32.3051L121.852 32.3164C122.248 32.576 123.562 33.6256 123.579 34.0714C123.585 34.1278 123.562 34.1673 123.523 34.2012C122.843 35.121 121.654 36.9099 121.336 37.8128L121.387 38.4449L121.501 39.8613C120.81 40.2055 119.711 41.0859 119.496 41.7969L119.49 41.8082L119.496 41.8195C119.598 41.9436 119.541 42.1017 119.326 42.2992L119.309 42.3161L119.32 42.333C119.654 42.824 119.581 42.903 119.252 43.2359C119.133 43.3544 118.992 43.5068 118.822 43.7156L118.816 43.7269V43.7382C118.929 44.342 118.708 44.6693 118.448 45.0474C118.346 45.1941 118.244 45.3465 118.148 45.5214C118.012 45.781 118.182 46.1422 118.267 46.3397C118.289 46.3848 118.306 46.4187 118.312 46.4413C118.442 46.9209 118.153 47.457 117.921 47.8859C117.882 47.9593 117.848 48.027 117.808 48.0891C117.638 48.422 117.372 48.755 117.089 49.1048C116.686 49.6071 116.273 50.1206 116.131 50.6624C116.012 51.1082 116.154 51.633 116.313 52.2425C116.46 52.7955 116.624 53.4162 116.63 54.1047C116.528 54.0652 116.432 54.0257 116.33 53.9918L116.296 53.9805V54.0144V54.1442L116.63 56.836C116.551 57.0392 116.432 57.2141 116.301 57.3947C116.075 57.722 115.843 58.0549 115.786 58.6418V58.6587L115.911 58.7152C116.8 59.1271 118.023 59.6914 118.136 60.6903C117.644 61.1417 117.292 62.6203 117.462 63.1394C116.681 64.522 115.548 67.716 116.8 69.9677C117.009 70.3401 117.355 70.7916 117.751 71.3164C118.941 72.8739 120.566 75.007 119.813 76.8862C119.796 76.9314 119.7 77.0386 119.603 77.1458C119.467 77.2925 119.331 77.4449 119.309 77.5295C119.241 77.8061 119.394 78.0487 119.558 78.3083C119.751 78.613 119.949 78.9234 119.813 79.3354C119.399 80.5881 118.81 81.7845 118.244 82.9413C117.593 84.2731 116.913 85.6557 116.46 87.1737C116.29 87.755 116.59 87.992 116.856 88.2064C116.964 88.2911 117.072 88.3757 117.134 88.4773C117.032 88.861 116.936 89.2504 116.834 89.6342L116.8 89.7583L116.805 89.7696C116.919 90.0122 117.151 90.2605 117.394 90.5258C117.7 90.8531 118.012 91.1973 118.148 91.5641C118.935 93.6972 117.593 95.6046 116.709 96.8687C116.562 97.0775 116.42 97.275 116.307 97.4556C116.052 97.8506 116.058 98.24 116.063 98.6181C116.069 98.8946 116.069 99.1542 115.973 99.3856L115.962 99.4194L115.995 99.4251C116.069 99.4307 116.131 99.4364 116.188 99.4364C116.211 99.4364 116.233 99.4364 116.245 99.4364H116.267V99.4476C116.267 99.4815 116.273 99.5492 116.313 99.6677C116.364 99.7749 116.358 99.7806 116.324 99.8032C116.284 99.8314 116.216 99.8822 116.148 100.035L116.143 100.046L116.148 100.057C116.233 100.209 116.409 100.367 116.579 100.52C116.743 100.667 116.913 100.819 116.987 100.954C117.236 101.434 117.258 102.45 117.27 103.189C117.275 103.584 117.281 103.894 117.321 104.036C117.457 104.515 116.941 105.266 116.602 105.762C116.477 105.943 116.375 106.095 116.318 106.203C116.267 106.304 116.109 106.947 116.148 107.122V107.134L116.165 107.139C116.279 107.179 116.437 107.579 116.279 107.658C116.233 107.681 116.131 107.754 116.131 107.754L116.16 107.777C116.301 107.873 116.318 108.595 116.318 108.595V109.052L116.324 109.058C116.545 109.351 116.494 109.904 116.443 110.486C116.398 111.016 116.352 111.564 116.483 112.004L116.545 112.207C116.72 112.76 116.981 113.595 116.981 113.928C116.981 114.679 116.415 115.395 115.922 116.022C115.684 116.321 115.463 116.603 115.31 116.868C114.925 117.557 114.698 118.177 114.461 118.832C114.274 119.351 114.081 119.882 113.798 120.474C113.594 120.897 113.3 121.371 113.016 121.834C112.682 122.376 112.337 122.935 112.121 123.431C111.714 124.368 112.161 126.275 112.456 127.167C112.303 127.472 112.031 127.822 111.77 128.16C111.595 128.392 111.431 128.606 111.295 128.815H111.017V128.803Z"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M81.679 145.259C81.2428 143.013 81.6223 142.048 82.2 140.598C82.302 140.338 82.4096 140.067 82.5228 139.768V137.979C82.6871 137.9 82.8457 137.816 83.0099 137.731L83.0213 137.725V133.707L83.0043 133.702C82.925 133.685 82.8457 133.662 82.7664 133.64C82.6814 133.617 82.5965 133.595 82.5115 133.572C82.2906 133.278 81.7186 130.773 81.8036 130.237C81.8149 130.169 81.8319 130.152 81.8375 130.147L81.8658 130.13L81.8375 130.107C81.3731 129.684 81.3731 129.582 81.3788 129.441C81.3844 129.323 81.3901 129.176 81.1692 128.826C81.0559 128.645 80.8181 128.459 80.5632 128.262C80.2687 128.03 79.9685 127.793 79.8269 127.545C79.6966 127.314 79.2152 125.683 79.3228 125.513C79.4871 125.248 79.691 124.994 79.9062 124.723C80.4216 124.08 80.9483 123.409 81.005 122.545V122.528L80.988 122.523C80.5179 122.286 80.5179 122.286 80.5066 121.693V121.642C80.5009 121.518 80.1327 119.983 79.9968 119.707V117.918C79.9742 117.85 79.9345 117.777 79.9005 117.698C79.725 117.337 79.4588 116.789 79.6627 116.259C79.708 116.14 79.7986 116.005 79.9119 115.847C80.1611 115.48 80.4726 115.023 80.3366 114.571C80.3027 114.453 80.2177 114.329 80.1271 114.182C79.9119 113.843 79.6457 113.426 79.8382 112.918C80.1214 112.173 80.5122 110.678 80.1724 109.814L79.8326 108.906L79.8213 108.9C79.725 108.877 79.6287 108.855 79.5324 108.827C79.4644 108.81 79.4021 108.793 79.3342 108.776C79.3285 108.607 79.2662 107.467 79.1699 107.117C78.7508 105.672 78.966 101.423 79.6683 99.9386L79.6797 99.916L79.657 99.9047C79.2719 99.7242 79.1529 99.363 79.0227 98.9849C78.9377 98.7197 78.8471 98.4488 78.6602 98.24C78.6035 98.1779 78.5526 98.1158 78.4903 98.0538C77.805 97.3032 76.9554 96.3721 76.9894 94.7977C77.4878 94.2221 77.7936 93.3925 78.0655 92.6645C78.2581 92.151 78.4336 91.6657 78.6602 91.3271C78.8924 90.9829 78.8754 90.6104 78.8584 90.2549C78.8414 89.9276 78.8244 89.589 79 89.2673C79.1019 89.0811 79.3455 88.878 79.589 88.6861C79.8269 88.4942 80.0704 88.2967 80.1724 88.1105C80.229 87.5349 80.2857 86.9762 80.3423 86.4119C80.3989 85.825 80.4556 85.2381 80.5122 84.6512H80.8464L81.0163 81.6716C81.1466 81.3105 81.3788 80.9042 81.628 80.4753C82.2453 79.4087 82.942 78.1954 82.5285 76.9088C82.285 76.1639 82.0641 75.4133 81.8489 74.691C81.6223 73.9123 81.4014 73.173 81.1862 72.541V71.3898C81.0843 71.1697 80.8634 71.023 80.6368 70.8706C80.3763 70.6956 80.1044 70.5151 80.0138 70.2273C79.9175 69.9225 80.0761 69.2679 80.2064 68.7375C80.2743 68.4553 80.3366 68.2126 80.348 68.0546C80.365 67.9079 80.314 67.6709 80.263 67.3944C80.1781 66.9486 80.0705 66.3899 80.1781 66.0005C80.4103 65.1653 80.5066 64.4035 80.6028 63.6699C80.6708 63.1451 80.7388 62.6485 80.8464 62.1462C80.8747 62.0277 80.903 61.8979 80.937 61.7625C81.1409 60.8991 81.4241 59.7084 81.0106 58.9127C80.8464 58.6023 80.4556 58.3032 80.0704 58.0154C79.7703 57.7897 79.4927 57.5753 79.3342 57.3665C78.9207 56.8247 79.2662 55.1092 79.4927 53.9805C79.5947 53.4783 79.674 53.0833 79.674 52.8858C79.674 52.7786 79.6797 52.6657 79.6853 52.5585C79.708 51.9546 79.725 51.379 79.3398 51.0743C79.3058 50.9502 79.3851 50.8937 79.5097 50.8147C79.6513 50.7301 79.8326 50.6172 79.674 50.3012C79.1699 49.2911 78.4166 47.3047 79.0113 45.307C79.0566 45.1603 79.1303 44.9515 79.2152 44.7144C79.589 43.6874 80.1497 42.1355 79.6683 41.5599C79.3851 41.0295 78.8584 40.7529 78.3487 40.4877C77.669 40.1322 77.0234 39.7992 76.995 38.8738V38.8625L76.9894 38.8568C76.7685 38.6029 76.7968 37.9991 76.8195 37.5138C76.8195 37.463 76.8251 37.4065 76.8251 37.3614H77.8276L77.8333 37.3445C77.9409 37.1074 77.9862 36.9156 78.0032 36.5601V36.5431L77.9919 36.5375C77.5671 36.2384 77.754 34.4721 77.8956 33.1798C77.9522 32.6775 77.9975 32.2374 78.0032 31.9326V31.9157L77.9862 31.9101C77.9296 31.8875 77.8729 31.8649 77.8163 31.8424C77.4255 31.69 77.148 31.5771 77.0064 31.1821L77.8276 31.058L77.8333 31.0467C77.9239 30.8379 77.9692 30.7307 78.0032 30.3977V30.3808L77.9862 30.3751C77.2499 29.997 76.7402 29.2634 76.2474 28.5524C75.5508 27.5479 74.8315 26.5039 73.4552 26.391L73.4269 26.3798C73.3589 26.3572 73.3306 26.3459 73.308 26.3459C73.2966 26.3459 73.2853 26.3515 73.2683 26.3515C73.2343 26.3628 73.1664 26.3798 72.9455 26.391H72.9228V26.4136C72.9172 26.5829 72.9058 26.6055 72.8775 26.6732C72.8549 26.7296 72.8152 26.8143 72.7642 27.0231C72.0336 26.8594 71.4672 26.645 70.9632 26.4531C70.2495 26.1822 69.6322 25.9509 68.811 25.9509C68.1653 25.9509 67.4573 26.092 66.5794 26.3967C66.3982 26.4588 66.2396 26.5039 66.1037 26.5434C65.4184 26.7409 65.2145 26.803 65.2202 27.8357V27.847L65.2315 27.8526C65.5373 28.1179 66.0074 29.7092 66.0584 29.8785C65.9225 30.0083 65.7979 30.1212 65.6846 30.2171C65.1748 30.6573 64.869 30.9225 64.8917 32.0681V32.0794L64.8973 32.085C65.1409 32.3333 65.2315 32.8412 65.3164 33.3265C65.3787 33.6764 65.4354 34.0093 65.5486 34.2294C64.9086 34.2915 64.7331 34.4721 64.5462 34.6583C64.4329 34.7768 64.314 34.8953 64.0704 35.0025L63.9968 35.0082C63.6909 35.0477 63.3794 35.0872 63.0736 35.1267C62.2127 35.5048 61.3518 36.6955 61.0403 37.5871C60.6722 38.6311 60.8081 39.7146 60.9327 40.7642C61.0743 41.9211 61.2046 43.0102 60.7062 44.0091L60.6892 44.0486H61.0686C61.1762 44.0937 61.3122 44.1219 61.4821 44.1219C61.584 44.1219 61.686 44.1163 61.7879 44.105C61.8899 44.0993 61.9918 44.0881 62.0994 44.0881C62.2863 44.0881 62.4336 44.1163 62.5695 44.1727C62.7734 44.4097 62.7451 44.974 62.7281 45.4255L62.7224 45.5496C62.5016 45.8262 62.4563 46.1873 62.4166 46.5372C62.3826 46.8137 62.3486 47.1015 62.224 47.3498C62.0088 47.7843 61.669 48.2414 61.3405 48.6929C60.978 49.1838 60.6042 49.6917 60.3777 50.1827C60.1511 50.6793 59.749 53.5573 59.8736 53.8056C59.9416 53.9467 60.1228 54.0596 60.321 54.1837C60.5532 54.3361 60.7968 54.4884 60.8817 54.7029C61.0913 55.2277 61.0063 55.7694 60.9214 56.2943C60.8591 56.678 60.8024 57.0448 60.8704 57.3665C60.8081 57.3665 60.7515 57.3552 60.7401 57.3326C60.7401 57.3326 60.7288 57.31 60.7062 57.31C60.6892 57.31 60.6722 57.3157 60.5759 57.3608L60.5249 57.3834L60.5419 57.4116C60.7288 57.6655 60.6835 57.9138 60.6269 58.2242C60.5646 58.5628 60.4909 58.9465 60.7062 59.4657C60.8138 59.7253 61.0347 60.0188 61.2442 60.3066C61.4368 60.5605 61.6124 60.8032 61.7143 61.012C61.8842 61.3675 61.8842 61.7061 61.8842 62.0729C61.8842 62.4284 61.8786 62.7952 62.0485 63.1959C62.1731 63.495 62.2977 63.794 62.4223 64.0988C62.8697 65.1992 63.3398 66.3335 63.8948 67.4395C64.0138 67.6765 64.2517 67.9248 64.5009 68.1901C65.0163 68.7375 65.6053 69.3582 65.4014 70.1257C65.2145 70.8254 64.7387 71.4857 64.2743 72.129C64.0024 72.5015 63.7532 72.8513 63.5607 73.2012C63.3794 73.5342 63.3058 73.8558 63.2322 74.1606C63.1586 74.4935 63.0849 74.8039 62.8924 75.1255C62.7847 75.3061 62.6601 75.4641 62.5412 75.6165C62.275 75.9607 61.9918 76.3106 61.8899 76.937V76.9539L61.9012 76.9652C62.5865 77.4505 63.1982 77.9641 63.2322 78.8613C62.915 79.262 62.343 83.3646 62.5695 83.6411C62.7621 83.9345 63.1076 84.1603 63.4474 84.386C63.8495 84.6512 64.2686 84.9221 64.4102 85.3058C64.6934 86.0564 63.6853 88.8272 63.4021 89.5269C62.9603 90.6217 62.7338 91.6601 62.4959 92.7661C62.292 93.7029 62.0824 94.6735 61.7256 95.7006C61.669 95.8699 61.601 96.0505 61.5387 96.231C61.1196 97.4048 60.5985 98.872 60.5532 100.204C60.5136 101.287 60.9044 102.472 61.3178 103.72L61.3915 103.94C61.4481 104.493 61.4991 105.046 61.5614 105.604C61.6124 105.745 61.6973 105.915 61.7879 106.095C62.0145 106.541 62.292 107.094 62.2297 107.529C62.0881 107.901 61.9465 108.279 61.8106 108.657C61.618 109.182 61.4198 109.701 61.2272 110.226C61.1762 110.497 61.2782 110.898 61.3915 111.321C61.5104 111.772 61.635 112.235 61.5614 112.545C61.4764 112.895 61.2895 113.285 61.1083 113.668C60.9497 114.001 60.8081 114.317 60.7175 114.6C60.5532 115.141 60.8364 115.621 61.0856 116.05C61.2159 116.27 61.3348 116.473 61.3915 116.671C61.4821 116.975 61.4424 117.399 61.4085 117.799C61.3745 118.149 61.3462 118.476 61.3915 118.725C61.1706 120.254 60.9497 121.8 60.7232 123.341C60.8364 123.99 60.8817 124.588 60.9214 125.175C60.9893 126.083 61.0573 127.02 61.3915 128.109V129.644C61.4934 129.904 61.652 130.192 61.8162 130.491C62.0428 130.897 62.275 131.32 62.3996 131.71C62.6715 132.562 62.2863 133.239 61.9805 133.781C61.8842 133.956 61.7879 134.119 61.7313 134.266C61.5444 134.74 61.7993 135.017 62.0428 135.282C62.1844 135.434 62.326 135.592 62.3883 135.79H61.7709C61.6747 135.547 61.5274 135.316 61.3801 135.096C61.2102 134.836 61.0347 134.565 60.9384 134.266C60.7515 133.674 60.9101 133.222 61.063 132.788C61.2272 132.314 61.3971 131.828 61.1083 131.179C60.995 130.925 60.7175 130.632 60.423 130.321C60.0492 129.921 59.6187 129.469 59.4318 128.995C58.7182 127.223 58.5653 125.276 58.401 123.211C58.2594 121.45 58.1178 119.633 57.5911 117.946C57.3646 117.224 57.2116 116.451 57.0474 115.632C56.8378 114.588 56.6226 113.505 56.2488 112.545C56.0846 112.134 55.8693 111.716 55.6654 111.315C55.3766 110.757 55.0764 110.181 54.9122 109.594C54.7139 108.9 55.0821 108.437 55.4389 107.986C55.6598 107.709 55.8637 107.45 55.9146 107.162C55.96 106.908 55.5578 106.27 55.1274 105.599C54.8215 105.113 54.4987 104.611 54.4024 104.323C54.1589 103.567 54.4138 102.896 54.6573 102.252C54.8612 101.716 55.0538 101.208 54.9065 100.723C54.6969 100.063 54.1136 99.6282 53.5472 99.205C52.8732 98.7027 52.1766 98.1836 52.0576 97.275C52.8845 96.8236 53.1904 95.9376 53.4906 95.0911C53.6152 94.7412 53.7398 94.3801 53.8984 94.0584C54.0853 93.6803 54.3458 93.2966 54.6233 92.8903C54.9915 92.3485 55.3766 91.7899 55.5748 91.2255C56.0619 89.8542 55.5238 86.5756 55.2407 85.5598C55.303 84.4199 55.3539 83.2743 55.4106 82.1231V82.0779L55.3936 82.0723C54.7706 81.8014 54.3005 81.4572 53.7964 81.096C53.7171 81.0396 53.6435 80.9832 53.5642 80.9267C53.5869 80.2495 53.8191 79.6288 54.0399 79.025C54.1929 78.6187 54.3345 78.2349 54.4024 77.8568C54.4874 77.3997 54.4138 76.7282 54.3401 76.0115C54.2778 75.4472 54.2155 74.8603 54.2382 74.3863L54.4024 72.8401C53.989 71.48 53.6718 70.1031 53.366 68.7713C52.8562 66.5705 52.3295 64.2906 51.3893 62.1575C51.0835 61.4634 50.5907 60.7298 50.1206 60.0188C49.6506 59.3134 49.1578 58.5797 48.8746 57.9138C48.5688 57.1859 49.0785 55.9669 49.3844 55.239C49.4467 55.0866 49.5033 54.9568 49.5429 54.844C49.7129 53.5968 49.8828 52.361 50.047 51.1251C50.2396 50.5608 50.4548 49.9965 50.6587 49.4491C51.1175 48.2245 51.5876 46.9604 51.8934 45.7189C51.9897 45.3239 51.7971 45.0587 51.6159 44.7991C51.4007 44.5 51.1854 44.1896 51.3893 43.6705C52.1483 41.7518 51.9444 41.2665 51.2647 39.6582C51.1968 39.5002 51.1288 39.3365 51.0552 39.1559V38.1289L51.0495 38.1232C50.7663 37.6379 50.1886 37.288 49.6336 36.9494C48.9143 36.5149 48.1723 36.0635 48.0421 35.3186C48.4668 34.9461 48.9313 33.9868 49.0445 33.5127L49.0502 33.4958L49.0389 33.4845C48.6651 33.1516 48.4895 32.6437 48.3196 32.1527C48.1667 31.7069 48.0024 31.2442 47.6966 30.9169C47.0113 30.1889 45.5953 29.5117 44.1624 29.2352H42.4803C41.2059 28.6878 38.7309 27.8526 36.1539 27.8526C34.8116 27.8526 33.6109 28.0784 32.5801 28.5355V28.3323C32.7783 28.1856 32.9709 28.0276 33.1804 27.8696C33.9564 27.2601 34.755 26.6281 35.7518 26.2895C36.5164 26.2443 37.2866 26.2048 38.0569 26.1653H38.0852C38.3684 26.092 38.6119 25.9114 38.8555 25.7421C39.0537 25.601 39.2406 25.4656 39.4332 25.3922C39.7164 25.2906 39.9769 25.2624 40.2261 25.2342C40.5376 25.2003 40.8321 25.1721 41.1097 25.0028C41.2343 24.9295 41.2682 24.7884 41.3022 24.6586C41.3305 24.5401 41.3589 24.4272 41.4495 24.3595C41.6194 24.2354 41.8686 24.1733 42.1121 24.1112C42.3557 24.0491 42.6049 23.9814 42.7805 23.8573C43.5337 24.004 44.5192 24.083 45.4877 24.083C47.1245 24.083 48.5235 23.8573 49.3164 23.4622C49.7525 23.2478 50.166 22.9205 50.5624 22.6101C51.0155 22.2546 51.4799 21.8878 51.9953 21.6677C52.2899 21.6282 52.5957 21.5887 52.8959 21.5548L52.9922 21.5436C53.383 21.3573 53.5529 21.0187 53.7228 20.6971C53.9437 20.2626 54.1589 19.8562 54.8272 19.7434C55.0594 20.003 55.184 20.319 55.3086 20.6294C55.4389 20.9454 55.5748 21.2727 55.8184 21.5379C57.0587 22.8528 58.7578 23.1011 61.4651 23.1011C61.9465 23.1011 62.4449 23.0954 62.983 23.0898H63.034C63.5154 23.7105 64.0194 24.2918 64.8803 24.6304L64.903 24.6417L64.9143 24.6191C65.2485 23.9475 67.2648 22.7456 68.7487 22.706H68.7713L68.794 22.5932C68.8279 22.4239 68.8279 22.4239 68.9356 22.311L68.9412 22.3054V22.1925H69.4453V21.8031C69.8587 21.679 70.091 21.4928 70.3118 21.3122C70.6064 21.0695 70.8895 20.8438 71.5918 20.7761C71.977 21.0131 73.0134 21.1147 73.8743 21.1147C74.3444 21.1147 74.7805 21.0865 75.126 21.03H75.1373L75.1713 20.9792C75.7207 20.144 76.406 19.1057 78.445 19.1057H78.4789L78.4846 19.1001C78.8697 18.8969 79.3908 18.8461 79.9345 18.7897C80.3536 18.7502 80.7841 18.705 81.1579 18.5865C81.5997 18.4342 82.0018 18.2423 82.4209 18.0335C83.0552 17.7231 83.7122 17.4071 84.5108 17.2886L84.5335 17.283V16.8879C84.76 16.7356 84.8903 16.5945 85.0092 16.4703C85.2811 16.1938 85.4567 16.002 86.4988 16.002C87.0425 17.757 87.6598 17.9263 88.7869 18.2367C89.2514 18.3608 89.8291 18.5245 90.5314 18.8292L92.3664 20.4939C92.6949 20.6801 93.08 20.8099 93.4538 20.9284C94.3147 21.2106 95.1303 21.4758 95.2039 22.3844C94.7338 22.5932 94.5299 23.039 94.5356 23.8178V23.8347L94.5526 23.8403C94.8131 23.9588 94.9094 24.0548 94.9944 24.1281C95.102 24.2354 95.1813 24.3031 95.5664 24.3539C95.8723 24.4724 96.2517 24.5062 96.6595 24.5401C97.5147 24.6191 98.3926 24.6981 98.5569 25.5954C98.234 25.6856 98.0868 25.8267 97.9452 25.9622C97.8376 26.0637 97.7413 26.1597 97.5657 26.233C97.3222 26.3346 97.0277 26.3741 96.7445 26.4193C96.45 26.4644 96.1441 26.5096 95.8949 26.6168C95.4758 26.7974 95.102 27.3222 94.7678 27.7849C94.6319 27.9768 94.5016 28.1574 94.3827 28.2928C94.1731 28.3662 93.9692 28.4508 93.771 28.5298L93.703 28.558V30.5049C93.5048 30.9394 92.9951 31.357 92.5023 31.7521C92.1115 32.0681 91.7491 32.3672 91.5338 32.6719C91.3299 32.9541 91.3186 33.2701 91.3073 33.5805C91.2903 33.9134 91.279 34.2238 91.0354 34.4664C90.9618 34.5398 90.8599 34.6075 90.7466 34.6865C90.52 34.8389 90.2652 35.0195 90.1915 35.2508C90.0953 35.5443 90.7296 37.6379 90.8655 37.8467C91.3073 38.5352 90.9901 39.2011 90.6843 39.8444C90.4577 40.3184 90.2482 40.7642 90.3614 41.1818C90.5597 41.8985 91.2393 42.6321 91.6924 43.1118C91.834 43.2642 91.9586 43.3996 92.0436 43.5012C92.44 44.0091 92.0549 45.0192 91.6811 45.9955C91.3866 46.7686 91.1091 47.4965 91.1997 47.9875C91.3526 48.8058 91.6245 49.4378 91.885 50.0416C91.9983 50.3068 92.1059 50.5551 92.2022 50.8204C92.4004 51.3395 92.4514 51.8926 92.508 52.4287C92.5533 52.8688 92.593 53.2864 92.7119 53.6532C93.3009 55.4534 92.4684 56.1419 91.6641 56.8078C91.0977 57.2818 90.5597 57.722 90.5314 58.529V58.5459L90.5483 58.5515C90.6956 58.6192 90.8032 58.766 90.8768 58.9804C91.2733 60.1485 90.4351 63.2128 89.863 64.2963C89.6761 64.6518 89.9423 65.2895 90.2255 65.9667C90.3388 66.2319 90.4521 66.5084 90.5314 66.7623V68.049L90.537 68.0546C91.143 69.0873 93.0744 74.6515 92.7119 75.2215L92.3777 77.4167C92.1568 77.8173 91.7887 78.1446 91.3979 78.4889C91.1091 78.7485 90.8089 79.0137 90.537 79.3354C90.2652 79.657 90.0669 80.1085 89.8744 80.5374C89.7101 80.9042 89.5572 81.2484 89.3646 81.5193C89.0814 81.9199 89.0984 82.377 89.1154 82.868C89.1267 83.2291 89.1437 83.6072 89.0305 83.9684C88.8436 84.5722 88.583 84.8826 88.3338 85.1873C88.1583 85.4018 87.994 85.5993 87.8524 85.8927L87.7675 86.6038L87.6825 87.3148C87.5862 87.4559 87.4616 87.6421 87.3313 87.8396C86.9745 88.3701 86.5271 89.0247 86.3402 89.4931C86.1816 89.8994 86.1986 90.2775 86.2099 90.6443C86.2269 91.0506 86.2383 91.4343 86.006 91.8011C85.7625 92.1792 85.9607 92.5404 86.1193 92.8282C86.2666 93.0878 86.3402 93.2402 86.1759 93.3417L86.125 93.3756L86.1816 93.3869C86.3459 93.4264 86.5101 93.4659 86.6744 93.511C87.1614 94.2898 86.3855 95.52 86.1646 95.7852L86.1533 95.7965L86.3175 96.1859C85.8701 96.88 86.023 97.0436 86.2722 97.3145C86.3912 97.4443 86.5441 97.608 86.6574 97.8732C86.9406 98.5222 86.6347 99.1655 86.3912 99.6847C86.2779 99.9217 86.1816 100.125 86.1533 100.3V100.305L86.159 100.311C86.159 100.311 86.5611 101.073 86.4875 101.316C86.1023 102.726 86.3459 103.708 86.6574 104.673C86.9406 105.554 86.4931 105.92 86.0627 106.282C85.8135 106.49 85.5756 106.688 85.4793 106.976C85.4113 107.184 85.5133 107.602 85.6266 108.042C85.7115 108.398 85.8021 108.765 85.8135 109.041C85.8361 109.662 85.7851 110.429 85.7285 111.242C85.6662 112.167 85.6039 113.121 85.6436 113.928C85.6605 114.221 85.4623 114.854 85.2754 115.463C85.0602 116.151 84.879 116.744 84.9752 116.891C85.0036 116.93 85.1055 116.981 85.2811 117.066C85.4283 117.139 85.6152 117.224 85.6492 117.274L85.8191 118.934C85.9777 119.193 86.2213 119.498 86.5044 119.848C87.0538 120.531 87.7448 121.377 87.994 122.156C88.2545 122.946 87.7052 123.742 87.2634 124.379C87.0765 124.65 86.9122 124.887 86.8273 125.096L86.9236 126.896L86.9915 128.188C86.7706 128.905 86.4761 129.543 86.159 129.972C86.1193 130.028 86.1533 130.288 86.2269 130.835C86.3232 131.529 86.4591 132.483 86.3232 132.804C86.2836 132.9 86.176 132.923 86.0683 132.946C85.9721 132.962 85.8701 132.985 85.8248 133.058C85.5643 133.465 85.5699 134.119 85.5756 134.746C85.5813 135.186 85.5813 135.603 85.4906 135.891L85.4057 137.708L85.3264 139.486C85.3094 139.497 85.2528 139.52 85.2018 139.537C85.0036 139.616 84.8506 139.684 84.8223 139.74C84.6524 140.067 84.6071 140.389 84.5618 140.699C84.5051 141.094 84.4542 141.467 84.154 141.794C84.0294 141.93 83.9105 142.054 83.7859 142.183C82.9986 143.007 82.3133 143.718 82.302 145.259H81.679ZM111.017 128.803C111.108 128.183 110.955 127.41 110.808 126.665C110.649 125.852 110.496 125.085 110.677 124.599L110.683 124.588L110.677 124.577C110.604 124.447 110.513 124.323 110.434 124.199C110.218 123.883 110.015 123.578 110.009 123.307C109.981 122.229 110.179 120.869 110.513 119.842V118.55C110.536 118.476 110.564 118.386 110.592 118.285C110.796 117.63 111.108 116.637 110.841 115.841C110.626 115.186 110.377 114.667 110.139 114.171C109.641 113.132 109.171 112.15 109.171 110.215C111.187 109.493 111.249 108.076 111.181 105.836C112.003 104.803 111.493 103.81 111 102.85C110.632 102.139 110.286 101.468 110.507 100.819C111.062 99.9273 111.617 99.0244 112.178 98.1215L112.184 98.1159V95.029C112.558 93.8327 112.575 93.2514 112.524 92.2413C112.569 92.2582 112.609 92.2752 112.654 92.2921C112.711 92.3147 112.761 92.3372 112.818 92.3542L112.886 92.3767L112.852 92.3147C112.172 91.1014 112.297 88.5112 112.688 87.1907V85.3848C112.722 85.3115 112.795 85.2212 112.88 85.1083C113.124 84.8092 113.452 84.3973 113.181 83.833C113.169 83.7991 113.101 83.737 112.982 83.6355C112.863 83.5282 112.705 83.3872 112.682 83.3194L112.597 81.4403L112.518 79.7247C112.32 79.1604 112.031 78.63 111.753 78.1221C111 76.7339 110.286 75.4246 111.176 73.4382L111.215 73.3479L110.96 73.5342C110.926 73.5962 110.909 73.5962 110.909 73.5962C110.887 73.5962 110.847 73.4664 110.836 73.3028C111.159 72.8908 111.952 69.1099 112.008 68.1506V68.1336L111.991 68.128C111.17 67.6709 110.989 67.1122 110.757 66.4012C110.649 66.0739 110.524 65.7071 110.326 65.312C110.201 65.0637 109.924 64.7985 109.658 64.5502C109.386 64.2906 109.103 64.0254 108.984 63.7715V62.372C108.938 62.2309 108.848 62.0616 108.752 61.8641C108.474 61.3223 108.1 60.5774 108.315 60.0695C108.355 59.968 108.48 59.8551 108.616 59.7253C108.769 59.5842 108.927 59.4375 108.984 59.2908L108.82 57.0956C108.859 56.9827 108.921 56.8416 109.001 56.678C109.256 56.1362 109.601 55.397 109.324 54.6464C109.142 54.1611 108.746 53.7718 108.355 53.3937C107.891 52.9422 107.415 52.4795 107.313 51.8474C108.372 51.2436 110.558 48.6308 110.994 47.5981L111.006 47.5755L110.977 47.5643C110.02 47.22 109.573 46.7291 109.488 45.9277C109.692 45.6681 110.513 43.4617 110.496 43.219C110.473 42.9933 110.371 42.6773 110.264 42.35C110.105 41.8646 109.947 41.368 109.986 41.0407L109.992 41.0069C110.049 40.5893 110.151 39.8162 110.32 39.2462C110.445 38.8399 110.337 38.3151 110.247 37.8523C110.185 37.542 110.122 37.2429 110.156 37.0567C110.207 36.7576 110.371 36.5488 110.553 36.3287C110.734 36.103 110.921 35.8716 110.994 35.5161L111 35.4935L110.819 35.4258C109.964 35.1041 109.607 34.9687 109.658 33.84V33.8118H109.154V33.3039H109.131C107.93 33.129 106.203 32.4913 105.285 31.8931L105.268 31.8819L105.251 31.8931C104.866 32.2317 103.569 32.655 102.595 32.6606C102.267 32.4575 100.817 32.0342 100.754 32.0173C100.624 31.9101 100.5 31.769 100.369 31.6223C100.148 31.3683 99.9218 31.1031 99.582 30.9902C99.2592 30.883 98.874 30.8266 98.3983 30.8266C98.0245 30.8266 97.6393 30.8604 97.2655 30.8887C96.8974 30.9169 96.5519 30.9451 96.2234 30.9451C95.623 30.9451 95.2209 30.8492 94.9321 30.6291C95.7307 30.3074 96.2914 29.6246 96.8351 28.97C97.4524 28.2194 98.0358 27.514 98.908 27.435C99.0666 27.3673 99.2592 27.3335 99.514 27.3335C99.6953 27.3335 99.8822 27.3504 100.086 27.3617C100.296 27.3786 100.511 27.3955 100.72 27.3955C101.004 27.3955 101.23 27.3673 101.428 27.3052C101.949 27.1416 102.295 26.8594 102.635 26.5886C103.133 26.1879 103.603 25.8042 104.594 25.7647C104.702 25.8437 104.815 25.9339 104.923 26.0186L104.946 26.0355L104.963 26.013C105.132 25.7929 105.444 25.6913 105.744 25.5954C106.01 25.5107 106.288 25.4204 106.469 25.2455C107.007 24.7207 107.862 22.8246 107.981 22.0345C110.003 21.9386 110.796 21.2332 111.64 20.4883C112.031 20.144 112.427 19.7885 112.965 19.4838C113.345 21.4194 114.461 21.4533 115.752 21.4928C116.386 21.5097 117.043 21.5323 117.666 21.7806C118.012 21.916 118.397 22.4747 118.765 23.0221C119.031 23.4114 119.28 23.7783 119.501 23.9645C119.858 24.2579 120.153 24.3087 120.391 24.3482C120.787 24.4103 120.985 24.4441 121.002 25.6066C120.577 25.9791 120.419 26.7635 120.334 27.4125L120.328 27.435L120.351 27.4407C120.572 27.5028 120.81 27.593 121.042 27.672C121.45 27.8188 121.84 27.9599 122.112 27.9599C122.135 27.9599 122.158 27.9598 122.18 27.9542C122.254 28.2646 122.367 28.5693 122.475 28.8628C122.662 29.3763 122.837 29.856 122.843 30.3695C122.849 30.6799 122.616 31.0015 122.367 31.3401C122.146 31.6448 121.914 31.9552 121.84 32.2882L121.835 32.3051L121.852 32.3164C122.248 32.576 123.562 33.6256 123.579 34.0714C123.585 34.1278 123.562 34.1673 123.523 34.2012C122.843 35.121 121.654 36.9099 121.336 37.8128L121.387 38.4449L121.501 39.8613C120.81 40.2055 119.711 41.0859 119.496 41.7969L119.49 41.8082L119.496 41.8195C119.598 41.9436 119.541 42.1017 119.326 42.2992L119.309 42.3161L119.32 42.333C119.654 42.824 119.581 42.903 119.252 43.2359C119.133 43.3544 118.992 43.5068 118.822 43.7156L118.816 43.7269V43.7382C118.929 44.342 118.708 44.6693 118.448 45.0474C118.346 45.1941 118.244 45.3465 118.148 45.5214C118.012 45.781 118.182 46.1422 118.267 46.3397C118.289 46.3848 118.306 46.4187 118.312 46.4413C118.442 46.9209 118.153 47.457 117.921 47.8859C117.882 47.9593 117.848 48.027 117.808 48.0891C117.638 48.422 117.372 48.755 117.089 49.1048C116.686 49.6071 116.273 50.1206 116.131 50.6624C116.012 51.1082 116.154 51.633 116.313 52.2425C116.46 52.7955 116.624 53.4162 116.63 54.1047C116.528 54.0652 116.432 54.0257 116.33 53.9918L116.296 53.9805V54.0144V54.1442L116.63 56.836C116.551 57.0392 116.432 57.2141 116.301 57.3947C116.075 57.722 115.843 58.0549 115.786 58.6418V58.6587L115.911 58.7152C116.8 59.1271 118.023 59.6914 118.136 60.6903C117.644 61.1417 117.292 62.6203 117.462 63.1394C116.681 64.522 115.548 67.716 116.8 69.9677C117.009 70.3401 117.355 70.7916 117.751 71.3164C118.941 72.8739 120.566 75.007 119.813 76.8862C119.796 76.9314 119.7 77.0386 119.603 77.1458C119.467 77.2925 119.331 77.4449 119.309 77.5295C119.241 77.8061 119.394 78.0487 119.558 78.3083C119.751 78.613 119.949 78.9234 119.813 79.3354C119.399 80.5881 118.81 81.7845 118.244 82.9413C117.593 84.2731 116.913 85.6557 116.46 87.1737C116.29 87.755 116.59 87.992 116.856 88.2064C116.964 88.2911 117.072 88.3757 117.134 88.4773C117.032 88.861 116.936 89.2504 116.834 89.6342L116.8 89.7583L116.805 89.7696C116.919 90.0122 117.151 90.2605 117.394 90.5258C117.7 90.8531 118.012 91.1973 118.148 91.5641C118.935 93.6972 117.593 95.6046 116.709 96.8687C116.562 97.0775 116.42 97.275 116.307 97.4556C116.052 97.8506 116.058 98.24 116.063 98.6181C116.069 98.8946 116.069 99.1542 115.973 99.3856L115.962 99.4194L115.995 99.4251C116.069 99.4307 116.131 99.4364 116.188 99.4364C116.211 99.4364 116.233 99.4364 116.245 99.4364H116.267V99.4476C116.267 99.4815 116.273 99.5492 116.313 99.6677C116.364 99.7749 116.358 99.7806 116.324 99.8032C116.284 99.8314 116.216 99.8822 116.148 100.035L116.143 100.046L116.148 100.057C116.233 100.209 116.409 100.367 116.579 100.52C116.743 100.667 116.913 100.819 116.987 100.954C117.236 101.434 117.258 102.45 117.27 103.189C117.275 103.584 117.281 103.894 117.321 104.036C117.457 104.515 116.941 105.266 116.602 105.762C116.477 105.943 116.375 106.095 116.318 106.203C116.267 106.304 116.109 106.947 116.148 107.122V107.134L116.165 107.139C116.279 107.179 116.437 107.579 116.279 107.658C116.233 107.681 116.131 107.754 116.131 107.754L116.16 107.777C116.301 107.873 116.318 108.595 116.318 108.595V109.052L116.324 109.058C116.545 109.351 116.494 109.904 116.443 110.486C116.398 111.016 116.352 111.564 116.483 112.004L116.545 112.207C116.72 112.76 116.981 113.595 116.981 113.928C116.981 114.679 116.415 115.395 115.922 116.022C115.684 116.321 115.463 116.603 115.31 116.868C114.925 117.557 114.698 118.177 114.461 118.832C114.274 119.351 114.081 119.882 113.798 120.474C113.594 120.897 113.3 121.371 113.016 121.834C112.682 122.376 112.337 122.935 112.121 123.431C111.714 124.368 112.161 126.275 112.456 127.167C112.303 127.472 112.031 127.822 111.77 128.16C111.595 128.392 111.431 128.606 111.295 128.815H111.017V128.803Z",
                // fill='#95D600'
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M81.679 145.259C81.2428 143.013 81.6223 142.048 82.2 140.598C82.302 140.338 82.4096 140.067 82.5228 139.768V137.979C82.6871 137.9 82.8457 137.816 83.0099 137.731L83.0213 137.725V133.707L83.0043 133.702C82.925 133.685 82.8457 133.662 82.7664 133.64C82.6814 133.617 82.5965 133.595 82.5115 133.572C82.2906 133.278 81.7186 130.773 81.8036 130.237C81.8149 130.169 81.8319 130.152 81.8375 130.147L81.8658 130.13L81.8375 130.107C81.3731 129.684 81.3731 129.582 81.3788 129.441C81.3844 129.323 81.3901 129.176 81.1692 128.826C81.0559 128.645 80.8181 128.459 80.5632 128.262C80.2687 128.03 79.9685 127.793 79.8269 127.545C79.6966 127.314 79.2152 125.683 79.3228 125.513C79.4871 125.248 79.691 124.994 79.9062 124.723C80.4216 124.08 80.9483 123.409 81.005 122.545V122.528L80.988 122.523C80.5179 122.286 80.5179 122.286 80.5066 121.693V121.642C80.5009 121.518 80.1327 119.983 79.9968 119.707V117.918C79.9742 117.85 79.9345 117.777 79.9005 117.698C79.725 117.337 79.4588 116.789 79.6627 116.259C79.708 116.14 79.7986 116.005 79.9119 115.847C80.1611 115.48 80.4726 115.023 80.3366 114.571C80.3027 114.453 80.2177 114.329 80.1271 114.182C79.9119 113.843 79.6457 113.426 79.8382 112.918C80.1214 112.173 80.5122 110.678 80.1724 109.814L79.8326 108.906L79.8213 108.9C79.725 108.877 79.6287 108.855 79.5324 108.827C79.4644 108.81 79.4021 108.793 79.3342 108.776C79.3285 108.607 79.2662 107.467 79.1699 107.117C78.7508 105.672 78.966 101.423 79.6683 99.9386L79.6797 99.916L79.657 99.9047C79.2719 99.7242 79.1529 99.363 79.0227 98.9849C78.9377 98.7197 78.8471 98.4488 78.6602 98.24C78.6035 98.1779 78.5526 98.1158 78.4903 98.0538C77.805 97.3032 76.9554 96.3721 76.9894 94.7977C77.4878 94.2221 77.7936 93.3925 78.0655 92.6645C78.2581 92.151 78.4336 91.6657 78.6602 91.3271C78.8924 90.9829 78.8754 90.6104 78.8584 90.2549C78.8414 89.9276 78.8244 89.589 79 89.2673C79.1019 89.0811 79.3455 88.878 79.589 88.6861C79.8269 88.4942 80.0704 88.2967 80.1724 88.1105C80.229 87.5349 80.2857 86.9762 80.3423 86.4119C80.3989 85.825 80.4556 85.2381 80.5122 84.6512H80.8464L81.0163 81.6716C81.1466 81.3105 81.3788 80.9042 81.628 80.4753C82.2453 79.4087 82.942 78.1954 82.5285 76.9088C82.285 76.1639 82.0641 75.4133 81.8489 74.691C81.6223 73.9123 81.4014 73.173 81.1862 72.541V71.3898C81.0843 71.1697 80.8634 71.023 80.6368 70.8706C80.3763 70.6956 80.1044 70.5151 80.0138 70.2273C79.9175 69.9225 80.0761 69.2679 80.2064 68.7375C80.2743 68.4553 80.3366 68.2126 80.348 68.0546C80.365 67.9079 80.314 67.6709 80.263 67.3944C80.1781 66.9486 80.0705 66.3899 80.1781 66.0005C80.4103 65.1653 80.5066 64.4035 80.6028 63.6699C80.6708 63.1451 80.7388 62.6485 80.8464 62.1462C80.8747 62.0277 80.903 61.8979 80.937 61.7625C81.1409 60.8991 81.4241 59.7084 81.0106 58.9127C80.8464 58.6023 80.4556 58.3032 80.0704 58.0154C79.7703 57.7897 79.4927 57.5753 79.3342 57.3665C78.9207 56.8247 79.2662 55.1092 79.4927 53.9805C79.5947 53.4783 79.674 53.0833 79.674 52.8858C79.674 52.7786 79.6797 52.6657 79.6853 52.5585C79.708 51.9546 79.725 51.379 79.3398 51.0743C79.3058 50.9502 79.3851 50.8937 79.5097 50.8147C79.6513 50.7301 79.8326 50.6172 79.674 50.3012C79.1699 49.2911 78.4166 47.3047 79.0113 45.307C79.0566 45.1603 79.1303 44.9515 79.2152 44.7144C79.589 43.6874 80.1497 42.1355 79.6683 41.5599C79.3851 41.0295 78.8584 40.7529 78.3487 40.4877C77.669 40.1322 77.0234 39.7992 76.995 38.8738V38.8625L76.9894 38.8568C76.7685 38.6029 76.7968 37.9991 76.8195 37.5138C76.8195 37.463 76.8251 37.4065 76.8251 37.3614H77.8276L77.8333 37.3445C77.9409 37.1074 77.9862 36.9156 78.0032 36.5601V36.5431L77.9919 36.5375C77.5671 36.2384 77.754 34.4721 77.8956 33.1798C77.9522 32.6775 77.9975 32.2374 78.0032 31.9326V31.9157L77.9862 31.9101C77.9296 31.8875 77.8729 31.8649 77.8163 31.8424C77.4255 31.69 77.148 31.5771 77.0064 31.1821L77.8276 31.058L77.8333 31.0467C77.9239 30.8379 77.9692 30.7307 78.0032 30.3977V30.3808L77.9862 30.3751C77.2499 29.997 76.7402 29.2634 76.2474 28.5524C75.5508 27.5479 74.8315 26.5039 73.4552 26.391L73.4269 26.3798C73.3589 26.3572 73.3306 26.3459 73.308 26.3459C73.2966 26.3459 73.2853 26.3515 73.2683 26.3515C73.2343 26.3628 73.1664 26.3798 72.9455 26.391H72.9228V26.4136C72.9172 26.5829 72.9058 26.6055 72.8775 26.6732C72.8549 26.7296 72.8152 26.8143 72.7642 27.0231C72.0336 26.8594 71.4672 26.645 70.9632 26.4531C70.2495 26.1822 69.6322 25.9509 68.811 25.9509C68.1653 25.9509 67.4573 26.092 66.5794 26.3967C66.3982 26.4588 66.2396 26.5039 66.1037 26.5434C65.4184 26.7409 65.2145 26.803 65.2202 27.8357V27.847L65.2315 27.8526C65.5373 28.1179 66.0074 29.7092 66.0584 29.8785C65.9225 30.0083 65.7979 30.1212 65.6846 30.2171C65.1748 30.6573 64.869 30.9225 64.8917 32.0681V32.0794L64.8973 32.085C65.1409 32.3333 65.2315 32.8412 65.3164 33.3265C65.3787 33.6764 65.4354 34.0093 65.5486 34.2294C64.9086 34.2915 64.7331 34.4721 64.5462 34.6583C64.4329 34.7768 64.314 34.8953 64.0704 35.0025L63.9968 35.0082C63.6909 35.0477 63.3794 35.0872 63.0736 35.1267C62.2127 35.5048 61.3518 36.6955 61.0403 37.5871C60.6722 38.6311 60.8081 39.7146 60.9327 40.7642C61.0743 41.9211 61.2046 43.0102 60.7062 44.0091L60.6892 44.0486H61.0686C61.1762 44.0937 61.3122 44.1219 61.4821 44.1219C61.584 44.1219 61.686 44.1163 61.7879 44.105C61.8899 44.0993 61.9918 44.0881 62.0994 44.0881C62.2863 44.0881 62.4336 44.1163 62.5695 44.1727C62.7734 44.4097 62.7451 44.974 62.7281 45.4255L62.7224 45.5496C62.5016 45.8262 62.4563 46.1873 62.4166 46.5372C62.3826 46.8137 62.3486 47.1015 62.224 47.3498C62.0088 47.7843 61.669 48.2414 61.3405 48.6929C60.978 49.1838 60.6042 49.6917 60.3777 50.1827C60.1511 50.6793 59.749 53.5573 59.8736 53.8056C59.9416 53.9467 60.1228 54.0596 60.321 54.1837C60.5532 54.3361 60.7968 54.4884 60.8817 54.7029C61.0913 55.2277 61.0063 55.7694 60.9214 56.2943C60.8591 56.678 60.8024 57.0448 60.8704 57.3665C60.8081 57.3665 60.7515 57.3552 60.7401 57.3326C60.7401 57.3326 60.7288 57.31 60.7062 57.31C60.6892 57.31 60.6722 57.3157 60.5759 57.3608L60.5249 57.3834L60.5419 57.4116C60.7288 57.6655 60.6835 57.9138 60.6269 58.2242C60.5646 58.5628 60.4909 58.9465 60.7062 59.4657C60.8138 59.7253 61.0347 60.0188 61.2442 60.3066C61.4368 60.5605 61.6124 60.8032 61.7143 61.012C61.8842 61.3675 61.8842 61.7061 61.8842 62.0729C61.8842 62.4284 61.8786 62.7952 62.0485 63.1959C62.1731 63.495 62.2977 63.794 62.4223 64.0988C62.8697 65.1992 63.3398 66.3335 63.8948 67.4395C64.0138 67.6765 64.2517 67.9248 64.5009 68.1901C65.0163 68.7375 65.6053 69.3582 65.4014 70.1257C65.2145 70.8254 64.7387 71.4857 64.2743 72.129C64.0024 72.5015 63.7532 72.8513 63.5607 73.2012C63.3794 73.5342 63.3058 73.8558 63.2322 74.1606C63.1586 74.4935 63.0849 74.8039 62.8924 75.1255C62.7847 75.3061 62.6601 75.4641 62.5412 75.6165C62.275 75.9607 61.9918 76.3106 61.8899 76.937V76.9539L61.9012 76.9652C62.5865 77.4505 63.1982 77.9641 63.2322 78.8613C62.915 79.262 62.343 83.3646 62.5695 83.6411C62.7621 83.9345 63.1076 84.1603 63.4474 84.386C63.8495 84.6512 64.2686 84.9221 64.4102 85.3058C64.6934 86.0564 63.6853 88.8272 63.4021 89.5269C62.9603 90.6217 62.7338 91.6601 62.4959 92.7661C62.292 93.7029 62.0824 94.6735 61.7256 95.7006C61.669 95.8699 61.601 96.0505 61.5387 96.231C61.1196 97.4048 60.5985 98.872 60.5532 100.204C60.5136 101.287 60.9044 102.472 61.3178 103.72L61.3915 103.94C61.4481 104.493 61.4991 105.046 61.5614 105.604C61.6124 105.745 61.6973 105.915 61.7879 106.095C62.0145 106.541 62.292 107.094 62.2297 107.529C62.0881 107.901 61.9465 108.279 61.8106 108.657C61.618 109.182 61.4198 109.701 61.2272 110.226C61.1762 110.497 61.2782 110.898 61.3915 111.321C61.5104 111.772 61.635 112.235 61.5614 112.545C61.4764 112.895 61.2895 113.285 61.1083 113.668C60.9497 114.001 60.8081 114.317 60.7175 114.6C60.5532 115.141 60.8364 115.621 61.0856 116.05C61.2159 116.27 61.3348 116.473 61.3915 116.671C61.4821 116.975 61.4424 117.399 61.4085 117.799C61.3745 118.149 61.3462 118.476 61.3915 118.725C61.1706 120.254 60.9497 121.8 60.7232 123.341C60.8364 123.99 60.8817 124.588 60.9214 125.175C60.9893 126.083 61.0573 127.02 61.3915 128.109V129.644C61.4934 129.904 61.652 130.192 61.8162 130.491C62.0428 130.897 62.275 131.32 62.3996 131.71C62.6715 132.562 62.2863 133.239 61.9805 133.781C61.8842 133.956 61.7879 134.119 61.7313 134.266C61.5444 134.74 61.7993 135.017 62.0428 135.282C62.1844 135.434 62.326 135.592 62.3883 135.79H61.7709C61.6747 135.547 61.5274 135.316 61.3801 135.096C61.2102 134.836 61.0347 134.565 60.9384 134.266C60.7515 133.674 60.9101 133.222 61.063 132.788C61.2272 132.314 61.3971 131.828 61.1083 131.179C60.995 130.925 60.7175 130.632 60.423 130.321C60.0492 129.921 59.6187 129.469 59.4318 128.995C58.7182 127.223 58.5653 125.276 58.401 123.211C58.2594 121.45 58.1178 119.633 57.5911 117.946C57.3646 117.224 57.2116 116.451 57.0474 115.632C56.8378 114.588 56.6226 113.505 56.2488 112.545C56.0846 112.134 55.8693 111.716 55.6654 111.315C55.3766 110.757 55.0764 110.181 54.9122 109.594C54.7139 108.9 55.0821 108.437 55.4389 107.986C55.6598 107.709 55.8637 107.45 55.9146 107.162C55.96 106.908 55.5578 106.27 55.1274 105.599C54.8215 105.113 54.4987 104.611 54.4024 104.323C54.1589 103.567 54.4138 102.896 54.6573 102.252C54.8612 101.716 55.0538 101.208 54.9065 100.723C54.6969 100.063 54.1136 99.6282 53.5472 99.205C52.8732 98.7027 52.1766 98.1836 52.0576 97.275C52.8845 96.8236 53.1904 95.9376 53.4906 95.0911C53.6152 94.7412 53.7398 94.3801 53.8984 94.0584C54.0853 93.6803 54.3458 93.2966 54.6233 92.8903C54.9915 92.3485 55.3766 91.7899 55.5748 91.2255C56.0619 89.8542 55.5238 86.5756 55.2407 85.5598C55.303 84.4199 55.3539 83.2743 55.4106 82.1231V82.0779L55.3936 82.0723C54.7706 81.8014 54.3005 81.4572 53.7964 81.096C53.7171 81.0396 53.6435 80.9832 53.5642 80.9267C53.5869 80.2495 53.8191 79.6288 54.0399 79.025C54.1929 78.6187 54.3345 78.2349 54.4024 77.8568C54.4874 77.3997 54.4138 76.7282 54.3401 76.0115C54.2778 75.4472 54.2155 74.8603 54.2382 74.3863L54.4024 72.8401C53.989 71.48 53.6718 70.1031 53.366 68.7713C52.8562 66.5705 52.3295 64.2906 51.3893 62.1575C51.0835 61.4634 50.5907 60.7298 50.1206 60.0188C49.6506 59.3134 49.1578 58.5797 48.8746 57.9138C48.5688 57.1859 49.0785 55.9669 49.3844 55.239C49.4467 55.0866 49.5033 54.9568 49.5429 54.844C49.7129 53.5968 49.8828 52.361 50.047 51.1251C50.2396 50.5608 50.4548 49.9965 50.6587 49.4491C51.1175 48.2245 51.5876 46.9604 51.8934 45.7189C51.9897 45.3239 51.7971 45.0587 51.6159 44.7991C51.4007 44.5 51.1854 44.1896 51.3893 43.6705C52.1483 41.7518 51.9444 41.2665 51.2647 39.6582C51.1968 39.5002 51.1288 39.3365 51.0552 39.1559V38.1289L51.0495 38.1232C50.7663 37.6379 50.1886 37.288 49.6336 36.9494C48.9143 36.5149 48.1723 36.0635 48.0421 35.3186C48.4668 34.9461 48.9313 33.9868 49.0445 33.5127L49.0502 33.4958L49.0389 33.4845C48.6651 33.1516 48.4895 32.6437 48.3196 32.1527C48.1667 31.7069 48.0024 31.2442 47.6966 30.9169C47.0113 30.1889 45.5953 29.5117 44.1624 29.2352H42.4803C41.2059 28.6878 38.7309 27.8526 36.1539 27.8526C34.8116 27.8526 33.6109 28.0784 32.5801 28.5355V28.3323C32.7783 28.1856 32.9709 28.0276 33.1804 27.8696C33.9564 27.2601 34.755 26.6281 35.7518 26.2895C36.5164 26.2443 37.2866 26.2048 38.0569 26.1653H38.0852C38.3684 26.092 38.6119 25.9114 38.8555 25.7421C39.0537 25.601 39.2406 25.4656 39.4332 25.3922C39.7164 25.2906 39.9769 25.2624 40.2261 25.2342C40.5376 25.2003 40.8321 25.1721 41.1097 25.0028C41.2343 24.9295 41.2682 24.7884 41.3022 24.6586C41.3305 24.5401 41.3589 24.4272 41.4495 24.3595C41.6194 24.2354 41.8686 24.1733 42.1121 24.1112C42.3557 24.0491 42.6049 23.9814 42.7805 23.8573C43.5337 24.004 44.5192 24.083 45.4877 24.083C47.1245 24.083 48.5235 23.8573 49.3164 23.4622C49.7525 23.2478 50.166 22.9205 50.5624 22.6101C51.0155 22.2546 51.4799 21.8878 51.9953 21.6677C52.2899 21.6282 52.5957 21.5887 52.8959 21.5548L52.9922 21.5436C53.383 21.3573 53.5529 21.0187 53.7228 20.6971C53.9437 20.2626 54.1589 19.8562 54.8272 19.7434C55.0594 20.003 55.184 20.319 55.3086 20.6294C55.4389 20.9454 55.5748 21.2727 55.8184 21.5379C57.0587 22.8528 58.7578 23.1011 61.4651 23.1011C61.9465 23.1011 62.4449 23.0954 62.983 23.0898H63.034C63.5154 23.7105 64.0194 24.2918 64.8803 24.6304L64.903 24.6417L64.9143 24.6191C65.2485 23.9475 67.2648 22.7456 68.7487 22.706H68.7713L68.794 22.5932C68.8279 22.4239 68.8279 22.4239 68.9356 22.311L68.9412 22.3054V22.1925H69.4453V21.8031C69.8587 21.679 70.091 21.4928 70.3118 21.3122C70.6064 21.0695 70.8895 20.8438 71.5918 20.7761C71.977 21.0131 73.0134 21.1147 73.8743 21.1147C74.3444 21.1147 74.7805 21.0865 75.126 21.03H75.1373L75.1713 20.9792C75.7207 20.144 76.406 19.1057 78.445 19.1057H78.4789L78.4846 19.1001C78.8697 18.8969 79.3908 18.8461 79.9345 18.7897C80.3536 18.7502 80.7841 18.705 81.1579 18.5865C81.5997 18.4342 82.0018 18.2423 82.4209 18.0335C83.0552 17.7231 83.7122 17.4071 84.5108 17.2886L84.5335 17.283V16.8879C84.76 16.7356 84.8903 16.5945 85.0092 16.4703C85.2811 16.1938 85.4567 16.002 86.4988 16.002C87.0425 17.757 87.6598 17.9263 88.7869 18.2367C89.2514 18.3608 89.8291 18.5245 90.5314 18.8292L92.3664 20.4939C92.6949 20.6801 93.08 20.8099 93.4538 20.9284C94.3147 21.2106 95.1303 21.4758 95.2039 22.3844C94.7338 22.5932 94.5299 23.039 94.5356 23.8178V23.8347L94.5526 23.8403C94.8131 23.9588 94.9094 24.0548 94.9944 24.1281C95.102 24.2354 95.1813 24.3031 95.5664 24.3539C95.8723 24.4724 96.2517 24.5062 96.6595 24.5401C97.5147 24.6191 98.3926 24.6981 98.5569 25.5954C98.234 25.6856 98.0868 25.8267 97.9452 25.9622C97.8376 26.0637 97.7413 26.1597 97.5657 26.233C97.3222 26.3346 97.0277 26.3741 96.7445 26.4193C96.45 26.4644 96.1441 26.5096 95.8949 26.6168C95.4758 26.7974 95.102 27.3222 94.7678 27.7849C94.6319 27.9768 94.5016 28.1574 94.3827 28.2928C94.1731 28.3662 93.9692 28.4508 93.771 28.5298L93.703 28.558V30.5049C93.5048 30.9394 92.9951 31.357 92.5023 31.7521C92.1115 32.0681 91.7491 32.3672 91.5338 32.6719C91.3299 32.9541 91.3186 33.2701 91.3073 33.5805C91.2903 33.9134 91.279 34.2238 91.0354 34.4664C90.9618 34.5398 90.8599 34.6075 90.7466 34.6865C90.52 34.8389 90.2652 35.0195 90.1915 35.2508C90.0953 35.5443 90.7296 37.6379 90.8655 37.8467C91.3073 38.5352 90.9901 39.2011 90.6843 39.8444C90.4577 40.3184 90.2482 40.7642 90.3614 41.1818C90.5597 41.8985 91.2393 42.6321 91.6924 43.1118C91.834 43.2642 91.9586 43.3996 92.0436 43.5012C92.44 44.0091 92.0549 45.0192 91.6811 45.9955C91.3866 46.7686 91.1091 47.4965 91.1997 47.9875C91.3526 48.8058 91.6245 49.4378 91.885 50.0416C91.9983 50.3068 92.1059 50.5551 92.2022 50.8204C92.4004 51.3395 92.4514 51.8926 92.508 52.4287C92.5533 52.8688 92.593 53.2864 92.7119 53.6532C93.3009 55.4534 92.4684 56.1419 91.6641 56.8078C91.0977 57.2818 90.5597 57.722 90.5314 58.529V58.5459L90.5483 58.5515C90.6956 58.6192 90.8032 58.766 90.8768 58.9804C91.2733 60.1485 90.4351 63.2128 89.863 64.2963C89.6761 64.6518 89.9423 65.2895 90.2255 65.9667C90.3388 66.2319 90.4521 66.5084 90.5314 66.7623V68.049L90.537 68.0546C91.143 69.0873 93.0744 74.6515 92.7119 75.2215L92.3777 77.4167C92.1568 77.8173 91.7887 78.1446 91.3979 78.4889C91.1091 78.7485 90.8089 79.0137 90.537 79.3354C90.2652 79.657 90.0669 80.1085 89.8744 80.5374C89.7101 80.9042 89.5572 81.2484 89.3646 81.5193C89.0814 81.9199 89.0984 82.377 89.1154 82.868C89.1267 83.2291 89.1437 83.6072 89.0305 83.9684C88.8436 84.5722 88.583 84.8826 88.3338 85.1873C88.1583 85.4018 87.994 85.5993 87.8524 85.8927L87.7675 86.6038L87.6825 87.3148C87.5862 87.4559 87.4616 87.6421 87.3313 87.8396C86.9745 88.3701 86.5271 89.0247 86.3402 89.4931C86.1816 89.8994 86.1986 90.2775 86.2099 90.6443C86.2269 91.0506 86.2383 91.4343 86.006 91.8011C85.7625 92.1792 85.9607 92.5404 86.1193 92.8282C86.2666 93.0878 86.3402 93.2402 86.1759 93.3417L86.125 93.3756L86.1816 93.3869C86.3459 93.4264 86.5101 93.4659 86.6744 93.511C87.1614 94.2898 86.3855 95.52 86.1646 95.7852L86.1533 95.7965L86.3175 96.1859C85.8701 96.88 86.023 97.0436 86.2722 97.3145C86.3912 97.4443 86.5441 97.608 86.6574 97.8732C86.9406 98.5222 86.6347 99.1655 86.3912 99.6847C86.2779 99.9217 86.1816 100.125 86.1533 100.3V100.305L86.159 100.311C86.159 100.311 86.5611 101.073 86.4875 101.316C86.1023 102.726 86.3459 103.708 86.6574 104.673C86.9406 105.554 86.4931 105.92 86.0627 106.282C85.8135 106.49 85.5756 106.688 85.4793 106.976C85.4113 107.184 85.5133 107.602 85.6266 108.042C85.7115 108.398 85.8021 108.765 85.8135 109.041C85.8361 109.662 85.7851 110.429 85.7285 111.242C85.6662 112.167 85.6039 113.121 85.6436 113.928C85.6605 114.221 85.4623 114.854 85.2754 115.463C85.0602 116.151 84.879 116.744 84.9752 116.891C85.0036 116.93 85.1055 116.981 85.2811 117.066C85.4283 117.139 85.6152 117.224 85.6492 117.274L85.8191 118.934C85.9777 119.193 86.2213 119.498 86.5044 119.848C87.0538 120.531 87.7448 121.377 87.994 122.156C88.2545 122.946 87.7052 123.742 87.2634 124.379C87.0765 124.65 86.9122 124.887 86.8273 125.096L86.9236 126.896L86.9915 128.188C86.7706 128.905 86.4761 129.543 86.159 129.972C86.1193 130.028 86.1533 130.288 86.2269 130.835C86.3232 131.529 86.4591 132.483 86.3232 132.804C86.2836 132.9 86.176 132.923 86.0683 132.946C85.9721 132.962 85.8701 132.985 85.8248 133.058C85.5643 133.465 85.5699 134.119 85.5756 134.746C85.5813 135.186 85.5813 135.603 85.4906 135.891L85.4057 137.708L85.3264 139.486C85.3094 139.497 85.2528 139.52 85.2018 139.537C85.0036 139.616 84.8506 139.684 84.8223 139.74C84.6524 140.067 84.6071 140.389 84.5618 140.699C84.5051 141.094 84.4542 141.467 84.154 141.794C84.0294 141.93 83.9105 142.054 83.7859 142.183C82.9986 143.007 82.3133 143.718 82.302 145.259H81.679ZM111.017 128.803C111.108 128.183 110.955 127.41 110.808 126.665C110.649 125.852 110.496 125.085 110.677 124.599L110.683 124.588L110.677 124.577C110.604 124.447 110.513 124.323 110.434 124.199C110.218 123.883 110.015 123.578 110.009 123.307C109.981 122.229 110.179 120.869 110.513 119.842V118.55C110.536 118.476 110.564 118.386 110.592 118.285C110.796 117.63 111.108 116.637 110.841 115.841C110.626 115.186 110.377 114.667 110.139 114.171C109.641 113.132 109.171 112.15 109.171 110.215C111.187 109.493 111.249 108.076 111.181 105.836C112.003 104.803 111.493 103.81 111 102.85C110.632 102.139 110.286 101.468 110.507 100.819C111.062 99.9273 111.617 99.0244 112.178 98.1215L112.184 98.1159V95.029C112.558 93.8327 112.575 93.2514 112.524 92.2413C112.569 92.2582 112.609 92.2752 112.654 92.2921C112.711 92.3147 112.761 92.3372 112.818 92.3542L112.886 92.3767L112.852 92.3147C112.172 91.1014 112.297 88.5112 112.688 87.1907V85.3848C112.722 85.3115 112.795 85.2212 112.88 85.1083C113.124 84.8092 113.452 84.3973 113.181 83.833C113.169 83.7991 113.101 83.737 112.982 83.6355C112.863 83.5282 112.705 83.3872 112.682 83.3194L112.597 81.4403L112.518 79.7247C112.32 79.1604 112.031 78.63 111.753 78.1221C111 76.7339 110.286 75.4246 111.176 73.4382L111.215 73.3479L110.96 73.5342C110.926 73.5962 110.909 73.5962 110.909 73.5962C110.887 73.5962 110.847 73.4664 110.836 73.3028C111.159 72.8908 111.952 69.1099 112.008 68.1506V68.1336L111.991 68.128C111.17 67.6709 110.989 67.1122 110.757 66.4012C110.649 66.0739 110.524 65.7071 110.326 65.312C110.201 65.0637 109.924 64.7985 109.658 64.5502C109.386 64.2906 109.103 64.0254 108.984 63.7715V62.372C108.938 62.2309 108.848 62.0616 108.752 61.8641C108.474 61.3223 108.1 60.5774 108.315 60.0695C108.355 59.968 108.48 59.8551 108.616 59.7253C108.769 59.5842 108.927 59.4375 108.984 59.2908L108.82 57.0956C108.859 56.9827 108.921 56.8416 109.001 56.678C109.256 56.1362 109.601 55.397 109.324 54.6464C109.142 54.1611 108.746 53.7718 108.355 53.3937C107.891 52.9422 107.415 52.4795 107.313 51.8474C108.372 51.2436 110.558 48.6308 110.994 47.5981L111.006 47.5755L110.977 47.5643C110.02 47.22 109.573 46.7291 109.488 45.9277C109.692 45.6681 110.513 43.4617 110.496 43.219C110.473 42.9933 110.371 42.6773 110.264 42.35C110.105 41.8646 109.947 41.368 109.986 41.0407L109.992 41.0069C110.049 40.5893 110.151 39.8162 110.32 39.2462C110.445 38.8399 110.337 38.3151 110.247 37.8523C110.185 37.542 110.122 37.2429 110.156 37.0567C110.207 36.7576 110.371 36.5488 110.553 36.3287C110.734 36.103 110.921 35.8716 110.994 35.5161L111 35.4935L110.819 35.4258C109.964 35.1041 109.607 34.9687 109.658 33.84V33.8118H109.154V33.3039H109.131C107.93 33.129 106.203 32.4913 105.285 31.8931L105.268 31.8819L105.251 31.8931C104.866 32.2317 103.569 32.655 102.595 32.6606C102.267 32.4575 100.817 32.0342 100.754 32.0173C100.624 31.9101 100.5 31.769 100.369 31.6223C100.148 31.3683 99.9218 31.1031 99.582 30.9902C99.2592 30.883 98.874 30.8266 98.3983 30.8266C98.0245 30.8266 97.6393 30.8604 97.2655 30.8887C96.8974 30.9169 96.5519 30.9451 96.2234 30.9451C95.623 30.9451 95.2209 30.8492 94.9321 30.6291C95.7307 30.3074 96.2914 29.6246 96.8351 28.97C97.4524 28.2194 98.0358 27.514 98.908 27.435C99.0666 27.3673 99.2592 27.3335 99.514 27.3335C99.6953 27.3335 99.8822 27.3504 100.086 27.3617C100.296 27.3786 100.511 27.3955 100.72 27.3955C101.004 27.3955 101.23 27.3673 101.428 27.3052C101.949 27.1416 102.295 26.8594 102.635 26.5886C103.133 26.1879 103.603 25.8042 104.594 25.7647C104.702 25.8437 104.815 25.9339 104.923 26.0186L104.946 26.0355L104.963 26.013C105.132 25.7929 105.444 25.6913 105.744 25.5954C106.01 25.5107 106.288 25.4204 106.469 25.2455C107.007 24.7207 107.862 22.8246 107.981 22.0345C110.003 21.9386 110.796 21.2332 111.64 20.4883C112.031 20.144 112.427 19.7885 112.965 19.4838C113.345 21.4194 114.461 21.4533 115.752 21.4928C116.386 21.5097 117.043 21.5323 117.666 21.7806C118.012 21.916 118.397 22.4747 118.765 23.0221C119.031 23.4114 119.28 23.7783 119.501 23.9645C119.858 24.2579 120.153 24.3087 120.391 24.3482C120.787 24.4103 120.985 24.4441 121.002 25.6066C120.577 25.9791 120.419 26.7635 120.334 27.4125L120.328 27.435L120.351 27.4407C120.572 27.5028 120.81 27.593 121.042 27.672C121.45 27.8188 121.84 27.9599 122.112 27.9599C122.135 27.9599 122.158 27.9598 122.18 27.9542C122.254 28.2646 122.367 28.5693 122.475 28.8628C122.662 29.3763 122.837 29.856 122.843 30.3695C122.849 30.6799 122.616 31.0015 122.367 31.3401C122.146 31.6448 121.914 31.9552 121.84 32.2882L121.835 32.3051L121.852 32.3164C122.248 32.576 123.562 33.6256 123.579 34.0714C123.585 34.1278 123.562 34.1673 123.523 34.2012C122.843 35.121 121.654 36.9099 121.336 37.8128L121.387 38.4449L121.501 39.8613C120.81 40.2055 119.711 41.0859 119.496 41.7969L119.49 41.8082L119.496 41.8195C119.598 41.9436 119.541 42.1017 119.326 42.2992L119.309 42.3161L119.32 42.333C119.654 42.824 119.581 42.903 119.252 43.2359C119.133 43.3544 118.992 43.5068 118.822 43.7156L118.816 43.7269V43.7382C118.929 44.342 118.708 44.6693 118.448 45.0474C118.346 45.1941 118.244 45.3465 118.148 45.5214C118.012 45.781 118.182 46.1422 118.267 46.3397C118.289 46.3848 118.306 46.4187 118.312 46.4413C118.442 46.9209 118.153 47.457 117.921 47.8859C117.882 47.9593 117.848 48.027 117.808 48.0891C117.638 48.422 117.372 48.755 117.089 49.1048C116.686 49.6071 116.273 50.1206 116.131 50.6624C116.012 51.1082 116.154 51.633 116.313 52.2425C116.46 52.7955 116.624 53.4162 116.63 54.1047C116.528 54.0652 116.432 54.0257 116.33 53.9918L116.296 53.9805V54.0144V54.1442L116.63 56.836C116.551 57.0392 116.432 57.2141 116.301 57.3947C116.075 57.722 115.843 58.0549 115.786 58.6418V58.6587L115.911 58.7152C116.8 59.1271 118.023 59.6914 118.136 60.6903C117.644 61.1417 117.292 62.6203 117.462 63.1394C116.681 64.522 115.548 67.716 116.8 69.9677C117.009 70.3401 117.355 70.7916 117.751 71.3164C118.941 72.8739 120.566 75.007 119.813 76.8862C119.796 76.9314 119.7 77.0386 119.603 77.1458C119.467 77.2925 119.331 77.4449 119.309 77.5295C119.241 77.8061 119.394 78.0487 119.558 78.3083C119.751 78.613 119.949 78.9234 119.813 79.3354C119.399 80.5881 118.81 81.7845 118.244 82.9413C117.593 84.2731 116.913 85.6557 116.46 87.1737C116.29 87.755 116.59 87.992 116.856 88.2064C116.964 88.2911 117.072 88.3757 117.134 88.4773C117.032 88.861 116.936 89.2504 116.834 89.6342L116.8 89.7583L116.805 89.7696C116.919 90.0122 117.151 90.2605 117.394 90.5258C117.7 90.8531 118.012 91.1973 118.148 91.5641C118.935 93.6972 117.593 95.6046 116.709 96.8687C116.562 97.0775 116.42 97.275 116.307 97.4556C116.052 97.8506 116.058 98.24 116.063 98.6181C116.069 98.8946 116.069 99.1542 115.973 99.3856L115.962 99.4194L115.995 99.4251C116.069 99.4307 116.131 99.4364 116.188 99.4364C116.211 99.4364 116.233 99.4364 116.245 99.4364H116.267V99.4476C116.267 99.4815 116.273 99.5492 116.313 99.6677C116.364 99.7749 116.358 99.7806 116.324 99.8032C116.284 99.8314 116.216 99.8822 116.148 100.035L116.143 100.046L116.148 100.057C116.233 100.209 116.409 100.367 116.579 100.52C116.743 100.667 116.913 100.819 116.987 100.954C117.236 101.434 117.258 102.45 117.27 103.189C117.275 103.584 117.281 103.894 117.321 104.036C117.457 104.515 116.941 105.266 116.602 105.762C116.477 105.943 116.375 106.095 116.318 106.203C116.267 106.304 116.109 106.947 116.148 107.122V107.134L116.165 107.139C116.279 107.179 116.437 107.579 116.279 107.658C116.233 107.681 116.131 107.754 116.131 107.754L116.16 107.777C116.301 107.873 116.318 108.595 116.318 108.595V109.052L116.324 109.058C116.545 109.351 116.494 109.904 116.443 110.486C116.398 111.016 116.352 111.564 116.483 112.004L116.545 112.207C116.72 112.76 116.981 113.595 116.981 113.928C116.981 114.679 116.415 115.395 115.922 116.022C115.684 116.321 115.463 116.603 115.31 116.868C114.925 117.557 114.698 118.177 114.461 118.832C114.274 119.351 114.081 119.882 113.798 120.474C113.594 120.897 113.3 121.371 113.016 121.834C112.682 122.376 112.337 122.935 112.121 123.431C111.714 124.368 112.161 126.275 112.456 127.167C112.303 127.472 112.031 127.822 111.77 128.16C111.595 128.392 111.431 128.606 111.295 128.815H111.017V128.803Z",
                // stroke='#000000'
                stroke: "currentColor",
                strokeWidth: "6",
                mask: "url(#path-1-outside-1_563_482)"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/about/clients/Parrot.tsx


function ParrotLogo(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "167",
        height: "160",
        viewBox: "0 0 167 160",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M109.864 13.208C98.7356 11.9629 91.1436 17.2544 88.3356 28.1484C86.9836 33.1286 86.5676 38.3163 82.7196 42.3626C70.1356 55.0205 61.3996 70.1685 56.7196 87.184C51.9356 104.511 45.7996 121.423 39.2476 138.127C38.4156 140.306 36.9596 142.692 39.2476 144.871C41.7436 147.153 44.1356 145.597 46.3196 144.352C62.3356 135.741 74.8156 123.705 82.1996 106.897C82.9276 105.341 83.4476 103.577 85.1116 102.851C86.5676 102.228 88.2316 100.257 89.5836 102.436C90.8316 104.407 89.5836 105.445 87.6076 106.171C85.6316 106.897 84.3836 108.35 85.0076 110.632C85.5276 112.811 87.1916 113.745 89.2716 113.849C91.6636 113.952 94.1596 113.849 96.5516 113.849C98.6316 113.849 100.712 113.952 102.792 113.849C105.184 113.745 107.368 112.915 107.576 110.113C107.784 107.001 105.496 105.963 102.792 105.86C100.4 105.652 98.4236 105.341 98.1116 102.228C97.7996 99.3231 96.5516 96.7293 99.9836 94.4467C116 83.7602 120.472 67.9897 118.392 49.7291C118.184 47.4465 117.664 45.2677 118.392 43.0889C119.328 40.2876 121.304 39.7688 122.76 42.2589C125.568 47.3428 126.816 44.1264 127.96 41.4288C132.536 31.0535 121.928 14.5568 109.864 13.208ZM113.608 33.6474C110.384 38.835 109.448 44.3339 110.28 50.4554C112.88 71.4135 106.12 83.7602 86.5676 92.7867C80.4316 95.6918 76.3756 99.2194 73.6716 105.652C69.1996 116.65 61.3996 125.261 50.9996 131.279C55.0556 121.734 56.3036 111.047 65.3516 103.681C80.0156 91.8529 89.3756 76.8087 91.6636 63.0095C82.6156 73.5923 74.6076 84.9014 64.1036 94.1355C62.8556 93.3055 63.3756 92.3717 63.5836 91.6454C68.3676 76.7049 74.8156 62.4908 85.7356 50.9741C91.3516 45.0602 94.7836 38.5238 96.0316 30.5348C96.7596 26.1771 98.9436 22.7533 103.52 21.5082C107.576 20.3669 111.632 20.6782 114.544 24.1021C117.248 27.3184 115.48 30.6385 113.608 33.6474Z",
            // fill='#09E181'
            // stroke='#09E181'
            fill: "currentColor",
            stroke: "currentColor"
        })
    });
}

;// CONCATENATED MODULE: ./components/about/clients/Princess.tsx


function PrincessLogo(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "167",
        height: "160",
        viewBox: "20 15 167 160",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: `overflow-visible ${props.className}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M196.715 97.9696C191.61 99.8895 186.416 100.486 181.088 98.9971C177.412 97.9712 174.005 96.3168 170.646 94.5451C166.431 92.3223 162.286 89.9643 157.847 88.1877C149.89 85.0009 142.013 85.0042 134.176 88.5948C131.082 90.0132 128.269 91.9005 125.416 93.7243C121.627 96.1474 117.837 98.577 113.608 100.199C110.655 101.331 107.623 101.87 104.445 101.484C101.2 101.09 98.1968 99.9612 95.267 98.5933C90.5426 96.39 86.1179 93.6511 81.6638 90.9625C80.0076 89.9627 79.2959 90.1972 78.5501 91.977C78.34 92.4802 78.2178 93.0029 78.195 93.5533C78.1559 94.5092 78.2683 95.4505 78.4475 96.3835C79.0793 99.6892 80.0565 102.899 81.1101 106.091C81.6524 107.735 81.2127 108.639 79.5874 109.292C78.9865 109.533 78.3416 109.663 77.739 109.901C76.6121 110.346 76.288 111.101 76.687 112.241C76.7668 112.471 76.8743 112.69 76.972 112.914C77.4084 113.902 77.1723 114.7 76.2522 115.281C75.6464 115.664 74.9673 115.848 74.2654 115.947C73.811 116.012 73.4104 116.138 73.3517 116.709C73.583 117.323 74.2084 117.288 74.6872 117.478C75.7815 117.916 76.0112 118.818 75.2148 119.706C74.9998 119.947 74.7474 120.163 74.482 120.347C73.5032 121.03 73.1808 121.217 73.8631 122.608C74.3419 123.583 74.2523 124.628 73.8354 125.61C73.2638 126.96 72.1189 127.306 70.7673 127.244C66.7008 127.058 62.6343 126.885 58.5695 126.695C56.4507 126.596 54.6382 127.325 53.0422 128.669C52.1872 129.388 51.4446 130.214 50.7802 131.113C49.0751 133.419 47.8374 135.974 46.7528 138.61C46.2545 139.82 45.7626 141.031 45.375 142.292C45.5395 142.37 45.6324 142.429 45.7349 142.458C48.8911 143.373 52.0977 144.042 55.3613 144.42C62.9177 145.295 70.422 144.822 77.8726 143.398C86.9094 141.67 95.5455 138.696 103.91 134.897C107.704 133.173 111.416 131.261 115.36 129.875C118.62 128.729 121.934 127.843 125.406 127.682C129.046 127.512 132.425 128.473 135.686 130.01C140.76 132.402 145.679 135.084 150.553 137.863C155.699 140.795 161.05 143.272 166.939 144.357C173.668 145.596 179.99 144.581 185.832 140.926C190.421 138.051 193.989 134.143 197.072 129.758C198.458 127.788 199.795 125.783 200.849 123.606C200.814 123.576 200.783 123.544 200.756 123.508C200.468 123.656 200.178 123.801 199.889 123.951C196.321 125.825 192.543 127.006 188.516 127.322C184.646 127.625 180.974 126.791 177.417 125.32C173.527 123.71 169.9 121.588 166.213 119.584C162.353 117.486 158.448 115.498 154.22 114.223C149.789 112.888 145.302 112.479 140.718 113.293C135.971 114.137 131.678 116.069 127.639 118.628C125.053 120.268 122.537 122.02 119.85 123.498C116.228 125.491 112.419 126.877 108.258 127.213C104.105 127.548 100.101 126.859 96.1627 125.622C90.8814 123.959 86.0234 121.401 81.3104 118.543C81.1459 118.444 80.9831 118.344 80.9815 118.082C81.1183 117.586 81.5384 117.704 81.9 117.734C82.9259 117.82 83.9503 117.983 84.9763 118.007C89.0069 118.103 92.8128 117.112 96.4852 115.524C100.229 113.905 103.691 111.777 107.152 109.645C110.774 107.413 114.381 105.162 118.311 103.482C124.49 100.841 130.561 100.775 136.673 103.817C142.197 106.566 147.735 109.303 153.468 111.611C158.891 113.795 164.42 115.563 170.304 115.995C177.912 116.551 184.664 114.456 190.525 109.556C194.854 105.937 198.108 101.456 200.881 96.5936C200.992 96.3982 201.178 96.2223 201.147 95.8787C199.678 96.6832 198.23 97.3932 196.717 97.9615L196.715 97.9696ZM201.805 67.243L201.818 67.2626C201.58 67.2479 201.42 67.4173 201.233 67.5166C194.859 70.8972 188.206 72.0224 181.106 70.2458C176.406 69.0701 171.931 67.3293 167.516 65.3866C163.503 63.6214 159.534 61.7455 155.319 60.4818C150.585 59.0619 145.809 58.6369 140.951 59.7735C136.397 60.8401 132.351 62.9831 128.504 65.5739C125.358 67.6941 122.309 69.9625 118.993 71.8238C115.901 73.5613 112.627 74.6914 109.041 74.7386C105.182 74.7907 101.532 73.8023 97.972 72.4263C92.6679 70.3777 87.7529 67.5736 82.9178 64.6197C75.306 59.9754 67.3131 56.3685 58.3105 55.4582C53.9298 55.0153 49.5555 54.7563 45.1617 55.3393C38.2925 56.2512 31.9982 58.6483 26.3016 62.576C12.0649 72.3905 4.99211 89.2348 7.49681 106.558C8.87944 116.118 13.0192 124.277 20.0105 130.968C21.3541 132.253 22.6211 131.982 23.3458 130.243C28.0034 119.046 32.6578 107.848 37.3154 96.6506C38.7371 93.2342 40.7011 90.1662 43.3133 87.538C48.225 82.5974 54.0714 80.6188 60.9651 82.0665C63.8899 82.6804 66.6584 83.8024 69.4742 84.7632C74.2637 86.3981 78.9898 88.2252 83.947 89.3292C88.7349 90.3958 93.4659 90.3682 98.1284 88.699C101.866 87.3605 105.208 85.3119 108.362 82.9426C110.919 81.0211 113.393 78.9872 116.208 77.4337C119.656 75.5333 123.296 74.3332 127.265 74.2615C130.978 74.1947 134.435 75.1848 137.759 76.7676C142.159 78.8618 146.473 81.135 150.937 83.0973C156.687 85.623 162.555 87.7318 168.874 88.3164C176.37 89.0101 183.182 87.2514 189.227 82.7114C194.605 78.6745 198.477 73.3822 201.761 67.6045C201.822 67.4954 201.92 67.3782 201.805 67.2414V67.243Z",
            // fill='#0154A0'
            fill: "currentColor"
        })
    });
}

;// CONCATENATED MODULE: ./lib/data/experience.ts




const experience = [
    {
        role: "Lead Web Developer",
        company: "Sin Pin",
        dates: {
            start: 2022,
            end: "Current"
        }
    },
    {
        role: "Mercury Development",
        company: "Business Analyst",
        dates: {
            start: 2018,
            end: 2022
        }
    },
    {
        role: "Web Application Developer",
        company: "National High Magnetic Laboratory",
        dates: {
            start: 2016,
            end: 2016
        }
    },
    {
        role: "Lead Web Developer",
        company: "Student Opportunity Center",
        dates: {
            start: 2014,
            end: 2016
        }
    }
];
const education = [
    {
        degree: {
            major: "Digital Arts & Sciences"
        },
        institution: "University of Florida",
        dates: {
            start: 2021,
            end: "Current"
        }
    },
    {
        degree: {
            major: "Sociology",
            minor: "Psychology"
        },
        institution: "Florida State University",
        dates: {
            start: 2011,
            end: 2015
        }
    }
];
const clients = [
    {
        name: "Monster Energy",
        component: MonsterEnergyLogo,
        height: 60,
        width: 60
    },
    {
        name: "Princess Cruises",
        component: PrincessLogo,
        height: 60,
        width: 72
    },
    {
        name: "Gale Healthcare",
        component: GaleLogo,
        height: 60,
        width: 60
    },
    {
        name: "Parrot Social Media",
        component: ParrotLogo,
        height: 60,
        width: 60
    }
];


;// CONCATENATED MODULE: ./components/about/FormalExperience.tsx




function FormalExperience() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "formal-experience",
        className: "relative h-full w-full flex flex-col bg-custom-gray-blue/[0%]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "absolute w-full flex flex-col md:-ml-5 mb-2 font-gravesend font-bold leading-none mt-8 tracking-[-0.02em] text-stroke text-stroke-[1.5px] text-stroke-custom-gray-blue opacity-[14%] text-transparent text-[100px] sm:text-[120px] md:text-[180px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "",
                        children: "Formal"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "flex -mt-4 md:-mt-12 -mr-48 sm:-mr-28 md:-mr-64 lg:-mr-8 self-end justify-self-end",
                        children: "Experience"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex w-[78%] self-center mt-36 pb-24",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full flex flex-col lg:flex-row justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: " w-full flex flex-col max-w-[480px] 2xl:max-w-[520px] mr-32",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "font-itc font-bold text-4xl md:text-4xl tracking-wide mb-12 md:mb-[60px]",
                                    children: "Relevant Work"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex flex-col mb-8 md:mb-0",
                                    children: experience.map((entry, i)=>/*#__PURE__*/ jsx_runtime_.jsx(ExperienceItemGroup, {
                                            title: entry.role,
                                            organization: entry.company,
                                            startDate: entry.dates.start,
                                            endDate: entry.dates?.end
                                        }, `experience-${i}`))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full flex flex-col max-w-[500px] 2xl:max-w-[600px]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "font-itc font-bold text-4xl tracking-wide mb-12 md:mb-[60px]",
                                    children: "Education"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex flex-col max-w-[480px] 2xl:max-w-[520px] mb-8 md:mb-0",
                                    children: education.map((entry, i)=>/*#__PURE__*/ jsx_runtime_.jsx(ExperienceItemGroup, {
                                            title: entry.degree.major,
                                            subtitle: entry.degree?.minor ? `Minor: ${entry.degree.minor}` : "",
                                            startDate: entry.dates.start,
                                            endDate: entry.dates?.end,
                                            organization: entry.institution
                                        }, `education-${i}`))
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col mt-4 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                            className: "font-stolzl font-semibold text-4xl md:text-3xl tracking-[0.02em] mb-2 md:mb-4 2xl:mb-8 whitespace-nowrap",
                                            children: [
                                                "Client Projects",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "hidden 2xl:inline-flex ml-4 text-sm tracking-normal font-light",
                                                    children: "a few clients whose projects I’ve worked on"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-sm md:text-base tracking-normal font-light mb-12 2xl:hidden text-slate-700",
                                            children: "A few clients whose projects I’ve worked on"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex w-full justify-between",
                                            children: clients.map((client, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "first-of-type:-ml-2 mr-4 [&:nth-child(2)]:mr-7 max-w-[71px] md:first-of-type:ml-0 [&:nth-child(2)]:md:-mr-2 [&:nth-child(2)]:lg:mr-0 md:mr-0 md:max-w-[105px] flex flex-col md:items-center md:text-center w-full",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flex flex-col w-[60px] h-auto",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(client.component, {
                                                                className: `text-custom-black w-full h-auto flex`
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "pb-2 pt-3 text-xs font-gothic hidden md:flex",
                                                            children: client.name
                                                        })
                                                    ]
                                                }, `client-${i}`))
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/main/Contact.tsx
var Contact = __webpack_require__(2996);
;// CONCATENATED MODULE: ./components/about/About.tsx








function AboutPage() {
    const themeCtx = (0,external_react_.useContext)(ThemeCtx/* default */.ZP);
    (0,external_react_.useEffect)(()=>{
        themeCtx.setIsFooterFixed(true);
        return ()=>{
            themeCtx.setIsFooterFixed(false);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "about",
        className: "relative h-full w-full flex flex-1 flex-wrap flex-col pb-12",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full h-full min-h-screen flex-col lg:flex-row flex lg:self-center pb-12 md:pb-20 px-8 lg:px-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "-z-10 -top-10 absolute font-gravesend font-bold tracking-[0.015em] text-stroke text-stroke-[1.5px] text-stroke-custom-gray-blue opacity-[15%] leading-none text-transparent lg:mt-0 text-[100px] xs:text-[150px] md:text-[200px] lg:text-[300px]",
                        children: "About"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-36 lg:mt-auto w-full lg:w-[40%] lg:h-screen flex flex-col justify-center items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/images/about/mary.png",
                            alt: "Photo of Mary Kelly",
                            width: 371,
                            height: 706,
                            className: "w-[250px] lg:w-[371px] h-auto",
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full mt-auto lg:w-auto flex-1 h-full lg:h-screen flex flex-col justify-items-center justify-center items-center lg:pr-20 text-custom-black",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-10/12 h-full flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "text-sm lg:text-lg font-light font-stolzl leading-loose bg-white bg-opacity-0 py-2 mt-10 lg:mt-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-medium tracking-wide",
                                            children: "Greetings! I hope you are doing well today. "
                                        }),
                                        ' My name is Mary Kelly and this is my porfolio site. Also, just to clarify any potential confusion around my two "first names", my',
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "underline underline-offset-3",
                                            children: "first name is Mary"
                                        }),
                                        " and my",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "underline underline-offset- mr-4",
                                            children: "last name is Kelly."
                                        }),
                                        " :)"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-stolzl lg:text-lg font-light leading-loose mt-8 lg:mt-12",
                                    children: "Since I was young, I have always enjoyed a challenge. Through combining my interests in human behavior, coding, and technology in general, I now focus on solving problems that improve human-computer interaction. For the greater part of a decade, I have contributed to the realization of various digital products through my skills in software development, design, research, strategy, and business analysis."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-stolzl lg:text-lg font-light leading-loose mt-8 lg:mt-12",
                                    children: "Outside of my professional and educational pursuits, I enjoy shooting target archery and practicing music - my main instrument being the trombone, which I started playing at the age of 10. I am also highly susceptible and can often be found in locations that serve good coffee and/or tea in a nice environment."
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "saga",
                className: "relative h-full w-full hidden lg:inline-flex flex-col",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ExperienceJourney, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FormalExperience, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SkillsAndTools, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact/* default */.Z, {})
        ]
    });
}


/***/ })

};
;