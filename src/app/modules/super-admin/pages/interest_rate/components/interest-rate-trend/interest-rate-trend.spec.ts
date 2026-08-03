import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestRateTrend } from './interest-rate-trend';

describe('InterestRateTrend', () => {
  let component: InterestRateTrend;
  let fixture: ComponentFixture<InterestRateTrend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestRateTrend],
    }).compileComponents();

    fixture = TestBed.createComponent(InterestRateTrend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
