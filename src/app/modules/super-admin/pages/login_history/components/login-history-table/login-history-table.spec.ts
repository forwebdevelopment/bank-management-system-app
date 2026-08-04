import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHistoryTable } from './login-history-table';

describe('LoginHistoryTable', () => {
  let component: LoginHistoryTable;
  let fixture: ComponentFixture<LoginHistoryTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginHistoryTable],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginHistoryTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
