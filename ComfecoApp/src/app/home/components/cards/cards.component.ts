import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper/core";
// install Swiper components
SwiperCore.use([Autoplay, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  slides=[];


  constructor() {
    this.slides = Array.from({ length: 10 }).map(
      (el, index) => `Slide ${index + 1}`
    );
  }


  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  ngOnInit(): void {

  }

}
