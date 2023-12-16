import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class linechartComponent implements OnInit {

  // public lineChartData: any[] = [];
  // public lineChartLabels: string[] = [];
  // public lineChartOptions: any = {
  //   responsive: true,
  // }
  chart: any = [];
  result!: any;
  ExchgRate!: any;
  Dates: any;

  constructor(private service: SharedService) { }

  ngOnInit() {

    this.createLineChart();
  }

  createLineChart() {

    this.service.getTimeSeriesExchanges().subscribe((res: any) => {
      const ratesResponse = res.rates;

      // console.log(ratesResponse)

      // Used Object.keys to get an array of currency names (labels).
      this.Dates = Object.keys(ratesResponse);


      // Used Object.values to get an array of coin prices (data).
      this.ExchgRate = Object.values(ratesResponse).map((rate: any) => rate.EUR);
      // this.ExchgRate = Object.values(ratesResponse).map(rate => parseFloat(rate.EUR));

      // console.log(this.ExchgRate);

      this.chart = new Chart("MyChart", {
        type: 'line', //this denotes tha type of chart


        data: { // values on X-Axis
          labels: this.Dates,
          datasets: [
            {
              label: "USD/EUR exchange rate ",
              data: this.ExchgRate,
              backgroundColor: 'red'
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              ticks: {
                precision: 3, // Set the number of decimal places you want to display
                callback: (value) => (value as number).toFixed(3), // Format the tick value as needed
              }
            }
          },
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Line Chart'
            }
          }
        },
      });


    })

  }


}
