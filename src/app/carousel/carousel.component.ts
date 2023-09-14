import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselConfig, NgbCarouselModule, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, NgIf],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {


  
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  paused = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }
}
