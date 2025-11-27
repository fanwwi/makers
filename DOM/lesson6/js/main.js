// function sendQuary() {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }
// sendQuary();

// async function sendQuary() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   let data = await res.json();
//   console.log(data);
// }
// sendQuary();

try {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => console.log(data));
} catch (error) {
  console.log(error);
}
