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
  selector: 'app-register',
  imports: [Footer, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private api: Api ,private router:Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  userRegister() {
    if (this.registerForm.valid) {
      const username = this.registerForm.value.username;
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;

      console.log('register form values', username, email, password);
      this.api.registerApi({ username, email, password }).subscribe({
        // next always contain success response (200 series  status)
        next: (res: any) => {
          alert(`${username} Registered successfully`);
          this.router.navigateByUrl('/login')
        },
        // error contains failed response(400,500 series errors)
       error: (reason: any) => {
  console.log("Register error:", reason);
  const msg =
    reason?.error?.message || reason?.error || 'Registration failed!';
  alert(msg);
}

      })
    } else {
      alert('Invalid form !!!');
    }
  }
}
