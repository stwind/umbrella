import { ICopy, IEqualsDelta } from "@thi.ng/api/api";
import { ReadonlyVec, Vec } from "./api";
import {
    atan2Abs,
    EPS,
    eqDelta,
    max2id,
    min2id,
    smoothStep,
    step
} from "./math";

export const ZERO2 = Object.freeze([0, 0]);
export const ONE2 = Object.freeze([1, 1]);

export const op2 = (fn: (x: number) => number, a: Vec, ia = 0, sa = 1) =>
    (a[ia] = fn(a[ia]), a[ia + sa] = fn(a[ia + sa]), a);

export const op22 = (fn: (a: number, b: number) => number, a: Vec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) => (
    a[ia] = fn(a[ia], b[ib]),
    a[ia + sa] = fn(a[ia + sa], b[ib + sb]),
    a
);

export const get2 = (a: ReadonlyVec, ia = 0, sa = 1) =>
    [a[ia], a[ia + sa]];

export const set2 = (a: Vec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) =>
    (a[ia] = b[ib], a[ia + sa] = b[ib + sb], a);

export const set2n = (a: Vec, n: number, ia = 0, sa = 1) =>
    (a[ia] = n, a[ia + sa] = n, a);

export const set2s = (a: Vec, x: number, y: number, ia = 0, sa = 1) =>
    (a[ia] = x, a[ia + sa] = y, a);

export const eqDelta2 = (a: ReadonlyVec, b: ReadonlyVec, eps = EPS, ia = 0, ib = 0, sa = 1, sb = 1) =>
    eqDelta(a[ia], b[ib], eps) && eqDelta(a[ia + sa], b[ib + sb], eps);

export const add2 = (a: Vec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) =>
    (a[ia] += b[ib], a[ia + sa] += b[ib + sb], a);

export const mul2 = (a: Vec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) =>
    (a[ia] *= b[ib], a[ia + sa] *= b[ib + sb], a);

export const sub2 = (a: Vec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) =>
    (a[ia] -= b[ib], a[ia + sa] -= b[ib + sb], a);

export const div2 = (a: Vec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) =>
    (a[ia] /= b[ib], a[ia + sa] /= b[ib + sb], a);

export const add2n = (a: Vec, n: number, ia = 0, sa = 1) =>
    (a[ia] += n, a[ia + sa] += n, a);

export const sub2n = (a: Vec, n: number, ia = 0, sa = 1) =>
    (a[ia] -= n, a[ia + sa] -= n, a);

export const mul2n = (a: Vec, n: number, ia = 0, sa = 1) =>
    (a[ia] *= n, a[ia + sa] *= n, a);

export const div2n = (a: Vec, n: number, ia = 0, sa = 1) =>
    (a[ia] /= n, a[ia + sa] /= n, a);

export const neg2 = (a: Vec, ia = 0, sa = 1) =>
    mul2n(a, -1, ia, sa);

export const abs2 = (a: Vec, ia = 0, sa = 1) =>
    op2(Math.abs, a, ia, sa);

export const sign2 = (a: Vec, ia = 0, sa = 1) =>
    op2(Math.sign, a, ia, sa);

export const floor2 = (a: Vec, ia = 0, sa = 1) =>
    op2(Math.floor, a, ia, sa);

export const ceil2 = (a: Vec, ia = 0, sa = 1) =>
    op2(Math.ceil, a, ia, sa);

export const sin2 = (a: Vec, ia = 0, sa = 1) =>
    op2(Math.sin, a, ia, sa);

export const cos2 = (a: Vec, ia = 0, sa = 1) =>
    op2(Math.cos, a, ia, sa);

export const sqrt2 = (a: Vec, ia = 0, sa = 1) =>
    op2(Math.sqrt, a, ia, sa);

export const pow2 = (a: Vec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) => (
    a[ia] = Math.pow(a[ia], b[ib]),
    a[ia + sa] = Math.pow(a[ia + sa], b[ib + sb]),
    a
);

export const pow2n = (a: Vec, n: number, ia = 0, sa = 1) => (
    a[ia] = Math.pow(a[ia], n),
    a[ia + sa] = Math.pow(a[ia + sa], n),
    a
);

export const madd2 = (a: Vec, b: ReadonlyVec, c: ReadonlyVec, ia = 0, ib = 0, ic = 0, sa = 1, sb = 1, sc = 1) =>
    (a[ia] += b[ib] * c[ic], a[ia + sa] += b[ib + sb] * c[ic + sc], a);

export const madd2n = (a: Vec, b: ReadonlyVec, c: number, ia = 0, ib = 0, sa = 1, sb = 1) =>
    (a[ia] += b[ib] * c, a[ia + sa] += b[ib + sb] * c, a);

export const dot2 = (a: ReadonlyVec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) =>
    a[ia] * b[ib] + a[ia + sa] * b[ib + sb];

export const cross2 = (a: ReadonlyVec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) =>
    a[ia] * b[ib + sb] - a[ia + sa] * b[ib];

export const mix2 = (a: Vec, b: ReadonlyVec, t: ReadonlyVec, ia = 0, ib = 0, it = 0, sa = 1, sb = 1, st = 1) => (
    a[ia] += (b[ib] - a[ia]) * t[it],
    a[ia + sa] += (b[ib + sb] - a[ia + sa]) * t[it + st],
    a
);

export const mix2n = (a: Vec, b: ReadonlyVec, t: number, ia = 0, ib = 0, sa = 1, sb = 1) => (
    a[ia] += (b[ib] - a[ia]) * t,
    a[ia + sa] += (b[ib + sb] - a[ia + sa]) * t,
    a
);

export const min2 = (a: Vec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) =>
    op22(Math.min, a, b, ia, ib, sa, sb);

export const max2 = (a: Vec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) =>
    op22(Math.max, a, b, ia, ib, sa, sb);

export const clamp2 = (a: Vec, min: ReadonlyVec, max: ReadonlyVec, ia = 0, imin = 0, imax = 0, sa = 1, smin = 1, smax = 1) =>
    max2(min2(a, max, ia, imax, sa, smax), min, ia, imin, sa, smin);

export const step2 = (a: Vec, e: ReadonlyVec, ia = 0, ie = 0, sa = 1, stridee = 1) =>
    (a[ia] = step(e[ie], a[ia]), a[ia + sa] = step(e[ie + stridee], a[ia + sa]), a);

export const smoothStep2 = (a: Vec, e1: ReadonlyVec, e2: ReadonlyVec, ia = 0, ie1 = 0, ie2 = 0, sa = 1, se1 = 1, se2 = 1) => (
    a[ia] = smoothStep(e1[ie1], e2[ie2], a[ia]),
    a[ia + sa] = smoothStep(e1[ie1 + se1], e2[ie2 + se2], a[ia + sa]),
    a
);

export const mag2sq = (a: ReadonlyVec, ia = 0, sa = 1) => {
    const x = a[ia], y = a[ia + sa];
    return x * x + y * y;
};

export const mag2 = (a: ReadonlyVec, ia = 0, sa = 1) =>
    Math.sqrt(mag2sq(a, ia, sa));

export const dist2sq = (a: ReadonlyVec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) => {
    const x = a[ia] - b[ib];
    const y = a[ia + sa] - b[ib + sb];
    return x * x + y * y;
};

export const dist2 = (a: ReadonlyVec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) =>
    Math.sqrt(dist2sq(a, b, ia, ib, sa, sb));

export const distManhattan2 = (a: ReadonlyVec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) => {
    return Math.abs(a[ia] - b[ib]) + Math.abs(a[ia + sa] - b[ib + sb])
};

export const distChebyshev2 = (a: ReadonlyVec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) => {
    return Math.max(Math.abs(a[ia] - b[ib]), Math.abs(a[ia + sa] - b[ib + sb]))
};

export const normalize2 = (a: Vec, n = 1, ia = 0, sa = 1) => {
    const m = mag2(a, ia, sa);
    m >= EPS && mul2n(a, n / m, ia, sa);
    return a;
};

export const limit2 = (a: Vec, n: number, ia = 0, sa = 1) => {
    const m = mag2(a, ia, sa);
    m >= n && mul2n(a, n / m, ia, sa);
    return a;
};

export const reflect2 = (a: Vec, b: ReadonlyVec, ia = 0, ib = 0, sa = 1, sb = 1) =>
    madd2n(a, b, -2 * dot2(a, b, ia, ib, sa, sb), ia, ib, sa, sb);

export const rotate2 = (a: Vec, theta: number, ia = 0, sa = 1) => {
    const s = Math.sin(theta);
    const c = Math.cos(theta);
    const x = a[ia];
    const y = a[ia + sa];
    return set2s(a, x * c - y * s, x * s + y * c, ia, sa);
};

export const heading2 = (a: ReadonlyVec, ia = 0, sa = 1) =>
    atan2Abs(a[ia + sa], a[ia]);

export const toPolar = (a: Vec, ia = 0, sa = 1) => {
    const x = a[ia], y = a[ia + sa];
    return set2s(a, Math.sqrt(x * x + y * y), atan2Abs(y, x), ia, sa);
};

export const toCartesian2 = (a: Vec, b: ReadonlyVec = ZERO2, ia = 0, ib = 0, sa = 1, sb = 1) => {
    const r = a[ia], theta = a[ia + sa];
    return set2s(
        a,
        r * Math.cos(theta) + b[ib],
        r * Math.sin(theta) + b[ib + sb],
        ia, sa
    );
};

export const minor2 = (a: Vec, ia = 0, sa = 1) =>
    min2id(Math.abs(a[ia]), Math.abs(a[ia + sa]));

export const major2 = (a: Vec, ia = 0, sa = 1) =>
    max2id(Math.abs(a[ia]), Math.abs(a[ia + sa]));

export const vec2 = (x = 0, y = 0) =>
    new Vec2([x, y]);

export class Vec2 implements
    ICopy<Vec2>,
    IEqualsDelta<Vec2> {

    /**
     * Returns array of memory mapped `Vec2` instances using given
     * backing array and stride settings: The `cstride` is the step size
     * between individual XYZ vector components. `estride` is the step
     * size between successive vectors. This arrangement allows for
     * different storage approaches, including SOA, AOS, etc.
     *
     * @param buf backing array
     * @param n num vectors
     * @param start  start index
     * @param cstride component stride
     * @param estride element stride
     */
    static mapBuffer(buf: Vec, n: number, start = 0, cstride = 1, estride = 2) {
        const res: Vec2[] = [];
        while (--n >= 0) {
            res.push(new Vec2(buf, start, cstride));
            start += estride;
        }
        return res;
    }

    static ZERO = Object.freeze(new Vec2(<number[]>ZERO2));
    static ONE = Object.freeze(new Vec2(<number[]>ONE2));

    buf: Vec;
    index: number;
    stride: number;

    constructor(buf: Vec, index = 0, stride = 1) {
        this.buf = buf;
        this.index = index;
        this.stride = stride;
    }

    *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
    }

    get x() {
        return this.buf[this.index];
    }

    set x(x: number) {
        this.buf[this.index] = x;
    }

    get y() {
        return this.buf[this.index + this.stride];
    }

    set y(y: number) {
        this.buf[this.index + this.stride] = y;
    }

    copy() {
        return new Vec2(get2(this.buf, this.index, this.stride));
    }

    eqDelta(v: Readonly<Vec2>, eps = EPS) {
        return eqDelta2(this.buf, v.buf, eps, this.index, v.index, this.stride, v.stride);
    }

    set(v: Readonly<Vec2>) {
        set2(this.buf, v.buf, this.index, v.index, this.stride, v.stride);
        return this;
    }

    setN(n: number) {
        set2n(this.buf, n, this.index, this.stride);
        return this;
    }

    setS(x: number, y: number) {
        set2s(this.buf, x, y, this.index, this.stride);
        return this;
    }

    add(v: Readonly<Vec2>) {
        add2(this.buf, v.buf, this.index, v.index, this.stride, v.stride);
        return this;
    }

    sub(v: Readonly<Vec2>) {
        sub2(this.buf, v.buf, this.index, v.index, this.stride, v.stride);
        return this;
    }

    mul(v: Readonly<Vec2>) {
        mul2(this.buf, v.buf, this.index, v.index, this.stride, v.stride);
        return this;
    }

    div(v: Readonly<Vec2>) {
        div2(this.buf, v.buf, this.index, v.index, this.stride, v.stride);
        return this;
    }

    addN(n: number) {
        add2n(this.buf, n, this.index, this.stride);
        return this;
    }

    subN(n: number) {
        sub2n(this.buf, n, this.index, this.stride);
        return this;
    }

    mulN(n: number) {
        mul2n(this.buf, n, this.index, this.stride);
        return this;
    }

    divN(n: number) {
        div2n(this.buf, n, this.index, this.stride);
        return this;
    }

    neg() {
        mul2n(this.buf, -1, this.index, this.stride);
        return this;
    }

    abs() {
        abs2(this.buf, this.index, this.stride);
        return this;
    }

    sign() {
        sign2(this.buf, this.index, this.stride);
        return this;
    }

    floor() {
        floor2(this.buf, this.index, this.stride);
        return this;
    }

    ceil() {
        ceil2(this.buf, this.index, this.stride);
        return this;
    }

    sqrt() {
        sqrt2(this.buf, this.index, this.stride);
        return this;
    }

    pow(v: Readonly<Vec2>) {
        pow2(this.buf, v.buf, this.index, v.index, this.stride, v.stride);
        return this;
    }

    powN(n: number) {
        pow2n(this.buf, n, this.index, this.stride);
        return this;
    }

    sin() {
        sin2(this.buf, this.index, this.stride);
        return this;
    }

    cos() {
        cos2(this.buf, this.index, this.stride);
        return this;
    }

    madd(b: Readonly<Vec2>, c: Readonly<Vec2>) {
        madd2(this.buf, b.buf, c.buf, this.index, b.index, c.index, this.stride, b.stride, c.stride);
        return this;
    }

    maddN(b: Readonly<Vec2>, n: number) {
        madd2n(this.buf, b.buf, n, this.index, b.index, this.stride, b.stride);
        return this;
    }

    mix(b: Readonly<Vec2>, c: Readonly<Vec2>) {
        mix2(this.buf, b.buf, c.buf, this.index, b.index, c.index, this.stride, b.stride, c.stride);
        return this;
    }

    mixN(b: Readonly<Vec2>, n: number) {
        mix2n(this.buf, b.buf, n, this.index, b.index, this.stride, b.stride);
        return this;
    }

    min(v: Readonly<Vec2>) {
        min2(this.buf, v.buf, this.index, v.index, this.stride, v.stride);
        return this;
    }

    max(v: Readonly<Vec2>) {
        max2(this.buf, v.buf, this.index, v.index, this.stride, v.stride);
        return this;
    }

    clamp(min: Readonly<Vec2>, max: Readonly<Vec2>) {
        clamp2(this.buf, min.buf, max.buf, this.index, min.index, max.index, this.stride, min.stride, max.stride);
        return this;
    }

    minorAxis() {
        return minor2(this.buf, this.index, this.stride);
    }

    majorAxis() {
        return major2(this.buf, this.index, this.stride);
    }

    step(e: Readonly<Vec2>) {
        step2(this.buf, e.buf, this.index, e.index, this.stride, e.stride);
        return this;
    }

    smoothStep(e1: Readonly<Vec2>, e2: Readonly<Vec2>) {
        smoothStep2(this.buf, e1.buf, e2.buf, this.index, e1.index, e2.index, this.stride, e1.stride, e2.stride);
        return this;
    }

    dot(v: Readonly<Vec2>) {
        return dot2(this.buf, v.buf, this.index, v.index, this.stride, v.stride);
    }

    cross(v: Readonly<Vec2>) {
        return cross2(this.buf, v.buf, this.index, v.index, this.stride, v.stride);
    }

    mag() {
        return mag2(this.buf, this.index, this.stride);
    }

    magSq() {
        return mag2sq(this.buf, this.index, this.stride);
    }

    dist(v: Readonly<Vec2>) {
        return dist2(this.buf, v.buf, this.index, v.index, this.stride, v.stride);
    }

    distSq(v: Readonly<Vec2>) {
        return dist2sq(this.buf, v.buf, this.index, v.index, this.stride, v.stride);
    }

    distManhattan(v: Readonly<Vec2>) {
        return distManhattan2(this.buf, v.buf, this.index, v.index, this.stride, v.stride);
    }

    distChebyshev(v: Readonly<Vec2>) {
        return distChebyshev2(this.buf, v.buf, this.index, v.index, this.stride, v.stride);
    }

    normalize(n = 1) {
        normalize2(this.buf, n, this.index, this.stride);
        return this;
    }

    limit(n: number) {
        limit2(this.buf, n, this.index, this.stride);
        return this;
    }

    reflect(n: Readonly<Vec2>) {
        reflect2(this.buf, n.buf, this.index, n.index, this.stride, n.stride);
        return this;
    }

    rotate(theta: number) {
        rotate2(this.buf, theta, this.index, this.stride);
        return this;
    }

    heading() {
        return heading2(this.buf, this.index, this.stride);
    }

    toPolar() {
        toPolar(this.buf, this.index, this.stride);
        return this;
    }

    toCartesian(o: Readonly<Vec2> = Vec2.ZERO) {
        toCartesian2(this.buf, o.buf, this.index, o.index, this.stride, o.stride);
        return this;
    }

    toString() {
        return `[${this.buf[this.index]}, ${this.buf[this.index + this.stride]}]`;
    }
}
