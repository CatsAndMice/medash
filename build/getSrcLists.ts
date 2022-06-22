import fsPromises from "fs/promises";

export default  async function getFolder(examplePath: string) {
    const dirs = await fsPromises.readdir(examplePath)
    const isIncludes = (dir: any[] | string) => dir.includes('.DS_Store')
    if (isIncludes(dirs)) {
        const index = dirs.findIndex((dir) => isIncludes(dir))
        dirs.splice(index, 1)
    }
    return dirs
}