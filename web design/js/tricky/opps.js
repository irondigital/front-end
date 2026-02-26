// oops


// what is oops in javascript ?
//  oops stands for object oriented programming structured  language 
//  oops is partial support inside of javascript
//  oops is used in advanced javascript
//  oops features : 

//   a) class 

//    class is a blueprint for creating objects. It defines properties and methods that the objects created from the class will have. In JavaScript, classes were introduced in ES6 as syntactical sugar over the existing prototype-based inheritance.

//    Example of a class in JavaScript:
    // class Person {
    //     constructor(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    //     greet() {
    //         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    //     }
    // }
    // const person1 = new Person("Alice", 30);
    // person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
    




//   b) object 
//   object is an instance of a class. It is a collection of properties and methods that represent a specific entity or concept. In JavaScript, objects can be created using object literals, constructor functions, or classes.

//   Example of an object in JavaScript:    
// const person1 = {
//     name: "Alice",
//     age: 30, 
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// };
// const person1 = new Person("Alice", 30);
    // person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.



//   c) inheritance 
//       1) single inheritance 
    //    In inheritance, the child can access the parent’s properties, but the parent cannot access the child’s properties.

                // ex:
//                 class Animal {
//   speak() {
//     console.log("Animal speaks");
//   }
// }
// class Dog extends Animal {
//   bark() {
//     console.log("Dog barks");
//   }
// }
// let d = new Dog();

// d.speak(); // from parent
// d.bark();  // from child



//      2) multilevel inheritance 
// In multilevel inheritance, a child class inherits from a parent class, and then another child class inherits from that child class. This creates a chain of inheritance where each class can access the properties and methods of its parent classes.

// ex:
// class Animal {
//   speak() {
//     console.log("Animal speaks");
//   }
// }
// class Dog extends Animal {

//   bark() {

//     console.log("Dog barks");
//   }
// }
// class Puppy extends Dog {
//   weep() {
//     console.log("Puppy weeps");
//   }
// }
// let p = new Puppy();
// p.speak(); // from grandparent
// p.bark();  // from parent
// p.weep(); // from child      

//       3) multiple inheritance
// In multiple inheritance, a child class can inherit from more than one parent class. However, JavaScript does not support multiple inheritance directly. Instead, you can achieve similar functionality using mixins or by using composition.

// A child class inherits from more than one parent class.
//  class Engine {
//   start() {
//     console.log("Engine started");
//   }
// }

// class MusicSystem {
//   play() {
//     console.log("Music playing");
//   }
// }

// class Car {
//   constructor() {
//     this.engine = new Engine();
//     this.music = new MusicSystem();
//   }
// }

// let car = new Car();
// car.engine.start();
// car.music.play();

//   d) polymorphism 
//       1) method_overloading
// Method overloading is a feature in object-oriented programming that allows a class to have multiple methods with the same name but different parameters. However, JavaScript does not support method overloading directly. Instead, you can achieve similar functionality by using default parameters or by checking the number and types of arguments passed to a function.

// methods overloading means same method name but different parameeters.
// Example of method overloading in JavaScript using default parameters:
// class Calculator {
//     add(a, b) {
//         return a + b;
//     }   
//     add(a, b, c) {
//         return a + b + c;
//     }
// }
// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // Output: 5
// console.log(calculator.add(2, 3, 4)); // Output: 9

//       2) method_overriding 
// Method overriding is a feature in object-oriented programming that allows a child class to provide a specific implementation of a method that is already defined in its parent class. The child class can override the method by providing its own implementation, which will be called instead of the parent class's method when invoked on an instance of the child class.
// Example of method overriding in JavaScript:
// class Animal {
//   speak() {
//     console.log("Animal speaks");
//   }
// }
// class Dog extends Animal {
//   speak() {

//     console.log("Dog barks");
//   }
// }
// let d = new Dog();
// d.speak(); // Output: Dog barks (overridden method)

//   e) encapsulation 
// Encapsulation is a fundamental principle of object-oriented programming that involves bundling data (properties) and methods (functions) that operate on that data into a single unit, called a class. It also involves restricting direct access to some of the object's components, which is typically achieved through access modifiers (like private, protected, and public). Encapsulation helps to protect the internal state of an object and promotes modularity and maintainability in code.

// Example of encapsulation in JavaScript:
// class Person {
//     constructor(name, age) {
//         this._name = name; // private property
//         this._age = age;   // private property
//     }
//     getName() {
//         return this._name; // public method to access private property
//     }
//     getAge() {
//         return this._age; // public method to access private property
//     }
//     setName(name) {
//         this._name = name; // public method to modify private property
//     }
//     setAge(age) {
//         this._age = age; // public method to modify private property
//     }
// }
// const person1 = new Person("Alice", 30);
// console.log(person1.getName()); // Output: Alice
// console.log(person1.getAge()); // Output: 30
// person1.setName("Bob");
// person1.setAge(25);
// console.log(person1.getName()); // Output: Bob
// console.log(person1.getAge()); // Output: 25


//   f) abstraction
// Abstraction is a fundamental principle of object-oriented programming that involves hiding the complex implementation details of an object and exposing only the necessary and relevant features to the user. It allows developers to focus on what an object does rather than how it does it. Abstraction helps to reduce complexity and increase code reusability by providing a clear separation between the interface and implementation of an object.

// Example of abstraction in JavaScript:
// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }
//     start() {
//         console.log(`${this.make} ${this.model} is starting...`);
//     }
//     stop() {
//         console.log(`${this.make} ${this.model} is stopping...`);
//     }
// }
// const car1 = new Car("Toyota", "Camry");
// car1.start(); // Output: Toyota Camry is starting...
// car1.stop(); // Output: Toyota Camry is stopping...



//   oops provides some methods ...

//   a) what is a constructor 
    // constructor is a special method in a class that is used to initialize objects created from the class. It is called automatically when a new object is created using the class. The constructor method typically takes parameters that are used to set the initial values of the object's properties.

    // Example of a constructor in JavaScript:     
    // class Person {
    //     constructor(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    //     greet() {
    //         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    //     }
    // }    





            


//   b) destructor
                       
// this used to destroy the object and free up the memory used by the object. In JavaScript, there is no built-in destructor method like in some other programming languages. However, you can use the `delete` operator to remove properties from an object or set the object reference to `null` to allow garbage collection to free up memory.

// Example of a destructor-like behavior in JavaScript:
// let person1 = {
//     name: "Alice",

//     age: 30,
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// };
// person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.       






//   c) super 
// super is a keyword in JavaScript that is used to call the constructor or methods of a parent class from a child class. It allows you to access and invoke the properties and methods of the parent class within the child class.

// Example of using super in JavaScript:
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// class Student extends Person {   

//     constructor(name, age, grade) {
//         super(name, age);               
//         this.grade = grade;
//     }
//     study() {
//         console.log(`${this.name} is studying in grade ${this.grade}.`);
//     }
// }
// const student1 = new Student("Bob", 20, "A");
// student1.greet(); // Output: Hello, my name is Bob and I am 20 years old.
// student1.study(); // Output: Bob is studying in grade A.



                





//   d) static 
// static is a keyword in JavaScript that is used to define static methods or properties in a class. Static methods and properties belong to the class itself rather than to instances of the class. They can be accessed without creating an instance of the class.

// Example of using static in JavaScript:   
// class MathUtils {
//     static add(a, b) {
//         return a + b;
//     }
//     static subtract(a, b) {
//         return a - b;
//     }
// }
// console.log(MathUtils.add(5, 3)); // Output: 8
// console.log(MathUtils.subtract(5, 3)); // Output: 2



// // example of class in JavaScript:
// class person {
//     constructure(name,age){
//         this.name= name;
//         this.age = age;

//     }
//     greet(){
//         console.log(`hello my name is ${this.name} and i am ${this.age} years old`)
//     }

// }