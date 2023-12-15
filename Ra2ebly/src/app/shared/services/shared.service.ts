import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private baseUrl = 'https://api.apilayer.com/exchangerates_data/latest?symbols=EUR%2CEGP%2C%20GBP&base=USD';



  constructor(private http:HttpClient) { }

  httpOptions =  {
    Headers: new HttpHeaders ({
      'Content-type':'application/json',
      'apikey':'GYaduW1nzm9mCjquIACcMPFw45XGG0i5',
    })
  }


  getLatestExchanges(){

    return this.http.get(this.baseUrl,{headers:this.httpOptions.Headers})
  }


  }


