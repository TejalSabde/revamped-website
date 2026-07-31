import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-highlights',
  templateUrl: './business-highlights.component.html',
  styleUrls: ['./business-highlights.component.css']
})
export class BusinessHighlightsComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
