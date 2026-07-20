import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPerformance } from './staff-performance';

describe('StaffPerformance', () => {
  let component: StaffPerformance;
  let fixture: ComponentFixture<StaffPerformance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffPerformance],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffPerformance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
