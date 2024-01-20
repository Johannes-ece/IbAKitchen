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
  Monday: any;
  Tuesday: any;
  Wedensday: any;
  ThursDay: any;
  Friday: any;
  mealPlanDetail : any;

  constructor(private mealPlan: MealPlanServiceService) {}

  ngOnInit(): void {
    this.dags$ = this.mealPlan.getAll();
    this.files$ = this.mealPlan.getAll();
    }

    changeDag(dag: any) {
      this.selectedDag = dag;
      
    }
    changeMonday(file: any) {
      this.Monday = file;
      
    }
    changeTuesday(file: any) {
      this.Tuesday = file;
      
    }
    changeWednesday(file: any) {
      this.Wedensday = file;
      
    }
    changeThursday(file: any) {
      this.ThursDay = file;
      
    }
    changeFriday(file: any) {
      this.Friday = file;
    }

    submitPlan(){
      { 
        this.mealPlanDetail = {"friday": this.Friday, "monday": this.selectedDag}; 
      
      this.mealPlan.create(this.mealPlanDetail).subscribe((value: any) => {
             
              
              console.log(this.mealPlanDetail);
              // TODO dont subscribe in a subscribe q_q but for now it can work
            } );
         
      }
    }
}
