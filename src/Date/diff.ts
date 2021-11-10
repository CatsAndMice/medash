import formatDate from "./formatDate"
export default (origin: Date | number, target: Date | number) => {
    if (origin instanceof Date) {
        origin = origin.getTime();
    }

    if (target instanceof Date) {
        target = target.getTime();
    }

    return formatDate(origin - target)
}