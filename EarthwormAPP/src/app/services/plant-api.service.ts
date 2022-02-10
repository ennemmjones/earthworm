import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs'
import { Plant } from '../models/plant';



@Injectable({
  providedIn: 'root'
})
export class PlantApiService {

  constructor(
    private httpClient: HttpClient

  ) { }

  getPlants(): Observable<Plant[]> {
    return this.httpClient.get<Plant[]>("https://earthwormgc.azurewebsites.net/growstuff/plantlist")


  }

  getSearchedPlant(plant:string): Observable<Plant[]>{
    return this.httpClient.get<Plant[]>(`https://earthwormgc.azurewebsites.net/growstuff/plantname?plantname=${ plant }`)
  }
  getSinglePlant(plant:string): Observable<Plant>{
    return this.httpClient.get<Plant>(`https://earthwormgc.azurewebsites.net/growstuff/singleplantname?plantname=${ plant }`)
  }



}
