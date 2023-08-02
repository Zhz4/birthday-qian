! function (t, s) {
    "object" == typeof exports && "object" == typeof module ? module.exports = s() : "function" == typeof define && define.amd ? define([], s) : "object" == typeof exports ? exports.Starback = s() : t.Starback = s()
}(self, (function () {
    return (() => {
        "use strict";
        var t = {
                d: (s, e) => {
                    for (var i in e) t.o(e, i) && !t.o(s, i) && Object.defineProperty(s, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                },
                o: (t, s) => Object.prototype.hasOwnProperty.call(t, s)
            },
            s = {};
        t.d(s, {
            default: () => i
        });
        const e = {
                width: 800,
                height: 600,
                speed: .5,
                starColor: ["#fb00ff", "#00dde0"],
                maxStar: 200,
                starSize: 100,
                directionY: 1,
                directionX: 1,
                distanceX: .1,
                slope: {
                    x: 1,
                    y: 1
                },
                frequency: 10,
                spread: 1,
                randomOpacity: !1,
                backgroundColor: "#ccc",
                showFps: !1
            },
            i = class {
                static DefaultConfig = e;
                constructor(t, s = {}) {
                    this.canvas = t instanceof HTMLElement ? t : document.querySelector(t), this.ctx = this.canvas.getContext("2d"), this.mergeConfig(s), this.repeat = 0, this.stars = [], this.frontCallbacks = [], this.behindCallbacks = [], this.fps = 0, this.lastCalledTime = 0, this.lastGenerated = 0, this.init()
                }
                init() {
                    this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), requestAnimationFrame((t => this.render(t))), console.log(this.width, this.height)
                }
                update() {
                    this.stars.map(((t, s) => {
                        t.progress += t.speed
                    }))
                }
                mergeConfig(t) {
                    const s = Object.assign(e, t);
                    this.width = s.width, this.height = s.height, this.speed = s.speed, this.directionY = -1 * s.directionY, this.directionX = s.directionX, this.starColor = s.starColor, this.maxStar = s.maxStar, this.slope = s.slope, this.starSize = s.starSize, this.showFps = s.showFps, this.backgroundColor = s.backgroundColor, this.distanceX = s.distanceX, this.frequency = s.frequency, this.randomOpacity = s.randomOpacity, this.spread = s.spread
                }
                setBackground() {
                    let t;
                    "string" == typeof this.backgroundColor ? t = this.backgroundColor : "object" == typeof this.backgroundColor && (t = this.ctx.createLinearGradient(this.canvas.width / 2, 0, this.canvas.width / 2, this.canvas.height), this.backgroundColor.forEach(((s, e) => {
                        t.addColorStop(e / this.backgroundColor.length, s)
                    }))), this.ctx.fillStyle = t, this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
                }
                randomNumber(t, s) {
                    return Math.floor(Math.random() * (s - t) + 1) + t
                }
                draw() {
                    this.ctx.strokeStyle = "white", this.stars.forEach((t => {
                        let s;
                        this.behindCallbacks.forEach((t => t(ctx))), "object" == typeof this.starColor ? (s = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height), this.starColor.forEach(((t, e) => s.addColorStop(e / this.starColor.length, t)))) : s = this.starColor, this.ctx.save(), this.ctx.strokeStyle = s, this.ctx.beginPath(), this.ctx.moveTo(t.start.x, t.start.y), this.ctx.setLineDash([this.starSize, t.startPoint * this.frequency]), this.ctx.lineDashOffset = this.directionY * (t.progress + t.length), this.ctx.quadraticCurveTo(t.curve.x, t.curve.y, t.end.x, t.end.y), this.ctx.stroke(), this.ctx.closePath(), this.ctx.restore(), this.frontCallbacks.forEach((t => t(this.ctx))), this.showFps && this.drawFps()
                    }))
                }
                generateRandomStar() {
                    let t = this.randomNumber(-20, this.canvas.width),
                        s = t <= 0 ? this.randomNumber(0, this.canvas.height) : 0,
                        e = this.starSize,
                        i = t + (this.canvas.width * this.distanceX + this.spread * t * this.directionX),
                        a = i - t,
                        h = this.canvas.height;
                    return this.stars.push({
                        x: t,
                        y: s,
                        length: h,
                        height: e,
                        progress: 0,
                        speed: this.speed + Math.random() / 5,
                        lineDash: this.randomNumber(50, 100),
                        filter: {
                            opacity: this.randomArr([this.randomNumber(20, 100) + "%", !1])
                        },
                        start: {
                            x: t,
                            y: s
                        },
                        curve: {
                            x: t + a * this.slope.x,
                            y: s + this.canvas.height * this.slope.y
                        },
                        startPoint: this.randomNumber(10, 100),
                        end: {
                            x: i,
                            y: this.canvas.height
                        }
                    }), this.stars
                }
                addToFront(t) {
                    this.frontCallbacks.push(t)
                }
                generateStar(t) {
                    for (let s = 0; s < t; s++) this.generateRandomStar()
                }
                drawFps() {
                    this.ctx.fillStyle = "white", this.ctx.fillText(`${this.fps} fps`, 10, 10)
                }
                render(t) {
                    this.lastCalledTime || (this.lastCalledTime = t);
                    let s = this.lastCalledTime - t;
                    this.fps = Math.round(1e3 / s), this.lastCalledTime = t, this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.setBackground(), this.draw(), this.update(), requestAnimationFrame((t => this.render(t)))
                }
                randomArr(t) {
                    return t[Math.floor(Math.random() * t.length)]
                }
            };
        return s.default
    })()
}));