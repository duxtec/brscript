//import { de } from './importador.js';
//const literal = de('./conversor').importe('literal');
//const tipo = de('./tipo').importe('tipo');

// ! Substituir essas importações abaixo pelo código acima quando resolver o problema do arquivo ./importador.js
import {
    literal
} from '../conversor/index.js';

function escreva(dado = undefined) {
    dado = literal(dado);
    console.log(dado);
}

function escreva_e_pule_linha(valor = "") {
    escreva(valor);
    pule_linha();

    return;
}

function pule_linha(linhas = 1) {
    for (let i = 0; i < linhas; i++) {
        escreva("");
    }

    return;
}

function limpe_tela() {
    return console.clear();
}

export {
    escreva,
    escreva_e_pule_linha,
    pule_linha,
    limpe_tela,
};