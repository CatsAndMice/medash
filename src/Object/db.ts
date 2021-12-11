import isBrowser from "../Function/isBrowser"
import isEmpty from "../Function/isEmpty";
const localDb = isBrowser() ? window.localStorage : null;
const sionDb = isBrowser() ? window.sessionStorage : null;

const toStringify = (value) => JSON.stringify(value);
const toParse = (value) => JSON.parse(value);
export const setLocalDb = (key, value) => {
    if (isEmpty(key) || isEmpty(value)) return;
    localDb?.setItem(key, toStringify(value));
}

export const getLocalDb = (key) => {
    if (isEmpty(key)) return;
    const value = localDb?.getItem(key)
    return value ? toParse(value) : null;
}

export const removeLocalDb = (key) => {
    if (isEmpty(key)) return;
    return localDb?.removeItem(key);
}

export const clearLocalDb = () => localDb?.clear();

export const setSionDb = (key, value) => {
    if (isEmpty(key) || isEmpty(value)) return;
    sionDb?.setItem(key, toStringify(value));
}

export const getSionDb = (key) => {
    if (isEmpty(key)) return;
    const value = sionDb?.getItem(key)
    return value ? toParse(value) : null;
}

export const removeSionDb = (key) => {
    if (isEmpty(key)) return;
    return sionDb?.removeItem(key);
}

export const clearSionDb = () => sionDb?.clear();