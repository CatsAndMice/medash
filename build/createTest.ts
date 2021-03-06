import { testContext } from './const';
import { write, create } from './createAndWrite';
export default (createPath: string, name: string) => {
    const suffixName = name + '.test.ts';
    createPath = create(createPath, suffixName);
    write(createPath, testContext(name))
}