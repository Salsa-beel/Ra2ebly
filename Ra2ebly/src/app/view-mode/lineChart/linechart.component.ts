import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SharedService } from 'src/app/shared/services/shared.service';

/**
 * Component representing a line chart.
 */

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class linechartComponent implements OnInit {

  /** The chart instance. */
  chart: any = [];

  /** Array to store exchange rates. */
  ExchgRate: number[] = [];

  /** Array to store dates. */
  Dates: string[] = [];

  /**
   * Constructs the LinechartComponent.
   *
   * @param service The shared service for fetching time series exchanges.
   */
  constructor(private service: SharedService) { }

  /**
   * Lifecycle hook that runs after the component has been initialized.
   * Invoked once when the component is created.
   */
  ngOnInit() {
    this.createLineChart();
  }

  /**
   * Creates a line chart using Chart.js.
   */
  createLineChart() {

    this.service.getTimeSeriesExchanges().subscribe((res: any) => {
      const ratesResponse = res.rates;

      // Used Object.keys to get an array of currency names (labels).
      this.Dates = Object.keys(ratesResponse);

      // Used Object.values to get an array of coin prices (data).
      this.ExchgRate = Object.values(ratesResponse).map((rate: any) => rate.EUR);

      this.chart = new Chart("MyChart", {
        type: 'line', // Denotes the type of chart.

        data: {
          labels: this.Dates, // Values on X-Axis.

          datasets: [
            {
              label: "USD/EUR exchange rate",
              data: this.ExchgRate,
              borderColor: 'green',
              backgroundColor: 'green'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,

          scales: {
            y: {
              ticks: {
                precision: 3, // Set the number of decimal places to display.
                callback: (value) => (value as number).toFixed(3) // Format the tick value as needed.
              }
            }
          },
          plugins: {
            colors: {
              enabled: false
            },
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
    });
  }
}
