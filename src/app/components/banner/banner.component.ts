import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../../services/products.service';

import { Banner } from '../../model/banner'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banners01:Banner[];
  customOptions: OwlOptions;

  constructor( private productService: ProductsService) { }

  ngOnInit(): void {
    this.banners01 = this.productService.getBannerImages();
    this.arrivalSlider();
  }

  arrivalSlider() {
    this.customOptions = {
      loop: true,
      margin: 0,
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
          items: 1
        },
        740: {
          items: 3
        },
        940: {
          items: 1
        }
      },
      nav: false
    }
  }

}
