const fellowship = [
    'frodo',
    'sam',
    'gandalf',
    'boromir',
    'legoas',
    'gimli',
];

const band = [
    'John',
    'Paul',
    'George',
    'Ringo',
];

function oodlify(s) {
    return s.replace(/[aeiou]/g, 'oodle');
}

function izzlify(s) {
    return s.replace(/[aeiou]+/g, 'izzle');
}

//直接循环
// let bandoodle = [];
// for (let item of band) {
// 	let newItem = oodlify(item);
// 	bandoodle.push(newItem);
// }
// let floodleship = [];
// for (let item of fellowship) {
// 	let newItem = oodlify(item);
// 	floodleship.push(newItem);
// }

//包装成函数
function oodlifyArray(input) {
    let output = [];
    for (let item of input) {
        let newItem = oodlify(item);
        output.push(newItem);
    }
    return output;
}
function izzlifyArray(input) {
    let output = [];
    for (let item of input) {
        let newItem = izzlify(item);
        output.push(newItem);
    }
    return output;
}

// let bandoodle = oodlifyArray(band);
// let floodleship = oodlifyArray(fellowship);
// let bandizzle = izzlifyArray(band);
// let fellowshizzle =izzlifyArray(fellowship);
let bandoodle     = band.map(oodlify);
let floodleship   = fellowship.map(oodlify);
let bandizzle     = band.map(izzlify);
let fellowshizzle = fellowship.map(izzlify);
console.log(bandoodle);
console.log(floodleship);
console.log(bandizzle);
console.log(fellowshizzle);