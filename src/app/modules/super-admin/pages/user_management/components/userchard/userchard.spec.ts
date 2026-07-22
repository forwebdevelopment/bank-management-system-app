import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userchard } from './userchard';

describe('Userchard', () => {
  let component: Userchard;
  let fixture: ComponentFixture<Userchard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userchard],
    }).compileComponents();

    fixture = TestBed.createComponent(Userchard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
