import {
    conversor
} from 'brscript';

import {
    limpe_tela,
    escreva
} from 'brscript/escritor';

limpe_tela();

const a = "7.1";

escreva(conversor.literal(a));
escreva(conversor.inteiro(a));
escreva(conversor.flutuante(a));
escreva(conversor.complexo(a));
escreva(conversor.booleano(a));
escreva(conversor.lista(a));
escreva(conversor.conjunto(a));
escreva(conversor.dicionário({
    a: a
}));
escreva(conversor.tupla(a));