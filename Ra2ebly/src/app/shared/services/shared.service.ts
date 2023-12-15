import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  getLatestExchanges(){

    return this.http.get('https://api.apilayer.com/exchangerates_data/latest?symbols=EUR&base=USD')
  }


  }


