import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNotifications } from './dashboard-notifications';

describe('DashboardNotifications', () => {
  let component: DashboardNotifications;
  let fixture: ComponentFixture<DashboardNotifications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardNotifications],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardNotifications);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
