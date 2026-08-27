import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements AfterViewInit, OnDestroy {
  @ViewChild('teamSection') teamSection!: ElementRef<HTMLElement>;

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

    this.sectionObserver.observe(this.teamSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }
}
