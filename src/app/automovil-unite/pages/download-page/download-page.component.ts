import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {Chip} from 'primeng/chip';

@Component({
  selector: 'app-download-page',
  imports: [
    Button,
    Chip
  ],
  templateUrl: './download-page.component.html',
  styleUrl: './download-page.component.css'
})
export class DownloadPageComponent {

}
