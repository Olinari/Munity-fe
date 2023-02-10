export function indexOfMaxValue(arr) {
  return arr.reduce((maxIndex, currentValue, currentIndex) => {
    return currentValue > arr[maxIndex] ? currentIndex : maxIndex;
  }, 0);
}
