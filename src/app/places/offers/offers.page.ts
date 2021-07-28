import { Component, OnInit } from '@angular/core';
import { Place } from '../model/place.model';
import { PlacesService } from '../service/places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedOffers: Place[];
  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.loadedOffers = this.placeService.places;
  }

}
