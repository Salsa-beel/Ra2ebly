import { ComponentFixture, TestBed } from '@angular/core/testing';
import { linechartComponent } from './linechart.component';
import { SharedService } from 'src/app/shared/services/shared.service';
import { of } from 'rxjs';

/**
 * Test suite for the LinechartComponent.
 */
describe('LinechartComponent', () => {
  let component: linechartComponent;
  let fixture: ComponentFixture<linechartComponent>;
  let sharedServiceMock: jest.Mocked<SharedService>;

  /**
   * Setup tasks to be performed before each test.
   */
  beforeEach(() => {
    // Mocking the SharedService
    sharedServiceMock = {
      getTimeSeriesExchanges: jest.fn(),
    } as unknown as jest.Mocked<SharedService>;

    // Configuring the testing module
    TestBed.configureTestingModule({
      declarations: [linechartComponent],
      providers: [{ provide: SharedService, useValue: sharedServiceMock }],
    });

    // Creating an instance of the component
    fixture = TestBed.createComponent(linechartComponent);
    component = fixture.componentInstance;
  });

  /**
   * Test case: should create
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Test case: should call service and create chart on ngOnInit
   */
  it('should call service and create chart on ngOnInit', () => {
    // Mock response from the service
    const mockResponse = { rates: { '2023-11-14': { EUR: 1.23 }, '2023-11-15': { EUR: 1.25 } } };
    sharedServiceMock.getTimeSeriesExchanges.mockReturnValue(of(mockResponse));

    // Triggering ngOnInit
    component.ngOnInit();

    // Assertions
    expect(sharedServiceMock.getTimeSeriesExchanges).toHaveBeenCalled();
    expect(component.Dates.length).toBeGreaterThan(0);
    expect(component.ExchgRate.length).toBeGreaterThan(0);

    // Additional logging for debugging
    console.log('Dates:', component.Dates);
    console.log('ExchgRate:', component.ExchgRate);

  });



});
