import isEmpty from "./isEmpty";

interface Params {
    [key: string]: any
}

export function getUrlParams(url: string): Object {
    let params: any = {};
    let createUrl: URL = new URL(url);
    let search: string = createUrl.search;
    let strs: string[] = search.replace('?', '').split('&')
    for (const str of strs) {
        let [key, value] = str.split('=');
        params[key] = value;
    }
    return params;
}

export function getConcatParams(params: Params = {}) {
    let keys = Object.keys(params);
    let len = keys.length - 1;
    let values = '?'
    keys.forEach((key, index) => {
        let value = params[key];
        if (isEmpty(value)) return;
        values += `${key}=${value}&`;
    })

    return values.replace(/&$/g, '');
}

