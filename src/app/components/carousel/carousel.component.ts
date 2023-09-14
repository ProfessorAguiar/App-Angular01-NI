import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselConfig, NgbCarouselModule,NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, NgIf, NgbAlert],
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [20, 26, 96, 119].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = false;
  }
}
