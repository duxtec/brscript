import {
    limpe_tela,
    escreva,
    pule_linha
} from "brscript/escritor";
import {
    se
} from "brscript/condicionador";
import {
    leia
} from "brscript/ledor";
import {
    inteiro
} from "brscript/conversor";

limpe_tela();
let diaDaSemana = new Date().getDay();

escreva('Demonstração 1 - "Se" executando funções.');
se(diaDaSemana > 4, () => {
    escreva("Bom final de semana!")
})

pule_linha();

escreva('Demonstração 2 - "Se" / "Senão" executando funções.');
let número = inteiro(leia("Digite um número:"));
se(número % 2 == 0, () => {
    escreva("O número é par!");
}).senão(() => {
    escreva("O número é impar!");
})

pule_linha();

escreva('Demonstração 3 - "Se" / "Senão Se" / "Senão" executando funções.');
let temperatura = inteiro(leia("Digite a temperatura:"));

se(temperatura < 20, () => {
    escreva("A temperatura está fria!");
}).senão_se(temperatura > 30, () => {
    escreva("A temperatura está quente!");
}).senão(() => {
    escreva("A temperatura está agradável!");
})

pule_linha();

escreva('Demonstração 4 - "Se" / "Senão Se" / "Senão" com retorno.');
número = inteiro(leia("Digite um número:"));
let resultado = se(número > 0, "positivo").senão_se(número < 0, "negativo").senão("zero")
escreva(`O número é ${resultado}`);