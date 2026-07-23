import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDetials } from './role-detials';

describe('RoleDetials', () => {
  let component: RoleDetials;
  let fixture: ComponentFixture<RoleDetials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleDetials],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleDetials);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
