export default function getMax(ages: number[]): number {
    return Math.max.apply(Math, ages)
}