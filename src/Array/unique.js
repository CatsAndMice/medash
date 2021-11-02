"use strict";
exports.__esModule = true;
function getUniqueArray(args) {
    var arrs = [];
    if (Set) {
        return Array.from(new Set(args));
    }
    args.forEach(function (arg) {
        arrs.includes(arg) ? arrs.push(arg) : null;
    });
    return arrs;
}
exports["default"] = getUniqueArray;
