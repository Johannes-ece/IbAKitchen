import { Component } from '@angular/core';

@Component({
  selector: 'app-summarize',
  templateUrl: './summarize.component.html',
  styleUrls: ['./summarize.component.scss']
})
export class SummarizeComponent {
  // Assume you have a service to retrieve meal data, replace it with your actual service
  // For demonstration purposes, I'll use a dummy data array
  mealData = [
    { day: 'Monday', type: 'Meat', count: 5 },
    { day: 'Monday', type: 'Vegetarian', count: 3 },
    { day: 'Tuesday', type: 'Meat', count: 8 },
    { day: 'Tuesday', type: 'Vegetarian', count: 4 },
    // Add more data as needed
  ];

  // Function to get the meal count for a specific day and type
  getMealCount(day: string, type: string): number {
    const meal = this.mealData.find(item => item.day === day && item.type === type);
    return meal ? meal.count : 0;
  }
}
