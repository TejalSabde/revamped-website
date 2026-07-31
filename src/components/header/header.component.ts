import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


const selectHeader: any = document.querySelector('#header') as HTMLElement;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  isMobile = window.innerWidth <= 990;
  isHeaderScrolled: boolean = false;
  activeSection: string = '';
  fragment: string | null = '';
  constructor(private router: Router, private renderer: Renderer2, public route: ActivatedRoute) { }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  ngOnInit(): void {
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled');
        } else {
          selectHeader.classList.remove('header-scrolled');
        }
      };

      window.addEventListener('load', headerScrolled);
      window.addEventListener('scroll', headerScrolled);
    }
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => { //I needed also setTimeout in order to make it work
      try {
        // if (document)
        document.querySelector('#' + this.fragment)!.scrollIntoView();
      } catch (e) {
      }
    });
  }

  close() {
    if (this.isMobile) {
      this.renderer.removeClass(document.getElementById('navbar'), 'navbar-mobile');
      // document.getElementById("navbar")?.classList.remove("navbar-mobile");
      this.renderer.removeClass(document.getElementById('navIcon'), 'bi-x');
      this.renderer.addClass(document.getElementById('navIcon'), 'bi-list');
      this.renderer.removeClass(document.getElementById('dropdown-ul'), 'dropdown-active');
    }
  }


  /**
 * Scrolls to an element with header offset
 */
  scrollTo(el: string): void {
    let header = document.querySelector('#header') as HTMLElement;
    let offset = header.offsetHeight;

    let element = document.querySelector(el) as HTMLElement;
    if (element) {
      let elementPos = element.offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      });
    }
  }

  isActive(sectionId: string): boolean {
    return this.activeSection.includes(sectionId);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // When the user scrolls, check the scroll position
    if (window.scrollY > 0) {
      this.isHeaderScrolled = true;
    } else {
      this.isHeaderScrolled = false;
    }
    const position = window.scrollY + 200;
    const sections = ['hero', 'about', 'growthStory', 'brandPresence', 'team', 'menu', 'gallary', 'businessHighlights', 'awards', 'purchase']; // IDs of sections to check
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          this.activeSection = `#${sectionId}`;
        }
      }
    });
  }

  checkForMobile() {
    let l_size_laptop = window.innerWidth <= 1024;
    let close = document.getElementById('navIcon')?.classList.contains('bi-x');
    if ((this.isMobile || l_size_laptop) && close) {
      this.renderer.removeClass(document.getElementById('navbar'), 'navbar-mobile');
      this.renderer.removeClass(document.getElementById('navIcon'), 'bi-x');
      this.renderer.addClass(document.getElementById('navIcon'), 'bi-list');

    }
    if ((this.isMobile || l_size_laptop) && !close) {
      this.renderer.addClass(document.getElementById('navbar'), 'navbar-mobile');
      this.renderer.addClass(document.getElementById('navIcon'), 'bi-x');
      this.renderer.removeClass(document.getElementById('navIcon'), 'bi-list');
    } else {
      this.renderer.removeClass(document.getElementById('navbar'), 'navbar-mobile');
    }
  }

  onDropdownClick(event: Event) {
    let l_size_laptop = window.innerWidth <= 1024;
    if (this.isMobile || l_size_laptop) {
      const dd = document.getElementById('dropdown-ul');
      if (dd && dd.classList.contains('dropdown-active')) {
        this.renderer.removeClass(document.getElementById('dropdown-ul'), 'dropdown-active');
      } else {
        this.renderer.addClass(document.getElementById('dropdown-ul'), 'dropdown-active');
      }
    }
  }
}
