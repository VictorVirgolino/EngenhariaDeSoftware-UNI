import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {EmitterService} from '../../services/emitter.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  public loginSuccessful: boolean;
  public loading: boolean;

  constructor(private router: Router, private emitter: EmitterService, private toastr: ToastrService) {
    this.loginSuccessful = true;
    this.loading = false;

    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  redirectToForgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }

  onSubmit(): void {
    let email = this.formLogin.get('email').value;
    let password = this.formLogin.get('password').value;
    this.loading = true;
    let name = email.substring(0, email.lastIndexOf("@"));
    if(name === 'admin'){
      this.loading = false;
      let withAdmin = [{logged: true, admin: true}];
      this.emitter.myValues(withAdmin);
      this.toastr.success(`Entrando em conta admin`);
      this.router.navigate(['/admin']);
      
    }else{
      let withoutAdmin = [{logged: true, admin: false}];
      this.emitter.myValues(withoutAdmin);
      const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
      let firstName = nameCapitalized.substring(0, nameCapitalized.lastIndexOf("."));
      this.toastr.success("Seja Bem vindo ao Uni", `Olá ${firstName}!`);
      this.router.navigate(['/home']);

    }
  }

  isFormFieldInvalid(field: string): boolean {
    const ctrl = this.formLogin.get(field);
    return !ctrl.valid && ctrl.touched && ctrl.dirty;
  }

  hasError(field: string, error: string): boolean {
    const ctrl = this.formLogin.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
}
