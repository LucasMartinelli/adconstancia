import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  images = [
    '../../../../assets/imgs/carousel/ceia.webp',
    '../../../../assets/imgs/carousel/ensino.webp',
  ];
  constructor() {}

  ngOnInit() {}
}
