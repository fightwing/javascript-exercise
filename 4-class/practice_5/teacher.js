// TODO 20: 在这里写实现代码
import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    const result1 = super.introduce();
    if (this.klass === undefined) {
      return `${result1} I am a Teacher. I teach No Class.`;
    }
    return `${result1} I am a Teacher. I teach Class ${this.klass}.`;
  }
}
