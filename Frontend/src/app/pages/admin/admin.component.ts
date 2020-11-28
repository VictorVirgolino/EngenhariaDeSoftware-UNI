import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import {Teacher} from '../../models/Teacher'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public formAdmin: FormGroup;
  public all_list: Array<any> = [];
  public loading: boolean;
  

  constructor(private adminService: AdminService, private toastr: ToastrService) {
    this.formAdmin = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      currentDiscipline: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
    });
  }

  ngOnInit(): void {
    this.adminService.newTeacherSubject.subscribe((data) =>{
        this.all_list.push(data);
    })
    this.adminService.getAll().subscribe((itens) => {
      itens.forEach(item => {
        this.all_list.push(item)
      });
    })
  }

  delete(id){
    this.adminService.deleteById(id).subscribe(() =>{
      const index = this.all_list.findIndex((teacher) => teacher.id === id);
      this.all_list.splice(index, 1);
      this.toastr.success('Deletado com Sucesso!');
    })
  }

  addTeacher(){
    let teacher = new Teacher();
    teacher.name = this.formAdmin.get('name').value;
    teacher.currentDiscipline = this.formAdmin.get('currentDiscipline').value;
    this.loading = true;

    this.adminService.add(teacher).subscribe(() =>{
      this.loading = false;
      this.adminService.newTeacherSubject.next(teacher);
      this.toastr.success('Adicionado com Sucesso!');
    })
  }

  isFormFieldInvalid(field: string): boolean {
    const ctrl = this.formAdmin.get(field);
    return !ctrl.valid && ctrl.touched && ctrl.dirty;
  }

  hasError(field: string, error: string): boolean {
    const ctrl = this.formAdmin.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
}
