import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarchartComponent } from './barchart.component';
import { Chart } from 'chart.js';
import { SharedService } from '../../shared/services/shared.service';
import { MockSharedService } from '../../shared/services/shared.service.mock'; // Import the mock service
import { of } from 'rxjs';

// Mocking Chart.js
jest.mock('chart.js', () => ({
  Chart: jest.fn(),
  registerables: jest.fn(),
}));

/**
 * Mocked shared service for testing purposes.
 */
class MockSharedServiceTest extends MockSharedService {
  // Add any additional methods or properties needed for testing
}

describe('BarchartComponent', () => {
  let component: BarchartComponent;
  let fixture: ComponentFixture<BarchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarchartComponent],
      providers: [{ provide: SharedService, useClass: MockSharedServiceTest }],
    });

    fixture = TestBed.createComponent(BarchartComponent);
    component = fixture.componentInstance;
  });

  /**
   * Verifies that the component is created successfully.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Verifies that the service is called and a chart is created on component initialization.
   */
  it('should call service and create chart on ngOnInit', () => {
    // Trigger the ngOnInit lifecycle hook
    component.ngOnInit();

    // Verify that the component properties are correctly populated
    expect(component.coinName).toEqual(['USD', 'EUR', 'GBP']);
    expect(component.coinPrice).toEqual([1.0, 0.85, 0.75]);

    // Verify that the Chart constructor was called with the expected parameters
    expect(Chart).toHaveBeenCalledWith('canvas', {
      type: 'bar',
      data: {
        labels: component.coinName,
        datasets: [
          {
            label: 'Coin Price',
            data: component.coinPrice,
            borderWidth: 1,
            borderColor: 'green',
            backgroundColor: 'green',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          colors: {
            enabled: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
});
