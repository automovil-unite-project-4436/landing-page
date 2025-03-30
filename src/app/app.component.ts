import {Component, OnInit} from '@angular/core';
import {PrimeNG} from 'primeng/config';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {HomePageComponent} from './automovil-unite/pages/home-page/home-page.component';
import {Button} from 'primeng/button';
import {NavbarComponent} from './automovil-unite/components/navbar/navbar.component';
import {
  FunctionalitiesPageComponent
} from './automovil-unite/pages/functionalities-page/functionalities-page.component';
import {FooterComponent} from './automovil-unite/components/footer/footer.component';
import {DownloadPageComponent} from './automovil-unite/pages/download-page/download-page.component';
import {PopularCarsPageComponent} from './automovil-unite/pages/popular-cars-page/popular-cars-page.component';
import {BenefitsPageComponent} from './automovil-unite/pages/benefits-page/benefits-page.component';
import {TestimonialsPageComponent} from './automovil-unite/pages/testimonials-page/testimonials-page.component';

@Component({
  selector: 'app-root',
  imports: [TranslateModule, HomePageComponent, NavbarComponent, FunctionalitiesPageComponent, FooterComponent, DownloadPageComponent, PopularCarsPageComponent, BenefitsPageComponent, TestimonialsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private primeng: PrimeNG, private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.setDefaultLang('es');
    this.primeng.ripple.set(true);
  }

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService.get('primeng').subscribe(res => this.primeng.setTranslation(res));
  }
}
