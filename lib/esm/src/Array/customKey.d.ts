declare type skipTypes = number | string | any[];
declare type Option = {
    key: string;
    customKey: string;
    skip?: skipTypes;
    isClone?: boolean;
};
declare const _default: (args: {
    [key: string]: any;
}[], option: Option | Option[], isClone?: boolean) => any[];
export default _default;
