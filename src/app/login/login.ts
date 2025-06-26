import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Api } from '../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Footer, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private api: Api,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  loginUser() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      console.log(email, password);

      this.api.loginApi({ email, password }).subscribe({
        next: (res: any) => {
          console.log('Login successfull');
          console.log(res);
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('user', JSON.stringify(res.user));
          this.loginForm.reset();
          if (res.user.role === 'User') {
            this.router.navigateByUrl('/');
          }
          else if(res.user.role==='Admin'){
            this.router.navigateByUrl('/admin')
          }
        },
        error: (reason: any) => {
          alert(reason.error);
        },
      });
    } else {
      alert('Invalid form!!!!');
    }
  }
}
