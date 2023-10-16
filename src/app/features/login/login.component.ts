import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
       email: new FormControl(''),
       password: new FormControl(''),
    })

    onSubmit() {
      console.log(this.loginForm.value);
    }
}
