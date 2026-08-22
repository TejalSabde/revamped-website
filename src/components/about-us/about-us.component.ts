import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  selectedCard: number = 2; // default featured card
  isMobile = window.innerWidth <= 990;
  selectCard(cardNumber: number): void {
    this.selectedCard = cardNumber;
  }
}
