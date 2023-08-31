function getDistinctValues(arr) {
  const uniques = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (isInArray(value, uniques)) continue;
    uniques.push(value);
  }

  return uniques;
}

function isInArray(value, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return true;
  }
  return false;
}

console.log(getDistinctValues([1, 2, 3, 4, 2, 3, 5]));
console.log(getDistinctValues([1, 0, 3, 7, 1]));
