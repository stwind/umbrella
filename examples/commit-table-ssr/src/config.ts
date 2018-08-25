import { HTMLDoc, AppContext } from "./api";

export const DEFAULT_DOC: HTMLDoc = {
    head: {
        meta: [
            { "http-equiv": "Content-Type", content: "text/html;charset=UTF-8" },
            { "http-equiv": "X-UA-Compatible", content: "ie=edge" }
        ],
        links: [
            { rel: "stylesheet", href: "https://unpkg.com/tachyons@4.11.1/css/tachyons.min.css" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Inconsolata" }
        ],
        scripts: [],
        styles: [],
        title: "",
    },
    ctx: null,
    body: [],
};

/**
 * Main app config.
 */
export const ctx: AppContext = {
    repo: {
        name: "thi.ng/umbrella",
        path: ".",
        url: "https://github.com/thi-ng/umbrella",
    },
    ui: {
        body: { class: "sans-serif vh-100" },
        link: { class: "link blue hover-light-blue" },
        header: {
            root: { class: "bg-dark-gray white pa3 ma0 w-100 tc" },
            title: { class: "ma0 pa0 fw1" }
        },
        table: {
            root: {
                class: "w-100 collapse ba br2 b--black-10 pv2 ph3 f7 f6-ns",
                style: { "font-family": "Inconsolata, monospace" }
            },
            head: {
                row: { class: "tl bg-black white" },
                cell: { class: "pv1 pv2-ns ph2 ph3-ns" },
            },
            row: { class: "striped--light-gray" },
            cell: { class: "pv1 pv2-ns ph2 ph3-ns" }
        }
    }
};