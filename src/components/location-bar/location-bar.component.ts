import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-bar',
  templateUrl: './location-bar.component.html',
  styleUrls: ['./location-bar.component.css']
})
export class LocationBarComponent {

  constructor(private router: Router) {}

  navigateToBrandPres(){
    // this.router.navigate([], { fragment: 'brandPresence' });
    document.getElementById('brandPresence')?.scrollIntoView({ behavior: 'smooth' });
  }
}
