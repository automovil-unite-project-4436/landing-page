import {Component, OnInit} from '@angular/core';
import {Chip} from 'primeng/chip';
import {Avatar} from 'primeng/avatar';
import {Rating} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-testimonials-page',
  imports: [
    Chip,
    FormsModule,
    NgForOf
  ],
  templateUrl: './testimonials-page.component.html',
  styleUrl: './testimonials-page.component.css'
})
export class TestimonialsPageComponent implements OnInit {
  testimonials = [
    {
      image: 'https://i.postimg.cc/1z8CX6K1/image.png',
      rating: 5,
      ratingText: '5.0 stars',
      comment: '"I feel very secure when using Automovil-Unite services. Your customer care team is very enthusiastic and the driver is always on time."',
      name: 'Charlie Johnson',
      location: 'From New York, US'
    },
    {
      image: 'https://i.postimg.cc/KzL0r2V9/image.png',
      rating: 5,
      ratingText: '5.0 stars',
      comment: '"Finding a reliable transport service was always a challenge, but Automovil-Unite exceeded my expectations. Their team is professional, and the convenience is unmatched."',
      name: 'Daniel Wong',
      location: 'From Toronto, Canada'
    },
    {
      image: 'https://i.postimg.cc/1z8CX6K1/image.png',
      rating: 5,
      ratingText: '5.0 stars',
      comment: '"I use Automovil-Unite regularly for business trips, and they never disappoint. Their punctuality, customer service, and seamless booking process make them my top choice!"',
      name: 'Sarah Miller',
      location: 'From London, UK'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}

