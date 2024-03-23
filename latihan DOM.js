/*
// const hari = Document.getElementById('hai')
document.querySelector('#hai')//memanggil menggunakan id
document.querySelector('p')//hanya mengambil 1 element
document.querySelectorAll('h')//mendapatkan semua element
document.querySelector('.helo')//mendapatkan element menggunakan class


let p = document.querySelector('p')
// console.log(p.innerHTML = 'aku <b>salman</b>')


console.log(p.classList.add('pindah'))


let p = document.querySelector('p');

let button = document.querySelector("button");
let input = document.querySelector("input")

let clickHandler = function () {
    let isiInput = input.value
    p.innerText = isiInput
}

input.addEventListener("keyup", clickHandler)
// input.addEventListener("input", clickHandler)
button.addEventListener('click', clickHandler)

let button = document.querySelector("button")

button.addEventListener("click", function () {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
})

document.getElementById('demo').innerHTML = Date(); // menampilkan tanggal pada halaman web menggunakan Id

let elem = document.getElementsByClassName('oke'); //menampilkan tanggal pada halaman web menggunakan  ClassName
for (let i = 0; i < elem.length; i++)
    elem[i].innerHTML = Date();
}



//mengecek bilangan palindrom atau bukan
function isPalindrom(kata) {
    var reversed = kata.split('').reverse().join('');
    return kata === reversed;
}

var input = prompt("Masukkan sebuah kata:");
if (isPalindrom(input)) {
    alert(input + "adalah palindrom.");
} else {
    alert(input + "bukan palindrom.");
}


//cekpassword
let button = document.querySelector('button');
let input = document.querySelector('input');

button.addEventListener('click', function () {
    let password = input.value;
    if (cekPassword(password)) {
        alert('Password benar!')
    } else {
        alert('password salah')
    }
});
function cekPassword(password) {
    //minimal panjang 8 karakter
    if (password.length < 8) {
        return false;
    }
    //mempunyai huruf besar
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    //mempunyai huruf kecil
    if (!/[a-z]/.test(password)) {
        return false;
    }
    //mempunyai angka
    if (!/\d/.test(password)) {
        return false;
    }
    return true;
}

//mengecek bilangan palindrom atau bukan

let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', function () {
    let inp = input.value;
    if (palindrom(inp)) {
        alert(inp + ' adalah palindrom')
    } else {
        alert(inp + ' bukan palindrom')
    }

})

function palindrom(str) {
    let reversed = str.split('').reverse().join('')
    return str === reversed
}

let styling = document.querySelector('button')
styling.style.color = "blue";

styling.addEventListener('mouseenter', function () {
    styling.style.color = 'red';
});

styling.addEventListener('mouseleave', function () {
    styling.style.color = 'blue';
});

styling.addEventListener('mouseenter', function () {
    styling.style.backgroundColor = 'blue'
})

styling.addEventListener('mouseleave', function () {
    styling.style.backgroundColor = 'red';
})

styling.style.backgroundColor = 'red';



// function palindrom(str) {
//     let reversed = str.split("").reverse().join("");
//     return str === reversed;
// }

// let input = prompt('masukkan kalimat :');
// if (palindrom(input)) {
//     alert(input + ' adalah palindrom');
// } else {
//     alert(input + ' bukan palindrom')
// }

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// const container = document.querySelector('#container');
// const baseImgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

// for (let i = 1; i <= 1503; i++) {
//     const pokeBall = document.createElement('div');
//     pokeBall.classList.add('pokemon');

//     const imgPokemon = document.createElement('img');
//     imgPokemon.src = `${baseImgURL}${i}.png`;

//     // const label = document.createElement('span');
//     // label.innerText = `#${i}`;

//     pokeBall.appendChild(imgPokemon);
//     // pokeBall.appendChild(label);
//     container.appendChild(pokeBall);
// }


// const container = document.querySelector('#container')
// const baseImgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

// for (let i = 1; i <= 500; i++) {
//     const pokeBall = document.createElement('div')
//     pokeBall.classList.add('pokemon');

//     const imgPokemon = document.createElement('img');
//     imgPokemon.src = `${baseImgUrl}${i}.png`;

//     const label = document.createElement('span');
//     label.innerText = `#${i}`;

//     pokeBall.appendChild(imgPokemon);
//     pokeBall.appendChild(label);
//     container.appendChild(pokeBall);

// }

//buat perkalian sederhana menggunakan javascript
function multiply(a, b) {
    return a * b;
}
console.log("2 x 4 = " + multiply(2, 4));


//buat pertambahan kompleks menggunakan javasript
// function addComplexNumber(realPartA, imaginaryPartA, realPartB, imaginaryPartB){
//     let realResult = realPartA + realPartB;
//     let imaginaryResult = imaginaryPartA + imaginalPartB;
//     return `{+ ${realResult} + ${imaginaryResult}i}`;
// }

// console.log(`The complex number ${}



const button = document.querySelector("#clickme");

button.onclick = function () {
    console.log('aku tertekan');
}

const scream = () => {
    alert('dont touch me!');
}

button.onmouseover = scream;

const b = document.querySelector('b');
b.onmouseover = function () {
    alert('dont touch me!');
 */


// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', () => {
//     const newColor = generateRandomColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// });


// const generateRandomColor = () => {
//     const R = Math.floor(Math.random() * 255);
//     const G = Math.floor(Math.random() * 255);
//     const B = Math.floor(Math.random() * 255);

//     return `rgb(${R}, ${G}, ${B})`;
// }

const button = document.querySelector('button');
const h1 = document.querySelector('h1')

button.addEventListener('click', () => {
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const generateRandomColor = ('click', () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
})