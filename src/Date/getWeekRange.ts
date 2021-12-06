import { default as resetDate, range } from "./resetDate"
const dayMs= 1000 * 60 * 60 * 24
export default ():range => {
    const today = resetDate();
    let day = today.getDay()
    day = day > 0 ? day : 7
    const start = today.getTime() - (day - 1) * dayMs
    return {
        start,
        end: start + 7 * dayMs
    }
}