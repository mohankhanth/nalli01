import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../../services/products.service';

import { Arrivals } from '../../model/arrivals';

@Component({
  selector: 'app-recently-viewd',
  templateUrl: './recently-viewd.component.html',
  styleUrls: ['./recently-viewd.component.css']
})
export class RecentlyViewdComponent implements OnInit {
  recently: string = 'Recently Viewed';
  newArrival: Arrivals[];
  customOptions: OwlOptions;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.newArrival = this.productService.getRecentlyViewed();
    this.arrivalSlider();
  }

  arrivalSlider() {
    this.customOptions = {
      loop: true,
      margin: 20,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: [
        '<img src="https://stackblitz.com/files/nalli01/github/mohankhanth/nalli01/master/src/assets/img/left-arrows01.jpg" class="card-img-top" alt="...">',
        '<img src="https://stackblitz.com/files/nalli01/github/mohankhanth/nalli01/master/src/assets/img/right-arrows01.jpg" class="card-img-top" alt="...">'
      ],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    };
  }
}
