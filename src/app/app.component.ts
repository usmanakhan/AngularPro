import { Component } from '@angular/core';
import { FavoriteObj } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  simpleText:string = '';
  post = {
    title: 'Title',
    isFavorite: true
  }

  onFavoriteChange(isFavorite:FavoriteObj){
    console.log("Favorite Change ", isFavorite.newVal)
  }

  /*--like component--*/
  tweet = {
    body:"body of tweet",
    likesCount:0,
    isLiked:false
  }

  /*--ngIf--*/
  courses = [1,2];

  /*--ngSwitch--*/
  viewMode = 'map';

  /*--ngFor-- */
  
  courseList:{id:number,name:string}[] = [
    {id:1, name:"course 1"},
    {id:2, name:"course 2"},
    {id:3, name:"course 3"},
    {id:4, name:"course 4"},
  ];
  onAdd(){
    this.courseList.push({id:5, name:"course 6"});
  }
  onRemove(course:{id:number,name:string}){
    let index = course.id;

    this.courseList.splice(index,1)
  }
  loadCourses(){
    this.courseList =  [
      {id:6, name:"course 6"},
      {id:7, name:"course 7"},
      {id:8, name:"course 8"},
      {id:9, name:"course 9"},
    ];
  }
  trackCourse(index:number,course:{id:number,name:string}){
    return course ? course.id : undefined
  }
}
