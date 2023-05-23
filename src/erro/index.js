class ValorIncorreto extends Error {
    constructor(mensagem = "Valor incorreto") {
        super(mensagem);
        this.name = "ValorIncorreto";
    }
}

class TipoIncorreto extends Error {
    constructor(mensagem = "Tipo incorreto") {
        super(mensagem);
        this.name = "TipoIncorreto";
    }
}

export {
    ValorIncorreto,
    TipoIncorreto
}