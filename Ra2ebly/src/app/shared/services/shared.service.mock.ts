import { Observable, of } from 'rxjs';

/**
 * MockSharedService class for testing purposes.
 */
export class MockSharedService {
  /**
   * Mock implementation of the getLatestExchanges method.
   * Returns an observable with mock exchange rates.
   *
   * @returns {Observable<any>} Observable with mock exchange rates.
   */
  getLatestExchanges(): Observable<any> {
    return of({ rates: { USD: 1.0, EUR: 0.85, GBP: 0.75 } });
  }
}
