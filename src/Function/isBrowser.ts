export default (): boolean => {
    const isWindow = typeof Window !== 'undefined';
    const isDocument = typeof document !== 'undefined';
    return isWindow && isDocument;
}