let s = Symbol('a')
console.log(s.toString())
const z = {
	z: 3,
	s: 3,
}
console.log(s.description)

let c = {
	[s]: 'o',
	s: 'o',
}
console.log(c)
