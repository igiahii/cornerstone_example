﻿/*! cornerstone-math - 0.1.10 - 2022-06-09 | (c) 2017 Chris Hafey | https://github.com/cornerstonejs/cornerstoneMath */
!(function (t, e) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
            ? define('cornerstone-math', [], e)
            : 'object' == typeof exports
                ? (exports['cornerstone-math'] = e())
                : (t.cornerstoneMath = e());
})(window, function () {
    return (function (t) {
        var e = {};
        function n(i) {
            if (e[i]) return e[i].exports;
            var r = (e[i] = { i: i, l: !1, exports: {} });
            return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
        }
        return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, i) {
                n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
            }),
            (n.r = function (t) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                    Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
                var i = Object.create(null);
                if (
                    (n.r(i),
                        Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
                        2 & e && 'string' != typeof t)
                )
                    for (var r in t)
                        n.d(
                            i,
                            r,
                            function (e) {
                                return t[e];
                            }.bind(null, r)
                        );
                return i;
            }),
            (n.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                            return t.default;
                        }
                        : function () {
                            return t;
                        };
                return n.d(e, 'a', e), e;
            }),
            (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ''),
            n((n.s = 4))
        );
    })([
        function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 });
            var i = (function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        (i.enumerable = i.enumerable || !1),
                            (i.configurable = !0),
                            'value' in i && (i.writable = !0),
                            Object.defineProperty(t, i.key, i);
                    }
                }
                return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                };
            })(),
                r = (function (t) {
                    return t && t.__esModule ? t : { default: t };
                })(n(2)),
                o = n(1);
            var s = (function () {
                function t(e, n, i) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError('Cannot call a class as a function');
                    })(this, t),
                        (this.x = e || 0),
                        (this.y = n || 0),
                        (this.z = i || 0);
                }
                return (
                    i(t, [
                        {
                            key: 'set',
                            value: function (t, e, n) {
                                return (this.x = t), (this.y = e), (this.z = n), this;
                            },
                        },
                        {
                            key: 'setX',
                            value: function (t) {
                                return (this.x = t), this;
                            },
                        },
                        {
                            key: 'setY',
                            value: function (t) {
                                return (this.y = t), this;
                            },
                        },
                        {
                            key: 'setZ',
                            value: function (t) {
                                return (this.z = t), this;
                            },
                        },
                        {
                            key: 'setComponent',
                            value: function (t, e) {
                                switch (t) {
                                    case 0:
                                        this.x = e;
                                        break;
                                    case 1:
                                        this.y = e;
                                        break;
                                    case 2:
                                        this.z = e;
                                        break;
                                    default:
                                        throw new Error('index is out of range: ' + t);
                                }
                            },
                        },
                        {
                            key: 'getComponent',
                            value: function (t) {
                                switch (t) {
                                    case 0:
                                        return this.x;
                                    case 1:
                                        return this.y;
                                    case 2:
                                        return this.z;
                                    default:
                                        throw new Error('index is out of range: ' + t);
                                }
                            },
                        },
                        {
                            key: 'copy',
                            value: function (t) {
                                return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
                            },
                        },
                        {
                            key: 'add',
                            value: function (t, e) {
                                return void 0 !== e
                                    ? (console.warn(
                                        "DEPRECATED: Vector3's .add() now only accepts one argument. Use .addVectors( a, b ) instead."
                                    ),
                                        this.addVectors(t, e))
                                    : ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
                            },
                        },
                        {
                            key: 'addScalar',
                            value: function (t) {
                                return (this.x += t), (this.y += t), (this.z += t), this;
                            },
                        },
                        {
                            key: 'addVectors',
                            value: function (t, e) {
                                return (
                                    (this.x = t.x + e.x),
                                    (this.y = t.y + e.y),
                                    (this.z = t.z + e.z),
                                    this
                                );
                            },
                        },
                        {
                            key: 'sub',
                            value: function (t, e) {
                                return void 0 !== e
                                    ? (console.warn(
                                        "DEPRECATED: Vector3's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
                                    ),
                                        this.subVectors(t, e))
                                    : ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
                            },
                        },
                        {
                            key: 'subVectors',
                            value: function (t, e) {
                                return (
                                    (this.x = t.x - e.x),
                                    (this.y = t.y - e.y),
                                    (this.z = t.z - e.z),
                                    this
                                );
                            },
                        },
                        {
                            key: 'multiply',
                            value: function (t, e) {
                                return void 0 !== e
                                    ? (console.warn(
                                        "DEPRECATED: Vector3's .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
                                    ),
                                        this.multiplyVectors(t, e))
                                    : ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
                            },
                        },
                        {
                            key: 'multiplyScalar',
                            value: function (t) {
                                return (this.x *= t), (this.y *= t), (this.z *= t), this;
                            },
                        },
                        {
                            key: 'multiplyVectors',
                            value: function (t, e) {
                                return (
                                    (this.x = t.x * e.x),
                                    (this.y = t.y * e.y),
                                    (this.z = t.z * e.z),
                                    this
                                );
                            },
                        },
                        {
                            key: 'applyMatrix3',
                            value: function (t) {
                                var e = this.x,
                                    n = this.y,
                                    i = this.z,
                                    r = t.elements;
                                return (
                                    (this.x = r[0] * e + r[3] * n + r[6] * i),
                                    (this.y = r[1] * e + r[4] * n + r[7] * i),
                                    (this.z = r[2] * e + r[5] * n + r[8] * i),
                                    this
                                );
                            },
                        },
                        {
                            key: 'applyMatrix4',
                            value: function (t) {
                                var e = this.x,
                                    n = this.y,
                                    i = this.z,
                                    r = t.elements;
                                return (
                                    (this.x = r[0] * e + r[4] * n + r[8] * i + r[12]),
                                    (this.y = r[1] * e + r[5] * n + r[9] * i + r[13]),
                                    (this.z = r[2] * e + r[6] * n + r[10] * i + r[14]),
                                    this
                                );
                            },
                        },
                        {
                            key: 'applyProjection',
                            value: function (t) {
                                var e = this.x,
                                    n = this.y,
                                    i = this.z,
                                    r = t.elements,
                                    o = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
                                return (
                                    (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * o),
                                    (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * o),
                                    (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * o),
                                    this
                                );
                            },
                        },
                        {
                            key: 'applyQuaternion',
                            value: function (t) {
                                var e = this.x,
                                    n = this.y,
                                    i = this.z,
                                    r = t.x,
                                    o = t.y,
                                    s = t.z,
                                    a = t.w,
                                    u = a * e + o * i - s * n,
                                    h = a * n + s * e - r * i,
                                    l = a * i + r * n - o * e,
                                    c = -r * e - o * n - s * i;
                                return (
                                    (this.x = u * a + c * -r + h * -s - l * -o),
                                    (this.y = h * a + c * -o + l * -r - u * -s),
                                    (this.z = l * a + c * -s + u * -o - h * -r),
                                    this
                                );
                            },
                        },
                        {
                            key: 'transformDirection',
                            value: function (t) {
                                var e = this.x,
                                    n = this.y,
                                    i = this.z,
                                    r = t.elements;
                                return (
                                    (this.x = r[0] * e + r[4] * n + r[8] * i),
                                    (this.y = r[1] * e + r[5] * n + r[9] * i),
                                    (this.z = r[2] * e + r[6] * n + r[10] * i),
                                    this.normalize(),
                                    this
                                );
                            },
                        },
                        {
                            key: 'divide',
                            value: function (t) {
                                return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
                            },
                        },
                        {
                            key: 'divideScalar',
                            value: function (t) {
                                if (0 !== t) {
                                    var e = 1 / t;
                                    (this.x *= e), (this.y *= e), (this.z *= e);
                                } else (this.x = 0), (this.y = 0), (this.z = 0);
                                return this;
                            },
                        },
                        {
                            key: 'min',
                            value: function (t) {
                                return (
                                    this.x > t.x && (this.x = t.x),
                                    this.y > t.y && (this.y = t.y),
                                    this.z > t.z && (this.z = t.z),
                                    this
                                );
                            },
                        },
                        {
                            key: 'max',
                            value: function (t) {
                                return (
                                    this.x < t.x && (this.x = t.x),
                                    this.y < t.y && (this.y = t.y),
                                    this.z < t.z && (this.z = t.z),
                                    this
                                );
                            },
                        },
                        {
                            key: 'clamp',
                            value: function (t, e) {
                                return (
                                    this.x < t.x
                                        ? (this.x = t.x)
                                        : this.x > e.x && (this.x = e.x),
                                    this.y < t.y
                                        ? (this.y = t.y)
                                        : this.y > e.y && (this.y = e.y),
                                    this.z < t.z
                                        ? (this.z = t.z)
                                        : this.z > e.z && (this.z = e.z),
                                    this
                                );
                            },
                        },
                        {
                            key: 'floor',
                            value: function () {
                                return (
                                    (this.x = Math.floor(this.x)),
                                    (this.y = Math.floor(this.y)),
                                    (this.z = Math.floor(this.z)),
                                    this
                                );
                            },
                        },
                        {
                            key: 'ceil',
                            value: function () {
                                return (
                                    (this.x = Math.ceil(this.x)),
                                    (this.y = Math.ceil(this.y)),
                                    (this.z = Math.ceil(this.z)),
                                    this
                                );
                            },
                        },
                        {
                            key: 'round',
                            value: function () {
                                return (
                                    (this.x = Math.round(this.x)),
                                    (this.y = Math.round(this.y)),
                                    (this.z = Math.round(this.z)),
                                    this
                                );
                            },
                        },
                        {
                            key: 'roundToZero',
                            value: function () {
                                return (
                                    (this.x =
                                        this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
                                    (this.y =
                                        this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
                                    (this.z =
                                        this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
                                    this
                                );
                            },
                        },
                        {
                            key: 'negate',
                            value: function () {
                                return this.multiplyScalar(-1);
                            },
                        },
                        {
                            key: 'dot',
                            value: function (t) {
                                return this.x * t.x + this.y * t.y + this.z * t.z;
                            },
                        },
                        {
                            key: 'lengthSq',
                            value: function () {
                                return this.x * this.x + this.y * this.y + this.z * this.z;
                            },
                        },
                        {
                            key: 'length',
                            value: function () {
                                return Math.sqrt(
                                    this.x * this.x + this.y * this.y + this.z * this.z
                                );
                            },
                        },
                        {
                            key: 'lengthManhattan',
                            value: function () {
                                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
                            },
                        },
                        {
                            key: 'normalize',
                            value: function () {
                                return this.divideScalar(this.length());
                            },
                        },
                        {
                            key: 'setLength',
                            value: function (t) {
                                var e = this.length();
                                return 0 !== e && t !== e && this.multiplyScalar(t / e), this;
                            },
                        },
                        {
                            key: 'lerp',
                            value: function (t, e) {
                                return (
                                    (this.x += (t.x - this.x) * e),
                                    (this.y += (t.y - this.y) * e),
                                    (this.z += (t.z - this.z) * e),
                                    this
                                );
                            },
                        },
                        {
                            key: 'cross',
                            value: function (t, e) {
                                if (void 0 !== e)
                                    return (
                                        console.warn(
                                            "DEPRECATED: Vector3's .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
                                        ),
                                        this.crossVectors(t, e)
                                    );
                                var n = this.x,
                                    i = this.y,
                                    r = this.z;
                                return (
                                    (this.x = i * t.z - r * t.y),
                                    (this.y = r * t.x - n * t.z),
                                    (this.z = n * t.y - i * t.x),
                                    this
                                );
                            },
                        },
                        {
                            key: 'crossVectors',
                            value: function (t, e) {
                                var n = t.x,
                                    i = t.y,
                                    r = t.z,
                                    o = e.x,
                                    s = e.y,
                                    a = e.z;
                                return (
                                    (this.x = i * a - r * s),
                                    (this.y = r * o - n * a),
                                    (this.z = n * s - i * o),
                                    this
                                );
                            },
                        },
                        {
                            key: 'angleTo',
                            value: function (t) {
                                var e = this.dot(t) / (this.length() * t.length());
                                return Math.acos((0, o.clamp)(e, -1, 1));
                            },
                        },
                        {
                            key: 'distanceTo',
                            value: function (t) {
                                return Math.sqrt(this.distanceToSquared(t));
                            },
                        },
                        {
                            key: 'distanceToSquared',
                            value: function (t) {
                                var e = this.x - t.x,
                                    n = this.y - t.y,
                                    i = this.z - t.z;
                                return e * e + n * n + i * i;
                            },
                        },
                        {
                            key: 'setFromMatrixPosition',
                            value: function (t) {
                                return (
                                    (this.x = t.elements[12]),
                                    (this.y = t.elements[13]),
                                    (this.z = t.elements[14]),
                                    this
                                );
                            },
                        },
                        {
                            key: 'setFromMatrixScale',
                            value: function (t) {
                                var e = this.set(
                                    t.elements[0],
                                    t.elements[1],
                                    t.elements[2]
                                ).length(),
                                    n = this.set(
                                        t.elements[4],
                                        t.elements[5],
                                        t.elements[6]
                                    ).length(),
                                    i = this.set(
                                        t.elements[8],
                                        t.elements[9],
                                        t.elements[10]
                                    ).length();
                                return (this.x = e), (this.y = n), (this.z = i), this;
                            },
                        },
                        {
                            key: 'setFromMatrixColumn',
                            value: function (t, e) {
                                var n = 4 * t,
                                    i = e.elements;
                                return (
                                    (this.x = i[n]),
                                    (this.y = i[n + 1]),
                                    (this.z = i[n + 2]),
                                    this
                                );
                            },
                        },
                        {
                            key: 'equals',
                            value: function (t) {
                                return t.x === this.x && t.y === this.y && t.z === this.z;
                            },
                        },
                        {
                            key: 'fromArray',
                            value: function (t) {
                                return (this.x = t[0]), (this.y = t[1]), (this.z = t[2]), this;
                            },
                        },
                        {
                            key: 'toArray',
                            value: function () {
                                return [this.x, this.y, this.z];
                            },
                        },
                        {
                            key: 'clone',
                            value: function () {
                                return new t(this.x, this.y, this.z);
                            },
                        },
                    ]),
                    t
                );
            })();
            (s.prototype.projectOnVector = (function () {
                var t = void 0,
                    e = void 0;
                return function (n) {
                    return (
                        void 0 === t && (t = new s()),
                        t.copy(n).normalize(),
                        (e = this.dot(t)),
                        this.copy(t).multiplyScalar(e)
                    );
                };
            })()),
                (s.prototype.projectOnPlane = (function () {
                    var t = void 0;
                    return function (e) {
                        return (
                            void 0 === t && (t = new s()),
                            t.copy(this).projectOnVector(e),
                            this.sub(t)
                        );
                    };
                })()),
                (s.prototype.reflect = (function () {
                    var t = void 0;
                    return function (e) {
                        return (
                            void 0 === t && (t = new s()),
                            this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
                        );
                    };
                })()),
                (s.prototype.clampScalar = (function () {
                    var t = void 0,
                        e = void 0;
                    return function (n, i) {
                        return (
                            void 0 === t && ((t = new s()), (e = new s())),
                            t.set(n, n, n),
                            e.set(i, i, i),
                            this.clamp(t, e)
                        );
                    };
                })()),
                (s.prototype.applyAxisAngle = (function () {
                    var t = void 0;
                    return function (e, n) {
                        return (
                            void 0 === t && (t = new r.default()),
                            this.applyQuaternion(t.setFromAxisAngle(e.normalize(), n)),
                            this
                        );
                    };
                })()),
                (e.default = s);
        },
        function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 });
            var i = 1e-4;
            (e.clamp = function (t, e, n) {
                return t < e ? e : t > n ? n : t;
            }),
                (e.degToRad = function (t) {
                    return t * (Math.PI / 180);
                }),
                (e.approximatelyEquals = function (t, e, n) {
                    var r = n || i;
                    return Math.abs(t - e) <= r * Math.max(1, Math.abs(t), Math.abs(e));
                }),
                (e.radToDeg = function (t) {
                    return t * (180 / Math.PI);
                }),
                (e.sign = function (t) {
                    return 'number' == typeof t
                        ? t
                            ? t < 0
                                ? -1
                                : 1
                            : t == t
                                ? 0
                                : NaN
                        : NaN;
                });
        },
        function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 });
            var i = (function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        (i.enumerable = i.enumerable || !1),
                            (i.configurable = !0),
                            'value' in i && (i.writable = !0),
                            Object.defineProperty(t, i.key, i);
                    }
                }
                return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                };
            })();
            var r = (function () {
                function t(e, n, i, r) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError('Cannot call a class as a function');
                    })(this, t),
                        (this.x = e || 0),
                        (this.y = n || 0),
                        (this.z = i || 0),
                        (this.w = void 0 !== r ? r : 1);
                }
                return (
                    i(t, [
                        {
                            key: 'setFromAxisAngle',
                            value: function (t, e) {
                                var n = e / 2,
                                    i = Math.sin(n);
                                return (
                                    (this.x = t.x * i),
                                    (this.y = t.y * i),
                                    (this.z = t.z * i),
                                    (this.w = Math.cos(n)),
                                    this
                                );
                            },
                        },
                        {
                            key: 'multiplyQuaternions',
                            value: function (t, e) {
                                var n = t.x,
                                    i = t.y,
                                    r = t.z,
                                    o = t.w,
                                    s = e.x,
                                    a = e.y,
                                    u = e.z,
                                    h = e.w;
                                return (
                                    (this.x = n * h + o * s + i * u - r * a),
                                    (this.y = i * h + o * a + r * s - n * u),
                                    (this.z = r * h + o * u + n * a - i * s),
                                    (this.w = o * h - n * s - i * a - r * u),
                                    this
                                );
                            },
                        },
                        {
                            key: 'setFromRotationMatrix',
                            value: function (t) {
                                var e = t.elements,
                                    n = e[0],
                                    i = e[4],
                                    r = e[8],
                                    o = e[1],
                                    s = e[5],
                                    a = e[9],
                                    u = e[2],
                                    h = e[6],
                                    l = e[10],
                                    c = n + s + l,
                                    y = void 0;
                                return (
                                    c > 0
                                        ? ((y = 0.5 / Math.sqrt(c + 1)),
                                            (this.w = 0.25 / y),
                                            (this.x = (h - a) * y),
                                            (this.y = (r - u) * y),
                                            (this.z = (o - i) * y))
                                        : n > s && n > l
                                            ? ((y = 2 * Math.sqrt(1 + n - s - l)),
                                                (this.w = (h - a) / y),
                                                (this.x = 0.25 * y),
                                                (this.y = (i + o) / y),
                                                (this.z = (r + u) / y))
                                            : s > l
                                                ? ((y = 2 * Math.sqrt(1 + s - n - l)),
                                                    (this.w = (r - u) / y),
                                                    (this.x = (i + o) / y),
                                                    (this.y = 0.25 * y),
                                                    (this.z = (a + h) / y))
                                                : ((y = 2 * Math.sqrt(1 + l - n - s)),
                                                    (this.w = (o - i) / y),
                                                    (this.x = (r + u) / y),
                                                    (this.y = (a + h) / y),
                                                    (this.z = 0.25 * y)),
                                    this
                                );
                            },
                        },
                    ]),
                    t
                );
            })();
            e.default = r;
        },
        function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 });
            var i = n(1);
            function r(t) {
                return t * t;
            }
            function o(t, e) {
                return r(t.x - e.x) + r(t.y - e.y);
            }
            var s = {
                distanceToPoint: function (t, e) {
                    return Math.sqrt(
                        (function (t, e) {
                            var n = o(t.start, t.end);
                            if (0 === n) return o(e, t.start);
                            var i =
                                ((e.x - t.start.x) * (t.end.x - t.start.x) +
                                    (e.y - t.start.y) * (t.end.y - t.start.y)) /
                                n;
                            return o(
                                e,
                                i < 0
                                    ? t.start
                                    : i > 1
                                        ? t.end
                                        : {
                                            x: t.start.x + i * (t.end.x - t.start.x),
                                            y: t.start.y + i * (t.end.y - t.start.y),
                                        }
                            );
                        })(t, e)
                    );
                },
                intersectLine: function (t, e) {
                    var n,
                        r,
                        o,
                        s,
                        a,
                        u,
                        h,
                        l,
                        c,
                        y,
                        f,
                        d = {},
                        v = t.start.x,
                        p = t.start.y,
                        x = t.end.x,
                        m = t.end.y,
                        g = e.start.x,
                        b = e.start.y,
                        z = e.end.x,
                        k = e.end.y,
                        M = void 0;
                    if (
                        ((y = (n = m - p) * z + (o = v - x) * k + (a = x * p - v * m)),
                            (0 === (c = n * g + o * b + a) ||
                                0 === y ||
                                (0, i.sign)(c) !== (0, i.sign)(y)) &&
                            ((l = (r = k - b) * x + (s = g - z) * m + (u = z * b - g * k)),
                                0 === (h = r * v + s * p + u) ||
                                0 === l ||
                                (0, i.sign)(h) !== (0, i.sign)(l)))
                    ) {
                        (f = n * s - r * o), (M = o * u - s * a);
                        var w = parseFloat(M / f);
                        M = r * a - n * u;
                        var P = parseFloat(M / f);
                        return (d.x = w), (d.y = P), d;
                    }
                },
            };
            e.default = s;
        },
        function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.Vector3 =
                    e.rect =
                    e.quaternion =
                    e.point =
                    e.Plane =
                    e.Matrix4 =
                    e.sign =
                    e.radToDeg =
                    e.degToRad =
                    e.clamp =
                    e.lineSegment =
                    e.Line3 =
                    void 0);
            var i = y(n(5)),
                r = y(n(3)),
                o = n(1),
                s = y(n(6)),
                a = y(n(7)),
                u = y(n(8)),
                h = y(n(2)),
                l = y(n(9)),
                c = y(n(0));
            function y(t) {
                return t && t.__esModule ? t : { default: t };
            }
            var f = {
                Line3: i.default,
                lineSegment: r.default,
                clamp: o.clamp,
                degToRad: o.degToRad,
                radToDeg: o.radToDeg,
                sign: o.sign,
                Matrix4: s.default,
                Plane: a.default,
                point: u.default,
                quaternion: h.default,
                rect: l.default,
                Vector3: c.default,
            };
            (e.Line3 = i.default),
                (e.lineSegment = r.default),
                (e.clamp = o.clamp),
                (e.degToRad = o.degToRad),
                (e.radToDeg = o.radToDeg),
                (e.sign = o.sign),
                (e.Matrix4 = s.default),
                (e.Plane = a.default),
                (e.point = u.default),
                (e.quaternion = h.default),
                (e.rect = l.default),
                (e.Vector3 = c.default),
                (e.default = f);
        },
        function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 });
            var i = (function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        (i.enumerable = i.enumerable || !1),
                            (i.configurable = !0),
                            'value' in i && (i.writable = !0),
                            Object.defineProperty(t, i.key, i);
                    }
                }
                return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                };
            })(),
                r = (function (t) {
                    return t && t.__esModule ? t : { default: t };
                })(n(0)),
                o = n(1);
            var s = (function () {
                function t(e, n) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError('Cannot call a class as a function');
                    })(this, t),
                        (this.start = void 0 !== e ? e : new r.default()),
                        (this.end = void 0 !== n ? n : new r.default());
                }
                return (
                    i(t, [
                        {
                            key: 'set',
                            value: function (t, e) {
                                return this.start.copy(t), this.end.copy(e), this;
                            },
                        },
                        {
                            key: 'copy',
                            value: function (t) {
                                return this.start.copy(t.start), this.end.copy(t.end), this;
                            },
                        },
                        {
                            key: 'center',
                            value: function (t) {
                                return (t || new r.default())
                                    .addVectors(this.start, this.end)
                                    .multiplyScalar(0.5);
                            },
                        },
                        {
                            key: 'delta',
                            value: function (t) {
                                return (t || new r.default()).subVectors(this.end, this.start);
                            },
                        },
                        {
                            key: 'distanceSq',
                            value: function () {
                                return this.start.distanceToSquared(this.end);
                            },
                        },
                        {
                            key: 'distance',
                            value: function () {
                                return this.start.distanceTo(this.end);
                            },
                        },
                        {
                            key: 'at',
                            value: function (t, e) {
                                var n = e || new r.default();
                                return this.delta(n).multiplyScalar(t).add(this.start);
                            },
                        },
                        {
                            key: 'closestPointToPointParameter',
                            value: function (t, e) {
                                var n = new r.default(),
                                    i = new r.default();
                                n.subVectors(t, this.start), i.subVectors(this.end, this.start);
                                var s = i.dot(i),
                                    a = i.dot(n) / s;
                                return e && (a = (0, o.clamp)(a, 0, 1)), a;
                            },
                        },
                        {
                            key: 'closestPointToPoint',
                            value: function (t, e, n) {
                                var i = this.closestPointToPointParameter(t, e),
                                    o = n || new r.default();
                                return this.delta(o).multiplyScalar(i).add(this.start);
                            },
                        },
                        {
                            key: 'applyMatrix4',
                            value: function (t) {
                                return (
                                    this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
                                );
                            },
                        },
                        {
                            key: 'equals',
                            value: function (t) {
                                return t.start.equals(this.start) && t.end.equals(this.end);
                            },
                        },
                        {
                            key: 'clone',
                            value: function () {
                                return new t().copy(this);
                            },
                        },
                        {
                            key: 'intersectLine',
                            value: function (t) {
                                var e = this.end.clone().sub(this.start),
                                    n = t.end.clone().sub(t.start),
                                    i = t.start.clone().sub(this.start),
                                    r = e.clone().cross(n),
                                    s = i.clone().cross(n),
                                    a = i.dot(r) / (i.lengthSq() * r.lengthSq());
                                if ((0, o.approximatelyEquals)(a, 0)) {
                                    var u = s.dot(r) / r.lengthSq();
                                    if (!(u > 1 || isNaN(u))) {
                                        var h = this.start.clone().add(e.clone().multiplyScalar(u));
                                        return h.clone().sub(t.start).lengthSq() +
                                            h.clone().sub(t.end).lengthSq() <=
                                            t.distanceSq()
                                            ? h
                                            : void 0;
                                    }
                                }
                            },
                        },
                    ]),
                    t
                );
            })();
            e.default = s;
        },
        function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 });
            var i = (function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        (i.enumerable = i.enumerable || !1),
                            (i.configurable = !0),
                            'value' in i && (i.writable = !0),
                            Object.defineProperty(t, i.key, i);
                    }
                }
                return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                };
            })(),
                r = (function (t) {
                    return t && t.__esModule ? t : { default: t };
                })(n(0));
            var o = (function () {
                function t(e, n, i, r, o, s, a, u, h, l, c, y, f, d, v, p) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError('Cannot call a class as a function');
                    })(this, t),
                        (this.elements = new Float32Array(16));
                    var x = this.elements;
                    (x[0] = void 0 !== e ? e : 1),
                        (x[4] = n || 0),
                        (x[8] = i || 0),
                        (x[12] = r || 0),
                        (x[1] = o || 0),
                        (x[5] = void 0 !== s ? s : 1),
                        (x[9] = a || 0),
                        (x[13] = u || 0),
                        (x[2] = h || 0),
                        (x[6] = l || 0),
                        (x[10] = void 0 !== c ? c : 1),
                        (x[14] = y || 0),
                        (x[3] = f || 0),
                        (x[7] = d || 0),
                        (x[11] = v || 0),
                        (x[15] = void 0 !== p ? p : 1);
                }
                return (
                    i(t, [
                        {
                            key: 'makeRotationFromQuaternion',
                            value: function (t) {
                                var e = this.elements,
                                    n = t.x,
                                    i = t.y,
                                    r = t.z,
                                    o = t.w,
                                    s = n + n,
                                    a = i + i,
                                    u = r + r,
                                    h = n * s,
                                    l = n * a,
                                    c = n * u,
                                    y = i * a,
                                    f = i * u,
                                    d = r * u,
                                    v = o * s,
                                    p = o * a,
                                    x = o * u;
                                return (
                                    (e[0] = 1 - (y + d)),
                                    (e[4] = l - x),
                                    (e[8] = c + p),
                                    (e[1] = l + x),
                                    (e[5] = 1 - (h + d)),
                                    (e[9] = f - v),
                                    (e[2] = c - p),
                                    (e[6] = f + v),
                                    (e[10] = 1 - (h + y)),
                                    (e[3] = 0),
                                    (e[7] = 0),
                                    (e[11] = 0),
                                    (e[12] = 0),
                                    (e[13] = 0),
                                    (e[14] = 0),
                                    (e[15] = 1),
                                    this
                                );
                            },
                        },
                        {
                            key: 'multiplyMatrices',
                            value: function (t, e) {
                                var n = t.elements,
                                    i = e.elements,
                                    r = this.elements,
                                    o = n[0],
                                    s = n[4],
                                    a = n[8],
                                    u = n[12],
                                    h = n[1],
                                    l = n[5],
                                    c = n[9],
                                    y = n[13],
                                    f = n[2],
                                    d = n[6],
                                    v = n[10],
                                    p = n[14],
                                    x = n[3],
                                    m = n[7],
                                    g = n[11],
                                    b = n[15],
                                    z = i[0],
                                    k = i[4],
                                    M = i[8],
                                    w = i[12],
                                    P = i[1],
                                    R = i[5],
                                    L = i[9],
                                    T = i[13],
                                    S = i[2],
                                    _ = i[6],
                                    q = i[10],
                                    j = i[14],
                                    V = i[3],
                                    E = i[7],
                                    O = i[11],
                                    C = i[15];
                                return (
                                    (r[0] = o * z + s * P + a * S + u * V),
                                    (r[4] = o * k + s * R + a * _ + u * E),
                                    (r[8] = o * M + s * L + a * q + u * O),
                                    (r[12] = o * w + s * T + a * j + u * C),
                                    (r[1] = h * z + l * P + c * S + y * V),
                                    (r[5] = h * k + l * R + c * _ + y * E),
                                    (r[9] = h * M + l * L + c * q + y * O),
                                    (r[13] = h * w + l * T + c * j + y * C),
                                    (r[2] = f * z + d * P + v * S + p * V),
                                    (r[6] = f * k + d * R + v * _ + p * E),
                                    (r[10] = f * M + d * L + v * q + p * O),
                                    (r[14] = f * w + d * T + v * j + p * C),
                                    (r[3] = x * z + m * P + g * S + b * V),
                                    (r[7] = x * k + m * R + g * _ + b * E),
                                    (r[11] = x * M + m * L + g * q + b * O),
                                    (r[15] = x * w + m * T + g * j + b * C),
                                    this
                                );
                            },
                        },
                        {
                            key: 'multiply',
                            value: function (t, e) {
                                return void 0 !== e
                                    ? (console.warn(
                                        "DEPRECATED: Matrix4's .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
                                    ),
                                        this.multiplyMatrices(t, e))
                                    : this.multiplyMatrices(this, t);
                            },
                        },
                        {
                            key: 'getInverse',
                            value: function (t, e) {
                                var n = this.elements,
                                    i = t.elements,
                                    r = i[0],
                                    o = i[4],
                                    s = i[8],
                                    a = i[12],
                                    u = i[1],
                                    h = i[5],
                                    l = i[9],
                                    c = i[13],
                                    y = i[2],
                                    f = i[6],
                                    d = i[10],
                                    v = i[14],
                                    p = i[3],
                                    x = i[7],
                                    m = i[11],
                                    g = i[15];
                                (n[0] =
                                    l * v * x -
                                    c * d * x +
                                    c * f * m -
                                    h * v * m -
                                    l * f * g +
                                    h * d * g),
                                    (n[4] =
                                        a * d * x -
                                        s * v * x -
                                        a * f * m +
                                        o * v * m +
                                        s * f * g -
                                        o * d * g),
                                    (n[8] =
                                        s * c * x -
                                        a * l * x +
                                        a * h * m -
                                        o * c * m -
                                        s * h * g +
                                        o * l * g),
                                    (n[12] =
                                        a * l * f -
                                        s * c * f -
                                        a * h * d +
                                        o * c * d +
                                        s * h * v -
                                        o * l * v),
                                    (n[1] =
                                        c * d * p -
                                        l * v * p -
                                        c * y * m +
                                        u * v * m +
                                        l * y * g -
                                        u * d * g),
                                    (n[5] =
                                        s * v * p -
                                        a * d * p +
                                        a * y * m -
                                        r * v * m -
                                        s * y * g +
                                        r * d * g),
                                    (n[9] =
                                        a * l * p -
                                        s * c * p -
                                        a * u * m +
                                        r * c * m +
                                        s * u * g -
                                        r * l * g),
                                    (n[13] =
                                        s * c * y -
                                        a * l * y +
                                        a * u * d -
                                        r * c * d -
                                        s * u * v +
                                        r * l * v),
                                    (n[2] =
                                        h * v * p -
                                        c * f * p +
                                        c * y * x -
                                        u * v * x -
                                        h * y * g +
                                        u * f * g),
                                    (n[6] =
                                        a * f * p -
                                        o * v * p -
                                        a * y * x +
                                        r * v * x +
                                        o * y * g -
                                        r * f * g),
                                    (n[10] =
                                        o * c * p -
                                        a * h * p +
                                        a * u * x -
                                        r * c * x -
                                        o * u * g +
                                        r * h * g),
                                    (n[14] =
                                        a * h * y -
                                        o * c * y -
                                        a * u * f +
                                        r * c * f +
                                        o * u * v -
                                        r * h * v),
                                    (n[3] =
                                        l * f * p -
                                        h * d * p -
                                        l * y * x +
                                        u * d * x +
                                        h * y * m -
                                        u * f * m),
                                    (n[7] =
                                        o * d * p -
                                        s * f * p +
                                        s * y * x -
                                        r * d * x -
                                        o * y * m +
                                        r * f * m),
                                    (n[11] =
                                        s * h * p -
                                        o * l * p -
                                        s * u * x +
                                        r * l * x +
                                        o * u * m -
                                        r * h * m),
                                    (n[15] =
                                        o * l * y -
                                        s * h * y +
                                        s * u * f -
                                        r * l * f -
                                        o * u * d +
                                        r * h * d);
                                var b = r * n[0] + u * n[4] + y * n[8] + p * n[12];
                                if (0 === b) {
                                    var z =
                                        "Matrix4.getInverse(): can't invert matrix, determinant is 0";
                                    if (e) throw new Error(z);
                                    return console.warn(z), this.identity(), this;
                                }
                                return this.multiplyScalar(1 / b), this;
                            },
                        },
                        {
                            key: 'applyToVector3Array',
                            value: function () {
                                var t = new r.default();
                                return function (e, n, i) {
                                    void 0 === n && (n = 0), void 0 === i && (i = e.length);
                                    for (var r = 0, o = n; r < i; r += 3, o += 3)
                                        (t.x = e[o]),
                                            (t.y = e[o + 1]),
                                            (t.z = e[o + 2]),
                                            t.applyMatrix4(this),
                                            (e[o] = t.x),
                                            (e[o + 1] = t.y),
                                            (e[o + 2] = t.z);
                                    return e;
                                };
                            },
                        },
                        {
                            key: 'makeTranslation',
                            value: function (t, e, n) {
                                return (
                                    this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this
                                );
                            },
                        },
                        {
                            key: 'multiplyScalar',
                            value: function (t) {
                                var e = this.elements;
                                return (
                                    (e[0] *= t),
                                    (e[4] *= t),
                                    (e[8] *= t),
                                    (e[12] *= t),
                                    (e[1] *= t),
                                    (e[5] *= t),
                                    (e[9] *= t),
                                    (e[13] *= t),
                                    (e[2] *= t),
                                    (e[6] *= t),
                                    (e[10] *= t),
                                    (e[14] *= t),
                                    (e[3] *= t),
                                    (e[7] *= t),
                                    (e[11] *= t),
                                    (e[15] *= t),
                                    this
                                );
                            },
                        },
                        {
                            key: 'set',
                            value: function (t, e, n, i, r, o, s, a, u, h, l, c, y, f, d, v) {
                                var p = this.elements;
                                return (
                                    (p[0] = t),
                                    (p[4] = e),
                                    (p[8] = n),
                                    (p[12] = i),
                                    (p[1] = r),
                                    (p[5] = o),
                                    (p[9] = s),
                                    (p[13] = a),
                                    (p[2] = u),
                                    (p[6] = h),
                                    (p[10] = l),
                                    (p[14] = c),
                                    (p[3] = y),
                                    (p[7] = f),
                                    (p[11] = d),
                                    (p[15] = v),
                                    this
                                );
                            },
                        },
                        {
                            key: 'makeScale',
                            value: function (t, e, n) {
                                return (
                                    this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
                                );
                            },
                        },
                    ]),
                    t
                );
            })();
            e.default = o;
        },
        function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 });
            var i = (function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        (i.enumerable = i.enumerable || !1),
                            (i.configurable = !0),
                            'value' in i && (i.writable = !0),
                            Object.defineProperty(t, i.key, i);
                    }
                }
                return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                };
            })(),
                r = (function (t) {
                    return t && t.__esModule ? t : { default: t };
                })(n(0));
            var o = (function () {
                function t(e, n) {
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError('Cannot call a class as a function');
                    })(this, t),
                        (this.normal = void 0 !== e ? e : new r.default(1, 0, 0)),
                        (this.constant = void 0 !== n ? n : 0);
                }
                return (
                    i(t, [
                        {
                            key: 'set',
                            value: function (t, e) {
                                return this.normal.copy(t), (this.constant = e), this;
                            },
                        },
                        {
                            key: 'setComponents',
                            value: function (t, e, n, i) {
                                return this.normal.set(t, e, n), (this.constant = i), this;
                            },
                        },
                        {
                            key: 'setFromNormalAndCoplanarPoint',
                            value: function (t, e) {
                                return (
                                    this.normal.copy(t),
                                    (this.constant = -e.dot(this.normal)),
                                    this
                                );
                            },
                        },
                        {
                            key: 'copy',
                            value: function (t) {
                                return (
                                    this.normal.copy(t.normal), (this.constant = t.constant), this
                                );
                            },
                        },
                        {
                            key: 'normalize',
                            value: function () {
                                var t = 1 / this.normal.length();
                                return (
                                    this.normal.multiplyScalar(t), (this.constant *= t), this
                                );
                            },
                        },
                        {
                            key: 'negate',
                            value: function () {
                                return (this.constant *= -1), this.normal.negate(), this;
                            },
                        },
                        {
                            key: 'distanceToPoint',
                            value: function (t) {
                                return this.normal.dot(t) + this.constant;
                            },
                        },
                        {
                            key: 'distanceToSphere',
                            value: function (t) {
                                return this.distanceToPoint(t.center) - t.radius;
                            },
                        },
                        {
                            key: 'projectPoint',
                            value: function (t, e) {
                                return this.orthoPoint(t, e).sub(t).negate();
                            },
                        },
                        {
                            key: 'orthoPoint',
                            value: function (t, e) {
                                var n = this.distanceToPoint(t);
                                return (e || new r.default())
                                    .copy(this.normal)
                                    .multiplyScalar(n);
                            },
                        },
                        {
                            key: 'isIntersectionLine',
                            value: function (t) {
                                var e = this.distanceToPoint(t.start),
                                    n = this.distanceToPoint(t.end);
                                return (e < 0 && n > 0) || (n < 0 && e > 0);
                            },
                        },
                        {
                            key: 'intersectPlane',
                            value: function (t) {
                                var e = this.normal.clone().cross(t.normal),
                                    n = { origin: new r.default(), direction: e };
                                if (this.normal.clone().cross(t.normal).length < 1e-10)
                                    return (n.direction = new r.default()), n;
                                var i = this.constant,
                                    o = t.constant,
                                    s = this.normal.clone().dot(t.normal),
                                    a = -(i - o * s) / (1 - s * s),
                                    u = -(o - i * s) / (1 - s * s);
                                return (
                                    (n.origin = this.normal
                                        .clone()
                                        .multiplyScalar(a)
                                        .add(t.normal.clone().multiplyScalar(u))),
                                    n
                                );
                            },
                        },
                        {
                            key: 'coplanarPoint',
                            value: function (t) {
                                return (t || new r.default())
                                    .copy(this.normal)
                                    .multiplyScalar(-this.constant);
                            },
                        },
                        {
                            key: 'translate',
                            value: function (t) {
                                return (
                                    (this.constant = this.constant - t.dot(this.normal)), this
                                );
                            },
                        },
                        {
                            key: 'equals',
                            value: function (t) {
                                return (
                                    t.normal.equals(this.normal) && t.constant === this.constant
                                );
                            },
                        },
                        {
                            key: 'clone',
                            value: function () {
                                return new t().copy(this);
                            },
                        },
                    ]),
                    t
                );
            })();
            (o.prototype.setFromCoplanarPoints = (function () {
                var t = new r.default(),
                    e = new r.default();
                return function (n, i, r) {
                    var o = t.subVectors(r, i).cross(e.subVectors(n, i)).normalize();
                    return this.setFromNormalAndCoplanarPoint(o, n), this;
                };
            })()),
                (o.prototype.intersectLine = (function () {
                    var t = new r.default();
                    return function (e, n) {
                        var i = n || new r.default(),
                            o = e.delta(t),
                            s = this.normal.dot(o);
                        if (0 === s)
                            return 0 === this.distanceToPoint(e.start)
                                ? i.copy(e.start)
                                : void 0;
                        var a = -(e.start.dot(this.normal) + this.constant) / s;
                        return a < 0 || a > 1
                            ? void 0
                            : i.copy(o).multiplyScalar(a).add(e.start);
                    };
                })()),
                (e.default = o);
        },
        function (t, e, n) {
            'use strict';
            function i(t, e) {
                return { x: t.x - e.x, y: t.y - e.y };
            }
            function r(t, e) {
                return Math.sqrt(o(t, e));
            }
            function o(t, e) {
                var n = i(t, e);
                return n.x * n.x + n.y * n.y;
            }
            Object.defineProperty(e, '__esModule', { value: !0 });
            var s = {
                subtract: i,
                copy: function (t) {
                    return { x: t.x, y: t.y };
                },
                pageToPoint: function (t) {
                    return { x: t.pageX, y: t.pageY };
                },
                distance: r,
                distanceSquared: o,
                insideRect: function (t, e) {
                    return !(
                        t.x < e.left ||
                        t.x > e.left + e.width ||
                        t.y < e.top ||
                        t.y > e.top + e.height
                    );
                },
                findClosestPoint: function (t, e) {
                    var n = [],
                        i = void 0;
                    return (
                        t.forEach(function (t, o) {
                            var s = r(t, e);
                            n.push(s), (i = 0 === o ? s : Math.min(s, i));
                        }),
                        t[n.indexOf(i)]
                    );
                },
            };
            e.default = s;
        },
        function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 });
            var i = (function (t) {
                return t && t.__esModule ? t : { default: t };
            })(n(3));
            function r(t) {
                return {
                    topLeft: { x: t.left, y: t.top },
                    bottomRight: { x: t.left + t.width, y: t.top + t.height },
                };
            }
            var o = {
                distanceToPoint: function (t, e) {
                    var n = 655535;
                    return (
                        (function (t) {
                            return [
                                {
                                    start: { x: t.left, y: t.top },
                                    end: { x: t.left + t.width, y: t.top },
                                },
                                {
                                    start: { x: t.left + t.width, y: t.top },
                                    end: { x: t.left + t.width, y: t.top + t.height },
                                },
                                {
                                    start: { x: t.left + t.width, y: t.top + t.height },
                                    end: { x: t.left, y: t.top + t.height },
                                },
                                {
                                    start: { x: t.left, y: t.top + t.height },
                                    end: { x: t.left, y: t.top },
                                },
                            ];
                        })(t).forEach(function (t) {
                            var r = i.default.distanceToPoint(t, e);
                            r < n && (n = r);
                        }),
                        n
                    );
                },
                getIntersectionRect: function (t, e) {
                    var n = { topLeft: {}, bottomRight: {} };
                    if (
                        (function (t, e) {
                            var n = void 0,
                                i = void 0,
                                o = r(t),
                                s = r(e);
                            return (
                                (n =
                                    t.width >= 0
                                        ? e.width >= 0
                                            ? !(
                                                o.bottomRight.x <= s.topLeft.x ||
                                                s.bottomRight.x <= o.topLeft.x
                                            )
                                            : !(
                                                o.bottomRight.x <= s.bottomRight.x ||
                                                s.topLeft.x <= o.topLeft.x
                                            )
                                        : e.width >= 0
                                            ? !(
                                                o.topLeft.x <= s.topLeft.x ||
                                                s.bottomRight.x <= o.bottomRight.x
                                            )
                                            : !(
                                                o.topLeft.x <= s.bottomRight.x ||
                                                s.topLeft.x <= o.bottomRight.x
                                            )),
                                (i =
                                    t.height >= 0
                                        ? e.height >= 0
                                            ? !(
                                                o.bottomRight.y <= s.topLeft.y ||
                                                s.bottomRight.y <= o.topLeft.y
                                            )
                                            : !(
                                                o.bottomRight.y <= s.bottomRight.y ||
                                                s.topLeft.y <= o.topLeft.y
                                            )
                                        : e.height >= 0
                                            ? !(
                                                o.topLeft.y <= s.topLeft.y ||
                                                s.bottomRight.y <= o.bottomRight.y
                                            )
                                            : !(
                                                o.topLeft.y <= s.bottomRight.y ||
                                                s.top <= o.bottomRight.y
                                            )),
                                n && i
                            );
                        })(t, e)
                    ) {
                        var i = r(t),
                            o = r(e);
                        return (
                            t.width >= 0
                                ? e.width >= 0
                                    ? ((n.topLeft.x = Math.max(i.topLeft.x, o.topLeft.x)),
                                        (n.bottomRight.x = Math.min(
                                            i.bottomRight.x,
                                            o.bottomRight.x
                                        )))
                                    : ((n.topLeft.x = Math.max(i.topLeft.x, o.bottomRight.x)),
                                        (n.bottomRight.x = Math.min(i.bottomRight.x, o.topLeft.x)))
                                : e.width >= 0
                                    ? ((n.topLeft.x = Math.min(i.topLeft.x, o.bottomRight.x)),
                                        (n.bottomRight.x = Math.max(i.bottomRight.x, o.topLeft.x)))
                                    : ((n.topLeft.x = Math.min(i.topLeft.x, o.topLeft.x)),
                                        (n.bottomRight.x = Math.max(
                                            i.bottomRight.x,
                                            o.bottomRight.x
                                        ))),
                            t.height >= 0
                                ? e.height >= 0
                                    ? ((n.topLeft.y = Math.max(i.topLeft.y, o.topLeft.y)),
                                        (n.bottomRight.y = Math.min(
                                            i.bottomRight.y,
                                            o.bottomRight.y
                                        )))
                                    : ((n.topLeft.y = Math.max(i.topLeft.y, o.bottomRight.y)),
                                        (n.bottomRight.y = Math.min(i.bottomRight.y, o.topLeft.y)))
                                : e.height >= 0
                                    ? ((n.topLeft.y = Math.min(i.topLeft.y, o.bottomRight.y)),
                                        (n.bottomRight.y = Math.max(i.bottomRight.y, o.topLeft.y)))
                                    : ((n.topLeft.y = Math.min(i.topLeft.y, o.topLeft.y)),
                                        (n.bottomRight.y = Math.max(
                                            i.bottomRight.y,
                                            o.bottomRight.y
                                        ))),
                            n
                        );
                    }
                },
            };
            e.default = o;
        },
    ]);
});
//# sourceMappingURL=cornerstoneMath.min.js.map