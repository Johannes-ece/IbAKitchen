import { Component, OnInit } from '@angular/core';
import { KitchenServiceAmount } from 'path-to-your-kitchen-amount-service';  // Update the path

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {
  // Assuming you have a data structure like this (update accordingly)
  employeeMealsData: any[] = [
    { id: 1, name: 'Employee 1', Monday: 3, Tuesday: 2, Wednesday: 1, Thursday: 3, Friday: 2 },
    // ... (other employees)
  ];

  mealSum: any = {};

  constructor(private kitchenServiceAmount: KitchenServiceAmount) {}

  ngOnInit(): void {
    // Fetch additional data if needed
    this.kitchenServiceAmount.getEmployees().subscribe(
      (employees) => {
        // Process additional data if needed
      },
      (error) => {
        console.error('Error fetching employees', error);
      }
    );

    // Calculate meal sum
    this.calculateMealSum();
  }

  calculateMealSum(): void {
    // Initialize meal sum
    this.mealSum = {};

    // Iterate through each day of the week
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    daysOfWeek.forEach((day) => {
      // Calculate sum for each day
      this.mealSum[day] = this.employeeMealsData.reduce((sum, employee) => sum + (employee[day] || 0), 0);
    });
  }
}