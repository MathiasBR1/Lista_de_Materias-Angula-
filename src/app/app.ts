import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { NgModule } from '@angular/core';
import { Materia } from './models/Materia.model';
import { CommonModule } from '@angular/common';
import { FormControl, NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListaDeDisciplinas } from "./lista-de-disciplinas/lista-de-disciplinas";
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet, NgClass, ListaDeDisciplinas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
