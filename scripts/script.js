// //const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.querySelector('#pid');
// const input = document.querySelector('input');

// console.log(input.value);
// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// h1.innerText = 'El chiste <br>que queramos';
// h1.getAttribute('pantalla');
// h1.setAttribute('pantalla','LG');
// console.log(h1.getAttribute('pantalla'));
// input.value = "456";

// const img = document.createElement('img');
// img.setAttribute('src','https://png.pngtree.com/element_our/20190604/ourmid/pngtree-summer-summer-little-yellow-duck-cartoon-free-material-image_1480344.jpg');

// pid.append(img);

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const formulario = document.querySelector('#formulario');

btn.addEventListener('click',btnOnClick);
formulario.addEventListener('submit',btnOnClick);

function btnOnClick(event) {
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = "resultado: " + sumaInputs;
}
