import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessHighlightsComponent } from 'src/components/business-highlights/business-highlights.component';
import { GallaryComponent } from 'src/components/gallary/gallary.component';
import { HomeComponent } from 'src/components/home/home.component';
import { PurchaseComponent } from 'src/components/purchase/purchase.component';

const routes: Routes = [
  { path: "", pathMatch: "prefix", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "businessHighlights", component: BusinessHighlightsComponent },
  { path: "gallery", component: GallaryComponent },
  { path: "purchase", component: PurchaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
