import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAndPermission } from './role-and-permission';

describe('RoleAndPermission', () => {
  let component: RoleAndPermission;
  let fixture: ComponentFixture<RoleAndPermission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleAndPermission],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleAndPermission);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
