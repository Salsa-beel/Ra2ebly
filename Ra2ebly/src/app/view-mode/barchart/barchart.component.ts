import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { SharedService } from '../../shared/services/shared.service';
import { ViewService } from '../services/view.service';
// import { LatestRate } from '../interfaces/latestRate'

// Registering Chart.js plugins
Chart.register(...registerables);

/**
 * Component for displaying a bar chart of coin prices.
 */
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  /** The Chart.js instance for rendering the bar chart. */
  chart: any = [];

  /** Array to store coin prices for the chart. */
  coinPrice: number[] = [];

  /** Array to store currency names (labels) for the chart. */
  coinName: string[] = [];

  /**
   * Constructor for the BarchartComponent.
   * @param service The SharedService used for fetching latest exchanges.
   */
  constructor(private service: SharedService) { }

  /**
   * Lifecycle hook called after component initialization.
   */
  ngOnInit() {
    // Creating the bar chart on component initialization
    this.createbarChart();
  }

  /**
   * Fetches latest exchanges from the service and creates a bar chart.
   */
  createbarChart() {
    // Subscribing to the service's getLatestExchanges method
    this.service.getLatestExchanges().subscribe((res: any) => {
      // Logging the response for debugging
      console.log(res);

      // Extracting rates response, defaulting to an empty object if undefined
      const ratesResponse = res.rates ?? {};
      // Logging the rates response for debugging
      console.log(ratesResponse);

      // Using Object.keys to get an array of currency names (labels).
      this.coinName = Object.keys(ratesResponse);

      // Using Object.values to get an array of coin prices (data).
      this.coinPrice = Object.values(ratesResponse);

      // Logging currency names and coin prices for debugging
      // console.log(this.coinName);
      // console.log(this.coinPrice);

      // Creating a new Chart.js instance for rendering the bar chart
      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.coinName,
          datasets: [
            {
              label: 'Coin Price',
              data: this.coinPrice,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'green'
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            colors: {
              enabled: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });
  }
}
