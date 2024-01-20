import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLoginPageComponent } from './employee-login-page.component';

describe('EmployeeLoginPageComponent', () => {
  let component: EmployeeLoginPageComponent;
  let fixture: ComponentFixture<EmployeeLoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeLoginPageComponent]
    });
    fixture = TestBed.createComponent(EmployeeLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
