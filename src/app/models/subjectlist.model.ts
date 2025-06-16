import {Materia} from "./Materia.model"
export class SubjectList{
    Selecionado : Materia | null;
    subjects : Materia[];
    nome : string;
    descricao : string;
    editando : Materia | null;
    constructor(){
        this.Selecionado=null;
        this.subjects=[new Materia("Matemática", "Estudo dos números e suas operações"),];
        this.nome = "";
        this.descricao = "";
        this.editando=null;
    }
    confirmar(){
        if(this.editando == null){
            let aux = new Materia(this.nome, this.descricao);
            this.subjects.push(aux);
            this.nome="";
            this.descricao="";
        }else{
            this.editando.nome=this.nome;
            this.editando.descricao=this.descricao
            this.editando = null;
            this.nome = "";
            this.descricao="";
        }
    }
    selecionar(aux : Materia){
        this.Selecionado=aux;
    }
    editar(aux : Materia){ 
        this.editando=aux;
        this.nome=aux.nome;
        this.descricao=aux.descricao;
    }
    desselecionar(){
        this.Selecionado=null;
        this.editando=null;
    }
    remover(aux : Materia){
        const i= this.subjects.indexOf(aux)
        this.subjects.splice(i,1)
    }
   
}