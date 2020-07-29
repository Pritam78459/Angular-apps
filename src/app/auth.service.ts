import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface myData {
  success : boolean,
  message : string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LoggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value : boolean) {
    this.LoggedInStatus = value
    
  }

  get isLoggedIn() {
    return this.LoggedInStatus
  }

  

  getUserDetails(username,password) {
    // post this data to the api server and return these data if it is correct

    return this.http.post<myData>('/api/auth.php', {
      username,
      password
    })
  }
}
