function reverseString(value) {
  if (value.length === 1) return value;
  return reverseString(value.slice(1)) + value[0];
}

console.log(reverseString('A'));
console.log(reverseString('car'));
console.log(reverseString('racecar'));
console.log(reverseString('colin'));
