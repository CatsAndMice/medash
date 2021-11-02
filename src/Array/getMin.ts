export default function getMin(ages: number[]): number {
    return Math.min.apply(Math, ages)
}