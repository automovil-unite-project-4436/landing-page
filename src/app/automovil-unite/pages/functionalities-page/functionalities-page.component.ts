import { Component } from '@angular/core';
import {Chip} from 'primeng/chip';
import {CarouselBrandsComponent} from '../../components/carousel-brands/carousel-brands.component';

@Component({
  selector: 'app-functionalities-page',
  imports: [
    Chip,
    CarouselBrandsComponent
  ],
  templateUrl: './functionalities-page.component.html',
  styleUrl: './functionalities-page.component.css'
})
export class FunctionalitiesPageComponent {

}
