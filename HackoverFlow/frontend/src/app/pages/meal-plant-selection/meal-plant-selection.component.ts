import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MealPlanServiceService } from 'src/app/core/services/meal-plan-service.service';

@Component({
  selector: 'app-meal-plant-selection',
  templateUrl: './meal-plant-selection.component.html',
  styleUrls: ['./meal-plant-selection.component.scss']
})
export class MealPlantSelectionComponent {
  public dags$: Observable<any>;
  public files$: Observable<any>;
  selectedDag: any;
  selectedFile: any;

  constructor(private mealPlan: MealPlanServiceService) {}

  ngOnInit(): void {
    this.dags$ = this.mealPlan.getAll();
    this.files$ = this.mealPlan.getAll();
    }

    changeDag(dag: any) {
      this.selectedDag = dag;
    }
  
    changeFile(file: any) {
      this.selectedFile = file;
    }
}
