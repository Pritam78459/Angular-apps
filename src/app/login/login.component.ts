import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { RouterModule } from '@angular/router';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataGathered = ""
  constructor(private Auth : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;


    this.Auth.getUserDetails(username,password).subscribe(data => {
      if(data.success) {
        this.router.navigate(['admin'])
        this.Auth.setLoggedIn(true)
      }
      else {
        window.alert(data.message)
        this.router.navigate(['login'])
        this.Auth.setLoggedIn(false)
      }
    })
    console.log(username,password)
    this.dataGathered = "Data Submitted" 
  }

}
