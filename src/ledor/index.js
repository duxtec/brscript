import {
    readSync
} from 'fs'

const leia = function (texto) {
    process.stdout.write(`${texto} `);
    let c;
    const buff = [];
    // Lê os caracteres um por um até encontrar uma nova linha.
    while ((c = pegar_caractere()) !== '\n'.charCodeAt(0)) {
        buff.push(c);
    }
    // Converte o buffer em string.
    return Buffer.from(buff).toString("utf8");
};

const pegar_caractere = function () {
    // Aloca um buffer temporário. Isso pode ser declarado fora desta função para ser reutilizado.
    const buffer = Buffer.alloc(1);
    // Lê um único caractere da entrada para o buffer temporário.
    readSync(0 /*Descritor de arquivo para a entrada*/ , buffer, 0, 1);
    return buffer[0];
};

export {
    leia
};
export default leia;