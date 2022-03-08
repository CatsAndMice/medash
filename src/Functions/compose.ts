// export default (...args: Function[]) => {
//     return (...arg) => {
//         let result = null;
//         const fns = args.slice();
//         while (fns.length > 0) {
//             const fn = fns.shift();
//             result = (fn as Function)(...arg);
//         }

//         return result;
//     }
// }
export default (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
