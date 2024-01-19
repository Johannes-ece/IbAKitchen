import { TestBed } from '@angular/core/testing';

import { MealPlanServiceService } from './meal-plan-service.service';

describe('MealPlanServiceService', () => {
  let service: MealPlanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealPlanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
