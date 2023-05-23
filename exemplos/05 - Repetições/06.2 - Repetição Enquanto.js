import {
    limpe_tela,
    escreva,
    escreva_e_pule_linha
} from 'brscript/escritor';
import {
    enquanto
} from 'brscript/repetidor';
import {
    inteiro
} from 'brscript/conversor';
import {
    leia
} from 'brscript/ledor';

limpe_tela();

escreva_e_pule_linha("Demonstração 1: Repetição Enquanto retornando o número de execuções.");

let número = inteiro(leia("Digite um número par: "));
let loop = enquanto(() => {
    return número % 2 != 0;
}).faça(() => {
        escreva_e_pule_linha("Você inseriu um número impar!");
        número = inteiro(leia("Digite um número par: "));
        return número;
    }

);
escreva("Obrigado por inserir um número par.");
escreva_e_pule_linha(`Você errou ${loop} vezes.`);

//
//
//

escreva_e_pule_linha("Demonstração 2: Repetição Enquanto retornando todos os retornos.");

número = inteiro(leia("Digite um número par: "));
let primeiro_número = número
let retorno = enquanto(() => {
    return número % 2 != 0;
}).faça(() => {
        número = inteiro(leia("Digite um número par: "));
        escreva_e_pule_linha("Você inseriu um número impar!");
        return número;
    }, "todos"

);
escreva("Obrigado por inserir um número par.");
escreva_e_pule_linha(`Você inserir os números: ${primeiro_número},${retorno}.`);


//
//
//

escreva_e_pule_linha("Demonstração 3: Repetição Enquanto retornando todos o último retorno.");

número = inteiro(leia("Digite um número par: "));
retorno = enquanto(() => {
    return número % 2 != 0;
}).faça(() => {
        escreva_e_pule_linha("Você inseriu um número impar!");
        número = inteiro(leia("Digite um número par: "));
        return número;
    }, "último"

);
escreva("Obrigado por inserir um número par.");
escreva_e_pule_linha(`O último número digitado foi: ${retorno}`);