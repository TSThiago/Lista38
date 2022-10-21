var Carro = /** @class */ (function () {
    function Carro(marca, modelo, categoria, ano, quilometragem, valor) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Categoria = categoria;
        this.Ano = ano;
        this.Quilometragem = quilometragem;
        this.Valor = valor;
    }
    return Carro;
}());
// let data = new Carro("Fiat","Uno","Legal",2010,140000,20000)
Get();
function Get() {
    return fetch("https://apigenerator.dronahq.com/api/x7BRQ4V1/carros")
        .then(function (response) { return response.json(); })
        .then(function (data) { return console.log(data); });
}
