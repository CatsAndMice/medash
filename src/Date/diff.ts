import { default as formatDate, option, Format } from "./formatDate"
export default (origin: Date | number, target: Date | number, format: Format = option) => {
    if (origin instanceof Date) {
        origin = origin.getTime();
    }

    if (target instanceof Date) {
        target = target.getTime();
    }
    return formatDate(Math.abs(origin - target), format)
}