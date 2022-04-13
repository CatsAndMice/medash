import getType from "./getType"
import eq from "./eq"
export default (str: unknown) => {
    const type = getType(str)
    return eq(type, 'string')
}