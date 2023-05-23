import util from 'util';
import complex from 'complex';
import {
    tipo as t
} from '../verificador/index.js';

function literal(dado) {
    const consoleLogOriginal = console.log;
    console.log = function () {};

    let tipo = t(dado);
    if (tipo === "lista") {
        dado = `[${dado}]`;
    } else if (tipo === "conjunto") {
        dado = "conjunto";
    } else if (tipo === "sem tipo") {
        dado = "indefinido";
    } else if (tipo === "nulo") {
        dado = "nulo";
    } else if (tipo === "booleano") {
        if (dado) {
            dado = "verdadeiro";
        } else {
            dado = "falso";
        }
    } else if (tipo === "função" || tipo === "classe") {
        let nome = dado.name;
        if (nome) {
            dado = `${tipo} ${nome}`
        } else {
            dado = `${tipo} sem nome`
        }

    } else if (tipo === "objeto") {
        let nome = dado.constructor.name;
        if (nome === "Object") {
            dado = `objeto sem classe`;
        } else {
            dado = `objeto da classe ${nome}`;
        }
    } else if (tipo === "módulo") {
        dado = util.inspect(dado);
    } else {
        dado = dado.toString();
    }

    console.log = consoleLogOriginal;

    return dado;

}

Function.prototype._toString = Function.prototype.toString
Function.prototype.toString = function () {
    return literal(this);
};
Function.prototype.toString = Function.prototype.literal

Object.prototype._toString = Function.prototype.toString
Object.prototype.literal = function () {
    return literal(this);
};
Object.prototype.toString = Function.prototype.literal

Set.toString = function () {
    return literal(this);
};

function inteiro(valor) {
    return parseInt(valor);

}

function flutuante(valor) {
    return parseFloat(valor);

}

function complexo(real, imaginario = null) {
    real = flutuante(real);
    let complexo;
    if (imaginario === null) {
        complexo = new complex(real);
    } else {
        imaginario = flutuante(imaginario);
        complexo = new complex(real, imaginario);
    }
    complexo._toString = complexo.toString;
    complexo.toString = function () {
        return complexo._toString().replace(/^\s+|\s+$/g, '').trim();
    }
    return complexo
}

function booleano(valor) {
    return Boolean(valor);

}

function lista(...valor) {
    return Array.from(valor);
}


function conjunto(valor) {
    Set.constructor.toString = function () {
        return util.inspect(this).replace("Set", "Conjunto");
    }

    let set = new Set(valor);
    return set;
}


function dicionário(valor) {
    return Object.assign({}, valor);

}

function tupla(valor) {
    return Array.from(valor);

}

export {
    literal,
    inteiro,
    flutuante,
    complexo,
    booleano,
    lista,
    conjunto,
    dicionário,
    tupla
}