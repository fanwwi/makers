// ! getElementBy... (ВОЗВРАШАЕТ HTML-COLLECTION)

// const title = document.getElementById('title')
// console.log(title);

// const ul = document.getElementsByTagName('ul')
// console.log(ul);

// const items = document.getElementsByClassName('item')
// for(let i = 0; i < items.length; i++) {
//     console.log(items[i]);
// }

// const input = document.getElementsByName('inpName')
// console.log(input[0].value);

// ! querySelector (ВОЗВРАЩЕТ NODE-LIST)

// const title = document.querySelectorAll('#title');
// console.log(title);

// const ul = document.querySelector('ul')
// console.log(ul);

// const inp = document.querySelector('[name ="inpName"]')

// const items = document.querySelectorAll('.item')
// console.log(items);

// ! -------------------Node list vs HTML collection -------------------------

// ! 1
// const list = document.getElementById('list')
// console.log(list.children);

// const list = document.querySelector("#list");
// console.log(list.childNodes);

// ! 2

// const items = document.querySelectorAll('.item')

// console.log(items.length);
// items[0].style.color = 'yellow'

// for(let elem of items) {
//     console.log(elem);
// }

// ! 3

// ! Node list рботсает с методами массив, а HTML collection нет
// const nodeList = document.querySelectorAll('.item')
// const htmlCollection = document.getElementsByClassName('item')

// htmlCollection.forEach((item) => console.log(item))

// ! 4
// ! node-list статичный, а html-collection динамичный
// const items = document.getElementsByTagName('li')
// const button = document.querySelector('button')
// const ul = document.querySelector('ul')

// button.addEventListener('click', () => {
//     const newLi = document.createElement('li');
//     newLi.innerText = 'New Elem';
//     ul.append(newLi)
// })

// ! 5

// const items = document.querySelectorAll('li')
// items.forEach((item) => item.innerText = 'hello')

// const div = document.querySelector(".test");
// div.innerHTML = '<input type="range" />';
// console.log(div);

// ! 6

// const img = document.createElement("img");
// img.setAttribute(
//   "src",
//   "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/MV4FM3508BFQVSqxS3aQZ1ToJmI=/960x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/PEVTJACBCUI6VG3Z2NTLW2NO4E.jpg"
// );
// document.body.append(img);
// console.log(document.body);

// img.removreAttribute('src'); delete


// document.body.append(img); end
// document.body.prepend(img); start
// document.body.before(img); before
// document.body.after(img); after

// console.log(document.body);

// const div = document.createElement('div')
// document.body.appendChild(div); добавляет в конец только одного ребенка

// test.classList.add('margins');

test.addEventListener('click', () => {
    test.classList.add(margins)
});