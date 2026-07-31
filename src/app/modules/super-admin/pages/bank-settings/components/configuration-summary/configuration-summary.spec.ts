import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationSummary } from './configuration-summary';

describe('ConfigurationSummary', () => {
  let component: ConfigurationSummary;
  let fixture: ComponentFixture<ConfigurationSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigurationSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
