import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankInformation } from './bank-information';

describe('BankInformation', () => {
  let component: BankInformation;
  let fixture: ComponentFixture<BankInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankInformation],
    }).compileComponents();

    fixture = TestBed.createComponent(BankInformation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
