import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDistribution } from './customer-distribution';

describe('CustomerDistribution', () => {
  let component: CustomerDistribution;
  let fixture: ComponentFixture<CustomerDistribution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDistribution],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerDistribution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
