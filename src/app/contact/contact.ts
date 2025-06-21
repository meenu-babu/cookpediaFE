import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Api } from '../services/api';

@Component({
  selector: 'app-contact',
  imports: [Header, Footer, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  testimonyForm: FormGroup;
  constructor(private fb: FormBuilder, private api: Api) {
    //inject formbuilder for forms and api service for api
    this.testimonyForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  addTestimony() {
    if (this.testimonyForm.valid) {
      const name = this.testimonyForm.value.name;
      const email = this.testimonyForm.value.email;
      const message = this.testimonyForm.value.message;
      console.log(name, email, message);
      this.api.addTestimonyApi({ name, email, message }).subscribe((res) => {
        alert('Testimony added successfully!!!');
      });
    } else {
      alert('invalid form');
    }
  }
}
