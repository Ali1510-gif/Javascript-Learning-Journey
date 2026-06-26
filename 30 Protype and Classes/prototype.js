/**********************************************************************
 *          PROTOTYPE & CLASSES IN JAVASCRIPT - COMPLETE DEMO
 **********************************************************************/

console.log("==================================================");
console.log("1. OBJECT LITERAL");
console.log("==================================================");

const person = {
    name: "Rohit",
    age: 25,

    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
};

person.greet();

console.log(person.name);
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("salary"));
console.log(person.toString());



console.log("\n==================================================");
console.log("2. PROTOTYPE CHAIN USING __proto__");
console.log("==================================================");

const employee = {
    company: "Google",
    salary: 100000
};

employee.__proto__ = person;

console.log(employee.company);
console.log(employee.salary);

// Properties inherited from prototype
console.log(employee.name);
console.log(employee.age);

employee.greet();

console.log(employee.hasOwnProperty("company"));
console.log(employee.hasOwnProperty("name"));



console.log("\n==================================================");
console.log("3. Object.create()");
console.log("==================================================");

const student = Object.create(person);

student.course = "B.Tech";
student.year = 4;

console.log(student.course);
console.log(student.year);

// Inherited properties
console.log(student.name);
console.log(student.age);

student.greet();

console.log(student.hasOwnProperty("course"));
console.log(student.hasOwnProperty("name"));



console.log("\n==================================================");
console.log("4. PROTOTYPE CHAIN VISUAL");
console.log("==================================================");

/*

student
   │
   ▼
person
   │
   ▼
Object.prototype
   │
   ▼
null

*/

console.log(student.__proto__ === person);
console.log(person.__proto__ === Object.prototype);



console.log("\n==================================================");
console.log("5. WHY CLASSES?");
console.log("==================================================");

/*
Without classes:

const obj1 = {
    name:"Rohit",
    greet(){...}
}

const obj2 = {
    name:"Mohit",
    greet(){...}
}

const obj3 = {
    name:"Mohan",
    greet(){...}
}

Same methods are repeated.

Classes solve this problem.
*/



console.log("\n==================================================");
console.log("6. CLASS");
console.log("==================================================");

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }

    introduce() {
        console.log(`My age is ${this.age}`);
    }

}

const p1 = new Person("Rohit", 25);
const p2 = new Person("Mohit", 20);

p1.greet();
p1.introduce();

p2.greet();
p2.introduce();



console.log("\n==================================================");
console.log("7. CLASS INHERITANCE");
console.log("==================================================");

class Customer extends Person {

    constructor(name, age, account, balance) {

        super(name, age);

        this.account = account;
        this.balance = balance;
    }

    checkBalance() {
        console.log(`Balance : ₹${this.balance}`);
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ₹${amount}`);
    }

    withdraw(amount) {

        if (amount > this.balance) {
            console.log("Insufficient Balance");
            return;
        }

        this.balance -= amount;
        console.log(`Withdraw ₹${amount}`);
    }

}

const c1 = new Customer("Mohan", 22, 1001, 5000);

c1.greet();
c1.introduce();

console.log("Account :", c1.account);

c1.checkBalance();

c1.deposit(3000);

c1.checkBalance();

c1.withdraw(2000);

c1.checkBalance();



console.log("\n==================================================");
console.log("8. INSTANCEOF");
console.log("==================================================");

console.log(c1 instanceof Customer);
console.log(c1 instanceof Person);
console.log(p1 instanceof Customer);
console.log(p1 instanceof Person);



console.log("\n==================================================");
console.log("9. PROTOTYPE OF CLASS");
console.log("==================================================");

console.log(Person.prototype);

console.log(c1.__proto__ === Customer.prototype);

console.log(
    Customer.prototype.__proto__ === Person.prototype
);



console.log("\n==================================================");
console.log("10. METHOD OVERRIDING");
console.log("==================================================");

class Animal {

    sound() {
        console.log("Animal makes sound");
    }

}

class Dog extends Animal {

    sound() {
        console.log("Dog Barks");
    }

}

const d1 = new Dog();

d1.sound();



console.log("\n==================================================");
console.log("11. STATIC METHOD");
console.log("==================================================");

class MathUtility {

    static add(a, b) {
        return a + b;
    }

}

console.log(MathUtility.add(10, 20));

// const m = new MathUtility();
// m.add() ❌



console.log("\n==================================================");
console.log("12. OBJECT.PROTOTYPE");
console.log("==================================================");

const arr = [10, 20, 30];

console.log(arr.toString());
console.log(arr.hasOwnProperty("length"));

console.log(arr.__proto__ === Array.prototype);

console.log(Array.prototype.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__);



console.log("\n==================================================");
console.log("13. COMPLETE PROTOTYPE CHAIN");
console.log("==================================================");

/*

Customer Object (c1)
        │
        ▼
Customer.prototype
        │
        ▼
Person.prototype
        │
        ▼
Object.prototype
        │
        ▼
null

*/

console.log(Object.getPrototypeOf(c1));
console.log(Object.getPrototypeOf(Customer.prototype));
console.log(Object.getPrototypeOf(Person.prototype));



console.log("\n==================================================");
console.log("14. SUMMARY");
console.log("==================================================");

console.log("✔ Every object has a prototype.");
console.log("✔ JavaScript uses prototype-based inheritance.");
console.log("✔ Object.create() creates inheritance.");
console.log("✔ Classes are syntactic sugar over prototypes.");
console.log("✔ extends is used for inheritance.");
console.log("✔ super() calls parent constructor.");
console.log("✔ instanceof checks inheritance.");
console.log("✔ Methods live inside prototype, not inside every object.");

console.log("\n============== END OF DEMO ==============");
