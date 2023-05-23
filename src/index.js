import * as conversor from './conversor/index.js';
import * as classe from './classe/index.js';
import * as condicionador from './condicionador/index.js';
import * as erro from './erro/index.js';
import * as escritor from './escritor/index.js';
import * as importador from './importador/index.js';
import * as ledor from './ledor/index.js';
import * as repetidor from './repetidor/index.js';
import * as verificador from './verificador/index.js';

const brscript = {
    constructor: {
        name: 'brscript',
    },
    classe: classe,
    ...classe,
    condicionador: condicionador,
    ...condicionador,
    conversor: conversor,
    ...conversor,
    erro: erro,
    ...erro,
    escritor: escritor,
    ...escritor,
    importador: importador,
    ...importador,
    ledor: ledor,
    ...ledor,
    repetidor: repetidor,
    ...repetidor,
    verificador: verificador,
    ...verificador,
};


export {
    brscript
};

export default brscript;

export {
    classe,
    condicionador,
    conversor,
    erro,
    escritor,
    importador,
    ledor,
    repetidor,
    verificador
}


export * from './classe/index.js';
export * from './condicionador/index.js';
export * from './conversor/index.js';
export * from './erro/index.js';
export * from './escritor/index.js';
export * from './importador/index.js';
export * from './ledor/index.js';
export * from './repetidor/index.js';
export * from './verificador/index.js';