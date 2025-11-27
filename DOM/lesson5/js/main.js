// setTimeout(() => {
//     console.log('timeout');
// }, 3000)

// console.log('hello');

// !requests

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/");
// xhr.send();
// xhr.onload = function() {
//     console.log(JSON.parse(xhr.response));
// };

// let results = fetch('https://pokeapi.co/api/v2/pokemon/');
// console.log(results);

// !promises

// const myPromise = new Promise((resolve, reject) => {
//   if (1 + 1 == 2) {
//     resolve("Success");
//   } else {
//     reject("Fail");
//   }
// });

// myPromise
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error))
//   .finally((res) => console.log(res));

// console.log(myPromise);

// let res = fetch("https://pokeapi.co/api/v2/pokemon/")
//   .then((res) => res.json)
//   .then((data) =>
//     data.results.forEach((item) => {
//       document.body.innerHTML += `<h1>${item.name}</h1>`;
//     })
//   );

const dogDiv = document.querySelector(".dog");
const btn = document.querySelector("button");

function dogs() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      dogDiv.innerHTML = `<img width="400px" src="${data.massage}" alt="" />`;
    });
}
btn.addEventListener("click", dogs);