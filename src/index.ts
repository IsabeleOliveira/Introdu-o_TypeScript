// string, number, boolean, null, undefined, symbol, bigint
let x: number = 10

x = 12;

console.log(x);

// inferencia x annotation

let y = 12;
//y = "teste"

let z: number = 12;

// tipos básicos

let fistName: string = "João";
let age: number = 27;
const isStudent: boolean = true;

// String != string

console.log(typeof fistName);

fistName = "Maria";

console.log(fistName);

// objetos

const myNumber: number[] = [1, 2, 3];
console.log(myNumber);
console.log(myNumber.length);
// console.log(myNumber.toUppercase());


// tuplas -> tubple
// let myTuple: [string, number, string[]]  = ["João", 27, ["a", "b", "c"]];


// object literals -> [prop: value]
const user: { name: string, age: number } = {
    name: "João",
    age: 27
};

console.log(user);
console.log(user.name);

// user.job = "developer";

// any 
let a:any = 10;

a = "teste";
a = true;
a = [];

// union types
let id: string | number = 10;

id = "10";

// id = true;
// id = []

// type alias

type myIdType = string | number; // type alias

const userId: myIdType = 10; // string | number
const productId: myIdType = "0001"; 
const shirId: myIdType = 123;

// enum
// tamanho de roupas { P, M, G, GG, XG, XXG }
enum Size{
    P = "P",
    M = "M",
    G = "G",
}

const camisa = {
    name: "Camisa gola V",
    size: Size.P,
};

console.log(camisa);

// literal types
let teste: "autenticado" | null;

// teste = "outrovalor"
teste = "autenticado";
teste = null;

// funcoes
function soma(a: number, b:number){
    return a + b;
}

console.log(soma(10, 2));
// console.log(soma(true, 12));

function sayHello(name: string):string{
    return `Hello ${name}`;
}

console.log(sayHello("João"));

function logger(message: string):void{
    console.log(message);
}

logger("teste");

function greeting(name: string, greet?: string):void{
    if (greet){
        console.log(`${greet} ${name}`);
    }else{
        console.log(`Hello ${name}`);
    }
    console.log(`Hello ${name} ${greet}`);
}

greeting("João");
greeting("João", "Olá");

// interfaces
interface MathFunctionParams{
    n1: number;
    n2: number;
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({n1: 10, n2: 20}));

function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}

console.log(multiplyNumbers({n1: 10, n2: 20}));
// console.log(multiplyNumbers(sumNumbers));


// narrowing
// checagem tipos
function doSomething(info: number | boolean){
    if (typeof info === "number"){
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}

doSomething(10);
doSomething(true);


// generics
function showArraysItems<T>(arr: T[]){ 
    arr.forEach((item) =>{
        console.log(`Item: ${item}`);
    });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);

// classes
class User{
    name;
    role;
    isApproved;

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName(){
        console.log(`O nome do usuário é ${this.name}`);
    }
    
    showUserAge(canshow: boolean){
        if (canshow){
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

// interface com classes
interface IVeiculo{
    brand: string;
    showBrand(): void;
}

class Car implements IVeiculo{

    brand;
    wheels;

    constructor(brand: string, wheels: number){
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void{
        console.log(`A marca do carro é ${this.brand}`);
    }
}


const fusca = new Car("Volkswagen", 4);
fusca.showBrand();

// herança
class SuperCar extends Car{
    engine

    constructor(brand: string, wheels: number, engine: boolean){
        super(brand, wheels);
        this.engine = engine;
    }
}

const ferrari = new SuperCar("Ferrari", 4, true);
console.log(ferrari);

// decorators

// constructor decorator
function BaseParameters(){
    return function <T extends new (...args: any[]) => {}>(constructor: T){
        return class extends constructor{
            id = Math.random();
            createdAt = new Date();
        }
    }
}


@BaseParameters()


class Person{
    name;

    constructor(name: string){
        this.name = name;
    }
}

const Isa = new Person("Isa");
console.log(Isa);