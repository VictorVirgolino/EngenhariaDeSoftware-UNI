import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-vote',
  templateUrl: './admin-vote.component.html',
  styleUrls: ['./admin-vote.component.css'],
})
export class AdminVoteComponent implements OnInit {
  public period;
  public open: boolean;
  public close: boolean;

  constructor(private toastr: ToastrService) {
    this.period = new FormControl('');
    this.open = true;
    this.close = false;
  }

  ngOnInit(): void {}

  openVote() {
    this.open = false;
    this.close = true;
    this.toastr.success('Votação aberta!')
  }

  closeVote() {
    this.open = true;
    this.close = false;
    this.toastr.success('Votação encerrada!')

  }
}
