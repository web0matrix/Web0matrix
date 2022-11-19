let x = 1
let y = 2

;`${x} + ${y} = ${x + y}`// "1 + 2 = 3"

`${x} + ${y * 2} = ${x + y * 2}`
// "1 + 4 = 5"

let obj = { x: 1, y: 2 }
;`${obj.x + obj.y}`
// "3"


let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true