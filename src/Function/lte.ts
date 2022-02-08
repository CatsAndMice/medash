import eq from "./eq";
import lt from "./lt";
export default (value: number, target: number): boolean => {
    return lt(value, target) || eq(value, target);
}