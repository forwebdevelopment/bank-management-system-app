import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleHeader } from './role-header';

describe('RoleHeader', () => {
  let component: RoleHeader;
  let fixture: ComponentFixture<RoleHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
