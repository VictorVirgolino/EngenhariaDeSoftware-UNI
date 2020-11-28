import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TeamService} from '../../services/team.service'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {

  public team: Array<any> = [];
  public loading: boolean;

  constructor(private route: Router, private service: TeamService) {}

  ngOnInit(): void {
    this.loading = true;
    this.service.getAll().subscribe((data) =>{
      data.forEach(item => {
        this.loading = false;
        this.team.push(item);
      });
    })
  }
}
