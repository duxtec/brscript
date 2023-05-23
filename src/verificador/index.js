import complex from 'complex';
import util from 'util';

const indefinido = undefined;
const nulo = null;
const verdadeiro = true;
const falso = false;

function tipo(dado = undefined) {
    const consoleLogOriginal = console.log;
    console.log = function () {};

    const switcher = {
        'string': 'literal',
        'int': 'inteiro',
        'float': 'flutuante',
        'complex': 'complexo',
        'boolean': 'booleano',
        'array': 'lista',
        'set': 'conjunto',
        'object': 'objeto',
        'undefined': 'sem tipo',
        'null': 'nulo',
        'function': 'função',
        'class': 'classe',
        'module': 'módulo',
        'symbol': 'símbolo',
        'bigint': 'bigint'
    };

    let tipo = typeof dado;

    if (tipo === 'number') {
        if (dado % 1 === 0) {
            tipo = "int";
        } else {
            tipo = "float";
        }
    } else if (tipo === "undefined") {
        tipo = "undefined";
    } else if (dado === null) {
        tipo = "null"
    } else if (tipo === 'function') {
        if (!dado._toString().startsWith('function')) {
            tipo = "class";
        }

    } else if (tipo === 'object') {
        console.log();
        if (util.inspect(dado).startsWith('[Module:')) {
            tipo = "module";
        } else if (dado instanceof Array) {
            tipo = "array";
        } else if (dado instanceof complex) {
            tipo = "complex";
        } else if (util.inspect(dado).startsWith('Set')) {
            tipo = "set";
        }
    }

    console.log = consoleLogOriginal;

    return switcher[tipo] || tipo;
}

tipo.toString = function () {
    return "função tipo"
}

tipo.literal = tipo.toString;

export {
    indefinido,
    nulo,
    verdadeiro,
    falso,
    tipo
};