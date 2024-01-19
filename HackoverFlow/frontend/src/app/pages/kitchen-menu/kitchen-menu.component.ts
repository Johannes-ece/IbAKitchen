import { Component } from '@angular/core';
import { KitchenService } from 'src/app/core/services/kitchen.service';

@Component({
  selector: 'app-kitchen-menu',
  templateUrl: './kitchen-menu.component.html',
  styleUrls: ['./kitchen-menu.component.scss']
})
export class KitchenMenuComponent {
  constructor(private kitchenService: KitchenService) {}
  menu = {
    "monday": {
      "mealtype": {
        "meat": '',
        "vegetarian": '',
        "vegan": ''
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

    this.kitchenService.create(menuData)
    .subscribe((value: any) => {
      console.log('Form submitted with data:', menuData);
    } );
    // Handle form submission logic here
    
    // You can perform additional logic, like sending the data to a server
  }
  menuData(menuData: any) {
    throw new Error('Method not implemented.');
  }
}
