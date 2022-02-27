import eq from "../Function/eq";
import getType from "../Function/getType";
export default (arr) => {
    const isobj = eq(getType(arr), 'Object');

}