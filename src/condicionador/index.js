function se(condição, execução) {
    return new class se {
        constructor(condição, execução) {
            this.condição = condição;
            if (this.condição) {
                this.exec = true;
                if (typeof execução === 'function') {
                    this.retorno = execução();
                } else {
                    this.retorno = execução;
                }
            }
        }

        senão_se(condição, execução) {
            if (!this.exec) {
                this.condição = condição;
                if (this.condição) {
                    this.exec = true;
                    if (typeof execução === 'function') {
                        this.retorno = execução();
                    } else {
                        this.retorno = execução;
                    }
                }
            }
            return this;
        }

        senão(execução) {
            if (!this.exec) {
                this.exec = true;
                if (typeof execução === 'function') {
                    this.retorno = execução();
                } else {
                    this.retorno = execução;
                }
            }
            return this.retorno;
        }

        retorne() {
            return this.retorno;
        }
    }(condição, execução)
}

function escolha(variável) {
    return new class escolha {
        constructor(variável) {
            this.variável = variável;
        }

        caso(valor, retorno) {
            if (!this.retorno) {
                if (this.variável === valor) {
                    this.retorno = retorno;
                }
            }
            return this;
        }

        padrão(retorno) {
            if (!this.retorno) {
                this.retorno = retorno;
            }
            return this.retorno;
        }
    }(variável)

}

export {
    se,
    escolha
}