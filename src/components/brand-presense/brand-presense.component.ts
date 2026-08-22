import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import {
  thaneLocations, mumbaiLocations,
  naviMumbaiLocations,
  puneLocations
} from '../../utils/constants';

const firstEight = [
  ...thaneLocations.slice(0, 2).map(x => ({ ...x, city: 'Thane' })),
  ...mumbaiLocations.slice(0, 2).map(x => ({ ...x, city: 'Mumbai' })),
  ...naviMumbaiLocations.slice(0, 2).map(x => ({ ...x, city: 'Navi Mumbai' })),
  ...puneLocations.slice(0, 2).map(x => ({ ...x, city: 'Pune' })),
];

const remaining = [
  ...thaneLocations.slice(2).map(x => ({ ...x, city: 'Thane' })),
  ...mumbaiLocations.slice(2).map(x => ({ ...x, city: 'Mumbai' })),
  ...naviMumbaiLocations.slice(2).map(x => ({ ...x, city: 'Navi Mumbai' })),
  ...puneLocations.slice(2).map(x => ({ ...x, city: 'Pune' })),
];

@Component({
  selector: 'app-brand-presense',
  templateUrl: './brand-presense.component.html',
  styleUrls: ['./brand-presense.component.css']
})
export class BrandPresenseComponent {

  allLocations = [...firstEight, ...remaining];
  isMobile = window.innerWidth <= 990;
  searchText = "";

  displayCount = 8;

  filteredLocations = [...this.allLocations];
  displayedLocations = this.filteredLocations.slice(0, this.displayCount);

  filterLocations() {

    const value = this.searchText.toLowerCase().trim();

    this.filteredLocations = this.allLocations.filter(x =>

      x.city.toLowerCase().includes(value) ||

      x.name.toLowerCase().includes(value)

    );

    this.displayedLocations = value
      ? this.filteredLocations
      : this.filteredLocations.slice(0, this.displayCount);

  }

  loadMore() {

    this.displayCount += 8;

    this.displayedLocations = this.filteredLocations.slice(0, this.displayCount);

  }
}
