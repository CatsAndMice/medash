import getType from './getType';
import eq from "./eq";
import isEmpty from "./isEmpty";

//TODO: 待思考使用范围

//BEM规范命名
type Mod = string | { [key: string]: any }
type Mods = Mod | Mod[];
const getBem = (name: string, mods?: Mods) => {
    if (isEmpty(mods)) {
        return '';
    }

    if (eq(getType(mods), 'string')) {
        return `${name}--${mods}`;
    }

    if (Array.isArray(mods)) {
        return mods.reduce<string>((ret, item) => `${ret} ${getBem(name, item)}`, '');
    }

    return Object.keys(mods as object).reduce(
        (ret, key) => (`${ret} ${(mods as object)[key]}` ? getBem(name, key) : ''),
        ''
    );

}

const createBem = (name: string) => {

    return (el?: Mods, mods?: Mods) => {
        if (el && !eq(getType(el), 'string')) {
            mods = el;
            el = '';
        }
        el = el ? `${name}__${el}` : name;
        return `${el}${getBem(el, mods)}`
    }
}


export default (name: string) => {
    return [name, createBem(name)] as const;
}