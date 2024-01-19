import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen-menu',
  templateUrl: './kitchen-menu.component.html',
  styleUrls: ['./kitchen-menu.component.scss']
})
export class KitchenMenuComponent {
  mealOptions: string[] = ['Meat Option', 'Vegetarian Option', 'Other Option']; // Add other meal options as needed

  meals: any = {
    Monday: { 'Meat Option': '', 'Vegetarian Option': '', 'Other Option': '' },
    Tuesday: { 'Meat Option': '', 'Vegetarian Option': '', 'Other Option': '' },
    Wednesday: { 'Meat Option': '', 'Vegetarian Option': '', 'Other Option': '' },
    Thursday: { 'Meat Option': '', 'Vegetarian Option': '', 'Other Option': '' },
    Friday: { 'Meat Option': '', 'Vegetarian Option': '', 'Other Option': '' }
  };
}
