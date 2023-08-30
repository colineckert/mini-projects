function convertToFahrenheit(value) {
  // (°C × 9/5) + 32 = 37.4°F
  return value * (9 / 5) + 32;
}

function convertToCelsius(value) {
  // (°F − 32) × 5/9
  return (value - 32) * (5 / 9);
}

console.log(convertToFahrenheit(30)); // 86
console.log(convertToCelsius(90)); // 32.22
