import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating = 0;
  @Input() numOfReviews = 0;

  constructor() { }

  ToggleRating(ratingValue){
    
    this.rating = ratingValue;
  }

  ngOnInit() {
  }

}
