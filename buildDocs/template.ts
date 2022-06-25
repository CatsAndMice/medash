type docs = {
    desc?: any,
    param?: any,
    return?: any
}


function getSetValue(set: Set<string>) {
    let setValue = ''
    set.forEach((s) => {
        setValue += `${s}  \n`
    })
    return setValue
}

export const createDocs = (doc: docs) => {
    return `${doc.desc ? getSetValue(doc.desc) : ''}  
**参数**   
${doc.param ? getSetValue(doc.param) : ''}
**返回**  
${doc.return ? getSetValue(doc.return) : ''}
**例子**  `
}