/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardComponent } from './dashboard.component';

/**
 * Test suite for the DashboardComponent.
 */
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  /**
   * Asynchronous setup before each test.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  }));

  /**
   * Synchronous setup before each test.
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Verifies that the component is created successfully.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Tests the behavior of the `edit` method.
   */
  it('should toggle isHidden property on edit', () => {
    const initialValue = component.isHidden;
    component.edit();
    expect(component.isHidden).toBe(!initialValue);
  });

  /**
   * Tests the behavior of the `lineVisibility` method.
   */
  it('should toggle notVisible property on lineVisibility', () => {
    const initialValue = component.notVisible;
    component.lineVisibility();
    expect(component.notVisible).toBe(!initialValue);
  });

  /**
   * Tests the behavior of the `barVisibility` method.
   */
  it('should toggle notDisplay property on barVisibility', () => {
    const initialValue = component.notDisplay;
    component.barVisibility();
    expect(component.notDisplay).toBe(!initialValue);
  });
});
