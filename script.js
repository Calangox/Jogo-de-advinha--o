// Criando host 
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// serve arquivos estáticos
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

//iniciando server
app.listenerCount(PORT, () => {
    console.log(`Servidor rodando`)
});

/////////////////////////////////////////////////////////////

// Variaveis do menu
const menu_btn = document.querySelector('.menu');
const menu_page = document.querySelector('.menu-page');
let menu_open = false;
/////////////////////////////////////////////////////////////

function menu() {
    if (menu_open) {
        menu_page.classList.remove('pull-menu');
        menu_page.classList.add('push-menu');
    }
    else {
        menu_page.classList.remove('push-menu');
        menu_page.classList.add('pull-menu');
    }
    menu_open = !menu_open;
}

/////////////////////////////////////////////////////////////

// Gera um número aleatório entre 0 e 100
let number = Math.floor(Math.random() * 101);
console.log(number);
/////////////////////////////////////////////////////////////

// reiniciando...
function retry() {
    console.clear();
    number = Math.floor(Math.random() * 101);
    console.log(number);
    input.value = "";
}
/////////////////////////////////////////////////////////////

// Variaveis para verificação ...
let input = document.querySelector('input');
let result = document.querySelector('.result');
let life = document.getElementsByClassName('vidas');
let vidas = 10;
/////////////////////////////////////////////////////////////


// verificando valor...
function verific() {
    const valor = parseInt(input.value);
    if (valor === number) {
        result.innerHTML = "You win!";
        vidas = 10;
    } else if (valor > 100){
        result.innerHTML = "Valor inválido..."
    } else if (valor > number) {
        result.innerHTML = "Valor alto!";
        vidas--;
    } else if (valor < number) {
        result.innerHTML = "Valor baixo!";
        vidas--;
    }
    

    life[0].innerHTML = `${vidas}`;

    if (vidas <= 0) {
        result.innerHTML = "Game Over!";
        vidas = 10; // Reinicia as vidas
        retry()
    }

    input.value = "";
    setTimeout(() => {result.innerHTML = ""}, 2000);
}
/////////////////////////////////////////////////////////////

// Verificando com a tecla 'enter'
input.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        verific();
    }
})

