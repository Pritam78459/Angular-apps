import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RecordsService} from './records.service'
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'
import {AuthService} from './auth.service'
import {AuthGuard} from './auth.guard'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './user.service' 
import { LogoutComponent } from './logout/logout.component'


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    DataComponent,
    LoginComponent,
    AdminComponent,
    LogoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component:  LogoutComponent
      },
      {
        path : 'admin',
        component: AdminComponent,
        canActivate : [AuthGuard]
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
    
  ],
  providers: [RecordsService,UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
