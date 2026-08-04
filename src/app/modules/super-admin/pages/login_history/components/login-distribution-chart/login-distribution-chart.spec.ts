import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDistributionChart } from './login-distribution-chart';

describe('LoginDistributionChart', () => {
  let component: LoginDistributionChart;
  let fixture: ComponentFixture<LoginDistributionChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginDistributionChart],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginDistributionChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
