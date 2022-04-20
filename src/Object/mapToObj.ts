import toArray from "../Array/toArray"
import eq from "../Functions/eq"
import getType from "../Functions/getType"
const isTypeMap = (map: Map<any, any>): boolean => {
    const type = getType(map)
    return eq(type, 'Map')
}
export default (map: Map<any, any>): Object | undefined => {
    if (!isTypeMap(map)) return
    const obj: { [key: string | number | symbol]: any } = {}
    const keys = toArray(map.keys())
    keys.forEach((key) => {
        const value = map.get(key)
        obj[key as string] = value
    })
    return obj
}