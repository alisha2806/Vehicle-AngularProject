import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './vehicle.model';

@Component({
  selector: 'app-vehicle-designs',
  templateUrl: './vehicle-designs.component.html',
  styleUrls: ['./vehicle-designs.component.css']
})
export class VehicleDesignsComponent implements OnInit {

  public vehicleData;
  public media;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getVehicleData();
  }

  public getVehicleData() {
    this.apiService.getVehicleData().subscribe(res => {
      this.vehicleData = res;
      this.getVehicleDataWithID()
      });
  }

  public getVehicleDataWithID() {
    
    this.vehicleData.forEach(obj => {
     
        this.apiService.getVehicleDataWithID(obj.url).subscribe(res => {       
        obj.price = res.price;
        obj.description = res.description;
      });
    });
   
  }
}

