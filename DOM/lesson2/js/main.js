// ! ONCLICK

// function superFunc() {
//     console.log('hello');
// }


// second

// const btn = document.querySelector('button')
// btn.onclick = superFunc

// third 


// const btn = document.querySelector('button')
// btn.addEventListener('click', superFunc)


// ! OFFLINE / ONLINE

// window.addEventListener('offline', () => {
//     const elem = document.createElement('h1')
//     document.body.append(elem);
//     elem.innerText = 'No Intrnet'
// })

// window.addEventListener('offline', () => {
//     const elem = document.createElement('h1')
//     document.body.append(elem);
//     elem.innerText = 'YEEEEE, Intrnet'
// })

// ! TARGET

// const btn = document.querySelector('button')
// btn.addEventListener('click', (event) => {
//     console.log(event.target);
// })


// ! MOUSEMOVE

// document.addEventListener('mousemove', (e) => {
//     console.log(e.clientX, e.clientY);
// })

// ! MOUSEDOWN

// document.addEventListener('mousedown', (event) => {
//     console.log(event);
// })

// ! MOUSEUP

// document.addEventListener('mouseup', (event) => {
//     console.log(event);
// })


// ! INPUT

// const input = document.querySelector('input')
// const h1 = document.querySelector('h1')
// input.addEventListener('input', (e) => {
//     h1.innerText = e.target.value
//     console.log(e.target.value);
// })

// ! CHANGE

// const input = document.querySelector('input')
// const h1 = document.querySelector('h1')
// input.addEventListener('change', (e) => {
//     h1.innerText = e.target.value
//     console.log(e.target.value);
// })


// const nameInp = document.querySelector('#name-inp') 
// const lastNameInp = document.querySelector('#LastName-inp') 
// const emailInp = document.querySelector('#email-inp') 
// const form = document.querySelector('form')

// form.addEventListener('submit', (e) => {
// !    e.preventDefault(); - чтобы он не обновлял
//     const userObj = {
//         name: nameInp.value,
//         lastName: lastNameInp.value,
//         email: emailInp.value,
//     }
//     console.log(userObj);
// })


// document.addEventListener('keydown', (e) => {
//     console.log(e.key);
//     if(e.key === 'r') {
//         document.body.style.backgroundColor = 'red'
//     }
// })


// document.addEventListener('keyup', (e) => {
//     console.log(e);
// })

// const card = document.querySelector('.card')
// card.addEventListener('click', () => {
//     console.log('card');
// })

// const btn = document.querySelector('.delete')
// btn.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('delete');
// })

// const text = document.querySelector('.text')
// text.addEventListener('copy', () => {
//     alert('no no no')
// })

// const text2 = document.querySelector('.text')
// text.addEventListener('paste', () => {
//     alert('no no no')
// })