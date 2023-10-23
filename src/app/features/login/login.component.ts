import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    //describe img data
    imageLogin='../../../assets/images/login/poster_hellbound.jpg'

    //form login setup
    loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })

    constructor(
      private authService: AuthService,
      private router: Router
    ){

    }

    loginWithEmailAndPassword() {
      const userData = Object.assign({email: this.loginForm.value.email, password: this.loginForm.value.password});
      this.authService.signWithEmailAndPassword(userData).then(()=> {
          this.router.navigateByUrl('home').then(() => {
             window.location.reload();
           });
      }).catch((error:any)=> {
        console.log(error)
      }) 
    }
}
