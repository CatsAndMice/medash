import isBrowser from './isBrowser';
export default (): boolean => {
    if (isBrowser()) {
        return /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
    }
    return false
}