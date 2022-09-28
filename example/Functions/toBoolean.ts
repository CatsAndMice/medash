import { toBoolean } from "../../main";
toBoolean(0)//false
toBoolean(true)//true
toBoolean('true')//true
toBoolean(false)//false
toBoolean('false')//false
toBoolean('FALSE')//false
toBoolean(NaN)//false
toBoolean(undefined)//false