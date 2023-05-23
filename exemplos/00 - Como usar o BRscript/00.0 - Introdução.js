// * Para utilizar o BRscript, é necessário importá-lo, e isso pode ser feito de várias maneiras. Consulte os arquivos nesta pasta para ver as diferentes formas de importar o Píton.

// * A seguir, você encontrará uma lista de módulos e funcionalidades disponíveis para importação.

// * Módulo BRscript:
import brscript from 'brscript';

// * O módulo BRscript também pode ser chamado assim:
// * import { brscript } from 'brscript';

// * Módulos principais
import {
  condicionador,
  conversor,
  erro,
  escritor,
  importador,
  ledor,
  repetidor,
  verificador
}
from 'brscript';

// * Módulos Escritor do BRscript.
import {
  escreva,
  escreva_e_pule_linha,
  pule_linha,
  limpe_tela
}
from 'brscript/escritor';

// * Módulo Ledor do BRscript.
import {
  leia
} from 'brscript/ledor';

// * Módulo Conversor do BRscript.
import {
  literal,
  inteiro,
  flutuante,
  complexo,
  booleano,
  dicionário,
  lista,
  tupla
} from 'brscript/conversor';

// * Módulo Tipo do BRscript.
import {
  tipo,
  nulo
} from 'brscript/verificador';

// * Módulo Condicionador do BRscript.
import {
  se,
  escolha
} from 'brscript/condicionador';

// * Módulo Repetidor do BRscript.
import {
  repita,
  enquanto
} from 'brscript/repetidor';

// * Módulo Erro do BRscript.
import {
  ValorIncorreto,
  TipoIncorreto
} from 'brscript/erro';