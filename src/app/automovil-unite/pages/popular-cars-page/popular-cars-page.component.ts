import { Component } from '@angular/core';
import {CarouselBrandsComponent} from '../../components/carousel-brands/carousel-brands.component';
import {Chip} from 'primeng/chip';
import {Button, ButtonDirective, ButtonLabel} from 'primeng/button';
import {Ripple} from 'primeng/ripple';

@Component({
  selector: 'app-popular-cars-page',
  imports: [
    Chip,
    ButtonDirective,
    Ripple,
    Button,
  ],
  templateUrl: './popular-cars-page.component.html',
  styleUrl: './popular-cars-page.component.css'
})
export class PopularCarsPageComponent {

}
