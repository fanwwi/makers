// !  setItem ----------  add
// localStorage.setItem("name", "ali");

// ? getItem  ----------  get
// let name = localStorage.getItem("name");
// console.log(name);

// ?  JSON.stringify
// localStorage.setItem('db', JSON.stringify(db))
// let test = localStorage.getItem(test)

// ? ----- JSON.parse
// let test = JSON.parse(localStorage.getItem('db'));
// console.log(test);

// ? ----   removeItem   -----
// localStorage.removeItem('name')

// ?  ----  clear -----
// localStorage.clear

function initStorage() {
  if (!localStorage.getItem("db")) {
    localStorage.setItem("db", "[]");
  }
}
initStorage();

function getProductsFromLs() {
  const products = JSON.parse(localStorage.getItem("db"));
  return products;
}

function setProductsToLS(products) {
  localStorage.setItem("db", JSON.stringify(products));
}

// let products = getProductsFromLs()
// console.log(products);

const container = document.querySelector(".container");
const titleInp = document.querySelector("#title-inp");
const descInp = document.querySelector("#desc-inp");
const priceInp = document.querySelector("#price-inp");
const imageInp = document.querySelector("#image-inp");
const addBtn = document.querySelector("#add-product-btn");
const closeBtn = document.querySelector(".btn-close");
const saveBtn = document.querySelector("#edit-product-btn");
const searchInp = document.querySelector("#search-inp");
const addTriger = document.querySelector("#add");
const modalTitle = document.querySelector(".modal-title");

addTriger.addEventListener("click", () => {
  addBtn.style.display = "block";
  saveBtn.style.display = "none";
  modalTitle.innerText = "Add product";

  titleInp.value = "";
  priceInp.value = "";
  descInp.value = "";
  imageInp.value = "";
});

function render(data = getProductsFromLs()) {
  container.innerHTML = "";
  data.forEach((item, index) => {
    container.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src=${item.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <h6 class="card-title">${item.price}</h6>
    <p class="card-text">${item.description}</p>
  </div>

  <div class='flex'>
    <a href="#" id='${index}' class="btn btn-primary editBtn" data-bs-toggle="modal"
    data-bs-target="#exampleModal">Edit</a>
    <a id='${index}' href="#" class="btn btn-primary btn-danger deleteBtn">Delete</a>
  </div>
</div>    
    `;
  });
}

render();

// create

function createProduct() {
  if (
    !titleInp.value.trim() ||
    !priceInp.value.trim() ||
    !descInp.value.trim() ||
    !imageInp.value.trim()
  ) {
    alert("Some inputs are empty");
    return;
  }

  let newProduct = {
    title: titleInp.value,
    price: priceInp.value,
    description: descInp.value,
    image: imageInp.value,
  };

  let products = getProductsFromLs();
  products.push(newProduct);
  setProductsToLS(products);

  titleInp.value = "";
  priceInp.value = "";
  descInp.value = "";
  imageInp.value = "";

  closeBtn.click();

  render();
}

addBtn.addEventListener("click", createProduct);

function getOneProductByIndex(index) {
  const productObject = getProductsFromLs()[index];
  return productObject;
}

let id = null;

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("editBtn")) {
    let foundObject = getOneProductByIndex(e.target.id);
    titleInp.value = foundObject.title;
    priceInp.value = foundObject.price;
    descInp.value = foundObject.description;
    imageInp.value = foundObject.image;
    id = e.target.id;
    modalTitle.innerText = "Edit product";
    saveBtn.style.display = "block";
    addBtn.style.display = "none";
  }
});

saveBtn.addEventListener("click", () => {
  if (
    !titleInp.value.trim() ||
    !priceInp.value.trim() ||
    !descInp.value.trim() ||
    !imageInp.value.trim()
  ) {
    alert("Some inputs are empty");
    return;
  }

  const editedObj = {
    title: titleInp.value,
    price: priceInp.value,
    description: descInp.value,
    image: imageInp.value,
  };

  const products = getProductsFromLs();
  products.splice(id, 1, editedObj);
  setProductsToLS(products);

  titleInp.value = "";
  priceInp.value = "";
  descInp.value = "";
  imageInp.value = "";

  closeBtn.click();

  render();
});

//delete

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    let answer = confirm("Are you sure?");
    if (!answer) {
      return;
    }
    const products = getProductsFromLs();
    products.splice(e.target.id, 1);
    setProductsToLS(products);
    render();
  }
});

// search

searchInp.addEventListener("input", (e) => {
  const products = getProductsFromLs();
  const filter = products.filter(
    (item) =>
      item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
  );
  render(filter);
});
