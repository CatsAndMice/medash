export default (...args: Function[]) => {
    return (result) => {
        const fns = args.slice();
        while (fns.length > 0) {
            const fn = fns.shift();
            result = (fn as Function)(result);
        }

        return result;
    }
}
