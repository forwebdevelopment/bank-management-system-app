import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInterest } from './edit-interest';

describe('EditInterest', () => {
  let component: EditInterest;
  let fixture: ComponentFixture<EditInterest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditInterest],
    }).compileComponents();

    fixture = TestBed.createComponent(EditInterest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
