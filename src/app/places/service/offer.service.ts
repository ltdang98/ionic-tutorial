import { Injectable } from '@angular/core';
import { Offer } from '../model/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private _offers: Offer[] = [
    new Offer(
      'p1',
      'Manhattan Manison',
      'In the heart of the New York City.',
      'https://immica.org/wp-content/uploads/2017/11/bieu-tuong-noi-tieng-khong-chi-cua-new-york-ma-toan-nuoc-my.jpg',
      149.99
    ),
    new Offer(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris!',
      // eslint-disable-next-line max-len
      'https://vcdn1-dulich.vnecdn.net/2019/07/17/RS5842-iStock-838366658-scr-1563342489.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Mx_er2P6Y5n__IMoxp_cgg',
      189.99
    ),
    new Offer(
      'p3',
      'The Foggy Palace',
      'Not your avergae city trip!',
      'https://victortravelblogdotcom.files.wordpress.com/2015/01/pena-palace-sintra-portugal-1021.jpg?w=780',
      99.99
    ),
  ];

  get offers() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._offers];
  }

  constructor() {}
}
