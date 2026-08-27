import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class BrandPresenseComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('outletCard') outletCards!: QueryList<ElementRef<HTMLElement>>;

  visibleOutlets = new Set<string>();

  private outletObserver?: IntersectionObserver;
  private outletCardsChangeSubscription?: Subscription;

  allLocations = [...firstEight, ...remaining];
  isMobile = window.innerWidth <= 990;
  searchText = "";
  isFindingLocation = false;
  locationError = "";

  displayCount = 8;

  filteredLocations = [...this.allLocations];
  displayedLocations = this.filteredLocations.slice(0, this.displayCount);

  ngAfterViewInit(): void {
    this.observeOutletCards();
    this.outletCardsChangeSubscription = this.outletCards.changes.subscribe(() => this.observeOutletCards());
  }

  ngOnDestroy(): void {
    this.outletObserver?.disconnect();
    this.outletCardsChangeSubscription?.unsubscribe();
  }

  private observeOutletCards(): void {
    this.outletObserver?.disconnect();
    this.outletObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const outletName = entry.target.querySelector('h4')?.textContent?.trim();
          if (outletName) {
            this.visibleOutlets.add(outletName);
          }
          this.outletObserver?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    this.outletCards.forEach(card => this.outletObserver?.observe(card.nativeElement));
  }

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

  findLocationNearMe(): void {
    this.locationError = "";

    if (!navigator.geolocation) {
      this.locationError = 'Location services are not supported by your browser.';
      return;
    }

    this.isFindingLocation = true;
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://www.google.com/maps/search/Shawarmaji/@${latitude},${longitude},13z`;

        this.isFindingLocation = false;
        window.open(mapsUrl, '_blank', 'noopener,noreferrer');
      },
      () => {
        this.isFindingLocation = false;
        this.locationError = 'Unable to access your location. Please allow location access and try again.';
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    );
  }
}
