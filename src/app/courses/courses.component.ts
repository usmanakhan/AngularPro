import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  title = "list of courses";
  courses;
  constructor(courseService:CoursesService){
    this.courses = courseService.getCourses();
  }
  email = "test@me.com";
  text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  onEnter(){
    console.log(this.email)
  }
}
