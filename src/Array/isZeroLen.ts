export default (args: any[]): boolean => {
    if (!Array.isArray(args)) {
        return false
    }
    return args.length === 0
}