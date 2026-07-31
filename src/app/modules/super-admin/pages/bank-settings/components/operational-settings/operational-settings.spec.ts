import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalSettings } from './operational-settings';

describe('OperationalSettings', () => {
  let component: OperationalSettings;
  let fixture: ComponentFixture<OperationalSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationalSettings],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationalSettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
