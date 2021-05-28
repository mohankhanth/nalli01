import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { RecentlyViewdComponent } from './components/recently-viewd/recently-viewd.component';
import { SimilarProductsComponent } from './components/similar-products/similar-products.component';
import { TrendingComponent } from './components/trending/trending.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewArrivalsComponent,
    RecentlyViewdComponent,
    SimilarProductsComponent,
    TrendingComponent,
    BannerComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
