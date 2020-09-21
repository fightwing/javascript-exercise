export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  const result = collection.filter(carNum => carNum.substr(0, 2) === '粤A');
  return result.length;
}
