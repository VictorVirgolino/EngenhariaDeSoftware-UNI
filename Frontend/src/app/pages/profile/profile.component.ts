import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import {ProfileService} from '../../services/profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  editUser: FormGroup;
  user: User = new User();

  constructor(private profileService: ProfileService) {
    this.editUser = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [
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

  ngOnInit(): void {
    this.profileService.get().subscribe((data) =>{
      this.user.firstName = data.firstName;
    
    })
  }

  edit() {
    const user = new User();
    user.firstName = this.editUser.get('name').value;
    user.lastName = this.editUser.get('lastName').value;
    user.email = this.editUser.get('email').value;
    user.password = this.editUser.get('password').value;
  }

  isFormFieldInvalid(field: string): boolean {
    const ctrl = this.editUser.get(field);
    return !ctrl.valid && ctrl.touched && ctrl.dirty;
  }

  hasError(field: string, error: string): boolean {
    const ctrl = this.editUser.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
}
