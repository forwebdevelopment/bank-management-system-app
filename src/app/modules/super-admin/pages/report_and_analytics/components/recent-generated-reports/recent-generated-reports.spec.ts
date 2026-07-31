import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RecentGeneratedReports } from './recent-generated-reports';

describe('RecentReportsTableComponent', () => {
  let component: RecentGeneratedReports;
  let fixture: ComponentFixture<RecentGeneratedReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentGeneratedReports ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatTableModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentGeneratedReports);
    component = fixture.componentInstance;
    // Trigger ngOnInit which populates mock data database and updates display rows window
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with a mock database of 125 total items', () => {
    expect(component.allReports.length).toBe(125);
    expect(component.totalItems).toBe(125);
  });

  it('should slice data correctly for the first page on load', () => {
    expect(component.currentPage).toBe(1);
    expect(component.pageSize).toBe(10);
    expect(component.pagedDataSource.length).toBe(10);
    // Row 1 item should append standard programmatic index labels
    expect(component.pagedDataSource[0].name).toContain('Row_1');
  });

  it('should calculate the total number of pages based on row size', () => {
    expect(component.totalPages).toBe(13); // 125 / 10 = 12.5 rounded up to 13
  });

  it('should compute indices correctly for showing entries info', () => {
    // Page 1 view index limits validation
    expect(component.startIndex).toBe(1);
    expect(component.endIndex).toBe(10);

    // Transition state frame to middle window page 3
    component.goToPage(3);
    expect(component.startIndex).toBe(21);
    expect(component.endIndex).toBe(30);
  });

  it('should handle tail-end remaining rows safely on the last page', () => {
    // Navigate to page 13
    component.goToPage(13);
    expect(component.startIndex).toBe(121);
    expect(component.endIndex).toBe(125); // Safely clips at maximum items array size length limit
    expect(component.pagedDataSource.length).toBe(5); // Tail records remainder
  });

  it('should update state grid parameters and reset index pointers when row page size overrides occur', () => {
    // Shift layout view rendering page configuration profile limit to 25 items per page window
    component.onPageSizeChange(25);
    
    expect(component.pageSize).toBe(25);
    expect(component.currentPage).toBe(1); // Confirm active index falls back to start index panel boundary
    expect(component.pagedDataSource.length).toBe(25);
    expect(component.totalPages).toBe(5); // 125 / 25 = exactly 5 structural navigation cards
  });

  it('should block navigating out of lower and upper bound index page steps', () => {
    // Attempting an invalid backward skip steps step jump bounds check
    component.goToPage(0);
    expect(component.currentPage).toBe(1); // Ignores request and holds baseline

    // Attempting an invalid index overreach boundary step jump bounds check
    component.goToPage(99);
    expect(component.currentPage).toBe(1); // Holds step frame baseline safely
  });
});
