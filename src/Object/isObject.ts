import getType from "../Function/getType";
import eq from "../Function/eq";
export default (value) => {
    const type = getType(value);
    return eq(type, 'Object');
}