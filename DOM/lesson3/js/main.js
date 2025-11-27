let db = [
  {
    title: "Nike",
    price: "200",
    description: "Качетсвтвенные кроссовки",
    image: "https://intertop.ua/load/NM20249/1600x2133/MAIN.jpeg",
    id: 0,
  },

  {
    title: "Adidas",
    price: "250",
    description: "Очень качетсвтвенные кроссовки",
    image: "https://intertop.ua/load/IF9995-KZ/1600x2133/MAIN.jpeg",
    id: 1,
  },
];

const container = document.querySelector(".products");

function render() {
  container.innerHTML = "";
  db.forEach((item) => {
    container.innerHTML += `
        <div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="${item.title}">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <h4>${item.price}$</h4>
    <p class="card-text">Description: ${item.description}</p>
    
    <a id=${item.id} class='btn btn-primary editBtn' data-bs-toggle="modal"
    data-bs-target="#exampleModal">Edit</a>
    <a id=${item.id} style='background-color: red; border: none;' class='btn btn-primary deleteBtn'>Delete</a>
  </div>
</div>
        `;
  });
}
render();
const titleInp = document.querySelector("#title-inp");
const priceInp = document.querySelector("#price-inp");
const descInp = document.querySelector("#desc-inp");
const imageInp = document.querySelector("#img-inp");
const addForm = document.querySelector("#add-form");
const closed = document.querySelector(".btn-close");
const createBtn = document.querySelector("#createBtn");
const saveBtn = document.querySelector("#saveBtn");

function addProduct() {
  if (
    !titleInp.value.trim() ||
    !priceInp.value.trim() ||
    !descInp.value.trim() ||
    !imageInp.value.trim()
  ) {
    alert("Some inputs are empty!");
    return;
  }
  const newProduct = {
    title: titleInp.value,
    price: priceInp.value,
    description: descInp.value,
    image: imageInp.value,
    id: db.length,
  };
  db.push(newProduct);
  titleInp.value = "";
  priceInp.value = "";
  descInp.value = "";
  imageInp.value = "";
  closed.click();
  render();
}
createBtn.addEventListener("click", addProduct);

let id = null;

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("editBtn")) {
    id = e.target.id;
    console.log(id);
    let foundObj = db.find((item) => item.id == id);
    console.log(foundObj);
    titleInp.value = foundObj.title;
    priceInp.value = foundObj.price;
    descInp.value = foundObj.description;
    imageInp.value = foundObj.image;
  }
});


function updateProduct() {
  let newProductObj = {
    title: titleInp.value,
    price: priceInp.value,
    description: descInp.value,
    image: imageInp.value,
    id
  };
  db.splice(id, 1, newProductObj)
  console.log(db, 'changed');
  titleInp.value = "";
  priceInp.value = "";
  descInp.value = "";
  imageInp.value = "";
  closed.click();
  render()
}
saveBtn.addEventListener('click', updateProduct)

// delete

document.addEventListener('click', (e) => {
  if(e.target.classList.contains('deleteBtn')) {
    const id = e.target.id
    db.splice(id, 1)
    render()
  }
}) 
