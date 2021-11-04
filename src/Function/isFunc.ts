import eq from "./eq";
export default (callBack: any): boolean => {
    let type = typeof callBack
    return eq(type, 'function')
}