import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAlert } from './security-alert';

describe('SecurityAlert', () => {
  let component: SecurityAlert;
  let fixture: ComponentFixture<SecurityAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityAlert],
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityAlert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
