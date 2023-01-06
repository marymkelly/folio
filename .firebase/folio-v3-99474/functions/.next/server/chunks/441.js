"use strict";
exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 2996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function Contact() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "contact",
        className: "mt-32 pt-2 md:pt-24 lg:pt-28 pb-12 md:pb-28 lg:pb-36 min-w-[360px] px-8 xs:px-12 md:px-28 lg:pl-[10%] xl:pl-[18%] w-full h-full flex flex-col items-center relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute -top-20 left-0 flex flex-col md:-ml-5 mb-2 font-gravesend font-bold leading-none mt-6 md:mt-16 tracking-[-0.02em] text-stroke text-stroke-custom-navy text-stroke-[1.5px] opacity-[10%] text-transparent text-[120px] sm:text-[150px] md:text-[210px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "absolute whitespace-pre-line lg:whitespace-normal 2xl:whitespace-pre",
                    children: "Contact"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-12 w-full xl:mx-0 max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] flex flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "font-itc font-normal lg:font-medium text-4xl md:text-5xl 2xl:text-[56px] text-custom-black dark:text-white mb-[52px] lg:mb-24",
                        children: "Drop me a line!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col space-y-5 lg:space-y-0 ml-0.5 lg:flex-row lg:items-center lg:justify-between max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] w-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-stolzl text-base sm:text-xl mr-5 text-custom-gray-blue",
                                        children: "Email "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "mailto:mary@marykelly.tech",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-custom-black dark:text-slate-300/80 dark:tracking-wide font-stolzl text-base sm:text-xl hover:text-custom-orange hover:underline hover:underline-offset-[8px]",
                                        children: "mary@marykelly.tech"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-stolzl text-base sm:text-xl mr-5 text-custom-gray-blue",
                                        children: "Github"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "https://github.com/marymkelly",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "text-custom-black dark:text-slate-300/80 dark:tracking-wide font-stolzl text-base sm:text-xl hover:text-custom-orange hover:underline hover:underline-offset-[8px]",
                                        children: "github.com/marymkelly"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center w-fit xl:w-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "https://www.linkedin.com/in/mary-kelly-5040b6ab/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "font-stolzl text-base sm:text-xl mr-5 text-custom-gray-blue underline underline-offset-[8px] hover:text-custom-orange",
                                    children: "LinkedIn"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ CanvasController)
});

// UNUSED EXPORTS: InputHandler

;// CONCATENATED MODULE: ./lib/classes/sprite.ts
class SpriteController {
    constructor(animator, spriteSrc, animations){
        this.animator = animator;
        this.height = 400;
        this.width = 400;
        this.x = 0;
        this.y = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.speed = 0;
        this.spriteWidth = 600;
        this.spriteHeight = 600;
        this.src = spriteSrc;
        this.spriteSheet = new Image();
        this.spriteSheet.src = this.src;
        this.gameFrame = 0;
        this.maxFrames = 120;
        this.delayFrame = 0;
        this.delayAmount = 0;
        this.delaying = false;
        this.configureAnimations(animations);
    }
    configureAnimations(arr) {
        let animationConfig = {};
        arr.forEach((animation, i)=>{
            let frames = {
                location: [],
                speed: animation.speed,
                delayLoopSeconds: animation.loopDelay
            };
            for(let j = 0; j < animation.frames; j++){
                let posX = j * this.spriteWidth;
                let posY = i * this.spriteHeight;
                frames.location.push({
                    x: posX,
                    y: posY
                });
            }
            animationConfig[animation.name] = frames;
        });
        this.animations = animationConfig;
    }
    draw(ctx) {
        if (this.animator.clearCanvas) {
            this.x = 0;
            this.gameFrame = 0;
            ctx.clearRect(0, 0, this.width, this.height);
        } else {
            if (!this.currentAnimation) this.setAnimation("idle", 0);
            if (this.gameFrame > this.maxFrames) this.gameFrame = 0;
            const staggerFrames = this.animations[this.currentAnimation].speed;
            const frames = this.animations[this.currentAnimation].location.length;
            let position = Math.floor(this.gameFrame / staggerFrames) % frames; // amount of frames of animation
            const frameX = this.spriteWidth * position;
            const frameY = this.animations[this.currentAnimation].location[position].y;
            ctx.drawImage(this.spriteSheet, frameX, frameY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.height, this.width);
        }
    }
    setAnimation(name, startingFramePosition = 0) {
        if (this.currentAnimation !== name) {
            this.currentAnimation = name;
            this.gameFrame = Math.floor(startingFramePosition * this.animations[this.currentAnimation].speed);
            this.maxFrames = this.animations[this.currentAnimation].speed * this.animations[this.currentAnimation].location.length;
            this.delayFrame = 0;
            this.delaying = false;
            this.delayAmount = Math.floor(this.animations[this.currentAnimation].delayLoopSeconds * 60);
        }
    }
}

;// CONCATENATED MODULE: ./lib/classes/canvas.ts

class CanvasController {
    constructor(width, height, spriteSrc, animations){
        this.width = width;
        this.height = height;
        this.lastKey;
        this.currentKeys = [];
        this.lastAnimation = 0;
        this.clearCanvas = false;
        this.input = new InputHandler(this);
        this.sprite = new SpriteController(this, spriteSrc, animations);
    }
    set update(cb) {
        this.sprite.update = cb.bind(this.sprite);
    }
    set listeners(arr) {
        const events = [];
        for (let listener of arr){
            const dispatch = listener.action.bind(this.input);
            listener.el.addEventListener(listener.event, dispatch);
            events.push({
                ...listener,
                action: dispatch
            });
        }
        this.input.listeners = events;
    }
    render(ctx, timestamp = 0) {
        this.lastAnimation = timestamp;
        this.sprite.draw(ctx);
        this.sprite.update();
    }
    resize(dimensions) {
        this.width = dimensions.width;
        this.height = dimensions.height;
    }
    clear() {
        this.clearCanvas = true;
    }
    show() {
        this.clearCanvas = false;
    }
    remove() {
        this.input.stop();
    }
}
class InputHandler {
    events = [];
    constructor(animator){
        this.animator = animator;
    }
    set listeners(l) {
        this.events = l;
    }
    stop() {
        for (let listener of this.events){
            listener.el.removeEventListener(listener.event, listener.action);
        }
    }
}


/***/ }),

/***/ 8038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ timelineAnimations),
/* harmony export */   "c": () => (/* binding */ sittingAnimation)
/* harmony export */ });
const timelineAnimations = [
    {
        name: "idle",
        frames: 6,
        speed: 20,
        loopDelay: 3.5
    },
    {
        name: "walk_right",
        frames: 8,
        speed: 18,
        loopDelay: 0
    },
    {
        name: "walk_left",
        frames: 8,
        speed: 18,
        loopDelay: 0
    },
    {
        name: "crossarms_right",
        frames: 6,
        speed: 11,
        loopDelay: 0
    },
    {
        name: "crossarms_left",
        frames: 6,
        speed: 11,
        loopDelay: 0
    },
    {
        name: "pivot_right",
        frames: 3,
        speed: 12,
        loopDelay: 0
    },
    {
        name: "pivot_left",
        frames: 3,
        speed: 12,
        loopDelay: 0
    },
    {
        name: "portal_entry_right",
        frames: 7,
        speed: 9,
        loopDelay: 0
    },
    {
        name: "portal_entry_left",
        frames: 7,
        speed: 9,
        loopDelay: 0
    },
    {
        name: "portal_exit_right",
        frames: 7,
        speed: 10,
        loopDelay: 0
    },
    {
        name: "portal_exit_left",
        frames: 7,
        speed: 10,
        loopDelay: 0
    }
];
const sittingAnimation = [
    {
        name: "idle",
        frames: 8,
        speed: 22,
        loopDelay: 4
    }
];


/***/ }),

/***/ 6693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ update),
/* harmony export */   "q": () => (/* binding */ input)
/* harmony export */ });
const update = {
    saga: function() {
        function getPivotToIdleStart(sprite) {
            const shortPositions = [
                2,
                3,
                6,
                7
            ];
            const staggerFrames = sprite.animations[sprite.currentAnimation].speed;
            const frames = sprite.animations[sprite.currentAnimation].location.length;
            const position = Math.floor(sprite.gameFrame / staggerFrames) % frames;
            let transitionStartFrame = shortPositions.includes(position) ? 1 : 0;
            return transitionStartFrame;
        }
        if (this.animator.lastKey === "PArrowLeft") {
            document.getElementById("left-arrow-container").classList.add("pressed");
            document.getElementById("right-arrow-container").classList.remove("pressed");
            if (this.currentAnimation === "idle" || this.currentAnimation.startsWith("crossarms") || this.currentAnimation === "walk_right") {
                this.speedX = 0;
                this.setAnimation("pivot_left", 0);
                return;
            }
            if (this.currentAnimation === "walk_left" && this.speedX !== -2.4) this.speedX = -2.4;
        }
        if (this.animator.lastKey === "PArrowRight") {
            document.getElementById("right-arrow-container").classList.add("pressed");
            document.getElementById("left-arrow-container").classList.remove("pressed");
            if (this.currentAnimation === "idle" || this.currentAnimation.startsWith("crossarms") || this.currentAnimation === "walk_left") {
                this.speedX = 0;
                this.setAnimation("pivot_right", 0);
                return;
            }
            if (this.currentAnimation === "walk_right" && this.speedX !== 2.4) this.speedX = 2.4;
        }
        if (this.animator.lastKey === "RArrowLeft") {
            if (this.currentAnimation === "walk_left" || this.currentAnimation.startsWith("pivot")) {
                this.speedX = 0;
                let startFrame = getPivotToIdleStart(this);
                this.setAnimation("crossarms_left", startFrame);
            }
            document.getElementById("left-arrow-container").classList.remove("pressed");
        }
        if (this.animator.lastKey === "RArrowRight") {
            if (this.currentAnimation === "walk_right" || this.currentAnimation.startsWith("pivot")) {
                this.speedX = 0;
                let startFrame1 = getPivotToIdleStart(this);
                this.setAnimation("crossarms_right", startFrame1);
            }
            document.getElementById("right-arrow-container").classList.remove("pressed");
        }
        if (this.animator.currentKeys.length === 0) {
            if (this.animator.lastKey) {
                document.getElementById("right-arrow-container").classList.remove("pressed");
                document.getElementById("left-arrow-container").classList.remove("pressed");
            }
            if (!this.currentAnimation.startsWith("portal") && !this.currentAnimation.startsWith("crossarms") && this.currentAnimation !== "idle") {
                this.speedX = 0;
                this.setAnimation("idle", 0);
                this.animator.lastKey = "";
            }
        }
        if (this.delaying) {
            if (this.delayFrame <= this.delayAmount) {
                this.delayFrame++;
            } else {
                this.delayFrame = 0;
                this.delaying = false;
            }
        } else {
            if (this.gameFrame < this.maxFrames) {
                this.gameFrame++;
                if (this.gameFrame === this.maxFrames) {
                    if (this.currentAnimation.startsWith("crossarms")) {
                        this.speedX = 0;
                        this.setAnimation("idle", 0);
                        this.animator.lastKey = "";
                    } else if (this.currentAnimation.startsWith("pivot")) {
                        this.speedX = this.currentAnimation === "pivot_left" ? -2.4 : 2.4;
                        this.currentAnimation === "pivot_left" ? this.setAnimation("walk_left", 0) : this.setAnimation("walk_right", 0);
                    } else if (this.currentAnimation.startsWith("portal_entry")) {
                        this.speedX = 0;
                        const activeTick = this.animator.activeTick;
                        const percentAdjustment = activeTick.index + 1 > 7 ? 1 : 2;
                        this.x = activeTick.index === 0 ? 0 : (activeTick.percent - percentAdjustment) / 100 * (this.animator.width - (activeTick.index === 11 ? 225 : 300));
                        this.currentAnimation === "portal_entry_right" ? this.setAnimation("portal_exit_right", 0) : this.setAnimation("portal_exit_left", 0);
                    } else if (this.currentAnimation.startsWith("portal_exit")) {
                        this.speedX = 0;
                        this.currentAnimation === "portal_exit_left" ? this.setAnimation("crossarms_left", 0) : this.setAnimation("crossarms_right", 0);
                    } else {}
                }
            } else {
                if (this.animations[this.currentAnimation].delayLoopSeconds > 0) {
                    this.delaying = true;
                }
                this.gameFrame = 0;
            }
        }
        this.x += this.speedX;
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x > this.animator.width - this.width + 50) {
            this.x = Math.floor(this.animator.width - this.width + 50);
        }
        let timelinePercent = this.x;
        if (timelinePercent < 50) {
            timelinePercent = 0;
        } else if (timelinePercent > this.animator.width - 300) {
            timelinePercent = 100;
        } else {
            timelinePercent = this.x / (this.animator.width - 300) * 100;
            if (this.x > this.animator.width - 375) {
                timelinePercent = 100;
            }
        }
        if (this.animator.timeline) {
            this.animator.timeline.style.width = `${timelinePercent}%`;
            this.animator.setPercent(timelinePercent);
        }
    },
    home: function() {
        if (this.delaying) {
            if (this.delayFrame <= this.delayAmount) {
                this.delayFrame++;
            } else {
                this.delayFrame = 0;
                this.delaying = false;
            }
        } else {
            if (this.gameFrame < this.maxFrames) {
                this.gameFrame++;
            } else {
                if (this.animations[this.currentAnimation].delayLoopSeconds > 0) {
                    this.delaying = true;
                }
                this.gameFrame = 0;
            }
        }
    }
};
const input = {
    saga: (element)=>{
        const events = [
            {
                el: element,
                event: "keydown",
                action: function(e) {
                    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                        if (this.animator.currentKeys.indexOf(e.key) === -1) {
                            this.animator.currentKeys.push(e.key);
                        }
                        if (this.animator.lastKey !== "P" + e.key && this.animator.currentKeys[this.animator.currentKeys.length - 1] == e.key) {
                            this.animator.lastKey = "P" + e.key;
                        }
                        if (this.animator.currentKeys.length === 0 && this.animator.lastKey.startsWith("R")) {
                            this.animator.lastKey = "";
                        }
                    }
                }
            },
            {
                el: element,
                event: "keyup",
                action: function(e) {
                    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                        if (this.animator.currentKeys.length === 1 || e.key.slice(1) === this.animator.lastKey.slice(1)) {
                            this.animator.lastKey = "R" + e.key;
                        }
                        this.animator.currentKeys.splice(this.animator.currentKeys.indexOf(e.key), 1);
                    }
                }
            }
        ];
        return events;
    }
};


/***/ })

};
;