import { Component } from '@angular/core';
import 'slick-carousel';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent {
  isMobile = window.innerWidth <= 990;
  cards = [
    { title: 'Card 1', image: 'assets/img/awards/award1.jpeg' },
    { title: 'Card 2', image: 'assets/img/awards/award2.jpeg' },
    { title: 'Card 3', image: 'assets/img/awards/award3.jpeg' },
    { title: 'Card 4', image: 'assets/img/awards/award1.jpeg' },
  ];
  currentIndex = 0;

  ngAfterViewInit() {
    ($('.carousel-class') as any).slick({
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 10000,
      autoplay: true,
      centerMode: true,
      centerPadding: "0px",
      variableWidth: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            autoplaySpeed: 10000,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }

  previousSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  }
}
