class Carro{
    Marca : string
    Modelo : string
    Categoria : string
    Ano : number
    Quilometragem : number 
    Valor : number

    constructor(marca : string , modelo : string, categoria : string, ano : number, quilometragem : number, valor : number){
        this.Marca = marca
        this.Modelo = modelo
        this.Categoria = categoria
        this.Ano = ano
        this.Quilometragem = quilometragem
        this.Valor = valor
    }
}

// let data = new Carro("Fiat","Uno","Legal",2010,140000,20000)

Get()
postData("https://apigenerator.dronahq.com/api/x7BRQ4V1/carros", new Carro("GM","Onix","Sedan",2022,0,65000))
.then((data) => {
console.log(data);
});

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
    

    