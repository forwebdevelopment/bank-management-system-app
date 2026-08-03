import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAuditMonitor } from './live-audit-monitor';

describe('LiveAuditMonitor', () => {
  let component: LiveAuditMonitor;
  let fixture: ComponentFixture<LiveAuditMonitor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveAuditMonitor],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveAuditMonitor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
