export default function getDeelClone(origin: { [key: string]: any }, target: { [key: string]: any } = {}): object {
    let keys = Object.keys(origin);
    for (let index = 0; index < keys.length; index++) {
        let key = keys[index];
        let value = origin[key]
        let type = typeof value;
        if (type === "object") {
            let isNull = FromTest.isNull(value)
            if (isNull) {
                target[key] = value;
                continue
            }

            //Date
            if (value instanceof Date) {
                target[key] = new Date(value.getTime())
                continue
            }

            //正则
            if (value instanceof RegExp) {
                target[key] = new RegExp(value)
                continue
            }

            try {
                //dom
                if (value instanceof Element) {
                    target[key] = value.cloneNode(true);
                    continue
                }
            } catch {
                console.warn('该运行环境中没有DOM元素');
            }
            target[key] = Array.isArray(value) ? getDeelClone(value, []) : getDeelClone(value);
            continue
        }
        target[key] = value;
    }
    return target;
}
