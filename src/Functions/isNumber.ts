import getType from "./getType"
import eq from "./eq"
export default (value: any): boolean => eq(getType(value), 'number') 