import eq from "../Function/eq";
import isZeroLen from "./isZeroLen";
function isHaveSame(arrs: any[], arg: any): boolean {
    for (const arr of arrs) {
        if (eq(arr, arg)) {
            return true
        }
    }
    return false;
}
export default (args: any[]): any[] => {
    let arrs: any[] = [];
    args.forEach(arg => {
        if (isZeroLen(arrs)) {
            arrs.push(arg);
            return;
        }
        isHaveSame(arrs, arg) ? null : arrs.push(arg);
    })
    return arrs;
}

