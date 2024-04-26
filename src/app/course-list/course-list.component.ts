
import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';







@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  

  courses_list: Course[] = [];
  filteringCourses: Course[] = [];
  public search: string = '';
  constructor(private courseservice: CoursesService) {}

  onChange(UpdatedValue : string) :void 
  { 
    this.search = UpdatedValue; 
    this.onSubmit();
    console.log(this.search);
  } 
  
  ngOnInit() {
    this.courseservice.getCourses().subscribe(data => {
      this.courses_list = data;
      this.filteringCourses = [...this.courses_list];
    });
  }
  
  
  sortBy(row: string) {
    if (row == "code") {
      this.filteringCourses = this.courses_list.sort((el, re) => el.code.localeCompare(re.code));
    } else if (row == "coursename") {
      this.filteringCourses = this.courses_list.sort((el, re) => el.coursename.localeCompare(re.coursename));
    } else if (row == "progression") {
      this.filteringCourses = this.courses_list.sort((el, re) => el.progression.localeCompare(re.progression));
    } else if (row == "syllabus") {
      this.filteringCourses = this.courses_list.sort((el, re) => el.coursename.localeCompare(re.coursename));
    }
  }
  
  onSubmit() {
      console.log(this.search);
      this.filteringCourses = this.courses_list.filter(course =>
        course.code.includes(this.search.toLowerCase()) ||
        course.coursename.toLowerCase().includes(this.search.toLowerCase())
      
    )}
    
  }
