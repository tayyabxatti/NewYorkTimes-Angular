import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: String = '';

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onRegister(registerForm: FormGroup) {
    if (registerForm.invalid) {
      this.errorMessage = "All fields are required.";
      return;
    }
    
    let user: User =
     { email: registerForm.value.email,
       password: registerForm.value.password 
      };
    this.authService
      .register(user)
      .subscribe(data=>{
        if(data){
          let token = data['access_token'];
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', JSON.stringify(token));
          this.router.navigate(['dashboard']);
        }else{
          this.errorMessage = data.error['message'];
        }          
        });
  }
}
