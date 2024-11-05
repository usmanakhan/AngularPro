import { Component } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  courseCategoryList = [
    {id:1, name:"frontend"},
    {id:2, name:"Dev Ops"},
    {id:3, name:"Database"},
  ]
  formSubmit(formObj:any){
    console.log(formObj)
  }
}
