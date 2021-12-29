export default (args: any[], callBack: (value?: any, index?: number, self?: Object) => boolean): any => {
    for (let index = 0; index < args.length; index++) {
        const value = args[index];
        const callBackValue = callBack(value, index, args);
        if (callBackValue) {
            return value;
        }
    }
}