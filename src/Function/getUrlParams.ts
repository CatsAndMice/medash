import isEmpty from "./isEmpty";
export default (url: string): Object => {
    let params: any = {};
    let createUrl: URL = new URL(url);
    let search: string = createUrl.search;
    let strs: string[] = search.replace('?', '').split('&')
    for (const str of strs) {
        let [key, value] = str.split('=');
        if (!isEmpty(key)) {
            params[key] = value;
        }
    }
    return params;
}
