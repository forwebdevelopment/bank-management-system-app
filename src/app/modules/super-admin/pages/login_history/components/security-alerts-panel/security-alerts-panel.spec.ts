import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAlertsPanel } from './security-alerts-panel';

describe('SecurityAlertsPanel', () => {
  let component: SecurityAlertsPanel;
  let fixture: ComponentFixture<SecurityAlertsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityAlertsPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityAlertsPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
