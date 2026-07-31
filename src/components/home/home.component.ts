import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMobile = window.innerWidth <= 990;
  heroScale = 1;
  heroOpacity = 1;
  mobileScale = 1;


  @HostListener('window:scroll', [])
  onScroll() {

    const scrollTop = window.scrollY;
    const maxScroll = 400;

    const ratioMobile = Math.min(window.scrollY / 400, 1);

    this.mobileScale = 1 - ratioMobile * 0.1;  // softer mobile

    const ratio = Math.min(scrollTop / maxScroll, 1);

    this.heroScale = 1 - ratio * 0.2;
    this.heroOpacity = 1 - ratio;


    // Calculate ratio (0 → 1)
    const scrollRatio = Math.min(scrollTop / maxScroll, 1);

    // Scale from 1 → 0.8
    this.heroScale = 1 - scrollRatio * 0.2;

    // Opacity from 1 → 0
    this.heroOpacity = 1 - scrollRatio;
  }

  downloadBrochure() {
    window.open('./assets/docs/Shawarmaji Brochure_April 2025.pdf', '_blank');
  }

}
