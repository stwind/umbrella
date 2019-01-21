import { isFunction } from "@thi.ng/checks";
import {
    comp,
    last,
    map,
    mapcat,
    partition,
    push,
    range,
    reducer,
    repeat,
    scan,
    transduce,
    tuples,
    wrap
} from "@thi.ng/transducers";
import {
    mixN,
    ReadonlyVec,
    signedArea2,
    Vec
} from "@thi.ng/vectors";
import { Tessellator } from "../api";
import { centroidRaw } from "../internal/centroid";
import { pointInTriangle2 } from "../internal/triangle-point-inside";
import { polyArea } from "../internal/poly-area";

const snip = (
    points: ReadonlyVec[],
    u: number,
    v: number,
    w: number,
    n: number,
    ids: number[]
) => {
    const a = points[ids[u]];
    const b = points[ids[v]];
    const c = points[ids[w]];
    if (signedArea2(a, b, c) > 0) {
        for (let i = 0; i < n; i++) {
            if (i !== u && i !== v && i !== w) {
                if (pointInTriangle2(points[ids[i]], a, b, c)) {
                    return;
                }
            }
        }
        return [a, b, c];
    }
};

export const tesselEarCut =
    (points: ReadonlyVec[]) => {
        const tris: Vec[][] = [];
        let n = points.length;
        const ids = [
            ...(polyArea(points) > 0 ?
                range(n) :
                range(n - 1, -1, -1))
        ];
        let count = 2 * n - 1;
        let v = n - 1, u, w, t;
        while (count > 0 && n > 2) {
            u = n <= v ? 0 : v;
            v = u + 1;
            v = n <= v ? 0 : v;
            w = v + 1;
            w = n <= w ? 0 : w;
            t = snip(points, u, v, w, n, ids);
            if (t !== undefined) {
                tris.push(t);
                ids.splice(v, 1);
                n--;
                count = 2 * n;
            } else {
                count--;
            }
        }
        return tris;
    };

export const tesselTriFan =
    (points: ReadonlyVec[]) => {
        const c = centroidRaw(points);
        return transduce(
            comp(
                partition<Vec>(2, 1),
                map(([a, b]) => [a, b, c])
            ),
            push(),
            wrap(points, 1, false, true)
        );
    };

export const tesselQuadFan =
    (points: ReadonlyVec[]) => {
        const p = centroidRaw(points);
        return transduce(
            comp(
                partition<Vec>(3, 1),
                map(([a, b, c]) => [mixN([], a, b, 0.5), b, mixN([], b, c, 0.5), p])
            ),
            push(),
            wrap(points, 1, true, true)
        );
    };

export const tesselEdgeSplit =
    (points: ReadonlyVec[]) => {
        const c = centroidRaw(points);
        return transduce(
            comp(
                partition<Vec>(2, 1),
                mapcat(([a, b]) => {
                    const m = mixN([], a, b, 0.5);
                    return [[a, m, c], [m, b, c]];
                })),
            push(),
            wrap(points, 1, false, true)
        );
    };

export const tesselRimTris =
    (points: ReadonlyVec[]) => {
        const edgeCentroids = transduce(
            comp(
                partition<Vec>(2, 1),
                map((e) => mixN([], e[0], e[1], 0.5))
            ),
            push(),
            wrap(points, 1, false, true)
        );
        return transduce(
            comp(
                partition<Vec[]>(2, 1),
                map((t) => [t[0][0], t[1][1], t[1][0]])
            ),
            push(),
            [edgeCentroids],
            wrap([...tuples(edgeCentroids, points)], 1, true, false)
        );
    };

export const tesselInset =
    (inset = 0.5, keepInterior = false) =>
        (points: ReadonlyVec[]) => {
            const c = centroidRaw(points);
            const inner = points.map((p) => mixN([], p, c, inset));
            return transduce(
                comp(
                    partition<Vec[]>(2, 1),
                    map(([[a, b], [c, d]]) => [a, b, d, c])
                ),
                push(),
                keepInterior ? [inner] : [],
                wrap([...tuples(points, inner)], 1, false, true)
            );
        };

export function tessellatePoints(points: ReadonlyVec[], tessFn: Tessellator, iter?: number): Vec[][];
export function tessellatePoints(points: ReadonlyVec[], tessFns: Iterable<Tessellator>): Vec[][];
export function tessellatePoints(...args): Vec[][] {
    return transduce(
        scan(
            reducer(
                () => [args[0]],
                (acc: Vec[][], fn: Tessellator) =>
                    transduce(
                        mapcat(fn),
                        push(),
                        acc
                    )
            )
        ),
        last(),
        isFunction(args[1]) ?
            repeat(args[1], args[2] || 1) :
            args[1]
    );
}