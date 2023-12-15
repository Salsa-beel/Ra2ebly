import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'chart.js';
import { SharedService } from '../../shared/services/shared.service';
import { ViewService } from '../services/view.service';

Chart.register(...registerables);

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})


export class BarchartComponent implements OnInit {

  public chart: any;
  constructor( private service:SharedService) { }

  ngOnInit() {
    this.createbarChart();

  }
  createbarChart(){

    this.service.getLatestExchanges().subscribe((result:any)=>{
      console.log(result)

    })
  }


}
