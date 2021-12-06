import { default as resetDate, range } from "./resetDate"
export default (): range => {
    const today = resetDate()
    const start = today.getTime()
    const month = today.getMonth()
    today.setMonth(month + 1)
    return {
        start,
        end: today.getTime()
    }
}