import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [Footer,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm:FormGroup;
  constructor(private fb:FormBuilder){
this.loginForm=this.fb.group({
  
})
  }

}
