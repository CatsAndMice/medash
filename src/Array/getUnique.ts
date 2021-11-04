export default function getUniqueArray(args: []): any[] {
    let arrs: any[] = [];
    if (Set) {
        return Array.from(new Set(args))
    }

    args.forEach(arg => {
        arrs.includes(arg) ? arrs.push(arg) : null;
    })
    return arrs;
}

