import Person from './person';

// TODO 14: 在这里写实现代码
export default class Worker extends Person {
  introduce() {
    const result = `I am a Worker. I have a job.`;
    return result;
  }
}
