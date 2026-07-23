import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleFooter } from './role-footer';

describe('RoleFooter', () => {
  let component: RoleFooter;
  let fixture: ComponentFixture<RoleFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
