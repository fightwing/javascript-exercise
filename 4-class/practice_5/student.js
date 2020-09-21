// TODO 19: 在这里写实现代码
import Person from './person';

export default class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    const result1 = super.introduce;
    const result2 = `I am a Student. I am at Class ${this.klass}.`;
    return result1 + result2;
  }
}
