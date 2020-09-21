function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  const result = collection.filter(num => num % 3 === 0);
  return result;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const result = collection.filter(function(element, index, self) {
    return self.indexOf(element) == index;
  });
  return result;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
