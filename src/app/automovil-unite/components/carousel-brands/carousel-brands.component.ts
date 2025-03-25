import { Component } from '@angular/core';
import {Carousel} from 'primeng/carousel';
import {PrimeTemplate} from 'primeng/api';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-carousel-brands',
  imports: [
    NgForOf
  ],
  templateUrl: './carousel-brands.component.html',
  styleUrl: './carousel-brands.component.css'
})
export class CarouselBrandsComponent {
  images = [
    { src: 'https://i.postimg.cc/cLLm9wwH/image.png', alt: 'Honda' },
    { src: 'https://i.postimg.cc/v8nSfrtw/image.png', alt: 'Jaguar' },
    { src: 'https://i.postimg.cc/gJQQd4yN/image.png', alt: 'Nissan' },
    { src: 'https://i.postimg.cc/TYpMzLrk/image.png', alt: 'Volvo' },
    { src: 'https://i.postimg.cc/jdzm0HD4/image.png', alt: 'Audi' },
    { src: 'https://i.postimg.cc/g00TZ1Ng/image.png', alt: 'Acura' },
  ];
}
