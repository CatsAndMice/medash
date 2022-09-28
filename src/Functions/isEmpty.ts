import isNull from "./isNull";
import isUndefined from "./isUndefined";
import eq from "./eq";
import isZeroLen from "../Array/isZeroLen";
import isEmptyObj from '../Object/isEmptyObj';
import isNaN from "./isNaN"
//0,null,'',undefined,{},[] ,NaN均认为成空值
export default (value: any): boolean => {
    return isNaN(value) || isNull(value) || isUndefined(value) || eq(value, 0) || eq(value, '') || isEmptyObj(value) || isZeroLen(value)||eq(value,false);
}