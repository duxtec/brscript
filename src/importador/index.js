// ! Módulo temporariamente indisponível até conseguir uma forma de fazer um import dinâmico de forma sincrona.

function importe(modulo) {
    return require(modulo);
}

function de(origem) {
    return new class {
        constructor(origem) {
            this.origem = origem;
        }

        // ! Remover o async quando atualizar para uma forma síncrona.
        async importe(...modulos) {
            this.modulos = modulos;

            // ! Substituiur a linha abaixo pelo código de import síncrono.
            const de = await import(this.origem)


            const returnList = [];

            for (const modulo of this.modulos) {
                returnList.push(de[modulo]);
            }

            return returnList;
        }
    }(origem)
}

export {
    importe,
    de,
};