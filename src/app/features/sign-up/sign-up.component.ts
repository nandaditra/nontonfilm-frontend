import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
   imageSign = "../../../assets/images/sign-up/jumanji.jpg"

   signUpForm = new FormGroup({
     name: new FormControl(''),
     email: new FormControl(''),
     password: new FormControl(''),
     confirmPassword: new FormControl('')
   })

   onSubmit() {
      console.log(this.signUpForm.value);
   }
}
