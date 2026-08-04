import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsPanel } from './user-details-panel';

describe('UserDetailsPanel', () => {
  let component: UserDetailsPanel;
  let fixture: ComponentFixture<UserDetailsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailsPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
