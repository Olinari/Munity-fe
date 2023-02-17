export function indexOfMaxValue(arr: number[]) {
  return arr.reduce((maxIndex, currentValue, currentIndex) => {
    return currentValue > arr[maxIndex] ? currentIndex : maxIndex;
  }, 0);
}
