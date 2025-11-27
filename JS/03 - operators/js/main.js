// const num1 = 10;
// const num2 = "10";
// console.log(num1 < num2);

// console.log(num1 == num2);

// console.log(num1 <= num2);
// console.log(num1 === num2);

// console.log(num1 != num2);

// console.log(Boolean('hello')); - true
// console.log(!'hello'); - false

// console.log(Boolean('')); - false
// console.log(Boolean('   ')); - false
// console.log(Boolean('0')); - false
// console.log(Boolean('-10')); - false
// console.log(Boolean({})); - true
// console.log(Boolean(null)); - false
// console.log(Boolean(undefined)); - false

// let str = '';
// if (str === '') {
//     alert('hello');
// }

// ! - не
// && - и (всегда выводит false, даже еслт 50 true и 1 false, вернет false)
// || - или (всегда выводит true)

// console.log(true && true && true && false); - false
// console.log(true && 12 && null); - null
// console.log(null && 0 &&''); - null(потому что стоит первым)

// console.log('hello' && '' && {} ); - {}

// console.log(true || false || false || false ||); - true
// console.log('hello' || 12 || []); - true
// console.log(0 || '' || null); - null

// console.log(true || false && true);

// console.log(("hello" && false) || (null && true));

// let num1 = 70;
// let num2 = 70;

// if(num1 > num2) {
//     alert(`${num1} bigger than ${num2}`);
// }
// else if(num1 === num2) {
//     alert(`${num1} is equal to ${num2}`)
// }
// else {
//     alert(`${num1} less than ${num2}`);
// }

// const user = {
//     isAdmin: false,
// }
// if (user.isAdmin === false) {
//     alert('You are not an admin');
// }
// else {
//     alert('You are admin!')
// }

// let role = prompt('Tell me who tou are');

// const correctPassword = '1234'
// if(role === 'user') {
//     prompt('Enter your name')
// }
// else if(role === 'staff') {
//     alert('Welcome')
// }
// else if(role === 'admin') {
//     let password = prompt('enter the password')
//     if (password === correctPassword) {
//         alert('Welco0me our dear admin');
//     }
//     else {
//         alert('Go out');
//     }
// }
// else {
//     alert('Not allowed')
// }

// const product = {
//     category: food,
//     price: 200,
// }
// if(product.category === 'food' && product.price > 200) {
//     alert('very expencive');
// }

// let number = +prompt('Enter the number from 1 - 7')

// if(number == 1) {
//     alert('Monday');
// }
// else if(number == 2) {
//     alert('Tuesday');
// }
// else if(number == 3) {
//     alert('Wednesday');
// }
// else if(number == 4) {
//     alert('Thursday');
// }
// else if(number == 5) {
//     alert('Friday');
// }
// else if(number == 6) {
//     alert('Saturday');
// }
// else if(number == 7) {
//     alert('Sunday');
// }
// else{
//     alert('Нельзя');
// }

// switch(number) {
//     case 1:
//         alert('Monday');
//         break;
//     case 2:
//         alert('Tuesday');
//         break;
//     case 3:
//         alert('Wednesday');
//         break;
//     case 4:
//         alert('Thursday');
//         break;
//     case 5:
//         alert('Friday');
//         break;
//     case 6:
//         alert('Saturday');
//         break;
//     case 7:
//         alert('Sunday');
//         break;
// default:
//     alert('Нельзя');
// }

// const tag = prompt("How to crate div tag?");

// switch (tag) {
//   case "<h1></h1>":
//     alert("This is zagolovok");
//     break;
//   case "<div>":
//     alert("almost right, try again");
//     break;
//   case "<div></div>":
//     alert("Molodets");
//     break;
//   default:
//     alert("No no no");
// }

// let person = {
//   name: "Jack",
//   age: 20,
//   canDrive: null,
// };

// if(person.age >= 17) {
//     person.canDrive = true;
// }
// else {
//     person.canDrive = false;
// }
// console.log(person);

// person.age >= 17 ? (person.canDrive = true) : (person.canDrive = false);

// let massage;
// let speed = 80;

// if(speed >= 110) {
//     massage = 'Too fast';
// }
// else if(speed < 40 && speed > 20) {
//     massage = 'Slow'
// }
// else if(speed < 20) {
//     massage = 'Too slow';
// }
// else if(speed < 0) {
//     massage = "Don't do like that"
// }
// else {
//     massage = 'You are okey';
// }
// console.log(massage)

let massage =
  speed >= 100
    ? "Too fast"
    : speed < 40 && speed > 20
    ? "Slow"
    : speed < 20
    ? "Too slow"
    : (massage = "OK");
