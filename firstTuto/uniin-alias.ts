type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 20, 'as-number');
console.log(combineAges);
const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);