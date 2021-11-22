import { eq } from "../../main";
console.log(eq(() => { }, () => { }));
console.log(eq(() => console.log(1), () => { }));
