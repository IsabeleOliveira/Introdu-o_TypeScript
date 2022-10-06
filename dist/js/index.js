"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 12;
console.log(x);
let y = 12;
let z = 12;
let fistName = "João";
let age = 27;
const isStudent = true;
console.log(typeof fistName);
fistName = "Maria";
console.log(fistName);
const myNumber = [1, 2, 3];
console.log(myNumber);
console.log(myNumber.length);
const user = {
    name: "João",
    age: 27
};
console.log(user);
console.log(user.name);
let a = 10;
a = "teste";
a = true;
a = [];
let id = 10;
id = "10";
const userId = 10;
const productId = "0001";
const shirId = 123;
var Size;
(function (Size) {
    Size["P"] = "P";
    Size["M"] = "M";
    Size["G"] = "G";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.P,
};
console.log(camisa);
let teste;
teste = "autenticado";
teste = null;
function soma(a, b) {
    return a + b;
}
console.log(soma(10, 2));
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello("João"));
function logger(message) {
    console.log(message);
}
logger("teste");
function greeting(name, greet) {
    if (greet) {
        console.log(`${greet} ${name}`);
    }
    else {
        console.log(`Hello ${name}`);
    }
    console.log(`Hello ${name} ${greet}`);
}
greeting("João");
greeting("João", "Olá");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 10, n2: 20 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multiplyNumbers({ n1: 10, n2: 20 }));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(10);
doSomething(true);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserAge(canshow) {
        if (canshow) {
            console.log(`A idade do usuário é ${this.role}`);
            return;
        }
        console.log("Informação restrita");
    }
}
const joao = new User("João", "admin", true);
console.log(joao);
joao.showUserName();
joao.showUserAge(true);
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("Volkswagen", 4);
fusca.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const ferrari = new SuperCar("Ferrari", 4, true);
console.log(ferrari);
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const Isa = new Person("Isa");
console.log(Isa);
