import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBanner } from './dashboard-banner';

describe('DashboardBanner', () => {
  let component: DashboardBanner;
  let fixture: ComponentFixture<DashboardBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
