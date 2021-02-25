import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Produto } from 'src/app/model/produto';
import { FeedService } from '../services/feed.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  produtos: Produto[] =[];
  produto: Produto;

  constructor(private feedService: FeedService,
              private spinnerService: NgxSpinnerService,
              private router: Router) {
    this.produto = new Produto();
  }

  ngOnInit(): void {
    this.spinner();
    this.buscarTodosProdutos();
  }

  buscarTodosProdutos(){
    this.feedService.buscarTodosProdutos().subscribe(res => {
      this.produtos = res;
    })
  }

  spinner(){
    this.spinnerService.show();

   setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinnerService.hide();
    }, 1000);
  }

}
