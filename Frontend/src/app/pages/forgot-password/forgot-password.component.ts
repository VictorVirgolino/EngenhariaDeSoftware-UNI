import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  public formForgot: FormGroup;
  public sucessful: boolean;
  public loading: boolean;

  constructor(private router: Router) {
    this.sucessful = true;
    this.loading = false;

    this.formForgot = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
    });
  }

  ngOnInit(): void {}

  sendEmail() {
    
  }

  isFormFieldInvalid(field: string): boolean {
    const ctrl = this.formForgot.get(field);
    return !ctrl.valid && ctrl.touched && ctrl.dirty;
  }

  hasError(field: string, error: string): boolean {
    const ctrl = this.formForgot.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
}
