import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { User } from 'src/app/data/interfaces/user';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user: User = {
    email: '', 
    password: ''}
  isAuthenticated: boolean = false

  constructor(
    private authUser:AuthService,
    private userService:UserService,
    private route:Router){
  }

  ngOnInit():void {
    this.getUserData()
  }

  getUserData(){
     if(this.userService.getUser()) {
        this.user = this.userService.getUser()
        this.isAuthenticated = true;
     }
  }

  logOut(){
     this.isAuthenticated = false;
     this.route.navigateByUrl('login');
     this.authUser.signOut();
  }
}
