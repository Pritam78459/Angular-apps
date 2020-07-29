import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface isLoggedIn {
  status : boolean
}
interface logoutStatus {
  success : boolean
}

interface myData {
  message : string,
  success : boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<myData>('/api/database.php')
  }

  isLoggedIn()  {

    return this.http.get<isLoggedIn>('/api/isLoggedin.php')
  }
  logout() {
    return this.http.get<logoutStatus>('/api/logout.php')
  }
}
