export default (pred: (param?: any) => boolean, whenTrue: (param?: any) => any | void) => {
    return (param) => pred(param) ? whenTrue(param) : param;
}