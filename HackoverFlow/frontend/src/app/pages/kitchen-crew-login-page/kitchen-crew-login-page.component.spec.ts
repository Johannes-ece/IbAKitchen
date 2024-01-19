import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenCrewLoginPageComponent } from './kitchen-crew-login-page.component';

describe('KitchenCrewLoginPageComponent', () => {
  let component: KitchenCrewLoginPageComponent;
  let fixture: ComponentFixture<KitchenCrewLoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenCrewLoginPageComponent]
    });
    fixture = TestBed.createComponent(KitchenCrewLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
