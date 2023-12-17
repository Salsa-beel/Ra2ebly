import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Service for fetching exchange rates and time series data.
 */
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  /**
   * The start date for time series data.
   */
  private startDate = '2023-11-14';

  /**
   * The end date for time series data.
   */
  private endDate = '2023-12-14';

  /**
   * The base currency for exchange rates.
   */
  private baseCurrency = 'USD';

  /**
   * The array of currency symbols.
   * Add the currency symbols you need, separated by commas.
   */
  private symbols = ['EUR', 'EGP', 'GBP'];

  /**
   * Constructor for SharedService.
   *
   * @param http The HttpClient for making HTTP requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * HTTP options for API requests.
   */
  httpOptions = {
    Headers: new HttpHeaders({
      'Content-type': 'application/json',
      'apikey': 'z7qTriaqM7bqUm69lF67Nem5pPMOC5Sx',
    })
  };

  /**
   * The URL for fetching the latest exchange rates.
   */
  private latestRatesUrl = 'https://api.apilayer.com/exchangerates_data/latest';

  /**
   * The URL for fetching exchange rates for the bar chart.
   */
  private BarChartURl = `${this.latestRatesUrl}?base=${this.baseCurrency}&symbols=${this.symbols.join(',')}`;

  /**
   * Fetches the latest exchange rates.
   *
   * @returns An observable of the latest exchange rates.
   */
  getLatestExchanges() {
    return this.http.get(this.BarChartURl, { headers: this.httpOptions.Headers });
  }

  /**
   * The base URL for fetching time series data.
   */
  private TimeSeriesBaseUrl = 'https://api.apilayer.com/exchangerates_data/timeseries';

  /**
   * The URL for fetching time series data for the line chart.
   */
  private LineChartUrl = `${this.TimeSeriesBaseUrl}?start_date=${this.startDate}&end_date=${this.endDate}&base=${this.baseCurrency}&symbols=${this.symbols[0]}`;

  /**
   * Fetches time series exchange data.
   *
   * @returns An observable of time series exchange data.
   */
  getTimeSeriesExchanges() {
    return this.http.get(this.LineChartUrl, { headers: this.httpOptions.Headers });
  }
}
