import { Injectable } from '@angular/core';

@Injectable()
export class AdvertisementService {

  constructor() { }

  getAdvertisements() : string[]  {

    return ['Colgate Advertisement','Pepsodent','CloseU'];

  }

}
