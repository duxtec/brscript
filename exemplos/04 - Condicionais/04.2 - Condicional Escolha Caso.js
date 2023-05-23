import {
    limpe_tela,
    escreva
} from "brscript/escritor";

import {
    escolha
} from "brscript/condicionador";

limpe_tela();

let diaDaSemana = new Date().getDay();

let dia = escolha(diaDaSemana)
    .caso(0, "Domingo")
    .caso(1, "Segunda-feira")
    .caso(2, "Terça-feira")
    .caso(3, "Quarta-feira")
    .caso(4, "Quinta-feira")
    .caso(5, "Sexta-feira")
    .caso(6, "Sábado")
    .padrão("Dia inválido")

escreva(`Hoje é ${dia}`);