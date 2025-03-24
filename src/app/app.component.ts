import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeNG} from 'primeng/config';
import { TranslateService } from '@ngx-translate/core';
import {StyleClassModule} from 'primeng/styleclass';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private primeng: PrimeNG, private translateService: TranslateService) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
    this.translateService.setDefaultLang('es');
  }

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService.get('primeng').subscribe(res => this.primeng.setTranslation(res));
  }
}
