import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSelectionDetailComponent } from './employee-selection-detail.component';

describe('EmployeeSelectionDetailComponent', () => {
  let component: EmployeeSelectionDetailComponent;
  let fixture: ComponentFixture<EmployeeSelectionDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeSelectionDetailComponent]
    });
    fixture = TestBed.createComponent(EmployeeSelectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
