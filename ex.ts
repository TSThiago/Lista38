class Carro {
    Marca: string
    Modelo: string
    Categoria: string
    Ano: number
    Quilometragem: number
    Valor: number

    constructor(marca: string, modelo: string, categoria: string, ano: number, quilometragem: number, valor: number) {
        this.Marca = marca
        this.Modelo = modelo
        this.Categoria = categoria
        this.Ano = ano
        this.Quilometragem = quilometragem
        this.Valor = valor
    }
}

let camaro = new Carro("GM", "Camaro", "Amarelo", 2008, 200000,40000)
let uno = new Carro("Fiat","Uno","Hatch",2010,150000,30000)

// Get()
// postData("https://apigenerator.dronahq.com/api/x7BRQ4V1/carros", uno)
// .then((data) => {
// console.log(data);
// });
// Get()
// putData("https://apigenerator.dronahq.com/api/x7BRQ4V1/carros/1", camaro)
//     .then((data) => {
//         console.log(data);
//     });
// Get()
deleteData("https://apigenerator.dronahq.com/api/x7BRQ4V1/carros/1")
    .then((data) => {
        console.log(data);
    });
Get()


function Get() {
    return fetch("https://apigenerator.dronahq.com/api/x7BRQ4V1/carros")
        .then((response) => response.json())
        .then((data) => console.log(data));
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

async function deleteData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

async function putData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}
