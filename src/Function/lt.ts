export default (value: number | string, target: number | string): boolean => {
    return Number(value) < Number(target);
}