import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }
  
  public username: string;
  public password: string;

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        (data) => {
          console.log(data);
        },
        error => console.log(error)
      )
  }
  ngOnInit() {
    
  }

}
