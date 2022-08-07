import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../../classes/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: String = '';

  constructor(private formBuilder: FormBuilder,private authService:AuthService,
              private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login(loginForm: FormGroup) {

    if (loginForm.invalid) {
      this.errorMessage = "Invalid Email or password.";
      return;
    }

    let user: User = { email: loginForm.value.email, password: loginForm.value.password };
    this.
      authService.login(user)
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

