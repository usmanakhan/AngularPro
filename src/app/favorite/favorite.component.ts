import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  @Input('is-favorite') isFavorite: boolean = false;
  @Output('change') click = new EventEmitter()
  ngOnInit() {

  }
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit({newVal:this.isFavorite})
  }
}
export interface FavoriteObj {
  newVal:boolean
}
