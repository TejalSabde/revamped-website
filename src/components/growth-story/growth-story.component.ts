import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';

import {
  mumbaiLocations,
  naviMumbaiLocations,
  puneLocations,
  thaneLocations
} from 'src/utils/constants';

@Component({
  selector: 'app-growth-story',
  templateUrl: './growth-story.component.html',
  styleUrls: ['./growth-story.component.css']
})
export class GrowthStoryComponent implements OnInit, OnDestroy {

  isMobile = window.innerWidth <= 990;
  length: number = 0;

  growthStory = [
    {
      year: "2019 - 2022",
      summary: "3 Outlets, 19 Franchises",
      events: [
        {
          month: "MARCH 2019",
          title: "Startup",
          description: "FOOD TRUCK"
        },
        {
          month: "JULY 2019",
          title: "OUTLET NO. 1",
          description: "VASANT VIHAR, THANE"
        },
        {
          month: "DECEMBER 2019",
          title: "OUTLET NO. 2",
          description: "HARINIWAS CIRCLE, THANE"
        },
        {
          month: "APRIL 2021",
          title: "Kitchen",
          description: "CENTRAL KITCHEN"
        },
        {
          month: "FEBRUARY 2021",
          title: "OUTLET NO. 3",
          description: "HIRANANDANI ESTATE"
        },

        // Franchise numbers are generated automatically
        {
          month: "AUGUST 2021",
          title: "FRANCHISE",
          description: "AIROLI"
        },
        {
          month: "OCTOBER 2021",
          title: "FRANCHISE",
          description: "MALAD"
        },
        {
          month: "NOVEMBER 2021",
          title: "FRANCHISE",
          description: "MULUND"
        },
        {
          month: "NOVEMBER 2021",
          title: "FRANCHISE",
          description: "THANE STATION"
        },
        {
          month: "DECEMBER 2021",
          title: "FRANCHISE",
          description: "THAKUR VILLAGE"
        },
        {
          month: "JANUARY 2022",
          title: "FRANCHISE",
          description: "KHARGHAR"
        },
        {
          month: "JANUARY 2022",
          title: "FRANCHISE",
          description: "DADAR"
        },
        {
          month: "FEBRUARY 2022",
          title: "FRANCHISE",
          description: "POWAI"
        },
        {
          month: "SEPTEMBER 2022",
          title: "FRANCHISE",
          description: "DOMBIVALI"
        }
      ]
    },

    {
      year: 2023,
      summary: "8 Franchises",
      events: [
        {
          month: "FEBRUARY",
          title: "FRANCHISE",
          description: "MAROL"
        },
        {
          month: "MARCH",
          title: "FRANCHISE",
          description: "MIRA ROAD"
        },
        {
          month: "MAY",
          title: "FRANCHISE",
          description: "KALYAN"
        },
        {
          month: "JUNE",
          title: "FRANCHISE",
          description: "ULHASNAGAR"
        },
        {
          month: "SEPTEMBER",
          title: "FRANCHISE",
          description: "ANDHERI, LOKHANDWALA"
        },
        {
          month: "SEPTEMBER",
          title: "FRANCHISE",
          description: "SEAWOODS"
        },
        {
          month: "NOVEMBER",
          title: "FRANCHISE",
          description: "BADLAPUR"
        },
        {
          month: "DECEMBER",
          title: "FRANCHISE",
          description: "CHEMBUR"
        }
      ]
    },

    {
      year: 2024,
      summary: "9 Franchises",
      events: [
        {
          month: "JANUARY",
          title: "FRANCHISE",
          description: "GHATKOPAR"
        },
        {
          month: "JANUARY",
          title: "FRANCHISE",
          description: "PAREL"
        },
        {
          month: "MARCH",
          title: "FRANCHISE",
          description: "MATUNGA"
        },
        {
          month: "APRIL",
          title: "FRANCHISE",
          description: "SALUNKHE VIHAR, PUNE"
        },
        {
          month: "JULY",
          title: "FRANCHISE",
          description: "VILE PARLE"
        },
        {
          month: "SEPTEMBER",
          title: "FRANCHISE",
          description: "AUNDH, PUNE"
        },
        {
          month: "OCTOBER",
          title: "FRANCHISE",
          description: "MAGARPATTA, PUNE"
        },
        {
          month: "OCTOBER",
          title: "FRANCHISE",
          description: "KALWA"
        },
        {
          month: "DECEMBER",
          title: "FRANCHISE",
          description: "METRO MALL, KALYAN"
        }
      ]
    },

    {
      year: 2025,
      summary: "2 Outlets, 5 Franchises",
      events: [
        {
          month: "MARCH",
          title: "FRANCHISE",
          description: "VIMAN NAGAR, PUNE"
        },
        {
          month: "APRIL",
          title: "OUTLET NO. 4",
          description: "SINHAGAD ROAD, PUNE"
        },
        {
          month: "APRIL",
          title: "FRANCHISE",
          description: "BHARATI VIDYAPEETH, PUNE"
        },
        {
          month: "JULY",
          title: "OUTLET NO. 5",
          description: "KHAR"
        },
        {
          month: "AUGUST",
          title: "FRANCHISE",
          description: "ULWE"
        },
        {
          month: "OCTOBER",
          title: "FRANCHISE",
          description: "AMBERNATH"
        },
        {
          month: "OCTOBER",
          title: "FRANCHISE",
          description: "BHANDUP"
        }
      ]
    },

    {
      year: 2026,
      summary: "1 Franchise",
      events: [
        {
          month: "FEBRUARY",
          title: "FRANCHISE",
          description: "DOMBIVALI"
        }
      ]
    }
  ];

  allLocations = [
    ...thaneLocations,
    ...mumbaiLocations,
    ...naviMumbaiLocations,
    ...puneLocations
  ];
  showGrowthTimeline = false;
  isIntroVisible = false;

  @ViewChild('growthIntro') growthIntro!: ElementRef<HTMLElement>;
  @ViewChild('path') animatedPath!: ElementRef;
  @ViewChild('transitionVideo') transitionVideo!: ElementRef<HTMLVideoElement>;
  private introObserver?: IntersectionObserver;

ngAfterViewInit(): void {

  if (this.transitionVideo) {
    const video = this.transitionVideo.nativeElement;

    // Explicitly set muted because some mobile browsers
    // don't reliably interpret the HTML muted attribute.
    video.muted = true;
    video.defaultMuted = true;

    video.play()
      .then(() => {
        console.log('Video started playing');
      })
      .catch(error => {
        console.log('Autoplay blocked:', error);
      });
  }

  this.introObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      this.isIntroVisible = true;
      this.introObserver?.disconnect();
    }
  }, { threshold: 0.2 });

  this.introObserver.observe(this.growthIntro.nativeElement);
}

ngOnDestroy(): void {
  this.introObserver?.disconnect();
}

  ngOnInit(): void {

    // Automatically assign sequential franchise numbers
    this.assignFranchiseNumbers();

    setTimeout(() => {

      // Get the total length of the path
      if (this.animatedPath) {
        this.length =
          this.animatedPath.nativeElement.getTotalLength();
      }

      // Set initial state of the path
      // this.animatedPath.nativeElement.style.strokeDasharray = '900, 900';
      // this.animatedPath.nativeElement.style.strokeDashoffset = '900';

    }, 2000);
  }

  /**
   * Automatically assigns franchise numbers
   * across all years.
   *
   * Example:
   * FRANCHISE -> FRANCHISE NO. 1
   * FRANCHISE -> FRANCHISE NO. 2
   * FRANCHISE -> FRANCHISE NO. 3
   *
   * The numbering continues across all year groups.
   */
  private assignFranchiseNumbers(): void {

    let franchiseNumber = 0;

    this.growthStory.forEach(yearGroup => {

      yearGroup.events.forEach(event => {

        if (event.title === 'FRANCHISE') {
          franchiseNumber++;

          event.title = `FRANCHISE NO. ${franchiseNumber}`;
        }

      });

    });
  }

  getLocationLink(description: string): string | null {

    if (!description) {
      return null;
    }

    const desc = description.toLowerCase();

    const location = this.allLocations.find(loc =>
      desc.includes(loc.name.toLowerCase())
    );

    return location ? location.link : null;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {

    // if (window.scrollY > 700) {
    //   let value = window.scrollY - 700;
    //   let offsetVal = (900 - value).toString();
    //   this.animatedPath.nativeElement.style.strokeDashoffset = offsetVal;
    // }

  }
}