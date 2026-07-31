import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAndAnalyticsLayout } from './report-and-analytics-layout';

describe('ReportAndAnalyticsLayout', () => {
  let component: ReportAndAnalyticsLayout;
  let fixture: ComponentFixture<ReportAndAnalyticsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportAndAnalyticsLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportAndAnalyticsLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
