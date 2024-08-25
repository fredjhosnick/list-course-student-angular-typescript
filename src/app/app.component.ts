import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoursesTableComponent,StudentsTableComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
   courses:boolean = true
  handleChange(){
    this.courses = !this.courses
  }

}
