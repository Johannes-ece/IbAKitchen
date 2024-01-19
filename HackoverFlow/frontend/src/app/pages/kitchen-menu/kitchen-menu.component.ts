import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen-menu',
  templateUrl: './kitchen-menu.component.html',
  styleUrls: ['./kitchen-menu.component.scss']
})
export class KitchenMenuComponent {
  menu = {
    monday: {
      mealtype: {
        meat: '',
        vegetarian: '',
        vegan: ''
      }
    },
    tuesday: {
      mealtype: {
        meat: '',
        vegetarian: '',
        vegan: ''
      }
    },
    wednesday: {
      mealtype: {
        meat: '',
        vegetarian: '',
        vegan: ''
      }
    },
    thursday: {
      mealtype: {
        meat: '',
        vegetarian: '',
        vegan: ''
      }
    },
    friday: {
      mealtype: {
        meat: '',
        vegetarian: '',
        vegan: ''
      }
    }
  };
  

  weeklySalad: string = '';

  onSubmit(menuData: any) {
    // Handle form submission logic here
    console.log('Form submitted with data:', menuData);
    // You can perform additional logic, like sending the data to a server
  }
}
