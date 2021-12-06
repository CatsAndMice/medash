import { default as resetDate, range } from "./resetDate"
export default (): range => {
    const today = resetDate()
    const start = today.getTime();
    return {
        start,
        end: start + 1000 * 60 * 60 * 24
    }
}