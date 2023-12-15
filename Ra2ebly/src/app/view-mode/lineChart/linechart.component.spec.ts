/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { linechartComponent } from './linechart.component';

describe('linechartComponent', () => {
  let component: linechartComponent;
  let fixture: ComponentFixture<linechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ linechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(linechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
