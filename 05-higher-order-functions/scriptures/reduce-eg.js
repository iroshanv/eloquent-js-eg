'use strict'

const SCRIPTS = require("./scripts");

function reduce(array, combine, start) {
    let current = start;
    for(let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1,2,3,4,5], (a,b) => a+b, 0));
// console.log([1,2,3,4,5].reduce((a,b)=> a+b));

console.log(SCRIPTS.ranges);