export function createArrayWithStep(number, step) {
  const resultArray = [];
  for (let i = step; i <= number; i += step) {
    resultArray.push(i.toString());
  }
  return resultArray;
}
