import {
    limpe_tela,
    escreva,
    pule_linha,
    escreva_e_pule_linha
} from 'brscript/escritor';
import {
    literal
} from 'brscript/conversor';
import {
    repita
} from 'brscript/repetidor';

limpe_tela();

escreva_e_pule_linha("Demonstração 1: Repetição definindo início, final e chamando função.");
let repetições = repita().de(1).até(3).faça(escreva);
pule_linha();
escreva_e_pule_linha(`Código executado ${repetições} vezes.`);

//
//
//

escreva_e_pule_linha("Demonstração 2: Repetição definindo início, final e usando função anônima.");
repetições = repita().de(3).até(1).faça((i) => {
    escreva("O número é: " + literal(i));
    escreva("O número ao quadrado é: " + literal(i ** 2))
});
pule_linha();
escreva_e_pule_linha(`Código executado ${repetições} vezes.`);

//
//
//

escreva_e_pule_linha("Demonstração 3: Repetição sem o método \"faça\" chamando uma função.");
repetições = repita(escreva).de(1).até(3);
pule_linha();
escreva_e_pule_linha(`Código executado ${repetições} vezes.`);

//
//
//

escreva_e_pule_linha("Demonstração 4: Repetição sem o método \"faça\" usando função anônima.");
repetições = repita((i) => {
    escreva("O número é: " + literal(i));
    escreva("O número ao quadrado é: " + literal(i ** 2))
}).de(1).até(3);
pule_linha();
escreva_e_pule_linha(`Código executado ${repetições} vezes.`);

//
//
//

escreva_e_pule_linha("Demonstração 5: Repetição sem definir o início (início padrão = 0) chamando uma função.");
repetições = repita().até(3).faça(escreva);
pule_linha();
escreva_e_pule_linha(`Código executado ${repetições} vezes.`);

//
//
//

escreva_e_pule_linha("Demonstração 6: Repetição sem definir o início (início padrão = 0) usando função anônima.");
repetições = repita().até(3).faça((i) => {
    escreva("O número é: " + literal(i));
    escreva("O número ao quadrado é: " + literal(i ** 2))
});
pule_linha();
escreva_e_pule_linha(`Código executado ${repetições} vezes.`);