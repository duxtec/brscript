import {
    escreva,
    limpe_tela
} from 'brscript';

import {
    leia
} from 'brscript';

limpe_tela();

const a = leia("Digite algo:");

escreva(`Você digitou: ${a}`);