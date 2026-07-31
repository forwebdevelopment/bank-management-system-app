import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSettingLayout } from './bank-setting-layout';

describe('BankSettingLayout', () => {
  let component: BankSettingLayout;
  let fixture: ComponentFixture<BankSettingLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankSettingLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(BankSettingLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
