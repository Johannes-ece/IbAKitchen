import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MealPlanServiceService } from 'src/app/core/services/meal-plan-service.service';
import { UserLoginService } from 'src/app/core/services/user-login.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent {
  employees: any[] = [
    // Your employee data goes here
  ];
  public data: Observable<any>;

  constructor(private mealPlan: MealPlanServiceService,private shared : UserLoginService) {}

  // Dummy data for testing purposes
  // You should replace this with actual data fetched from your service
  ngOnInit() {
    this.employees = [
      { id: 1, name: 'John Doe', selectedOptions: { monday: 'Option1', tuesday: 'Option2', wednesday: 'Option3', thursday: 'Option4', friday: 'Option5' , accounting: '4 meals - 16,52 Euro'} },
      { id: 2, name: 'Jane Doe', selectedOptions: { monday: 'Option2', tuesday: 'Option3', wednesday: 'Option4', thursday: 'Option5', friday: 'Option1' , accounting: '4 meals - 16,52 Euro'} },
      // Add more employees as needed
    ];
    this.data= this.mealPlan.getAllEmpMeal(); 
    console.log(this.data)

  }
}