/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@tensorflow/tfjs")) : "function" == typeof define && define.amd ? define(["exports", "@tensorflow/tfjs"], t) : t(e.speechCommands = {}, e.tf)
}(this, function(e, t) {
    "use strict";
    var n = function(e, t) {
        return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    };
    var r = function() {
        return (r = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        }).apply(this, arguments)
    };

    function a(e, t, n, r) {
        return new(n || (n = Promise))(function(a, i) {
            function s(e) {
                try {
                    l(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function o(e) {
                try {
                    l(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function l(e) {
                e.done ? a(e.value) : new n(function(t) {
                    t(e.value)
                }).then(s, o)
            }
            l((r = r.apply(e, t || [])).next())
        })
    }

    function i(e, t) {
        var n, r, a, i, s = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function o(i) {
            return function(o) {
                return function(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                        switch (r = 0, a && (i = [2 & i[0], a.value]), i[0]) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return s.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = s.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                    s.label = i[1];
                                    break
                                }
                                if (6 === i[0] && s.label < a[1]) {
                                    s.label = a[1], a = i;
                                    break
                                }
                                if (a && s.label < a[2]) {
                                    s.label = a[2], s.ops.push(i);
                                    break
                                }
                                a[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        i = t.call(e, s)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = a = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, o])
            }
        }
    }

    function s(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator],
            n = 0;
        return t ? t.call(e) : {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        }
    }

    function o(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, a, i = n.call(e),
            s = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
        } catch (e) {
            a = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (a) throw a.error
            }
        }
        return s
    }

    function l() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(o(arguments[t]));
        return e
    }
    var u = null;

    function c(e) {
        return null == u && (u = t.backend().epsilon()), t.tidy(function() {
            var n = t.moments(e),
                r = n.mean,
                a = n.variance;
            return e.sub(r).div(a.sqrt().add(u))
        })
    }
    var h = function() {
        function e(e) {
            var n = this;
            if (null == e) throw new Error("Required configuration object is missing for BrowserFftFeatureExtractor constructor");
            if (null == e.spectrogramCallback) throw new Error("spectrogramCallback cannot be null or undefined");
            if (!(e.numFramesPerSpectrogram > 0)) throw new Error("Invalid value in numFramesPerSpectrogram: " + e.numFramesPerSpectrogram);
            if (e.suppressionTimeMillis < 0) throw new Error("Expected suppressionTimeMillis to be >= 0, but got " + e.suppressionTimeMillis);
            if (this.suppressionTimeMillis = e.suppressionTimeMillis, this.spectrogramCallback = e.spectrogramCallback, this.numFrames = e.numFramesPerSpectrogram, this.sampleRateHz = e.sampleRateHz || 44100, this.fftSize = e.fftSize || 1024, this.frameDurationMillis = this.fftSize / this.sampleRateHz * 1e3, this.columnTruncateLength = e.columnTruncateLength || this.fftSize, this.overlapFactor = e.overlapFactor, this.includeRawAudio = e.includeRawAudio, t.util.assert(this.overlapFactor >= 0 && this.overlapFactor < 1, function() {
                    return "Expected overlapFactor to be >= 0 and < 1, but got " + n.overlapFactor
                }), this.columnTruncateLength > this.fftSize) throw new Error("columnTruncateLength " + this.columnTruncateLength + " exceeds fftSize (" + this.fftSize + ").");
            this.audioContextConstructor = window.AudioContext || window.webkitAudioContext
        }
        return e.prototype.start = function(e) {
            return a(this, void 0, void 0, function() {
                var t, n, r;
                return i(this, function(s) {
                    switch (s.label) {
                        case 0:
                            if (null != this.frameIntervalTask) throw new Error("Cannot start already-started BrowserFftFeatureExtractor");
                            return t = this, [4, function(e) {
                                return a(this, void 0, void 0, function() {
                                    return i(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, navigator.mediaDevices.getUserMedia({
                                                    audio: null == e || e,
                                                    video: !1
                                                })];
                                            case 1:
                                                return [2, t.sent()]
                                        }
                                    })
                                })
                            }(e)];
                        case 1:
                            return t.stream = s.sent(), this.audioContext = new this.audioContextConstructor, this.audioContext.sampleRate !== this.sampleRateHz && console.warn("Mismatch in sampling rate: Expected: " + this.sampleRateHz + "; Actual: " + this.audioContext.sampleRate), n = this.audioContext.createMediaStreamSource(this.stream), this.analyser = this.audioContext.createAnalyser(), this.analyser.fftSize = 2 * this.fftSize, this.analyser.smoothingTimeConstant = 0, n.connect(this.analyser), this.freqDataQueue = [], this.freqData = new Float32Array(this.fftSize), this.includeRawAudio && (this.timeDataQueue = [], this.timeData = new Float32Array(this.fftSize)), r = Math.max(1, Math.round(this.numFrames * (1 - this.overlapFactor))), this.tracker = new f(r, Math.round(this.suppressionTimeMillis / this.frameDurationMillis)), this.frameIntervalTask = setInterval(this.onAudioFrame.bind(this), this.fftSize / this.sampleRateHz * 1e3), [2]
                    }
                })
            })
        }, e.prototype.onAudioFrame = function() {
            return a(this, void 0, void 0, function() {
                var e, n, r, a;
                return i(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return this.analyser.getFloatFrequencyData(this.freqData), this.freqData[0] === -1 / 0 ? [2] : (this.freqDataQueue.push(this.freqData.slice(0, this.columnTruncateLength)), this.includeRawAudio && (this.analyser.getFloatTimeDomainData(this.timeData), this.timeDataQueue.push(this.timeData.slice())), this.freqDataQueue.length > this.numFrames && this.freqDataQueue.shift(), this.tracker.tick() ? (e = d(this.freqDataQueue), n = p(e, [1, this.numFrames, this.columnTruncateLength, 1]), r = void 0, this.includeRawAudio && (a = d(this.timeDataQueue), r = p(a, [1, this.numFrames * this.fftSize])), [4, this.spectrogramCallback(n, r)]) : [3, 2]);
                        case 1:
                            i.sent() && this.tracker.suppress(), t.dispose([n, r]), i.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        }, e.prototype.stop = function() {
            return a(this, void 0, void 0, function() {
                return i(this, function(e) {
                    if (null == this.frameIntervalTask) throw new Error("Cannot stop because there is no ongoing streaming activity.");
                    return clearInterval(this.frameIntervalTask), this.frameIntervalTask = null, this.analyser.disconnect(), this.audioContext.close(), null != this.stream && this.stream.getTracks().length > 0 && this.stream.getTracks()[0].stop(), [2]
                })
            })
        }, e.prototype.setConfig = function(e) {
            throw new Error("setConfig() is not implemented for BrowserFftFeatureExtractor.")
        }, e.prototype.getFeatures = function() {
            throw new Error("getFeatures() is not implemented for BrowserFftFeatureExtractor. Use the spectrogramCallback field of the constructor config instead.")
        }, e
    }();

    function d(e) {
        var t = e[0].length,
            n = new Float32Array(e.length * t);
        return e.forEach(function(e, r) {
            return n.set(e, r * t)
        }), n
    }

    function p(e, n) {
        var r = new Float32Array(t.util.sizeFromShape(n));
        return r.set(e, r.length - e.length), t.tensor(r, n)
    }
    var f = function() {
        function e(e, n) {
            var r = this;
            this.period = e, this.suppressionTime = null == n ? 0 : n, this.counter = 0, t.util.assert(this.period > 0, function() {
                return "Expected period to be positive, but got " + r.period
            })
        }
        return e.prototype.tick = function() {
            return this.counter++, this.counter % this.period == 0 && (null == this.suppressionOnset || this.counter - this.suppressionOnset > this.suppressionTime)
        }, e.prototype.suppress = function() {
            this.suppressionOnset = this.counter
        }, e
    }();

    function m(e) {
        var t = 0;
        e.forEach(function(e) {
            t += e.byteLength
        });
        var n = new Uint8Array(t),
            r = 0;
        return e.forEach(function(e) {
            n.set(new Uint8Array(e), r), r += e.byteLength
        }), n.buffer
    }

    function g(e) {
        var t = 0;
        e.forEach(function(e) {
            return t += e.length
        });
        var n = new Float32Array(t),
            r = 0;
        return e.forEach(function(e) {
            n.set(e, r), r += e.length
        }), n
    }

    function v(e) {
        if (null == e) throw new Error("Received null or undefind string");
        for (var t = unescape(encodeURIComponent(e)), n = new Uint8Array(t.length), r = 0; r < t.length; ++r) n[r] = t.charCodeAt(r);
        return n.buffer
    }

    function y(e) {
        if (null == e) throw new Error("Received null or undefind buffer");
        var t = new Uint8Array(e);
        return decodeURIComponent(escape(String.fromCharCode.apply(String, l(t))))
    }
    var b = "TFJSSCDS",
        w = 1,
        x = function() {
            function e(e) {
                if (this.examples = {}, this.label2Ids = {}, null != e)
                    for (var n = function(e) {
                            t.util.assert(null != e, function() {
                                return "Received null or undefined buffer"
                            });
                            var n = 0,
                                r = y(e.slice(n, b.length));
                            t.util.assert(r === b, function() {
                                return "Deserialization error: Invalid descriptor"
                            }), n += b.length, n += 4;
                            var a = new Uint32Array(e, n, 1),
                                i = n += 4;
                            n = i + a[0];
                            var s = y(e.slice(i, n)),
                                o = JSON.parse(s),
                                l = e.slice(n);
                            return {
                                manifest: o,
                                data: l
                            }
                        }(e), r = 0, a = 0; a < n.manifest.length; ++a) {
                        var i = n.manifest[a],
                            s = i.spectrogramNumFrames * i.spectrogramFrameSize;
                        null != i.rawAudioNumSamples && (s += i.rawAudioNumSamples), s *= 4, this.addExample(E({
                            spec: i,
                            data: n.data.slice(r, r + s)
                        })), r += s
                    }
            }
            return e.prototype.addExample = function(e) {
                t.util.assert(null != e, function() {
                    return "Got null or undefined example"
                }), t.util.assert(null != e.label && e.label.length > 0, function() {
                    return "Expected label to be a non-empty string, but got " + JSON.stringify(e.label)
                });
                var n = function() {
                    function e() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                    }
                    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                }();
                return this.examples[n] = e, e.label in this.label2Ids || (this.label2Ids[e.label] = []), this.label2Ids[e.label].push(n), n
            }, e.prototype.merge = function(e) {
                var n, r, a, i;
                t.util.assert(e !== this, function() {
                    return "Cannot merge a dataset into itself"
                });
                var o = e.getVocabulary();
                try {
                    for (var l = s(o), u = l.next(); !u.done; u = l.next()) {
                        var c = u.value,
                            h = e.getExamples(c);
                        try {
                            for (var d = s(h), p = d.next(); !p.done; p = d.next()) {
                                var f = p.value;
                                this.addExample(f.example)
                            }
                        } catch (e) {
                            a = {
                                error: e
                            }
                        } finally {
                            try {
                                p && !p.done && (i = d.return) && i.call(d)
                            } finally {
                                if (a) throw a.error
                            }
                        }
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        u && !u.done && (r = l.return) && r.call(l)
                    } finally {
                        if (n) throw n.error
                    }
                }
            }, e.prototype.getExampleCounts = function() {
                var e = {};
                for (var t in this.examples) {
                    var n = this.examples[t];
                    n.label in e || (e[n.label] = 0), e[n.label]++
                }
                return e
            }, e.prototype.getExamples = function(e) {
                var n = this;
                t.util.assert(null != e, function() {
                    return "Expected label to be a string, but got " + JSON.stringify(e)
                }), t.util.assert(e in this.label2Ids, function() {
                    return 'No example of label "' + e + '" exists in dataset'
                });
                var r = [];
                return this.label2Ids[e].forEach(function(e) {
                    r.push({
                        uid: e,
                        example: n.examples[e]
                    })
                }), r
            }, e.prototype.getData = function(e, n) {
                var r = this;
                t.util.assert(this.size() > 0, function() {
                    return "Cannot get spectrograms as tensors because the dataset is empty"
                });
                var a = this.getVocabulary();
                null != e ? t.util.assert(-1 !== a.indexOf(e), function() {
                    return "Label " + e + " is not in the vocabulary (" + JSON.stringify(a) + ")"
                }) : t.util.assert(a.length > 1, function() {
                    return "One-hot encoding of labels requires the vocabulary to have at least two words, but it has only " + a.length + " word."
                }), null == n && (n = {});
                var i, o, l = this.getSortedUniqueNumFrames();
                1 === l.length ? (i = null == n.numFrames ? l[0] : n.numFrames, o = null == n.hopFrames ? 1 : n.hopFrames) : (i = n.numFrames, t.util.assert(null != i && Number.isInteger(i) && i > 0, function() {
                    return "There are " + l.length + " unique lengths among the " + r.size() + " examples of this Dataset, hence numFrames is required. But it is not provided."
                }), t.util.assert(i <= l[0], function() {
                    return "numFrames (" + i + ") exceeds the minimum numFrames (" + l[0] + ") among the examples of the Dataset."
                }), o = n.hopFrames, t.util.assert(null != o && Number.isInteger(o) && o > 0, function() {
                    return "There are " + l.length + " unique lengths among the " + r.size() + " examples of this Dataset, hence hopFrames is required. But it is not provided."
                }));
                var u = null == n.normalize || n.normalize;
                return t.tidy(function() {
                    for (var l, h, d, p = [], f = [], m = [], g = 0; g < a.length; ++g) {
                        var v = a[g];
                        if (null == e || v === e) {
                            var y = r.label2Ids[v],
                                b = function(a) {
                                    var l, h, y = r.examples[a].spectrogram,
                                        b = y.frameSize;
                                    null == d ? d = b : t.util.assert(b === d, function() {
                                        return "Mismatch in frameSize  (" + b + " vs " + d + ")"
                                    });
                                    var w = y.data.length / b,
                                        x = null;
                                    "_background_noise_" !== v && (x = null == y.keyFrameIndex ? M(y).dataSync()[0] : y.keyFrameIndex);
                                    var S = t.tensor3d(y.data, [w, b, 1]),
                                        E = T(w, x, i, o),
                                        F = function(r) {
                                            var a = t.tidy(function() {
                                                var e = S.slice([r[0], 0, 0], [r[1] - r[0], -1, -1]);
                                                return u ? c(e) : e
                                            });
                                            n.getDataset ? f.push(a.dataSync()) : p.push(a), null == e && m.push(g)
                                        };
                                    try {
                                        for (var z = s(E), D = z.next(); !D.done; D = z.next()) {
                                            F(D.value)
                                        }
                                    } catch (e) {
                                        l = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            D && !D.done && (h = z.return) && h.call(z)
                                        } finally {
                                            if (l) throw l.error
                                        }
                                    }
                                    t.dispose(S)
                                };
                            try {
                                for (var w = s(y), x = w.next(); !x.done; x = w.next()) {
                                    b(x.value)
                                }
                            } catch (e) {
                                l = {
                                    error: e
                                }
                            } finally {
                                try {
                                    x && !x.done && (h = w.return) && h.call(w)
                                } finally {
                                    if (l) throw l.error
                                }
                            }
                        }
                    }
                    null != n.augmentByMixingNoiseRatio && r.augmentByMixingNoise(n.getDataset ? f : p, m, n.augmentByMixingNoiseRatio);
                    var S = null == n.shuffle || n.shuffle;
                    if (n.getDataset) {
                        var E = null == n.datasetBatchSize ? 32 : n.datasetBatchSize,
                            F = null == n.datasetValidationSplit ? .15 : n.datasetValidationSplit;
                        t.util.assert(F > 0 && F < 1, function() {
                            return "Invalid dataset validation split: " + F
                        });
                        var z = f.map(function(e, t) {
                            return [e, m[t]]
                        });
                        t.util.shuffle(z), f = z.map(function(e) {
                            return e[0]
                        });
                        var D = z.map(function(e) {
                                return e[1]
                            }),
                            I = function(e, n, r) {
                                var a, i, o, l, u, c, h, d;
                                t.util.assert(r > 0 && r < 1, function() {
                                    return "validationSplit is expected to be >0 and <1, but got " + r
                                });
                                for (var p = !Array.isArray(e[0]), f = n, m = [], g = 0; g < f.length; ++g) {
                                    var v = f[g];
                                    null == m[v] && (m[v] = []), m[v].push(g)
                                }
                                var y = m.length,
                                    b = [],
                                    w = [];
                                for (m.map(function(e) {
                                        return t.util.shuffle(e)
                                    }), g = 0; g < y; ++g)
                                    for (var x = m[g], S = Math.round(x.length * (1 - r)), E = 0; E < x.length; ++E) E < S ? b.push(x[E]) : w.push(x[E]);
                                if (p) {
                                    var T = [],
                                        F = [],
                                        M = [],
                                        z = [];
                                    try {
                                        for (var D = s(b), I = D.next(); !I.done; I = D.next()) {
                                            var L = I.value;
                                            T.push(e[L]), F.push(n[L])
                                        }
                                    } catch (e) {
                                        a = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            I && !I.done && (i = D.return) && i.call(D)
                                        } finally {
                                            if (a) throw a.error
                                        }
                                    }
                                    try {
                                        for (var R = s(w), A = R.next(); !A.done; A = R.next()) L = A.value, M.push(e[L]), z.push(n[L])
                                    } catch (e) {
                                        o = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            A && !A.done && (l = R.return) && l.call(R)
                                        } finally {
                                            if (o) throw o.error
                                        }
                                    }
                                    return {
                                        trainXs: T,
                                        trainYs: F,
                                        valXs: M,
                                        valYs: z
                                    }
                                }
                                T = [], F = [], M = [], z = [];
                                try {
                                    for (var C = s(b), k = C.next(); !k.done; k = C.next()) L = k.value, T.push(e[L]), F.push(n[L])
                                } catch (e) {
                                    u = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        k && !k.done && (c = C.return) && c.call(C)
                                    } finally {
                                        if (u) throw u.error
                                    }
                                }
                                try {
                                    for (var O = s(w), _ = O.next(); !_.done; _ = O.next()) L = _.value, M.push(e[L]), z.push(n[L])
                                } catch (e) {
                                    h = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        _ && !_.done && (d = O.return) && d.call(O)
                                    } finally {
                                        if (h) throw h.error
                                    }
                                }
                                return {
                                    trainXs: T,
                                    trainYs: F,
                                    valXs: M,
                                    valYs: z
                                }
                            }(f, D, F),
                            L = I.trainXs,
                            R = I.trainYs,
                            A = I.valXs,
                            C = I.valYs,
                            k = t.data.array(L).map(function(e) {
                                return t.tensor3d(e, [i, d, 1])
                            }),
                            O = t.data.array(R).map(function(e) {
                                return t.oneHot([e], a.length).squeeze([0])
                            }),
                            _ = t.data.zip({
                                xs: k,
                                ys: O
                            });
                        S && (_ = _.shuffle(f.length)), _ = _.batch(E).prefetch(4);
                        var N = t.data.array(A).map(function(e) {
                                return t.tensor3d(e, [i, d, 1])
                            }),
                            B = t.data.array(C).map(function(e) {
                                return t.oneHot([e], a.length).squeeze([0])
                            }),
                            U = t.data.zip({
                                xs: N,
                                ys: B
                            });
                        return [_, U = U.batch(E).prefetch(4)]
                    }
                    if (S) {
                        var H = [];
                        p.forEach(function(e, t) {
                            H.push({
                                x: e,
                                y: m[t]
                            })
                        }), t.util.shuffle(H), p = H.map(function(e) {
                            return e.x
                        }), m = H.map(function(e) {
                            return e.y
                        })
                    }
                    var P = null == e ? t.oneHot(t.tensor1d(m, "int32"), a.length).asType("float32") : void 0;
                    return {
                        xs: t.stack(p),
                        ys: P
                    }
                })
            }, e.prototype.augmentByMixingNoise = function(e, n, r) {
                var a, i;
                if (null == e || 0 === e.length) throw new Error("Cannot perform augmentation because data is null or empty");
                for (var o = e[0] instanceof Float32Array, u = this.getVocabulary(), h = [], d = [], p = 0; p < n.length; ++p) "_background_noise_" === u[n[p]] ? h.push(p) : d.push(p);
                if (0 === h.length) throw new Error("Cannot perform augmentation by mixing with noise when there is no example with label _background_noise_");
                var f = [],
                    m = [],
                    g = function(a) {
                        var i, s, l = h[(i = 0, s = h.length, Math.floor((s - i) * Math.random()) + i)],
                            u = o ? t.tensor1d(e[a]) : e[a],
                            d = o ? t.tensor1d(e[l]) : e[l],
                            p = t.tidy(function() {
                                return c(u.add(d.mul(r)))
                            });
                        o ? f.push(p.dataSync()) : f.push(p), m.push(n[a])
                    };
                try {
                    for (var v = s(d), y = v.next(); !y.done; y = v.next()) {
                        g(y.value)
                    }
                } catch (e) {
                    a = {
                        error: e
                    }
                } finally {
                    try {
                        y && !y.done && (i = v.return) && i.call(v)
                    } finally {
                        if (a) throw a.error
                    }
                }
                console.log("Data augmentation: mixing noise: added " + f.length + " examples"), f.forEach(function(t) {
                    return e.push(t)
                }), n.push.apply(n, l(m))
            }, e.prototype.getSortedUniqueNumFrames = function() {
                for (var e, t, n = new Set, r = this.getVocabulary(), a = 0; a < r.length; ++a) {
                    var i = r[a],
                        o = this.label2Ids[i];
                    try {
                        for (var u = s(o), c = u.next(); !c.done; c = u.next()) {
                            var h = c.value,
                                d = this.examples[h].spectrogram,
                                p = d.data.length / d.frameSize;
                            n.add(p)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            c && !c.done && (t = u.return) && t.call(u)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                }
                var f = l(n);
                return f.sort(), f
            }, e.prototype.removeExample = function(e) {
                if (!(e in this.examples)) throw new Error("Nonexistent example UID: " + e);
                var t = this.examples[e].label;
                delete this.examples[e];
                var n = this.label2Ids[t].indexOf(e);
                this.label2Ids[t].splice(n, 1), 0 === this.label2Ids[t].length && delete this.label2Ids[t]
            }, e.prototype.setExampleKeyFrameIndex = function(e, n) {
                if (!(e in this.examples)) throw new Error("Nonexistent example UID: " + e);
                var r = this.examples[e].spectrogram,
                    a = r.data.length / r.frameSize;
                t.util.assert(n >= 0 && n < a && Number.isInteger(n), function() {
                    return "Invalid keyFrameIndex: " + n + ". Must be >= 0, < " + a + ", and an integer."
                }), r.keyFrameIndex = n
            }, e.prototype.size = function() {
                return Object.keys(this.examples).length
            }, e.prototype.durationMillis = function() {
                var e = 0;
                for (var t in this.examples) {
                    var n = this.examples[t].spectrogram,
                        r = 23.22 | n.frameDurationMillis;
                    e += n.data.length / n.frameSize * r
                }
                return e
            }, e.prototype.empty = function() {
                return 0 === this.size()
            }, e.prototype.clear = function() {
                this.examples = {}
            }, e.prototype.getVocabulary = function() {
                var e = new Set;
                for (var t in this.examples) {
                    var n = this.examples[t];
                    e.add(n.label)
                }
                var r = l(e);
                return r.sort(), r
            }, e.prototype.serialize = function(e) {
                var n, r, a, i, o = this.getVocabulary();
                t.util.assert(!this.empty(), function() {
                    return "Cannot serialize empty Dataset"
                }), null != e && (Array.isArray(e) || (e = [e]), e.forEach(function(e) {
                    if (-1 === o.indexOf(e)) throw new Error('Word label "' + e + '" does not exist in the vocabulary of this dataset. The vocabulary is: ' + JSON.stringify(o) + ".")
                }));
                var l, u, c, h, d, p = [],
                    f = [];
                try {
                    for (var g = s(o), y = g.next(); !y.done; y = g.next()) {
                        var x = y.value;
                        if (null == e || -1 !== e.indexOf(x)) {
                            var E = this.label2Ids[x];
                            try {
                                for (var T = s(E), F = T.next(); !F.done; F = T.next()) {
                                    var M = F.value,
                                        z = S(this.examples[M]);
                                    p.push(z.spec), f.push(z.data)
                                }
                            } catch (e) {
                                a = {
                                    error: e
                                }
                            } finally {
                                try {
                                    F && !F.done && (i = T.return) && i.call(T)
                                } finally {
                                    if (a) throw a.error
                                }
                            }
                        }
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        y && !y.done && (r = g.return) && r.call(g)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return l = {
                    manifest: p,
                    data: m(f)
                }, u = v(JSON.stringify(l.manifest)), c = v(b), h = new Uint32Array([w]), d = new Uint32Array([u.byteLength]), m([m([c, h.buffer, d.buffer]), u, l.data])
            }, e
        }();

    function S(e) {
        var t = null != e.rawAudio,
            n = {
                label: e.label,
                spectrogramNumFrames: e.spectrogram.data.length / e.spectrogram.frameSize,
                spectrogramFrameSize: e.spectrogram.frameSize
            };
        null != e.spectrogram.keyFrameIndex && (n.spectrogramKeyFrameIndex = e.spectrogram.keyFrameIndex);
        var r = e.spectrogram.data.buffer.slice(0);
        return t && (n.rawAudioNumSamples = e.rawAudio.data.length, n.rawAudioSampleRateHz = e.rawAudio.sampleRateHz, r = m([r, e.rawAudio.data.buffer])), {
            spec: n,
            data: r
        }
    }

    function E(e) {
        var t = {
            frameSize: e.spec.spectrogramFrameSize,
            data: new Float32Array(e.data.slice(0, 4 * e.spec.spectrogramFrameSize * e.spec.spectrogramNumFrames))
        };
        null != e.spec.spectrogramKeyFrameIndex && (t.keyFrameIndex = e.spec.spectrogramKeyFrameIndex);
        var n = {
            label: e.spec.label,
            spectrogram: t
        };
        return null != e.spec.rawAudioNumSamples && (n.rawAudio = {
            sampleRateHz: e.spec.rawAudioSampleRateHz,
            data: new Float32Array(e.data.slice(4 * e.spec.spectrogramFrameSize * e.spec.spectrogramNumFrames))
        }), n
    }

    function T(e, n, r, a) {
        if (t.util.assert(Number.isInteger(e) && e > 0, function() {
                return "snippetLength must be a positive integer, but got " + e
            }), null != n && t.util.assert(Number.isInteger(n) && n >= 0, function() {
                return "focusIndex must be a non-negative integer, but got " + n
            }), t.util.assert(Number.isInteger(r) && r > 0, function() {
                return "windowLength must be a positive integer, but got " + r
            }), t.util.assert(Number.isInteger(a) && a > 0, function() {
                return "windowHop must be a positive integer, but got " + a
            }), t.util.assert(r <= e, function() {
                return "windowLength (" + r + ") exceeds snippetLength (" + e + ")"
            }), t.util.assert(n < e, function() {
                return "focusIndex (" + n + ") equals or exceeds snippetLength (" + e + ")"
            }), r === e) return [
            [0, e]
        ];
        var i = [];
        if (null == n) {
            for (var s = 0; s + r <= e;) i.push([s, s + r]), s += a;
            return i
        }
        var o = Math.floor(r / 2),
            l = n - o;
        for (l < 0 ? l = 0 : l + r > e && (l = e - r); !(l - a < 0 || n >= l - a + r);) l -= a;
        for (; l + r <= e && !(n < l);) i.push([l, l + r]), l += a;
        return i
    }

    function F(e) {
        return t.tidy(function() {
            var n = e.data.length / e.frameSize;
            return t.tensor2d(e.data, [n, e.frameSize]).mean(-1)
        })
    }

    function M(e) {
        return t.tidy(function() {
            return F(e).argMax()
        })
    }
    var z = "0.3.6",
        D = "tfjs-speech-commands-saved-model-metadata",
        I = "indexeddb://tfjs-speech-commands-model/",
        L = {
            localStorage: "undefined" == typeof window ? null : window.localStorage
        };
    var R = function() {
            function e(n, r, a) {
                this.MODEL_URL_PREFIX = "https://storage.googleapis.com/tfjs-models/tfjs/speech-commands/v" + z.split(".").slice(0, 2).join(".") + "/browser_fft", this.SAMPLE_RATE_HZ = 44100, this.FFT_SIZE = 1024, this.DEFAULT_SUPPRESSION_TIME_MILLIS = 0, this.streaming = !1, this.transferRecognizers = {}, t.util.assert(null == r && null == a || null != r && null != a, function() {
                    return "modelURL and metadataURL must be both provided or both not provided."
                }), null == r ? (null == n ? n = e.DEFAULT_VOCABULARY_NAME : t.util.assert(-1 !== e.VALID_VOCABULARY_NAMES.indexOf(n), function() {
                    return "Invalid vocabulary name: '" + n + "'"
                }), this.vocabulary = n, this.modelURL = this.MODEL_URL_PREFIX + "/" + this.vocabulary + "/model.json", this.metadataURL = this.MODEL_URL_PREFIX + "/" + this.vocabulary + "/metadata.json") : (t.util.assert(null == n, function() {
                    return "vocabulary name must be null or undefined when modelURL is provided"
                }), this.modelURL = r, this.metadataURL = a), this.parameters = {
                    sampleRateHz: this.SAMPLE_RATE_HZ,
                    fftSize: this.FFT_SIZE
                }
            }
            return e.prototype.listen = function(e, n) {
                return a(this, void 0, void 0, function() {
                    var r, s, u, d, p, f = this;
                    return i(this, function(m) {
                        switch (m.label) {
                            case 0:
                                if (this.streaming) throw new Error("Cannot start streaming again when streaming is ongoing.");
                                return [4, this.ensureModelLoaded()];
                            case 1:
                                if (m.sent(), null == n && (n = {}), r = null == n.probabilityThreshold ? 0 : n.probabilityThreshold, n.includeEmbedding && (r = 0), t.util.assert(r >= 0 && r <= 1, function() {
                                        return "Invalid probabilityThreshold value: " + r
                                    }), s = null != n.invokeCallbackOnNoiseAndUnknown && n.invokeCallbackOnNoiseAndUnknown, n.includeEmbedding && (s = !0), n.suppressionTimeMillis < 0) throw new Error("suppressionTimeMillis is expected to be >= 0, but got " + n.suppressionTimeMillis);
                                return u = null == n.overlapFactor ? .5 : n.overlapFactor, t.util.assert(u >= 0 && u < 1, function() {
                                    return "Expected overlapFactor to be >= 0 and < 1, but got " + u
                                }), d = function(u, h) {
                                    return a(f, void 0, void 0, function() {
                                        var a, h, d, p, f, m, g, v, y, b, w;
                                        return i(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return h = c(u), n.includeEmbedding ? [4, this.ensureModelWithEmbeddingOutputCreated()] : [3, 2];
                                                case 1:
                                                    return i.sent(), a = o(this.modelWithEmbeddingOutput.predict(h), 2), d = a[0], p = a[1], [3, 3];
                                                case 2:
                                                    d = this.model.predict(h), i.label = 3;
                                                case 3:
                                                    return [4, d.data()];
                                                case 4:
                                                    return f = i.sent(), [4, (m = d.argMax(-1)).data()];
                                                case 5:
                                                    return g = i.sent()[0], v = Math.max.apply(Math, l(f)), t.dispose([d, m, h]), v < r ? [2, !1] : [3, 6];
                                                case 6:
                                                    return y = void 0, n.includeSpectrogram ? (b = {}, [4, u.data()]) : [3, 8];
                                                case 7:
                                                    b.data = i.sent(), b.frameSize = this.nonBatchInputShape[1], y = b, i.label = 8;
                                                case 8:
                                                    return w = !0, s || "_background_noise_" !== this.words[g] && "_unknown_" !== this.words[g] || (w = !1), w && e({
                                                        scores: f,
                                                        spectrogram: y,
                                                        embedding: p
                                                    }), [2, w]
                                            }
                                        })
                                    })
                                }, p = null == n.suppressionTimeMillis ? this.DEFAULT_SUPPRESSION_TIME_MILLIS : n.suppressionTimeMillis, this.audioDataExtractor = new h({
                                    sampleRateHz: this.parameters.sampleRateHz,
                                    numFramesPerSpectrogram: this.nonBatchInputShape[0],
                                    columnTruncateLength: this.nonBatchInputShape[1],
                                    suppressionTimeMillis: p,
                                    spectrogramCallback: d,
                                    overlapFactor: u
                                }), [4, this.audioDataExtractor.start(n.audioTrackConstraints)];
                            case 2:
                                return m.sent(), this.streaming = !0, [2]
                        }
                    })
                })
            }, e.prototype.ensureModelLoaded = function() {
                return a(this, void 0, void 0, function() {
                    var e, n, r, a, s = this;
                    return i(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return null != this.model ? [2] : [4, this.ensureMetadataLoaded()];
                            case 1:
                                return i.sent(), [4, t.loadLayersModel(this.modelURL)];
                            case 2:
                                if (1 !== (e = i.sent()).inputs.length) throw new Error("Expected model to have 1 input, but got a model with " + e.inputs.length + " inputs");
                                if (4 !== e.inputs[0].shape.length) throw new Error("Expected model to have an input shape of rank 4, but got an input shape of rank " + e.inputs[0].shape.length);
                                if (1 !== e.inputs[0].shape[3]) throw new Error("Expected model to have an input shape with 1 as the last dimension, but got input shape" + JSON.stringify(e.inputs[0].shape[3]) + "}");
                                if (2 !== (n = e.outputShape).length) throw new Error("Expected loaded model to have an output shape of rank 2,but received shape " + JSON.stringify(n));
                                if (n[1] !== this.words.length) throw new Error("Mismatch between the last dimension of model's output shape (" + n[1] + ") and number of words (" + this.words.length + ").");
                                return this.model = e, this.freezeModel(), this.nonBatchInputShape = e.inputs[0].shape.slice(1), this.elementsPerExample = 1, e.inputs[0].shape.slice(1).forEach(function(e) {
                                    return s.elementsPerExample *= e
                                }), this.warmUpModel(), r = this.parameters.fftSize / this.parameters.sampleRateHz * 1e3, a = e.inputs[0].shape[1], this.parameters.spectrogramDurationMillis = a * r, [2]
                        }
                    })
                })
            }, e.prototype.ensureModelWithEmbeddingOutputCreated = function() {
                return a(this, void 0, void 0, function() {
                    var e, n;
                    return i(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return null != this.modelWithEmbeddingOutput ? [2] : [4, this.ensureModelLoaded()];
                            case 1:
                                for (r.sent(), n = this.model.layers.length - 2; n >= 0; --n)
                                    if ("Dense" === this.model.layers[n].getClassName()) {
                                        e = this.model.layers[n];
                                        break
                                    }
                                if (null == e) throw new Error("Failed to find second last dense layer in the original model.");
                                return this.modelWithEmbeddingOutput = t.model({
                                    inputs: this.model.inputs,
                                    outputs: [this.model.outputs[0], e.output]
                                }), [2]
                        }
                    })
                })
            }, e.prototype.warmUpModel = function() {
                var e = this;
                t.tidy(function() {
                    for (var n = t.zeros([1].concat(e.nonBatchInputShape)), r = 0; r < 3; ++r) e.model.predict(n)
                })
            }, e.prototype.ensureMetadataLoaded = function() {
                return a(this, void 0, void 0, function() {
                    var e, t;
                    return i(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return null != this.words ? [2] : [4, function(e) {
                                    return a(this, void 0, void 0, function() {
                                        return i(this, function(t) {
                                            return [2, new Promise(function(t, n) {
                                                0 === e.indexOf("http://") || 0 === e.indexOf("https://") ? fetch(e).then(function(e) {
                                                    e.json().then(function(e) {
                                                        return t(e)
                                                    })
                                                }) : 0 === e.indexOf("file://") ? require("fs").readFile(e.slice("file://".length), {
                                                    encoding: "utf-8"
                                                }, function(e, n) {
                                                    return t(JSON.parse(n))
                                                }) : n(new Error("Unsupported URL scheme in metadata URL: " + e + ". Supported schemes are: http://, https://, and (node.js-only) file://"))
                                            })]
                                        })
                                    })
                                }(this.metadataURL)];
                            case 1:
                                if (null == (e = n.sent()).wordLabels) {
                                    if (null == (t = e.words)) throw new Error('Cannot find field "words" or "wordLabels" in metadata JSON file');
                                    this.words = t
                                } else this.words = e.wordLabels;
                                return [2]
                        }
                    })
                })
            }, e.prototype.stopListening = function() {
                return a(this, void 0, void 0, function() {
                    return i(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (!this.streaming) throw new Error("Cannot stop streaming when streaming is not ongoing.");
                                return [4, this.audioDataExtractor.stop()];
                            case 1:
                                return e.sent(), this.streaming = !1, [2]
                        }
                    })
                })
            }, e.prototype.isListening = function() {
                return this.streaming
            }, e.prototype.wordLabels = function() {
                return this.words
            }, e.prototype.params = function() {
                return this.parameters
            }, e.prototype.modelInputShape = function() {
                if (null == this.model) throw new Error("Model has not been loaded yet. Load model by calling ensureModelLoaded(), recognize(), or listen().");
                return this.model.inputs[0].shape
            }, e.prototype.recognize = function(e, n) {
                return a(this, void 0, void 0, function() {
                    var r, a, s, o, l, u, c, h, d, p, f, m, g;
                    return i(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return null == n && (n = {}), [4, this.ensureModelLoaded()];
                            case 1:
                                return i.sent(), null != e ? [3, 3] : [4, this.recognizeOnline()];
                            case 2:
                                r = i.sent(), e = r.data, i.label = 3;
                            case 3:
                                if (e instanceof t.Tensor) this.checkInputTensorShape(e), s = e, a = e.shape[0];
                                else {
                                    if ((e = e).length % this.elementsPerExample) throw new Error("The length of the input Float32Array " + e.length + " is not divisible by the number of tensor elements per per example expected by the model " + this.elementsPerExample + ".");
                                    a = e.length / this.elementsPerExample, s = t.tensor4d(e, [a].concat(this.nonBatchInputShape))
                                }
                                return l = {
                                    scores: null
                                }, n.includeEmbedding ? [4, this.ensureModelWithEmbeddingOutputCreated()] : [3, 5];
                            case 4:
                                return i.sent(), u = this.modelWithEmbeddingOutput.predict(s), o = u[0], l.embedding = u[1], [3, 6];
                            case 5:
                                o = this.model.predict(s), i.label = 6;
                            case 6:
                                return 1 !== a ? [3, 8] : (c = l, [4, o.data()]);
                            case 7:
                                return c.scores = i.sent(), [3, 10];
                            case 8:
                                return h = t.unstack(o), d = h.map(function(e) {
                                    return e.data()
                                }), p = l, [4, Promise.all(d)];
                            case 9:
                                p.scores = i.sent(), t.dispose(h), i.label = 10;
                            case 10:
                                return n.includeSpectrogram ? (f = l, m = {}, e instanceof t.Tensor ? [4, e.data()] : [3, 12]) : [3, 14];
                            case 11:
                                return g = i.sent(), [3, 13];
                            case 12:
                                g = e, i.label = 13;
                            case 13:
                                f.spectrogram = (m.data = g, m.frameSize = this.nonBatchInputShape[1], m), i.label = 14;
                            case 14:
                                return [2, l]
                        }
                    })
                })
            }, e.prototype.recognizeOnline = function() {
                return a(this, void 0, void 0, function() {
                    var e = this;
                    return i(this, function(t) {
                        return [2, new Promise(function(t, n) {
                            e.audioDataExtractor = new h({
                                sampleRateHz: e.parameters.sampleRateHz,
                                numFramesPerSpectrogram: e.nonBatchInputShape[0],
                                columnTruncateLength: e.nonBatchInputShape[1],
                                suppressionTimeMillis: 0,
                                spectrogramCallback: function(n) {
                                    return a(e, void 0, void 0, function() {
                                        var e, r, a;
                                        return i(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return e = c(n), [4, this.audioDataExtractor.stop()];
                                                case 1:
                                                    return i.sent(), r = t, a = {}, [4, e.data()];
                                                case 2:
                                                    return r.apply(void 0, [(a.data = i.sent(), a.frameSize = this.nonBatchInputShape[1], a)]), e.dispose(), [2, !1]
                                            }
                                        })
                                    })
                                },
                                overlapFactor: 0
                            }), e.audioDataExtractor.start()
                        })]
                    })
                })
            }, e.prototype.createTransfer = function(e) {
                if (null == this.model) throw new Error("Model has not been loaded yet. Load model by calling ensureModelLoaded(), recognizer(), or listen().");
                t.util.assert(null != e && "string" == typeof e && e.length > 1, function() {
                    return "Expected the name for a transfer-learning recognized to be a non-empty string, but got " + JSON.stringify(e)
                }), t.util.assert(null == this.transferRecognizers[e], function() {
                    return "There is already a transfer-learning model named '" + e + "'"
                });
                var n = new A(e, this.parameters, this.model);
                return this.transferRecognizers[e] = n, n
            }, e.prototype.freezeModel = function() {
                var e, t;
                try {
                    for (var n = s(this.model.layers), r = n.next(); !r.done; r = n.next()) {
                        r.value.trainable = !1
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (t = n.return) && t.call(n)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, e.prototype.checkInputTensorShape = function(e) {
                var n = this.model.inputs[0].shape.length;
                if (e.shape.length !== n) throw new Error("Expected input Tensor to have rank " + n + ", but got rank " + e.shape.length + " that differs ");
                var r = e.shape.slice(1),
                    a = this.model.inputs[0].shape.slice(1);
                if (!t.util.arraysEqual(r, a)) throw new Error("Expected input to have shape [null," + a + "], but got shape [null," + r + "]")
            }, e.VALID_VOCABULARY_NAMES = ["18w", "directional4w"], e.DEFAULT_VOCABULARY_NAME = "18w", e
        }(),
        A = function(e) {
            function l(n, r, a) {
                var i = e.call(this) || this;
                return i.name = n, i.parameters = r, i.baseModel = a, t.util.assert(null != n && "string" == typeof n && n.length > 0, function() {
                    return "The name of a transfer model must be a non-empty string, but got " + JSON.stringify(n)
                }), i.nonBatchInputShape = i.baseModel.inputs[0].shape.slice(1), i.words = null, i.dataset = new x, i
            }
            return function(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }(l, e), l.prototype.collectExample = function(e, n) {
                return a(this, void 0, void 0, function() {
                    var r, s, o, l, d = this;
                    return i(this, function(p) {
                        if (t.util.assert(!this.streaming, function() {
                                return "Cannot start collection of transfer-learning example because a streaming recognition or transfer-learning example collection is ongoing"
                            }), t.util.assert(null != e && "string" == typeof e && e.length > 0, function() {
                                return "Must provide a non-empty string when collecting transfer-learning example"
                            }), null == n && (n = {}), null != n.durationMultiplier && null != n.durationSec) throw new Error("durationMultiplier and durationSec are mutually exclusive, but are both specified.");
                        return null != n.durationSec ? (t.util.assert(n.durationSec > 0, function() {
                            return "Expected durationSec to be > 0, but got " + n.durationSec
                        }), s = this.parameters.fftSize / this.parameters.sampleRateHz, r = Math.ceil(n.durationSec / s)) : null != n.durationMultiplier ? (t.util.assert(n.durationMultiplier >= 1, function() {
                            return "Expected duration multiplier to be >= 1, but got " + n.durationMultiplier
                        }), r = Math.round(this.nonBatchInputShape[0] * n.durationMultiplier)) : r = this.nonBatchInputShape[0], null != n.snippetDurationSec && (t.util.assert(n.snippetDurationSec > 0, function() {
                            return "snippetDurationSec is expected to be > 0, but got " + n.snippetDurationSec
                        }), t.util.assert(null != n.onSnippet, function() {
                            return "onSnippet must be provided if snippetDurationSec is provided."
                        })), null != n.onSnippet && t.util.assert(null != n.snippetDurationSec, function() {
                            return "snippetDurationSec must be provided if onSnippet is provided."
                        }), o = this.parameters.fftSize / this.parameters.sampleRateHz, l = o * r, this.streaming = !0, [2, new Promise(function(s) {
                            var o = null == n.snippetDurationSec ? 1 : n.snippetDurationSec / l,
                                p = 1 - o,
                                f = Math.round(1 / o),
                                m = 0,
                                v = -1,
                                y = [];
                            d.audioDataExtractor = new h({
                                sampleRateHz: d.parameters.sampleRateHz,
                                numFramesPerSpectrogram: r,
                                columnTruncateLength: d.nonBatchInputShape[1],
                                suppressionTimeMillis: 0,
                                spectrogramCallback: function(r, o) {
                                    return a(d, void 0, void 0, function() {
                                        var a, l, h, d, p, b, w, x, S, E, T, F, M, z, D, I, L, R, A, C;
                                        return i(this, function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return null != n.onSnippet ? [3, 7] : (a = c(r), h = (l = this.dataset).addExample, d = {
                                                        label: e
                                                    }, p = {}, [4, a.data()]);
                                                case 1:
                                                    return d.spectrogram = (p.data = i.sent(), p.frameSize = this.nonBatchInputShape[1], p), n.includeRawAudio ? (w = {}, [4, o.data()]) : [3, 3];
                                                case 2:
                                                    return w.data = i.sent(), w.sampleRateHz = this.audioDataExtractor.sampleRateHz, b = w, [3, 4];
                                                case 3:
                                                    b = void 0, i.label = 4;
                                                case 4:
                                                    return h.apply(l, [(d.rawAudio = b, d)]), a.dispose(), [4, this.audioDataExtractor.stop()];
                                                case 5:
                                                    return i.sent(), this.streaming = !1, this.collateTransferWords(), x = s, S = {}, [4, r.data()];
                                                case 6:
                                                    return x.apply(void 0, [(S.data = i.sent(), S.frameSize = this.nonBatchInputShape[1], S)]), [3, 13];
                                                case 7:
                                                    return [4, r.data()];
                                                case 8:
                                                    for (E = i.sent(), -1 === v && (v = E.length), T = v - 1; 0 !== E[T] && T >= 0;) T--;
                                                    return F = v - T - 1, v = T + 1, M = E.slice(E.length - F, E.length), y.push(M), null != n.onSnippet && n.onSnippet({
                                                        data: M,
                                                        frameSize: this.nonBatchInputShape[1]
                                                    }), m++ !== f ? [3, 13] : [4, this.audioDataExtractor.stop()];
                                                case 9:
                                                    return i.sent(), this.streaming = !1, this.collateTransferWords(), z = function(e) {
                                                        if (e.length < 2) throw new Error("Cannot normalize a Float32Array with fewer than 2 elements.");
                                                        return null == u && (u = t.backend().epsilon()), t.tidy(function() {
                                                            var n = t.moments(t.tensor1d(e)),
                                                                r = n.mean,
                                                                a = n.variance,
                                                                i = r.arraySync(),
                                                                s = Math.sqrt(a.arraySync()),
                                                                o = Array.from(e).map(function(e) {
                                                                    return (e - i) / (s + u)
                                                                });
                                                            return new Float32Array(o)
                                                        })
                                                    }(g(y)), D = {
                                                        data: z,
                                                        frameSize: this.nonBatchInputShape[1]
                                                    }, L = (I = this.dataset).addExample, R = {
                                                        label: e,
                                                        spectrogram: D
                                                    }, n.includeRawAudio ? (C = {}, [4, o.data()]) : [3, 11];
                                                case 10:
                                                    return C.data = i.sent(), C.sampleRateHz = this.audioDataExtractor.sampleRateHz, A = C, [3, 12];
                                                case 11:
                                                    A = void 0, i.label = 12;
                                                case 12:
                                                    L.apply(I, [(R.rawAudio = A, R)]), s(D), i.label = 13;
                                                case 13:
                                                    return [2, !1]
                                            }
                                        })
                                    })
                                },
                                overlapFactor: p,
                                includeRawAudio: n.includeRawAudio
                            }), d.audioDataExtractor.start(n.audioTrackConstraints)
                        })]
                    })
                })
            }, l.prototype.clearExamples = function() {
                var e = this;
                t.util.assert(null != this.words && this.words.length > 0 && !this.dataset.empty(), function() {
                    return "No transfer learning examples exist for model name " + e.name
                }), this.dataset.clear(), this.words = null
            }, l.prototype.countExamples = function() {
                if (this.dataset.empty()) throw new Error("No examples have been collected for transfer-learning model named '" + this.name + "' yet.");
                return this.dataset.getExampleCounts()
            }, l.prototype.getExamples = function(e) {
                return this.dataset.getExamples(e)
            }, l.prototype.setExampleKeyFrameIndex = function(e, t) {
                this.dataset.setExampleKeyFrameIndex(e, t)
            }, l.prototype.removeExample = function(e) {
                this.dataset.removeExample(e), this.collateTransferWords()
            }, l.prototype.isDatasetEmpty = function() {
                return this.dataset.empty()
            }, l.prototype.loadExamples = function(e, t) {
                var n, r, a, i;
                void 0 === t && (t = !1);
                var o = new x(e);
                t && this.clearExamples();
                var l = o.getVocabulary();
                try {
                    for (var u = s(l), c = u.next(); !c.done; c = u.next()) {
                        var h = c.value,
                            d = o.getExamples(h);
                        try {
                            for (var p = s(d), f = p.next(); !f.done; f = p.next()) {
                                var m = f.value;
                                this.dataset.addExample(m.example)
                            }
                        } catch (e) {
                            a = {
                                error: e
                            }
                        } finally {
                            try {
                                f && !f.done && (i = p.return) && i.call(p)
                            } finally {
                                if (a) throw a.error
                            }
                        }
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        c && !c.done && (r = u.return) && r.call(u)
                    } finally {
                        if (n) throw n.error
                    }
                }
                this.collateTransferWords()
            }, l.prototype.serializeExamples = function(e) {
                return this.dataset.serialize(e)
            }, l.prototype.collateTransferWords = function() {
                this.words = this.dataset.getVocabulary()
            }, l.prototype.collectTransferDataAsTensors = function(e, t) {
                var n = this.nonBatchInputShape[0];
                e = e || .25;
                var a = Math.round(e * n),
                    i = this.dataset.getData(null, r({
                        numFrames: n,
                        hopFrames: a
                    }, t));
                return {
                    xs: i.xs,
                    ys: i.ys
                }
            }, l.prototype.collectTransferDataAsTfDataset = function(e, t, n, a) {
                void 0 === t && (t = .15), void 0 === n && (n = 32);
                var i = this.nonBatchInputShape[0];
                e = e || .25;
                var s = Math.round(e * i);
                return this.dataset.getData(null, r({
                    numFrames: i,
                    hopFrames: s,
                    getDataset: !0,
                    datasetBatchSize: n,
                    datasetValidationSplit: t
                }, a))
            }, l.prototype.train = function(e) {
                return a(this, void 0, void 0, function() {
                    var n, r = this;
                    return i(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return t.util.assert(null != this.words && this.words.length > 0, function() {
                                    return "Cannot train transfer-learning model '" + r.name + "' because no transfer learning example has been collected."
                                }), t.util.assert(this.words.length > 1, function() {
                                    return "Cannot train transfer-learning model '" + r.name + "' because only 1 word label ('" + JSON.stringify(r.words) + "') has been collected for transfer learning. Requires at least 2."
                                }), null != e.fineTuningEpochs && t.util.assert(e.fineTuningEpochs >= 0 && Number.isInteger(e.fineTuningEpochs), function() {
                                    return "If specified, fineTuningEpochs must be a non-negative integer, but received " + e.fineTuningEpochs
                                }), null == e && (e = {}), null == this.model && this.createTransferModelFromBaseModel(), this.secondLastBaseDenseLayer.trainable = !1, this.model.compile({
                                    loss: "categoricalCrossentropy",
                                    optimizer: e.optimizer || "sgd",
                                    metrics: ["acc"]
                                }), n = null == e.fitDatasetDurationMillisThreshold ? 6e4 : e.fitDatasetDurationMillisThreshold, this.dataset.durationMillis() > n ? (console.log("Detected large dataset: total duration = " + this.dataset.durationMillis() + " ms > " + n + " ms. Training transfer model using fitDataset() instead of fit()"), [4, this.trainOnDataset(e)]) : [3, 2];
                            case 1:
                                return [2, a.sent()];
                            case 2:
                                return [4, this.trainOnTensors(e)];
                            case 3:
                                return [2, a.sent()]
                        }
                    })
                })
            }, l.prototype.trainOnDataset = function(e) {
                return a(this, void 0, void 0, function() {
                    var n, r, a, s, l, u, c, h, d;
                    return i(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return t.util.assert(e.epochs > 0, function() {
                                    return "Invalid config.epochs"
                                }), n = null == e.batchSize ? 32 : e.batchSize, r = e.windowHopRatio || .25, a = o(this.collectTransferDataAsTfDataset(r, e.validationSplit, n, {
                                    augmentByMixingNoiseRatio: e.augmentByMixingNoiseRatio
                                }), 2), s = a[0], l = a[1], u = t.util.now(), [4, this.model.fitDataset(s, {
                                    epochs: e.epochs,
                                    validationData: e.validationSplit > 0 ? l : null,
                                    callbacks: null == e.callback ? null : [e.callback]
                                })];
                            case 1:
                                return c = i.sent(), console.log("fitDataset() took " + (t.util.now() - u).toFixed(2) + " ms"), null != e.fineTuningEpochs && e.fineTuningEpochs > 0 ? (h = t.util.now(), [4, this.fineTuningUsingTfDatasets(e, s, l)]) : [3, 3];
                            case 2:
                                return d = i.sent(), console.log("fitDataset() (fine-tuning) took " + (t.util.now() - h).toFixed(2) + " ms"), [2, [c, d]];
                            case 3:
                                return [2, c]
                        }
                    })
                })
            }, l.prototype.trainOnTensors = function(e) {
                return a(this, void 0, void 0, function() {
                    var n, r, a, s, o, l, u, c, h, d;
                    return i(this, function(i) {
                        switch (i.label) {
                            case 0:
                                n = e.windowHopRatio || .25, r = this.collectTransferDataAsTensors(n, {
                                    augmentByMixingNoiseRatio: e.augmentByMixingNoiseRatio
                                }), a = r.xs, s = r.ys, console.log("Training data: xs.shape = " + a.shape + ", ys.shape = " + s.shape), i.label = 1;
                            case 1:
                                return i.trys.push([1, , 6, 7]), null != e.validationSplit ? (c = function(e, n, r) {
                                    return t.util.assert(r > 0 && r < 1, function() {
                                        return "validationSplit is expected to be >0 and <1, but got " + r
                                    }), t.tidy(function() {
                                        for (var a = n.argMax(-1).dataSync(), i = [], s = 0; s < a.length; ++s) {
                                            var o = a[s];
                                            null == i[o] && (i[o] = []), i[o].push(s)
                                        }
                                        var l = i.length,
                                            u = [],
                                            c = [];
                                        for (i.map(function(e) {
                                                return t.util.shuffle(e)
                                            }), s = 0; s < l; ++s)
                                            for (var h = i[s], d = Math.round(h.length * (1 - r)), p = 0; p < h.length; ++p) p < d ? u.push(h[p]) : c.push(h[p]);
                                        return {
                                            trainXs: t.gather(e, u),
                                            trainYs: t.gather(n, u),
                                            valXs: t.gather(e, c),
                                            valYs: t.gather(n, c)
                                        }
                                    })
                                }(a, s, e.validationSplit), o = c.trainXs, l = c.trainYs, u = [c.valXs, c.valYs]) : (o = a, l = s), [4, this.model.fit(o, l, {
                                    epochs: null == e.epochs ? 20 : e.epochs,
                                    validationData: u,
                                    batchSize: e.batchSize,
                                    callbacks: null == e.callback ? null : [e.callback]
                                })];
                            case 2:
                                return h = i.sent(), null != e.fineTuningEpochs && e.fineTuningEpochs > 0 ? [4, this.fineTuningUsingTensors(e, o, l, u)] : [3, 4];
                            case 3:
                                return d = i.sent(), [2, [h, d]];
                            case 4:
                                return [2, h];
                            case 5:
                                return [3, 7];
                            case 6:
                                return t.dispose([a, s, o, l, u]), [7];
                            case 7:
                                return [2]
                        }
                    })
                })
            }, l.prototype.fineTuningUsingTfDatasets = function(e, t, n) {
                return a(this, void 0, void 0, function() {
                    var r, a, s;
                    return i(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return r = this.secondLastBaseDenseLayer.trainable, this.secondLastBaseDenseLayer.trainable = !0, a = null == e.fineTuningOptimizer ? "sgd" : e.fineTuningOptimizer, this.model.compile({
                                    loss: "categoricalCrossentropy",
                                    optimizer: a,
                                    metrics: ["acc"]
                                }), [4, this.model.fitDataset(t, {
                                    epochs: e.fineTuningEpochs,
                                    validationData: n,
                                    callbacks: null == e.callback ? null : [e.callback]
                                })];
                            case 1:
                                return s = i.sent(), this.secondLastBaseDenseLayer.trainable = r, [2, s]
                        }
                    })
                })
            }, l.prototype.fineTuningUsingTensors = function(e, t, n, r) {
                return a(this, void 0, void 0, function() {
                    var a, s, o;
                    return i(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return a = this.secondLastBaseDenseLayer.trainable, this.secondLastBaseDenseLayer.trainable = !0, s = null == e.fineTuningOptimizer ? "sgd" : e.fineTuningOptimizer, this.model.compile({
                                    loss: "categoricalCrossentropy",
                                    optimizer: s,
                                    metrics: ["acc"]
                                }), [4, this.model.fit(t, n, {
                                    epochs: e.fineTuningEpochs,
                                    validationData: r,
                                    batchSize: e.batchSize,
                                    callbacks: null == e.fineTuningCallback ? null : [e.fineTuningCallback]
                                })];
                            case 1:
                                return o = i.sent(), this.secondLastBaseDenseLayer.trainable = a, [2, o]
                        }
                    })
                })
            }, l.prototype.evaluate = function(e) {
                return a(this, void 0, void 0, function() {
                    var n, r = this;
                    return i(this, function(a) {
                        return t.util.assert(null != e.wordProbThresholds && e.wordProbThresholds.length > 0, function() {
                            return "Received null or empty wordProbThresholds"
                        }), n = 0, t.util.assert("_background_noise_" === this.words[n], function() {
                            return "Cannot perform evaluation when the first tag is not _background_noise_"
                        }), [2, t.tidy(function() {
                            for (var a = [], i = 0, s = r.collectTransferDataAsTensors(e.windowHopRatio), o = s.xs, l = s.ys.argMax(-1).dataSync(), u = r.model.predict(o), c = u.slice([0, 1], [u.shape[0], u.shape[1] - 1]).max(-1), h = u.shape[0], d = 0; d < e.wordProbThresholds.length; ++d) {
                                for (var p = e.wordProbThresholds[d], f = c.greater(t.scalar(p)).dataSync(), m = 0, g = 0, v = 0, y = 0, b = 0; b < h; ++b) l[b] === n ? (m++, f[b] && v++) : (g++, f[b] && y++);
                                var w = v / m,
                                    x = y / g;
                                a.push({
                                    probThreshold: p,
                                    fpr: w,
                                    tpr: x
                                }), console.log("ROC thresh=" + p + ": fpr=" + w.toFixed(4) + ", tpr=" + x.toFixed(4)), d > 0 && (i += Math.abs(a[d - 1].fpr - a[d].fpr) * (a[d - 1].tpr + a[d].tpr) / 2)
                            }
                            return {
                                rocCurve: a,
                                auc: i
                            }
                        })]
                    })
                })
            }, l.prototype.createTransferModelFromBaseModel = function() {
                var e = this;
                t.util.assert(null != this.words, function() {
                    return "No word example is available for tranfer-learning model of name " + e.name
                });
                for (var n = this.baseModel.layers, r = n.length - 2; r >= 0 && "dense" !== n[r].getClassName().toLowerCase();) r--;
                if (r < 0) throw new Error("Cannot find a hidden dense layer in the base model.");
                this.secondLastBaseDenseLayer = n[r];
                var a = this.secondLastBaseDenseLayer.output;
                this.transferHead = t.sequential(), this.transferHead.add(t.layers.dense({
                    units: this.words.length,
                    activation: "softmax",
                    inputShape: a.shape.slice(1),
                    name: "NewHeadDense"
                }));
                var i = this.transferHead.apply(a);
                this.model = t.model({
                    inputs: this.baseModel.inputs,
                    outputs: i
                })
            }, l.prototype.modelInputShape = function() {
                return this.baseModel.inputs[0].shape
            }, l.prototype.getMetadata = function() {
                return {
                    tfjsSpeechCommandsVersion: z,
                    modelName: this.name,
                    timeStamp: (new Date).toISOString(),
                    wordLabels: this.wordLabels()
                }
            }, l.prototype.save = function(e) {
                return a(this, void 0, void 0, function() {
                    var t, n, r;
                    return i(this, function(a) {
                        return t = null != e, e = e || C(this.name), t || (n = L.localStorage.getItem(D), (r = null == n ? {} : JSON.parse(n))[this.name] = this.getMetadata(), L.localStorage.setItem(D, JSON.stringify(r))), console.log("Saving model to " + e), [2, this.model.save(e)]
                    })
                })
            }, l.prototype.load = function(e) {
                return a(this, void 0, void 0, function() {
                    var n, r, a;
                    return i(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (n = null != e, e = e || C(this.name), !n) {
                                    if (null == (r = JSON.parse(L.localStorage.getItem(D))) || null == r[this.name]) throw new Error("Cannot find metadata for transfer model named " + this.name + '"');
                                    this.words = r[this.name].wordLabels, console.log("Loaded word list for model named " + this.name + ": " + this.words)
                                }
                                return a = this, [4, t.loadLayersModel(e)];
                            case 1:
                                return a.model = i.sent(), console.log("Loaded model from " + e + ":"), this.model.summary(), [2]
                        }
                    })
                })
            }, l.prototype.createTransfer = function(e) {
                throw new Error("Creating transfer-learned recognizer from a transfer-learned recognizer is not supported.")
            }, l
        }(R);

    function C(e) {
        return "" + I + e
    }
    var k = {
        concatenateFloat32Arrays: g,
        playRawAudio: function(e, t) {
            var n = new(window.AudioContext || window.webkitAudioContext),
                r = n.createBuffer(1, e.data.length, e.sampleRateHz);
            r.getChannelData(0).set(e.data);
            var a = n.createBufferSource();
            a.buffer = r, a.connect(n.destination), a.start(), a.onended = function() {
                null != t && t()
            }
        }
    };
    e.create = function(e, n, r, a) {
        if (t.util.assert(null == r && null == a || null != r && null != a, function() {
                return "customModelURL and customMetadataURL must be both provided or both not provided."
            }), null != r && t.util.assert(null == n, function() {
                return "vocabulary name must be null or undefined when modelURL is provided."
            }), "BROWSER_FFT" === e) return new R(n, r, a);
        throw "SOFT_FFT" === e ? new Error("SOFT_FFT SpeechCommandRecognizer has not been implemented yet.") : new Error("Invalid fftType: '" + e + "'")
    }, e.utils = k, e.BACKGROUND_NOISE_TAG = "_background_noise_", e.Dataset = x, e.getMaxIntensityFrameIndex = M, e.spectrogram2IntensityCurve = F, e.deleteSavedTransferModel = function(e) {
        return a(this, void 0, void 0, function() {
            var n;
            return i(this, function(r) {
                switch (r.label) {
                    case 0:
                        return null == (n = JSON.parse(L.localStorage.getItem(D))) && (n = {}), null != n[e] && delete n[e], L.localStorage.setItem(D, JSON.stringify(n)), [4, t.io.removeModel(C(e))];
                    case 1:
                        return r.sent(), [2]
                }
            })
        })
    }, e.listSavedTransferModels = function() {
        return a(this, void 0, void 0, function() {
            var e, n, r;
            return i(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, t.io.listModels()];
                    case 1:
                        for (r in e = a.sent(), n = [], e) r.startsWith(I) && n.push(r.slice(I.length));
                        return [2, n]
                }
            })
        })
    }, e.UNKNOWN_TAG = "_unknown_", e.version = z, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=speech-commands.min.js.map
