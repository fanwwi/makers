// let db = [
//   {
//     title: "Samsung S10",
//     category: "electronics",
//     price: 700,
//     desc: "Super phone for your life!",
//     img: "https://object.pscloud.io/cms/cms/Photo/img_0_77_1809_0_6.png",
//   },
//   {
//     title: "iPhone 13 Pro",
//     category: "electronics",
//     price: 1100,
//     desc: "One of the most powerful cameras!",
//     img: "https://www.tradeinn.com/f/13885/138855059/apple-iphone-13-pro-256gb-6.1-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg",
//   },
//   {
//     title: "Apple",
//     category: "fruits",
//     price: 2,
//     desc: "Healthy fruit that is used in many dishes and desserts.",
//     img: "https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg",
//   },
//   {
//     title: "Orange",
//     category: "fruits",
//     price: 7,
//     desc: "Fruit for one of the most popular types of juice.",
//     img: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/whole-halved-oranges.jpg",
//   },
//   {
//     title: "Audi R8",
//     category: "cars",
//     price: 98000,
//     desc: "A sports car that can reach tremendous speed.",
//     img: "https://cdn.motor1.com/images/mgl/JmVR6/s1/2019-audi-r8-onlocation.jpg",
//   },
// ];

const container = document.querySelector(".container");
// const modal = document.querySelector(".modal");
// const addBtn = document.querySelector(".addBtn");
// const title = document.querySelector("#title");
// const price = document.querySelector("#price");
// const categ = document.querySelector("#category");
// const desc = document.querySelector("#description");
// const img = document.querySelector("#img");
// const close = document.querySelector(".close");

// function render() {
//   container.innerHTML = "";
//   db.forEach((item) => {
//     container.innerHTML += `<div class="card">
//         <h2 class="title">${item.title}</h2>
//         <span class="category">${item.category}</span>
//         <span class="price">${item.price}</span>
//         <p class="description">${item.description}</p>
//         <img src="${item.img}" alt="" class="image">
//     </div>`;
//   });
// }

// function closed() {
//   close.addEventListener("click", () => {
//     modal.style.display = "none";
//   });
// }

// function addProduct() {
//   modal.style.display = "block";
//   const newProduct = {
//     title: title.value,
//     price: price.value,
//     desc: desc.value,
//     image: img.value,
//     id: db.length,
//     category: categ.value,
//   };
//   db.push(newProduct);
//   title.value = "";
//   price.value = "";
//   desc.value = "";
//   img.value = "";
//   closed.click();
//   render();
// }
// addBtn.addEventListener("click", addProduct);

function render(name, status, image) {
  container.innerHTML += `
    <div class="block">
      <img src="${image}" alt="">
      <h1>${name}</h1>
      <span>${status}</span>
    </div>
  `;
}

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((char) => {
      let name = char.name;
      let status = char.status;
      let image = char.image;

      render(name, status, image);
    });
  });
