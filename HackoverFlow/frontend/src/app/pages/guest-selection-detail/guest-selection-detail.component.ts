import { Component } from '@angular/core';
interface WeeklyMealPlan {
  [day: string]: {
    [mealType: string]: string;
  };
}
@Component({
  selector: 'app-guest-selection-detail',
  templateUrl: './guest-selection-detail.component.html',
  styleUrls: ['./guest-selection-detail.component.scss']
})
export class GuestSelectionDetailComponent { 
  day:any;
  meal:any;
  startPipelineWithFile: boolean = false;
days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
mealTypes = ['meat', 'vegan', 'vegi'];

weekly_meal_plan: WeeklyMealPlan = {
  'Monday': {'meat': 'sfnnldvb', 'vegan': 'dmn', 'vegi': 'dvdnlv'},
  'Tuesday': {'meat': 'dvnd', 'vegan': 'VNKJDB', 'vegi': 'vdnlkn'},
  'Wednesday': {'meat': 'vdmn', 'vegan': 'd,vn', 'vegi': 'dfhuihug'},
  'Thursday': {'meat': 'vn ', 'vegan': 'kdlngvnflk', 'vegi': 'dhgh'},
  'Friday': {'meat': 'vdn', 'vegan': 'dBVF', 'vegi': 'SDbvbf'}
}; 

selectedMeals: Record<string, Record<string, string>> = {};

constructor() {
  this.days.forEach((day) => {
    this.selectedMeals[day] = {};
    this.mealTypes.forEach((mealType) => {
      this.selectedMeals[day][mealType] = this.weekly_meal_plan[day][mealType][0]; // Default to the first meal
    });
  });
}
getMealTypes(day: string): string[] {
  return Object.keys(this.weekly_meal_plan[day]);
}
changeDay(file: any) {
  this.day = file;
  
}
changeMeal(file: any) {
  this.meal = file;
  
}
}
