export default (...args: Function[]) => {
    return (...params) => args.reduce((pre, next) => {
        return next(pre(...params))
    });
}
