import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResentSettingChanges } from './resent-setting-changes';

describe('ResentSettingChanges', () => {
  let component: ResentSettingChanges;
  let fixture: ComponentFixture<ResentSettingChanges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResentSettingChanges],
    }).compileComponents();

    fixture = TestBed.createComponent(ResentSettingChanges);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
