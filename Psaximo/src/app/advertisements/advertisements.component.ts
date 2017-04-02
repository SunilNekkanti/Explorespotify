import { Component, OnInit } from '@angular/core';
import {AdvertisementService} from './advertisement.service'

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {

  advertisements;

  constructor(_adService : AdvertisementService) {

      this.advertisements = _adService.getAdvertisements();
   }

  ngOnInit() {
  }

}
