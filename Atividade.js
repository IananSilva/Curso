class Pessoa{
    _registro = 0
    constructor (nome, idade,materia){
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    setarRegistro (novoRegistro){
        if (typeof novoRegistro == "number") {
            this.registro = novoRegistro
        } 
    }

    get registro(){
        return this._registro
    }
    set registro (x){
        if (typeof x == "number"){
            this._registro = x
        }
    }
}


class Aluno extends Pessoa{
    constructor (nome, idade, materia, id){
        super (nome, idade, materia)
        this.id = id
    }
}

let p1 = new Aluno ("Andrade", 92, "informatica", 18)
p1.registro = 34
console.log(`nome ${p1.nome} idade ${p1.idade} materia ${p1.materia} id ${p1.id} registro ${p1.registro}`)