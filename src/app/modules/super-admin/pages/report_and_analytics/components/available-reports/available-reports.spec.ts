import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableReports } from './available-reports';

describe('AvailableReports', () => {
  let component: AvailableReports;
  let fixture: ComponentFixture<AvailableReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableReports],
    }).compileComponents();

    fixture = TestBed.createComponent(AvailableReports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
