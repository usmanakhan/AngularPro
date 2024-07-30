import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { FormatTextPipe } from './format-text.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputNumberFormatDirective } from './input-number-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    FormatTextPipe,
    PanelComponent,
    LikeComponent,
    InputNumberFormatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
