import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestRateSettings } from './interest-rate-settings';

describe('InterestRateSettings', () => {
  let component: InterestRateSettings;
  let fixture: ComponentFixture<InterestRateSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestRateSettings],
    }).compileComponents();

    fixture = TestBed.createComponent(InterestRateSettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
