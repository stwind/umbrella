import {
    max,
    min,
    Vec,
    VecPair
} from "@thi.ng/vectors";

/**
 * Computes the nD bounds of given vectors. `vmin` should be initialized
 * to `+Infinity` and `vmax` to `-Infinity` (e.g. use copies of `MIN*` /
 * `MAX*` constants defined in thi.ng/vectors).
 *
 * Returns 2-tuple of modified `[vmin, vmax]`.
 *
 * @param pts
 * @param vmin
 * @param vmax
 */
export const bounds =
    (pts: ReadonlyArray<Vec>, vmin: Vec, vmax: Vec): VecPair => {

        for (let i = pts.length; --i >= 0;) {
            const p = pts[i];
            min(null, vmin, p);
            max(null, vmax, p);
        }
        return [vmin, vmax];
    };
