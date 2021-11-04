let safe = /^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z]{1,}(.*)?[A-Z]{1,})(?=.*[a-z]{1,}(.*)?[a-z]{1,})(?=.*[!@#$%^&*?]).*$/
export default (paddWord:string):boolean=>{
return safe.test(paddWord);
}