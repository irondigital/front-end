  class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getUser() {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }
}

const u1 = new User("Milan", 22);
u1.getUser();
