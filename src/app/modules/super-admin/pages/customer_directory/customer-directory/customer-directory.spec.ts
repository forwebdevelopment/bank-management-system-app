import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDirectory } from './customer-directory';

describe('CustomerDirectory', () => {
  let component: CustomerDirectory;
  let fixture: ComponentFixture<CustomerDirectory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDirectory],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerDirectory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
