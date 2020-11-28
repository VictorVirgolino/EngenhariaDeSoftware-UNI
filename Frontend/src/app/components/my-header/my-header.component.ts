import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmitterService} from '../../services/emitter.service'
import {tap} from 'rxjs/operators';

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css'],
})
export class MyHeaderComponent implements OnInit {
  public logged: boolean;
  public admin: boolean;
  constructor(private route: Router, private emitter: EmitterService) {
    this.logged = false;
    this.admin = false;
  }

  ngOnInit(): void {
    this.emitter.getValues().subscribe((data) => data.forEach(element => {
      this.logged = element.logged;
      this.admin = element.admin;
    }));
    
  }

  goToLogin() {
    this.route.navigate(['/login']);
  }

  goToRegister() {
    this.route.navigate(['/register']);
  }

  goToTeam() {
    this.route.navigate(['/team']);
  }

  goToHome() {
    this.route.navigate(['/home']);
  }

  goToProfile() {
    this.route.navigate(['/profile']);
  }

  goToEvaluation() {
    this.route.navigate(['/evaluation']);
  }

  goToAdmin() {
    this.route.navigate(['/admin']);
  }

  goToVoteAdmin() {
    this.route.navigate(['/admin-vote']);
  }

  logout() {
    this.logged = false;
    if(this.admin === true){
      this.admin = false;
    }
    this.route.navigate(['/login']);
  }
}
