/**  */
export type _ = 0


/** everything */
export type preEvery = 
string|number|boolean|undefined|null|
Error

export type every = preEvery|preEvery[]|
Record<string,preEvery>|(()=>preEvery)