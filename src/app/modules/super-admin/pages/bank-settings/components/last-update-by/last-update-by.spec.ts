import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastUpdateBy } from './last-update-by';

describe('LastUpdateBy', () => {
  let component: LastUpdateBy;
  let fixture: ComponentFixture<LastUpdateBy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastUpdateBy],
    }).compileComponents();

    fixture = TestBed.createComponent(LastUpdateBy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
