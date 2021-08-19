
module.exports = {
    isValueNoEmpty: { description: 'isValueNoEmpty' },
    _warn(msg) {
        console.warn(msg);
        return false;
    },
    _error(msg) {
        throw new Error(msg);
        return false;
    },

}