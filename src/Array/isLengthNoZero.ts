export default (args: any[]): boolean => {
    if (!Array.isArray(args)) {
        console.warn(`${args}不是Array类型`);
        return false
    }
    return args.length !== 0
}