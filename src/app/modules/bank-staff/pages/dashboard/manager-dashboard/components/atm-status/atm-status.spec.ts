import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmStatus } from './atm-status';

describe('AtmStatus', () => {
  let component: AtmStatus;
  let fixture: ComponentFixture<AtmStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtmStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(AtmStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
