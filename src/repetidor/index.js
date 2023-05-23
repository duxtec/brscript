import {
    ValorIncorreto,
    TipoIncorreto
} from '../erro/index.js';

function repita(execução) {
    return new class repita {
        constructor(execução = false) {
            if (execução) {
                this.execução = execução;
            }
        }

        de(início) {
            this.início = início;
            return this;
        }

        até(término) {
            this.término = término;
            if (this.execução) {
                return this.faça(this.execução);
            } else {
                return this;
            }
        }

        passo(n) {
            this.n = n;
        }

        faça(execução = escreva, retorno = "repetições") {
            this.início = this.início || 0;
            this.término = this.término || 1;
            const passo = this.n || (this.início <= this.término ? 1 : -1);

            const repetições = [];
            let atual = this.início;

            if (passo === 0) {
                throw new ValorIncorreto("Erro ao executar, passo não pode ser zero.");
            }

            if (this.início === this.término) {
                throw new ValorIncorreto("Erro ao executar, início da repetição não pode ser igual ao término.");
            }

            if ((this.início < this.término && passo <= 0) || (this.início > this.término && passo >= 0)) {
                throw new ValorIncorreto("Erro ao executar, se o início for menor que o término o passo deve ser maior que zero. Se o início for maior que o término, o passo deve ser menor que zero.");
            }

            let alcançou = (passo > 0) ? (atual > this.término) : (atual < this.término);

            while (!alcançou) {
                repetições.push(execução(atual));
                atual += passo;
                alcançou = (passo > 0) ? (atual > this.término) : (atual < this.término);
            }

            if (retorno === "último") {
                return repetições[repetições.length - 1];
            } else if (retorno === "todos") {
                return repetições;
            } else {
                return repetições.length;
            }
        }
    }(execução)
}


function enquanto(condição) {
    return new class enquanto {
        constructor(condição) {
            if (typeof condição === "function") {
                this.condição = condição;
            } else {
                throw new TipoIncorreto("Condição deve ser uma função.");
            }
        }

        faça(execução = escreva, retorno = "repetições") {
            const repetições = [];
            let executar = true;

            while (executar && this.condição()) {
                repetições.push(execução());
                executar = true;
            }
            console.log(retorno);
            if (retorno === "último") {
                return repetições[repetições.length - 1];
            } else if (retorno === "todos") {
                return repetições;
            } else {
                return repetições.length;
            }
        }
    }(condição)
}

export {
    repita,
    enquanto,
};