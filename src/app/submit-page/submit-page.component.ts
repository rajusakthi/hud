import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HouseService } from '../house.service';
import { House }    from '../shared/models/house.model';



@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css']
})
export class SubmitPageComponent implements OnInit {

  model=new House();
  houseService:HouseService;

  constructor(private myHouseService: HouseService) {
    this.houseService=myHouseService;
   }

  ngOnInit() {
  }

  newHouse() {
    //console.log(this.model);
    this.houseService.saveHouse(this.model);
  }
  

}
