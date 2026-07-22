import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementHeader } from './user-management-header';

describe('UserManagementHeader', () => {
  let component: UserManagementHeader;
  let fixture: ComponentFixture<UserManagementHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserManagementHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(UserManagementHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
