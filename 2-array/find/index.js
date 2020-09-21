export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const re = collection.find(person => person.age < 20 && person.age > 10);
  const result = re.name;
  return result;
}
