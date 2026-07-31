import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  backToTopElement!: HTMLElement | null;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.backToTopElement = this.elementRef.nativeElement.querySelector('.back-to-top');
    this.toggleBackToTop();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.toggleBackToTop();
  }

  toggleBackToTop() {
    if (window.scrollY > 100) {
      this.backToTopElement?.classList.add('active');
    } else {
      this.backToTopElement?.classList.remove('active');
    }
  }

  
}
