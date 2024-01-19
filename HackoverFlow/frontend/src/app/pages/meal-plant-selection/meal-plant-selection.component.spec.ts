import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlantSelectionComponent } from './meal-plant-selection.component';

describe('MealPlantSelectionComponent', () => {
  let component: MealPlantSelectionComponent;
  let fixture: ComponentFixture<MealPlantSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealPlantSelectionComponent]
    });
    fixture = TestBed.createComponent(MealPlantSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
