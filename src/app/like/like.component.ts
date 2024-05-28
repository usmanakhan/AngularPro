import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  @Input() isActive:boolean = false;
  @Input() likesCount:number=0;
  onClick(){
    this.likesCount += (this.isActive)? -1 : 1;
    this.isActive = !this.isActive;
  }
}
