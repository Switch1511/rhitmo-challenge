import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TenanciesUnityModel } from '../models/tenancies-unity.model';

@Injectable({
  providedIn: 'root'
})
export class TenanciesService {

  private readonly API: string =  environment.url_manager

  constructor(
    private http: HttpClient,
  ) {}


  getAdress(){
    return this.http.get<TenanciesUnityModel[]>(`${this.API}/adress`)
  }

  getAdressId(id: number){
    return this.http.get<TenanciesUnityModel[]>(`${this.API}/adress/${id}`)
  }

  postAdress(body: any){
    return this.http.post(`${this.API}/adress/`, body)
  }

  putAdress(body: any, id: number){
    return this.http.put(`${this.API}/adress/${id}`, body)
  }

  deleteAdress(adressId: number){
    return this.http.delete(`${this.API}/adress/${adressId}`)
  }
}
