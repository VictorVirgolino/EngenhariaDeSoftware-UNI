import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvaluationService } from '../../services/evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css'],
})
export class EvaluationComponent implements OnInit {
  all_list: Array<any> = [];
  name: string = '';
  objeto: any;
  public loading: boolean;
  public notFound: boolean;

  constructor(private router: Router, private service: EvaluationService) {
    
  }

  ngOnInit() {}

  search() {
    this.loading = true;
    this.service.getAll(this.name).subscribe((itens) => {
      this.loading = false;
      this.objeto = itens;
      this.notFound = false;
      if(this.objeto.length === 0){
        this.notFound = true;
      }
    });
  }

  redirectTo(item) {
    this.router.navigate(['/note', item.id]);
  }
}
