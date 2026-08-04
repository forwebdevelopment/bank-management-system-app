import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSessionsList } from './active-sessions-list';

describe('ActiveSessionsList', () => {
  let component: ActiveSessionsList;
  let fixture: ComponentFixture<ActiveSessionsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveSessionsList],
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveSessionsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
