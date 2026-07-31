import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { mumbaiLocations, naviMumbaiLocations, puneLocations, thaneLocations } from 'src/utils/constants';

@Component({
  selector: 'app-growth-story',
  templateUrl: './growth-story.component.html',
  styleUrls: ['./growth-story.component.css']
})
export class GrowthStoryComponent implements OnInit {
  isMobile = window.innerWidth <= 990;
  length: number = 0;
  growthStory = [
    {
      year: "2019 - 2023",
      summary: "3 Outlets, 19 Franchises",
      events: [
        { month: "MARCH 2019", title: "Startup", description: "FOOD TRUCK" },
        { month: "JULY 2019", title: "OUTLET NO. 1", description: "VASANT VIHAR, THANE" },
        { month: "DECEMBER 2019", title: "OUTLET NO. 2", description: "HARINIWAS CIRCLE, THANE" },
        { month: "APRIL 2021", title: "Kitchen", description: "CENTRAL KITCHEN" },
        { month: "FEBRUARY 2021", title: "OUTLET NO. 3", description: "HIRANANDANI ESTATE" },
        { month: "AUGUST 2021", title: "FRANCHISE NO. 1", description: "AIROLI" },
        { month: "OCTOBER 2021", title: "FRANCHISE NO. 2", description: "MALAD" },
        { month: "NOVEMBER 2021", title: "FRANCHISE NO. 3", description: "MULUND" },
        { month: "NOVEMBER 2021", title: "FRANCHISE NO. 4", description: "THANE STATION" },
        { month: "DECEMBER 2021", title: "FRANCHISE NO. 5", description: "THAKUR VILLAGE" },
        { month: "JANUARY 2022", title: "FRANCHISE NO. 6", description: "KHARGHAR" },
        { month: "JANUARY 2022", title: "FRANCHISE NO. 7", description: "DADAR" },
        { month: "FEBRUARY 2022", title: "FRANCHISE NO. 8", description: "POWAI" },
        { month: "SEPTEMBER 2022", title: "FRANCHISE NO. 9", description: "DOMBIVALI" }
      ]
    },
    {
      year: 2023,
      summary: "10 Franchises",
      events: [
        { month: "FEBRUARY", title: "FRANCHISE NO. 10", description: "MAROL" },
        { month: "MARCH", title: "FRANCHISE NO. 11", description: "MIRA ROAD" },
        { month: "MAY", title: "FRANCHISE NO. 12", description: "KALYAN" },
        { month: "JUNE", title: "FRANCHISE NO. 13", description: "KOTHRUD, PUNE" },
        { month: "JUNE", title: "FRANCHISE NO. 14", description: "ULHASNAGAR" },
        { month: "JULY", title: "FRANCHISE NO. 15", description: "KOREGAON PARK, PUNE" },
        { month: "SEPTEMBER", title: "FRANCHISE NO. 16", description: "ANDHERI, LOKHANDWALA" },
        { month: "SEPTEMBER", title: "FRANCHISE NO. 17", description: "SEAWOODS" },
        { month: "NOVEMBER", title: "FRANCHISE NO. 18", description: "BADLAPUR" },
        { month: "DECEMBER", title: "FRANCHISE NO. 19", description: "CHEMBUR" }
      ]
    },
    {
      year: 2024,
      summary: "9 Franchises",
      events: [
        { month: "JANUARY", title: "FRANCHISE NO. 20", description: "GHATKOPAR" },
        { month: "JANUARY", title: "FRANCHISE NO. 21", description: "PAREL" },
        { month: "MARCH", title: "FRANCHISE NO. 22", description: "MATUNGA" },
        { month: "APRIL", title: "FRANCHISE NO. 23", description: "SALUNKHE VIHAR, PUNE" },
        { month: "JULY", title: "FRANCHISE NO. 24", description: "VILE PARLE" },
        { month: "SEPTEMBER", title: "FRANCHISE NO. 25", description: "AUNDH, PUNE" },
        { month: "OCTOBER", title: "FRANCHISE NO. 26", description: "MAGARPATTA, PUNE" },
        { month: "OCTOBER", title: "FRANCHISE NO. 27", description: "KALWA" },
        { month: "DECEMBER", title: "FRANCHISE NO. 28", description: "METRO MALL, KALYAN" }
      ]
    },
    {
      year: 2025,
      summary: "2 Outlets, 5 Franchises",
      events: [
        { month: "MARCH", title: "FRANCHISE NO. 29", description: "VIMAN NAGAR, PUNE" },
        { month: "APRIL", title: "OUTLET NO. 4", description: "SINHAGAD ROAD, PUNE" },
        { month: "APRIL", title: "FRANCHISE NO. 30", description: "BHARATI VIDYAPEETH, PUNE" },
        { month: "JULY", title: "OUTLET NO. 5", description: "KHAR" },
        { month: "AUGUST", title: "FRANCHISE NO. 31", description: "ULWE" },
        { month: "October", title: "FRANCHISE NO. 32", description: "AMBERNATH" },
        { month: "October", title: "FRANCHISE NO. 33", description: "BHANDUP" },
      ]
    },
    {
      year: 2026,
      summary: "1 Franchise",
      events: [
        { month: "FEBRUARY", title: "FRANCHISE NO. 34", description: "DOMBIVALI" }
      ]
    }
  ];
  allLocations = [
    ...thaneLocations,
    ...mumbaiLocations,
    ...naviMumbaiLocations,
    ...puneLocations
  ];

  @ViewChild('path') animatedPath!: ElementRef<SVGPathElement>;

  ngOnInit(): void {
    setTimeout(() => {
      // Get the total length of the path
      this.length = this.animatedPath.nativeElement.getTotalLength();
      // Set initial state of the path
      // this.animatedPath.nativeElement.style.strokeDasharray = '900, 900';
      // this.animatedPath.nativeElement.style.strokeDashoffset = '900';
    }, 2000);
  }

  getLocationLink(description: string): string | null {
    if (!description) return null;

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
