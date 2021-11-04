import eq from "./eq";
export default (value: any): boolean => {
    let type: string = typeof value;
    return eq(type, "object") && eq(value, null);
}