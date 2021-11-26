import isNull from "./isNull";
import isUndefined from "./isUndefined";
import eq from "./eq";
import isZeroLen from "../Array/isZeroLen";
import isEmptyObj from '../Object/isEmptyObj';
//0,null,'',undefined,{},[] 均认为成空值
export default (value: any): boolean => {
    return isNull(value) || isUndefined(value) || eq(value, 0) || eq(value, '') || isEmptyObj(value) || isZeroLen(value);
}