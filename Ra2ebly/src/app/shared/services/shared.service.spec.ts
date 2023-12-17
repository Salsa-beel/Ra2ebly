import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';

/**
 * Test suite for the SharedService.
 */
describe('SharedService', () => {
  let service: SharedService;
  let httpTestingController: HttpTestingController;

  /**
   * Set up the test module before each test.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SharedService],
    });

    // Inject the service and the HttpTestingController
    service = TestBed.inject(SharedService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  /**
   * Clean up resources after each test.
   */
  afterEach(() => {
    httpTestingController.verify();
  });

  /**
   * Test case: Should create an instance of SharedService.
   */
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Test case: Should make a GET request to get the latest exchanges.
   */
  it('should make a GET request to get latest exchanges', () => {
    // Subscribe to the service method
    service.getLatestExchanges().subscribe();

    // Expect one HTTP request to the BarChartURL
    const req = httpTestingController.expectOne(service['BarChartURl']); // Use string indexing for private members
    expect(req.request.method).toEqual('GET');

    // Provide a mock response as needed
    req.flush({});
  });

  /**
   * Test case: Should make a GET request to get time series exchanges.
   */
  it('should make a GET request to get time series exchanges', () => {
    // Subscribe to the service method
    service.getTimeSeriesExchanges().subscribe();

    // Expect one HTTP request to the LineChartURL
    const req = httpTestingController.expectOne(service['LineChartUrl']); // Use string indexing for private members
    expect(req.request.method).toEqual('GET');

    // Provide a mock response as needed
    req.flush({});
  });
});
