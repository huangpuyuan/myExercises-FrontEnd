function oodlify(s) {
    return s.replace(/[aeiou]/g, 'oodle');
}

const input = [
    'John',
    'Paul',
    'George',
    'Ringo',
];

/*	while循环	*/

// let i = 0;
// const len = input.length;
// let output = [];
// while (i < len) {
//     let item = input[i];
//     let newItem = oodlify(item);
//     output.push(newItem);
//     i++;
// };


/*	for循环	*/
// const len = input.length;
// let output = [];
// for (let i = 0; i < len; i++) {
// 	let item = input[i];
// 	let newItem = oodlify(item);
// 	output.push(newItem);
// }

/*	for of循环	*/
let output = [];
for (let item of input) {
	let newItem = oodlify(item);
	output.push(newItem);
}
console.log(output);
