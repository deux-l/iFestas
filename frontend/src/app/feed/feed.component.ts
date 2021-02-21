import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Produto } from 'src/app/model/produto';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  produtos: Produto[] =[];
  produto: Produto;

  constructor(private feedService: FeedService,
              private router: Router) {
    this.produto = new Produto();
  }

  ngOnInit(): void {
    this.buscarTodosProdutos();
  }

  buscarTodosProdutos(){
    this.feedService.buscarTodosProdutos().subscribe(res => {
      this.produtos = res;
    })
  }

}
