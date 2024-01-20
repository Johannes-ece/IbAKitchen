import { Component } from '@angular/core';
import { UserLoginService } from 'src/app/core/services/user-login.service';

@Component({
  selector: 'app-employee-login-page',
  templateUrl: './employee-login-page.component.html',
  styleUrls: ['./employee-login-page.component.scss']
})
export class EmployeeLoginPageComponent {

  constructor(private loginService: UserLoginService) {}
  username: string = '';
  userid: string = '';
  model: any = {};

  login(): void {
    // Assuming successful login
    this.loginService.login(this.username, this.userid);
    console.log(this.userid,this.username)
    console.log('Submitted:', this.model);
  }
}
