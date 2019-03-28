import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Data {
  success: boolean,
  message: string
}

@Injectable()
export class AuthService {

  loggedInStatus  = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value:boolean){
    this.loggedInStatus=value; 
  }
  
  get isLoggedIn(){
     return this.loggedInStatus
  }

  getUserDetails(username, password){
    return this.http.post<Data>('/auth.php',{
      username,
      password
    })
  }
}
