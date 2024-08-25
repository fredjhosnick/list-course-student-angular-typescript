import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course-to';
import { courses } from './mock';

@Component({
  selector: 'app-courses-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.css'
})
export class CoursesTableComponent implements OnInit {

  public courses?:Course[]
  ngOnInit(): void {
      this.courses = courses
  }

}
