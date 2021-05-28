import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../../services/products.service';

import { Arrivals } from '../../model/arrivals';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.css']
})
export class SimilarProductsComponent implements OnInit {
  similar:string = "Similar Products";
  newArrival:Arrivals[];
  customOptions: OwlOptions;

  constructor( private productService: ProductsService) { }

  ngOnInit(): void {
    this.newArrival = this.productService.getSimilarProducts();
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
          items: 4
        }
      },
      nav: true
    }
  }

}
