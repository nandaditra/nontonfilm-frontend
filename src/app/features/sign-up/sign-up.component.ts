import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
   imageSign = "../../../assets/images/sign-up/jumanji.jpg"

   signUpForm = new FormGroup({
     name: new FormControl('', [Validators.required]),
     email: new FormControl('',[Validators.required, Validators.email]),
     password: new FormControl('', [Validators.required]),
     confirmPassword: new FormControl('',[Validators.required])
   })

   constructor(
     private authService: AuthService, 
     private router: Router
     ){
   }

   registerWithEmailandPassword(){
      const userData = Object.assign({email: this.signUpForm.value.email, password: this.signUpForm.value.password});     
      this.authService.registerWithEmailAndPassword(userData).then((res: any)=> {
        this.router.navigateByUrl('login')
      }).catch((error:any)=> {
        console.log(error)
      })
    }
}
