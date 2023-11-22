import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  isFavorite: boolean = false;
  ngOnInit() {

  }
  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
