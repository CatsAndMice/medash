export default (): boolean => {
    let type = typeof window;
    return type !== 'undefined';
}