import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import {
  thaneLocations, mumbaiLocations,
  naviMumbaiLocations,
  puneLocations
} from '../../utils/constants';
@Component({
  selector: 'app-brand-presense',
  templateUrl: './brand-presense.component.html',
  styleUrls: ['./brand-presense.component.css']
})
export class BrandPresenseComponent {
  isMobile = window.innerWidth <= 990;
  isMenuVisible: boolean[] = [false, false, false, false];
  constructor(private elementRef: ElementRef) { }
  // title: string = 'Our Outlets';
  thaneLocations = thaneLocations;
  mumbaiLocations = mumbaiLocations;
  naviMumbaiLocations = naviMumbaiLocations;
  puneLocations = puneLocations;
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;
    let button: any[4] = [];
    let menu: any[4] = [];
    button[0] = document.getElementById('mum');
    menu[0] = document.getElementById('mum-list');

    button[1] = document.getElementById('thane');
    menu[1] = document.getElementById('thane-list');

    button[2] = document.getElementById('navi-mum');
    menu[2] = document.getElementById('navi-mum-list');

    button[3] = document.getElementById('pune');
    menu[3] = document.getElementById('pune-list');
    // mum
    // thane
    // navi-mum
    // pune
    button.forEach((btn: any, index: number) => {
      if (btn && !btn.contains(target) && menu[index] && !menu[index].contains(target)) {
        this.isMenuVisible[index] = false;
      }
    });

  }

  toggleClass(id: number) {
    // let btn = document.getElementById(id);
    let ul = document.getElementById(id + '-list');

    // btn!.classList.toggle('active');
    // ul!.classList.toggle('show');
    this.isMenuVisible[id] = !this.isMenuVisible[id];

  }
  onMenuClick(event: Event) {
    event.stopPropagation(); // Prevent event from bubbling up to document
  }

  onMouseLeave() {
    const mapIframe = document.getElementById("mapiframe");
    if (mapIframe) {
      (mapIframe as HTMLIFrameElement).style.pointerEvents = 'none';
    }
  }

  onMouseEnter() {
    const mapIframe = document.getElementById("mapiframe");
    if (mapIframe) {
      (mapIframe as HTMLIFrameElement).style.pointerEvents = 'auto';
    }
  }
}
