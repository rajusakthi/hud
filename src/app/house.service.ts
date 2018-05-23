import { Injectable } from '@angular/core';
import { House } from './shared/models/house.model';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor() { }


  saveHouse(house:House)
  {
    console.log(house);
  }
}
