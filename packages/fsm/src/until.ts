import { endsWith } from "@thi.ng/arrays";
import { LitCallback, Matcher, RES_PARTIAL } from "./api";
import { result } from "./result";

/**
 * String only. Returns a matcher which consumes input until the given
 * string could be matched. If successful, calls `callback` with string
 * recorded so far (excluding the matched terminator string) and returns
 * `Match.FULL` result. Else `Match.PARTIAL`.
 *
 * @see until
 *
 * @param str
 * @param callback
 */
export const untilStr = <C, R>(
    str: string,
    callback?: LitCallback<string, C, R>
): Matcher<string, C, R> =>
    () => {
        let buf = "";
        return (ctx, x) => {
            buf += x;
            return buf.endsWith(str) ?
                result(callback && callback(ctx, buf.substr(0, buf.length - str.length))) :
                RES_PARTIAL;
        };
    };

/**
 * Generic array version of `untilStr()`.
 *
 * @see untilStr
 *
 * @param str
 * @param callback
 */
export const until = <T, C, R>(
    str: T[],
    callback?: LitCallback<T[], C, R>
): Matcher<T, C, R> =>
    () => {
        let buf: T[] = [];
        return (ctx, x) => {
            buf.push(x);
            return endsWith(buf, str) ?
                result(callback && callback(ctx, buf.slice(0, buf.length - str.length))) :
                RES_PARTIAL;
        };
    };
