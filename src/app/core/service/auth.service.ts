import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private userService: UserService
  ) { }

  async registerWithEmailAndPassword(user: {email:string, password:string}){
    return await this.auth.createUserWithEmailAndPassword(user.email, user.password)
  }

  async signWithEmailAndPassword(user: {email:string, password:string}){
    this.userService.setUser(user);
    return await this.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  async signOut(){
    this.userService.outUser();
    return this.auth.signOut().then(()=> {
      window.alert("You have logout")
    })
  }
}
