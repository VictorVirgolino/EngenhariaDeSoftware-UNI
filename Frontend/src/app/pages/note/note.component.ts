import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvaluationService } from '../../services/evaluation.service';
import { Teacher } from '../../models/Teacher';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  public id: number;
  currentRate = 5;
  public teacher: any;
  public name: string;
  public loading: boolean;
  public computed: boolean;

  constructor(
    private route: ActivatedRoute,
    private service: EvaluationService,
    private toastr: ToastrService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.loading = false;
    this.computed = false;
  }

  ngOnInit() {
    this.service.getById(this.id).subscribe((item) => {
      this.loading = true;
      this.teacher = item;
      this.name = this.teacher.name;
    });
  }

  toEvaluate(){
    this.computed = true;
    this.toastr.success('Voto Computado com Sucesso!')
  }
}
