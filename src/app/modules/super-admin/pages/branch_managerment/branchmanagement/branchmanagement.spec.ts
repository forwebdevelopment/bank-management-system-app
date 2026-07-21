import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Branchmanagement } from './branchmanagement';

describe('Branchmanagement', () => {
  let component: Branchmanagement;
  let fixture: ComponentFixture<Branchmanagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Branchmanagement],
    }).compileComponents();

    fixture = TestBed.createComponent(Branchmanagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
