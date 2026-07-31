import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickInsights } from './quick-insights';

describe('QuickInsights', () => {
  let component: QuickInsights;
  let fixture: ComponentFixture<QuickInsights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickInsights],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickInsights);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
