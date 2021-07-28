import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../model/place.model';
import { PlacesService } from '../../service/places.service';

@Component({
  selector: 'app-offers-booking',
  templateUrl: './offers-booking.page.html',
  styleUrls: ['./offers-booking.page.scss'],
})
export class OffersBookingPage implements OnInit {
  place: Place;
  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

}
