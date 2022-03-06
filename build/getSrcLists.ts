import fs from "fs/promises";
import { srcPath } from "./const";
export default async () => {
    const dirLists = await fs.readdir(srcPath);
    console.log(dirLists);
    return dirLists;
}