
import { Materia } from '../models/Materia.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-lista-de-disciplinas',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-de-disciplinas.html',
  styleUrl: './lista-de-disciplinas.css'
})
export class ListaDeDisciplinas {
  @Input()
  disciplinas= [new Materia(" "," ",1)];

  @Input()
  editando : Materia | null = null;

  @Input()
  selecionado : null | Materia = null

  @Output()
  onEditar = new EventEmitter<Materia>();

  @Output()
  onExcluir = new EventEmitter<Materia>();

  @Output()
  onSelecionar = new EventEmitter<Materia>();



  constructor() {
  }

  ngOnInit() {
  }

  excluir(disciplina:Materia) {
    this.onExcluir.emit(disciplina);
  }

  editar(disciplina:Materia) {
    this.onEditar.emit(disciplina);
  }

  selecionar(disciplina: Materia){
   this.onSelecionar.emit(disciplina);
  }
}
