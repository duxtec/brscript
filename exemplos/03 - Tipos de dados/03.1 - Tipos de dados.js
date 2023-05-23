import {
    tipo,
    nulo,
    verdadeiro,
    falso,
} from 'brscript/verificador';

import {
    escreva,
    pule_linha,
    limpe_tela
} from 'brscript/escritor';

import {
    repita
} from 'brscript/repetidor';

import {
    instanciar
} from 'brscript/classe';

import brscript, {
    indefinido
} from 'brscript';

import {
    complexo,
    literal
} from 'brscript/conversor';

limpe_tela();

let a = "1";
let b = 1;
let c = 1.1;
let d = complexo(1, 2);
let e = verdadeiro;
let f = falso;
let g = [1];
let h = {
    1: "1"
};
let i = brscript;
let j = tipo;
let k = repita;
let l = instanciar(repita);
let m = indefinido;
let n = nulo;

escreva(`${literal(a)} é do tipo: ${tipo(a)}`);
escreva(`${literal(b)} é do tipo: ${tipo(b)}`);
escreva(`${literal(c)} é do tipo: ${tipo(c)}`);
escreva(`${literal(d)} é do tipo: ${tipo(d)}`);
escreva(`${literal(e)} é do tipo: ${tipo(e)}`);
escreva(`${literal(f)} é do tipo: ${tipo(f)}`);
escreva(`${literal(g)} é do tipo: ${tipo(g)}`);
escreva(`${literal(h)} é do tipo: ${tipo(h)}`);
escreva(`${literal(i)} é do tipo: ${tipo(i)}`);
escreva(`${literal(j)} é do tipo: ${tipo(j)}`);
escreva(`${literal(k)} é do tipo: ${tipo(k)}`);
escreva(`${literal(l)} é do tipo: ${tipo(l)}`);
escreva(`${literal(m)} é do tipo: ${tipo(m)}`);
escreva(`${literal(n)} é do tipo: ${tipo(n)}`);