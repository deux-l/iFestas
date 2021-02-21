import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Produto } from '../model/produto';

const URL = 'http://localhost:3007/feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  public buscarTodosProdutos(){
    return this.http.get<Produto[]>(`${URL}`);
  }
}
