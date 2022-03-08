import eq from "./eq";
import gt from "./gt";
export default (value: number , target: number ): boolean => {
    return gt(value, target) || eq(value, target);
}