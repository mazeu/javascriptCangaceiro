class Negociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    paraArray(){
        //retorna uma nova referencia criada com os itens
        //de this._negociacoes
        return [].concat(this._negociacoes);
    }

    get volumeTotal(){
        //agora com arrow function, sem o uso de bloco
        return this._negociacoes
        .reduce((total, negociacao) =>
            total + negociacao.volume, 0);
    }
}