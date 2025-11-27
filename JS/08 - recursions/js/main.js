// function test() {
//     return 'hello'
// }
// let result = test()
// console.log(result);

// function perentCounter() {
//     let counter = 0;
//     return function () {
//         counter++;
//         return counter;
//     }
// }

// let firstCounter = perentCounter();
// console.log(firstCounter());

// function MakeAdder(x) {
//     return function (y) {
//         return x + y;
//     };
// };
// let add5 = MakeAdder(5);
// let add2 = MakeAdder(2);

// console.log(add5(3));
// console.log(add2(4));

// function sum(a) {
//     return function() {
//         return function(b) {
//             return function(c) {
//                 return function(d) {
//                     return a + b + c + d;
//                 }
//             }
//         }
//     }
// }
// console.log(sum(2)()(3)(3)(4));



// let count = 0;
// function test() {
//     count++;
//     console.log('hello');
//     if (count > 3) {
//         return;
//     }
//     test();
// }
// test()

function factorial(x) {
    if(x === 0) {
        return 1;
    }
    else {
        return x * factorial(x - 1)
    }
}
// let a = factorial(3);
// console.log(a);


// function fact(x) {
//     let res = 1;
//     for(let i = x; i > 0; i--) {
//         res *= i;
//     }
//     return res;
// }
// console.log(fact(3));


// function cacheFunction() {
//     const cash = {}
//     return function(n) {
//         if(cash[n]) {
//             console.log('Взято из кеша = ', cash[n]);
//             return cash[n];
//         }
//         let result = fn(n);
//         console.log('Посчитала функция = ', result);
//         cash[n] = result;
//         return result;
//     }
// }
// let cacheFactorial = cacheFunction(factorial);
// cacheFactorial(5)



// ЗАМЫКАНИЕ - ФУНКЦИЯ ВОЗВРАЩАЕТ ФУНКЦИЮ
// РЕКУРСИЯ - КОШДА ФУНКЦИЯ ВЫЗЫВАЕТ САМУ СЕБЯ