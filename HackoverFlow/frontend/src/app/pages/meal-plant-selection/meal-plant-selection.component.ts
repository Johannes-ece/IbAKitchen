import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { KitchenService } from 'src/app/core/services/kitchen.service';
import { MealPlanServiceService } from 'src/app/core/services/meal-plan-service.service';
import { UserLoginService } from 'src/app/core/services/user-login.service';

interface MealType {
  [key: string]: string;
}

// Define an interface for the weekly meal plan
interface WeeklyMealPlan {
  [day: string]: MealType;
}

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
  salat: any;
  mealPlanDetail: any;
  preparedPlan$: Observable<any>;

  // Placeholder for missing properties
  selectedWeek: any;

  constructor(private mealPlan: MealPlanServiceService, private shared: UserLoginService) {}

  ngOnInit(): void {
    this.dags$ = this.mealPlan.getAll();
    this.files$ = this.mealPlan.getAll();
    this.preparedPlan$ = this.mealPlan.get();
    console.log(this.preparedPlan$);
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

  submitPlan() {
    this.mealPlanDetail = {
      "friday": this.Friday,
      "monday": this.Monday,
      "tuesday": this.Tuesday,
      "wednesday": this.Wedensday,
      "thursday": this.ThursDay,
      // "salat": this.salat,
      // "username": this.shared.getUsername
    };

    this.mealPlan.create(this.mealPlanDetail).subscribe((value: any) => {
      console.log(this.mealPlanDetail);
      console.log(this.shared.getUsername);
      // TODO don't subscribe in a subscribe, but for now, it can work
    });
  }

  // Placeholder for missing method
  changeWeek(week: any) {
    // Implement the logic for changing the week
    this.selectedWeek = week;
  }
}
