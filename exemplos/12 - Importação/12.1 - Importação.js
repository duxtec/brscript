import { importe, de } from 'brscript/importador';

const limpe_tela = importe('brscript/escritor/limpe_tela');

const { escreva, escreva_e_pule_linha } = de('pitonbr/escritor').importe('escreva', 'escreva_e_pule_linha');

limpe_tela();

escreva_e_pule_linha(limpe_tela);
escreva_e_pule_linha(escreva);
escreva_e_pule_linha(escreva_e_pule_linha);