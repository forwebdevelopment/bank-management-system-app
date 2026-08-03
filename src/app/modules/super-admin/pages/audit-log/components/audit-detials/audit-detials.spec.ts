import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditDetials } from './audit-detials';

describe('AuditDetials', () => {
  let component: AuditDetials;
  let fixture: ComponentFixture<AuditDetials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditDetials],
    }).compileComponents();

    fixture = TestBed.createComponent(AuditDetials);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
