// TODO 17: 在这里写实现代码
import Person from './person';

// TODO 14: 在这里写实现代码
export default class Worker extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    const result1 = super.introduce();
    const result2 = `I am a Worker. I have a job.`;
    return `${result1} ${result2}`;
  }
}
