// function greeting() {
//     console.log('hello');
// };
// greeting();

// function sum(a, b) {
//     console.log(a + b);
// };
// sum(2, 3)

// function greeting(name) {
//     console.log();
// }

// function counter(number) {
//     for(let i = number; i >= 1; i--) {
//         console.log(i);
//     }
// }
// counter(5);

// let result = sum(2, 2);
// let massage = `Sum = ${result}`
// console.log(massage);

// function mult(a, b) {
//     return a+b;
// }
// let result = sum(5, 5) + mult(5, 5);
// console.log(result);

// function perim(a, b) {
//     return (a + b) * 2;
// }
// let result = perim(5, 10);
// console.log(result);

// const sum = function(a, b) {
//     return a + b;
// }
// console.log(sum(2, 5));

// const person = {
//     name: 'Jack',
//     salary: 20000,
// };
// function givePremium(salary, percent) {
//    return (salary * percent) / 100
// }
// person.premium = givePremium(person.salary, 10)
// console.log(person);

// let hello = 'qwer';
// function test() {
//     let hello = 'Привет'
//     console.log(hello);
// }
// test()

// let fruits = ['apple', 'pineapple', 'watermelon', 'melon']

// const removeElem = function(array, index) {
//     array.splice(index, 1);
//     return array;
// }
// console.log(removeElem(fruits, 1));

// const reverseArray = function (array) {
//     let reversed = [];
//     for (let elem of array) {
//       reversed.push(elem.split("").reverse().join(""));
//     }
//     return reversed;
//   };

//   console.log(reverseArray(fruits));

// const sum = (a, b) => a + b;
// console.log(sum(5, 7));

// const getType = (x) =>
//   typeof x === "string" ? "this is string" : "this is not a string";
// console.log(getType('number'))





// const person1 = {
//   name: "Billy",
//   age: 47,
//   saynam: function () {
//     console.log(`Hello my name is ${this.name}`);
//   },
//   pet: {
//     name: 'Barsik',
//     saynam: function () {
//       console.log(`Hello my name is ${this.name}`);
//     },
//     sayMasterName: function() {
//       console.log(`my master\'s name is ${this.name}`);
//     }
//   }
// };
// // console.log(person1);
// // person1.saynam();

// const person2 = {
//   name: 'Jimmy'
// };

// person1.saynam.call(person2)
// person1.pet.sayMasterName.call(person1);








// const person = {
//   name: 'Traver',
//   work: 'driver',
//   health: 100,
//   money: 0,
//   fullness: 100,
//   goToWork: function() {
//     this.money += 50;
//     this.health -= 10;
//     this.fullness -= 30;
//   },
//   goToDoctor: function () {
//     this.health += 50;
//     if(this.health > 100) {
//       this.health = 100;
//     }
//     if(this.money < 20) {
//       alert('Go to work')
//       return;
//     }
//     this.money -= 20;
//   },
//   eat: function() {
//     this.fullness += 30;
//     if (this.fullness > 100) {
//       this.fullness = 100;
//     }
//     this.money -= 20;
//   },
//   checkStatus: function() { () => {
//     console.log(this);
//     if(this.fullness < f) {
//       this.health -= 10
//     }
//   },
//  }
// };
// person.goToWork();
// person.eat()
// person.goToDoctor()
// person.checkStatus();



// let man = {
//   name: 'Alvarez',
// }
// man.age = 15;
// console.log(man);


// СВОЙ МЕТОД МАССИВА
// console.log(Array.prototype);
// Array.prototype.customMethod = function () {
//   let sum = 0;
//   console.log(this);
//   for(let num of this) {
//     sum+= num;
//   }
//   return sum;
// }
// let array = [1, 2, 3, 4, 5]
// let res = array.customMethod();
// console.log(res);