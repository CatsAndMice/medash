export default (value: string) => {
    const ch = /[\u4e00-\u9fa5]/gm;
    return {
        regExp: ch,
        isCh: ch.test(value)
    }
}