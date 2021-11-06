export default (args: any[]): any[] => {
    if (Set) {
        return Array.from(new Set(args))
    }
    let arrs: any[] = [];
    args.forEach(arg => {
        arrs.includes(arg) ? null : arrs.push(arg);
    })
    return arrs;
}

