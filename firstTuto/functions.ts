function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result:' + num)
}

let combineValues: Function;

combineValues = add;
// combineValues = 5;

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
  const result = n1 + n2;
  cb(result);
}

console.log(combineValues(8, 8));

printResult(add(10, 7));

addAndHandle(10, 20, (result) => {
  console.log(result)
});