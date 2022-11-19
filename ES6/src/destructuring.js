let [a, b, c] = [1, 2, 3]


let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x1, y1, ...z] = ['a'];
x // "a"
y // undefined
z // []

// 对于 Set 结构，也可以使用数组的解构赋值。
// let [x, y, z] = new Set(['a', 'b', 'c'])


// 事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。

// let [x = 1] = [undefined]
// 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
// let { foo, bar } = { foo: 'aaa', bar: 'bbb' }