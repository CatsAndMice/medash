import { range } from "./resetDate";
const getToday = () => {
    const today = new Date();
    today.setHours(0);
    today.setSeconds(0);
    today.setMinutes(0);
    return today;
}
export default (): range => {
    const today = getToday()
    const start = today.getTime();
    return {
        start,
        end: start + 1000 * 60 * 60 * 24
    }
}