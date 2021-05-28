import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Arrivals} from '../model/arrivals';
import { Trending } from '../model/trending';
import { Banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getNewArrivals():Arrivals[] {
     return [
      {
        id: 1,
        image: '../assets/img/new-arrivals/arrivals01.jpg',
        title: 'Phosphorus',
        des: 'Multi Colored',
        price: 650
      },
      {
        id: 2,
        image: '../assets/img/new-arrivals/arrivals02.jpg',
        title: 'Kanchipuram Saree',
        des: 'Red Solid Henley T-Shirts',
        price: 800
      },
      {
        id: 3,
        image: '../assets/img/new-arrivals/arrivals03.jpg',
        title: 'Riya',
        des: 'Blue Printed Kurtas',
        price: 700
      },
      {
        id: 4,
        image: '../assets/img/new-arrivals/arrivals04.jpg',
        title: 'Ama Bella',
        des: 'Multi Colored Printed Pants',
        price: 500
      },
      {
        id: 5,
        image: '../assets/img/new-arrivals/arrivals01.jpg',
        title: 'Kanchipuram Saree',
        des: 'Red Solid Henley T-Shirts',
        price: 900
      },
      {
        id: 6,
        image: '../assets/img/new-arrivals/arrivals03.jpg',
        title: 'Riya',
        des: 'Blue Printed Kurtas',
        price: 700
      },
      {
        id: 7,
        image: '../assets/img/new-arrivals/arrivals04.jpg',
        title: 'Ama Bella',
        des: 'Multi Colored Printed Pants',
        price: 500
      }
    ];
  }

  getRecentlyViewed():Arrivals[] {
    return [
     {
       id: 1,
       image: '../assets/img/recently-viewd/viewds01.jpg',
       title: 'Phosphorus',
       des: 'Multi Colored',
       price: 3000
     },
     {
       id: 2,
       image: '../assets/img/recently-viewd/viewds02.jpg',
       title: 'Kanchipuram Saree',
       des: 'Red Solid Henley T-Shirts',
       price: 650
     },
     {
       id: 3,
       image: '../assets/img/recently-viewd/viewds03.jpg',
       title: 'Riya',
       des: 'Blue Printed Kurtas',
       price: 500
     },
     {
       id: 4,
       image: '../assets/img/recently-viewd/viewds04.jpg',
       title: 'Ama Bella',
       des: 'Multi Colored Printed Pants',
       price: 200
     },
     {
       id: 5,
       image: '../assets/img/recently-viewd/viewds01.jpg',
       title: 'Kanchipuram Saree',
       des: 'Red Solid Henley T-Shirts',
       price: 900
     },
     {
       id: 6,
       image: '../assets/img/recently-viewd/viewds03.jpg',
       title: 'Riya',
       des: 'Blue Printed Kurtas',
       price: 700
     },
     {
       id: 7,
       image: '../assets/img/recently-viewd/viewds04.jpg',
       title: 'Ama Bella',
       des: 'Multi Colored Printed Pants',
       price: 500
     }
   ];
  }

  getSimilarProducts():Arrivals[] {
    return [
     {
       id: 1,
       image: '../assets/img/similar/similar01.jpg',
       title: 'Phosphorus',
       des: 'Multi Colored',
       price: 3000
     },
     {
       id: 2,
       image: '../assets/img/similar/similar02.jpg',
       title: 'Kanchipuram Saree',
       des: 'Red Solid Henley T-Shirts',
       price: 650
     },
     {
       id: 3,
       image: '../assets/img/similar/similar03.jpg',
       title: 'Riya',
       des: 'Blue Printed Kurtas',
       price: 500
     },
     {
       id: 4,
       image: '../assets/img/similar/similar04.jpg',
       title: 'Ama Bella',
       des: 'Multi Colored Printed Pants',
       price: 200
     },
     {
       id: 5,
       image: '../assets/img/similar/similar01.jpg',
       title: 'Kanchipuram Saree',
       des: 'Red Solid Henley T-Shirts',
       price: 900
     },
     {
       id: 6,
       image: '../assets/img/similar/similar03.jpg',
       title: 'Riya',
       des: 'Blue Printed Kurtas',
       price: 700
     },
     {
       id: 7,
       image: '../assets/img/similar/similar04.jpg',
       title: 'Ama Bella',
       des: 'Multi Colored Printed Pants',
       price: 500
     }
   ];
  }

  getTrendingProducts():Trending[] {
    return [
      { id: 1, image: '../assets/img/trending/trendings01.jpg', category: 'Bridal Sarees' },
      { id: 2, image: '../assets/img/trending/trendings02.jpg', category: 'Festive Sarees' },
      { id: 3, image: '../assets/img/trending/trendings03.jpg', category: 'Daily wear Sarees' },
      { id: 4, image: '../assets/img/trending/trendings04.jpg', category: 'Summer Sarees' },
      { id: 5, image: '../assets/img/trending/trendings05.jpg', category: 'Luxury Sarees' },
      { id: 6, image: '../assets/img/trending/trendings06.jpg', category: 'Party Sarees' },
      { id: 7, image: '../assets/img/trending/trendings07.jpg', category: 'Wedding Sarees' },
      { id: 8, image: '../assets/img/trending/trendings08.jpg', category: 'Fancy Sarees' },
    ];
  }

  getBannerImages():Banner[] {
    return [
      { id: 1, image: '../assets/img/banners01.jpg', link: "javascript:void(0)" },
      { id: 2, image: '../assets/img/banners02.jpg', link: "javascript:void(0)" },
      { id: 3, image: '../assets/img/banners03.jpg', link: "javascript:void(0)" },
    ];
  }


}
