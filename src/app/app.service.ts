import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Vehicle } from './vehicle-designs/vehicle.model';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  public vehicledata: Vehicle[] = [];
  public media: Vehicle[] = [];
  public BASE_URL = 'https://itg-prd-recruit.appspot.com';

  constructor(private http: HttpClient) { }
  public getVehicleData(): Observable<any> {
    return this.http.get(this.BASE_URL + '/api/vehicles/');
  }

  public getVehicleDataWithID(url): Observable<any> {
    return this.http.get(this.BASE_URL + url);
  }
}

