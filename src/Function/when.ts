export default (pred: (param?: any) => boolean, whenTrue: (param?: any) => any) => {
    return (param) => pred(param) ? whenTrue(param) : param;
}