import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubjectList } from './models/subjectlist.model';
import { Materia } from './models/Materia.model';
import { CommonModule } from '@angular/common';
import { FormControl, NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  subjects : SubjectList = new SubjectList();
}
