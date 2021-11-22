import { srcContext } from './const';
import { write, create } from './createAndWrite';

export default (createPath: string, name: string) => {
    const suffixName = name + '.ts';
    createPath = create(createPath, suffixName);
    write(createPath, srcContext())
}