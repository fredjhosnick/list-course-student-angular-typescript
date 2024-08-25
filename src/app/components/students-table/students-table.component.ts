import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student-to';
import { students } from './mock';

@Component({
  selector: 'app-students-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.css'
})
export class StudentsTableComponent implements OnInit{
  public students?: Student[]
  ngOnInit(): void {
      this.students = students
  }

}
