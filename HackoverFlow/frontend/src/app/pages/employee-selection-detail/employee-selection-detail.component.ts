import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from 'src/app/core/services/user-login.service';

@Component({
  selector: 'app-employee-selection-detail',
  templateUrl: './employee-selection-detail.component.html',
  styleUrls: ['./employee-selection-detail.component.scss']
})
export class EmployeeSelectionDetailComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private shareService : UserLoginService) {
    // Initialize the form with default values or leave empty
    this.myForm = this.fb.group({
      input1: ['', Validators.required], // You can add more validators if needed
      input2: ['', Validators.required]
    });
  }

  // Function to handle form submission
  onSubmit() {
    // Check if the form is valid
    if (this.myForm.valid) {
      // Get the form values
      const inputValue1 = this.myForm.get('input1')?.value;
      const inputValue2 = this.myForm.get('input2')?.value;
      this.shareService.login(inputValue1,inputValue2)
          console.log(inputValue1,inputValue2);

    }
  }
}
