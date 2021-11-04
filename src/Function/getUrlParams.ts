/**
 * 获取路径中传递的参数
 * @param url 
 * @returns 
 */
export default function getParams(url: string): Object {
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

