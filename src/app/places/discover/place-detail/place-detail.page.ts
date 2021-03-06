import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ModalController,
  NavController,
  ActionSheetController,
} from '@ionic/angular';

import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../model/place.model';
import { PlacesService } from '../../service/places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(
    private navCtrl: NavController,
    private placeService: PlacesService,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
      }
      this.place = this.placeService.getPlace(paramMap.get('placeId'));
    });
  }
  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navCtrl.navigateBack('/places/tabs/discover');
    // this.navCtrl.pop();
    this.actionSheetCtrl.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
            this.openBookingModal('select');
          }
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModal('random');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    }).then(actionSheetEl => {
      actionSheetEl.present();
    });
  }

  openBookingModal(mode: 'select' | 'random') {
    this.modalCtrl
    .create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place },
    })
    .then((modalEl) => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then((resultData) => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('BOOKED!');
      }
    });
  }
}
