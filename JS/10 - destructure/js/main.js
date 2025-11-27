// ПОВЕРХНОСТНОЕ КОПИРОВАНИЕ

// let str = "hello";
// let str2 = str;
// console.log(str2 === str);

// let obj = {
//   name: "Vasya",
// };
// let obj2 = { ...obj };
// // obj2.age = 15;
// console.log(obj2, "obj2");
// console.log(obj, "obj");

// let person = {
//   name: "Petya",
//   pet: {
//     name: "Barsik",
//   },
// };

// let person2 = { ...person };
//   person2.name = "Igor";
//   console.log(person, "person");
//   console.log(person2, "person2");

// let person = {
//     name: 'Petya',
//     pet: {
//         name: 'Barsik',
//     },
// };

// let person2 = {...person};
// person2.pet.name = 'Snezhok';
// console.log(person, 'person');
// console.log(person2, 'person2');

// ГЛУБОКОЕ КОПИРОВАНИЕ

// let person2 = JSON.parse(JSON.stringify(person));
// person2.pet.name = 'Igor';
// console.log(person, 'person');
// console.log(person2, 'person2');

// let friends = ["Alvarez", "Billy", "Alekhandro", "Jessica"];
// let friends2 = [...friends];
// friends2.push('Andrey');
// console.log(friends, 'friends');
// console.log(friends2, 'friends2');

// DESTRUCTURE

// let first = friends[0]
// let second = friends[1];

// let [first, second] = friends;
////////
// let [first, second, ...other] = friends;
// console.log(other);

// let array = [
//   [0, 1, 2, [3]],
//   [4, 5, 6, 7],
// ];

// let [[a, b, c, [d]], e] = array;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// ЗАДАЧА

// let arr = [0, 1, 2, 3, 4, 5]
// let [, , two, ...rest] = arr
// console.log(two);
// console.log(rest);

// ОБЪЕКТЫ

// let person = {
//     name: 'Ivan',
//     latsName: 'Ivanov',
//     age: 30,
// }
// let name = person.name
////////
// let {name, age, lastName} = person;
// console.log(age);

// let {name, pet: {petName}} = person;
// console.log(name, petName);

// let obj = {
//     arr: [{name: 'John'}],
// }
// // let {arr: [{name}]} = obj;
// // console.log(name);

// let name2 = 'Ilya'
// let {
//     arr: [{name2: name3}],
// } = obj;
// console.log(name);
// console.log(name2);

// test({name: 'Vasya', age: 10, job: 'none'})

// function test() {
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.job);
// }
//////
// function test(name, age, job) {
//     //     console.log(name);
//     //     console.log(age);
//     //     console.log(job);
//     // }

// МЕТОДЫ МАССИВОВ. ПОВТОРЕНИЕ

// let products = [
//     {title: 'Fridge', price: 200, desc: 'Very good'}
//     {title: 'Iphoine', price: 400, desc: 'Very nice'}
//     {title: 'Xiomi', price: 300, desc: 'Very very good'}
// ]

// products.forEach(({title, price, desc}) => {
//     console.log(title);
//     console.log(price);
//     console.log(desc);
// }))


