import { Tessellator } from "@thi.ng/geom-api";
import { centroid } from "@thi.ng/geom-poly-utils";
import {
    comp,
    map,
    partition,
    push,
    transduce,
    wrap
} from "@thi.ng/transducers";
import { ReadonlyVec, Vec } from "@thi.ng/vectors";

export const triFan: Tessellator =
    (points: ReadonlyVec[]) => {
        const c = centroid(points);
        return transduce(
            comp(
                partition<Vec>(2, 1),
                map(([a, b]) => [a, b, c])
            ),
            push(),
            wrap(points, 1, false, true)
        );
    };
