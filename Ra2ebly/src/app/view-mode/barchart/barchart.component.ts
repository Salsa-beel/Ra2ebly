import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js';
import { SharedService } from '../../shared/services/shared.service';
import { ViewService } from '../services/view.service';
import {LatestRate} from'../interfaces/latestRate'

Chart.register(...registerables);

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})



export class BarchartComponent implements OnInit {

  chart: any = [];
  result!:any;
  coinPrice!: any ;
  coinName: any;




  constructor( private service:SharedService) { }



  ngOnInit() {
    this.createbarChart();

  }
  createbarChart(){

    this.service.getLatestExchanges().subscribe((res:any)=>{

      const ratesResponse = res.rates ??{}; //
      console.log(ratesResponse)

      // Used Object.keys to get an array of currency names (labels).
      this.coinName = Object.keys(ratesResponse);

      // Used Object.values to get an array of coin prices (data).
    this.coinPrice = Object.values(ratesResponse);

    console.log(this.coinName);
    console.log(this.coinPrice);


      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.coinName,
          datasets: [
            {
              label: 'Coin Price',
              data: this.coinPrice,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      })

    })



  }












}
