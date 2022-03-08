export default (callBack: any): boolean => {
    let type = typeof callBack
    return type === 'function'
}