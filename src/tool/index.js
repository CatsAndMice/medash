module.exports = {
    _warn(msg) {
        console.warn(msg);
        return false;
    },
    _error(msg) {
        console.error(msg);
        return false;
    }
}