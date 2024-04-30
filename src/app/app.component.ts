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
}
