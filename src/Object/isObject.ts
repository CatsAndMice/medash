import getType from "../Functions/getType";
import eq from "../Functions/eq";
export default (value) => {
    const type = getType(value);
    return eq(type, 'Object');
}