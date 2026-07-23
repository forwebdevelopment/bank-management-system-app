import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionMatric } from './permission-matric';

describe('PermissionMatric', () => {
  let component: PermissionMatric;
  let fixture: ComponentFixture<PermissionMatric>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionMatric],
    }).compileComponents();

    fixture = TestBed.createComponent(PermissionMatric);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
