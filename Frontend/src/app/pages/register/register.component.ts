import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from '../../models/User';
import {RegisterService} from '../../services/register.service'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public formRegister: FormGroup;
  public successful: boolean;
  public loading: boolean;

  constructor(private router: Router, private registerService: RegisterService, private toastr: ToastrService) {
    this.loading = false;
    this.successful = true;
    this.formRegister = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  ngOnInit(): void {}

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }

  register() {
    let user = new User();
    user.firstName = this.formRegister.get('name').value;
    user.lastName = this.formRegister.get('lastname').value;
    user.email = this.formRegister.get('email').value;
    user.password = this.formRegister.get('password').value;
    this.loading = true;

    this.registerService.registerUser(user).subscribe(() => {
      this.loading = false;
      this.toastr.success('Cadastro Realizado com Sucesso!');
      this.redirectToLogin();
    });

  }

  isFormFieldInvalid(field: string): boolean {
    const ctrl = this.formRegister.get(field);
    return !ctrl.valid && ctrl.touched && ctrl.dirty;
  }

  hasError(field: string, error: string): boolean {
    const ctrl = this.formRegister.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
}
