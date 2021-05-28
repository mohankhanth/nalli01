import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../../services/products.service';

import { Trending } from '../../model/trending'

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  trend:string = "Trending Now";
  trending:Trending[];
  customOptions: OwlOptions;

  constructor( private productService: ProductsService) { }

  ngOnInit(): void {
    this.trending = this.productService.getTrendingProducts();
    this.arrivalSlider();
  }

  arrivalSlider() {
    this.customOptions = {
      center: true,
      items:3,
      loop: true,
      margin: 20,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['<img src="../assets/img/left-arrows01.jpg" class="card-img-top" alt="...">', 
                '<img src="../assets/img/right-arrows01.jpg" class="card-img-top" alt="...">'],
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
          items: 2
        }
      },
      nav: true
    }
  }

}
