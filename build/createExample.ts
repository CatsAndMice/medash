import { write, create } from "./createAndWrite";
import { exampleContext } from "./const";
export default (createPath: string, name: string) => {
    const suffixName = name + '.ts';
    createPath = create(createPath, suffixName);
    write(createPath, exampleContext(name))
}