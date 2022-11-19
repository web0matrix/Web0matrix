{
	let a = 10
	var b = 1
}

// 没有变量提升
// var 的情况
console.log(foo) // 输出undefined
// var foo = 2

// let 的情况
// console.log(bar) // 报错ReferenceError
// let bar = 2


function f1() {
	let n = 5
	if (true) {
		let n = 10
	}
	console.log(n) // 5
}

f1()

const PI = 3.1415
PI // 3.1415

PI = 3


// const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123


const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
a = ['Dave'];    // 报错


