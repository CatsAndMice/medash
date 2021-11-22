import { write, create } from "./createAndWrite";
import {createDocs} from "./const";
export default (createPath: string, name: string) => {
    const suffixName = name + '.md';
    createPath = create(createPath, suffixName);
    write(createPath, createDocs())
}