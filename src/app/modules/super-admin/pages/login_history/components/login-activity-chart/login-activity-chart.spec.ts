import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginActivityChart } from './login-activity-chart';

describe('LoginActivityChart', () => {
  let component: LoginActivityChart;
  let fixture: ComponentFixture<LoginActivityChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginActivityChart],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginActivityChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
