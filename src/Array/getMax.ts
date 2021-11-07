export default (ages: number[]): number => {
    return Math.max.apply(Math, ages)
}