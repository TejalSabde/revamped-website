import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from '../components/home/home.component';
import { LocationBarComponent } from '../components/location-bar/location-bar.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { GrowthStoryComponent } from '../components/growth-story/growth-story.component';
import { BrandPresenseComponent } from '../components/brand-presense/brand-presense.component';
import { MenuComponent } from '../components/menu/menu.component';
import { TeamComponent } from '../components/team/team.component';
import { BusinessHighlightsComponent } from '../components/business-highlights/business-highlights.component';
import { CommonModule } from '@angular/common';
import { GallaryComponent } from '../components/gallary/gallary.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { AwardsComponent } from 'src/components/awards/awards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LocationBarComponent,
    AboutUsComponent,
    GrowthStoryComponent,
    BrandPresenseComponent,
    MenuComponent,
    TeamComponent,
    BusinessHighlightsComponent,
    GallaryComponent,
    AwardsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LightgalleryModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
