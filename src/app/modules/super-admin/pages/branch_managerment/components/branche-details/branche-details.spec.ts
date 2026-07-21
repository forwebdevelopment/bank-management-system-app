import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrancheDetails } from './branche-details';

describe('BrancheDetails', () => {
  let component: BrancheDetails;
  let fixture: ComponentFixture<BrancheDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrancheDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(BrancheDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
