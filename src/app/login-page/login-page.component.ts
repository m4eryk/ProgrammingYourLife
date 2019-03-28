import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private Auth : AuthService,
              private router : Router) { }

  ngOnInit() {
  }
  
  loginUser(event){
    event.preventDefault()
    const target=event.target
    const username=target.querySelector('#username').value
    const password=target.querySelector('#userpassword').value

    this.Auth.getUserDetails(username, password).subscribe(data => {
      if (data.success){
          this.router.navigate(['admin'])
          this.Auth.setLoggedIn(true)
      }
      else{
        window.alert(data.message)
      }
    })
    console.log(username, password)
  }

}
