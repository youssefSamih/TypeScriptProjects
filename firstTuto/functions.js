"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result:' + num);
}
var combineValues;
combineValues = add;
// combineValues = 5;
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
console.log(combineValues(8, 8));
printResult(add(10, 7));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
