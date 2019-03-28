import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private Auth : AuthService) { }

  ngOnInit() {
  }
  
  loginUser(event){
    event.preventDefault()
    const target=event.target
    const username=target.querySelector('#username').value
    const password=target.querySelector('#userpassword').value

    this.Auth.getUserDetails(username, password)
    console.log(username, password)
  }

}
