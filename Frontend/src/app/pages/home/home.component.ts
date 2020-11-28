import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {FeedService} from '../../services/feed.service'
import {Publi} from '../../models/Publi'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  feed: Array<any> = [];

  constructor(private toastr: ToastrService, private feedService: FeedService) {
    
  }

  ngOnInit(): void {
    this.feedService.newPost.subscribe((data) =>{
      this.feed.push(data);
    })
    this.feedService.getAll().subscribe((itens)=>{
      itens.forEach(item => {
        this.feed.push(item);
      });
    })
    this.toastr.info('Restam 3 dias para ser encerrada', 'A votação está aberta!');
  }

  like(item){
    item.likes++;
  }

  post(){
    let publi = new Publi();
    let myPubli = (<HTMLInputElement>document.getElementById('publi')).value;
    publi.notice = myPubli;
    publi.name = 'Gustavo Dias';
    publi.likes = 0;
    publi.date = "27/11/2020";

   
    this.feedService.post(publi).subscribe(() => {
      console.log(publi);
      this.feedService.newPost.next(publi);
      this.toastr.success('Publicado!');
    })
  }

}
