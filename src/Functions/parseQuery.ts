import isEmpty from "./isEmpty";
export default (url: string): Object => {
    let params: Object = {};
    let createUrl: URL = new URL(url);
    let search: string = createUrl.search;
    let strs: string[] = search.replace('?', '').split('&')
    for (const str of strs) {
        let [key, value] = str.split('=');
        if (!isEmpty(key)) {
            if (params.hasOwnProperty(key)) {
                if (!Array.isArray(params[key])) {
                    params[key] = [params[key]];
                }
                (params[key] as any[]).push(value);
            } else {
                params[key] = value;
            }

        }
    }
    return params;
}
