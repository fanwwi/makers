// localStorage.setItem('name', 'Ilya')
// let name = localStorage.getItem('name')
// console.log(name);

// let db = [
//     {
//       title: "Nike",
//       price: 200,
//       description: "Kachestvennye",
//       image:
//         "https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?cs=srgb&dl=pexels-shane-aldendorff-786003.jpg&fm=jpg",
//       id: 0,
//     },
//     {
//       title: "Adidas",
//       price: 250,
//       description: "Ochen Kachestvennye",
//       image:
//         "https://st4.depositphotos.com/1005131/25469/i/450/depositphotos_254694672-stock-photo-belarus-minsk-march-2012-sneakers.jpg",
//       id: 1,
//     },
//   ];

// localStorage.setItem('db', JSON.stringify(db))

// let test = localStorage.getItem('db')
// console.log(JSON.parse(localStorage.getItem('db')));
// // localStorage.removeItem('db')
// // localStorage.clear('db')

let db = [];
localStorage.setItem("db", JSON.stringify);

function setProductsToLS(products) {
  localStorage.setItem("db", JSON.stringify(products));
}

function getProductsFromLS() {
  const products = JSON.parse(localStorage.getItem("db"));
  return products;
}

const container = document.querySelector(".container");

function render(data = getProductsFromLS()) {
  data.forEach((item, index) => {
    container.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
  });
}
render()