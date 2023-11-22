import { Component } from '@angular/core';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  course = {
    title: "The Complete Andular Course",
    rating: 4.965,
    students: 3012,
    price: 190.90,
    releaseDate: new Date()
  }
}
