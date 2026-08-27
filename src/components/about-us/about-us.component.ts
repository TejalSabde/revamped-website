import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('aboutSection') aboutSection!: ElementRef<HTMLElement>;

  selectedCard: number = 2; // default featured card
  isMobile = window.innerWidth <= 990;
  isSectionVisible = false;
  private sectionObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.sectionObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.isSectionVisible = true;
        this.sectionObserver?.disconnect();
      }
    }, { threshold: 0.15 });

    this.sectionObserver.observe(this.aboutSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  selectCard(cardNumber: number): void {
    this.selectedCard = cardNumber;
  }
}
