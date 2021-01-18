const myNumber = 12.430;

// Transformer number to string
const numberAsString = myNumber.toString();
console.log('number transformed on string: ' , typeof numberAsString);

// Returned number with a number of decimal places
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNumber with two decimal places: ', fixedTwoDecimals);

// Transforms a String to float 
console.log('\nString parsed to float: ', parseFloat('13.22'));

// Transforms a string to int
console.log('\nString parsed to int: ', parseInt('13.20'));