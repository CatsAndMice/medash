export default () => {
    const today = new Date();
    today.setHours(0)
    today.setSeconds(0)
    today.setMinutes(0)
    today.setDate(1)
    return today;
}

export type range = {
    start: number,
    end: number
}