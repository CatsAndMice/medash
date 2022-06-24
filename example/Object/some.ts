import { some } from "../../main";
some([1, 2, 3, 4, 5], (index, value) => {
    console.log(index, value);
    return false
});
