import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSelectionDetailComponent } from './guest-selection-detail.component';

describe('GuestSelectionDetailComponent', () => {
  let component: GuestSelectionDetailComponent;
  let fixture: ComponentFixture<GuestSelectionDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestSelectionDetailComponent]
    });
    fixture = TestBed.createComponent(GuestSelectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
