import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Produto } from '../model/produto';

const URL = 'http://localhost:3007/produto';
@Injectable({
  providedIn: 'root'
})
export class CadprodutoService {

  constructor(private http: HttpClient) { }

  public gravarProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${URL}`, produto);
  }

  upload(files: Set<File>) {

    const formData = new FormData();
    files.forEach(file => formData.append('file', file, file.name));

    // const request = new HttpRequest('POST', url, formData);
    // return this.http.request(request);
    console.log(`${URL}`);
    return this.http.post(`${URL}`, formData, {
      observe: 'events',
      reportProgress: true
    });
  }

   public buscarProdutos(idUsuario: any){
    return this.http.get<Produto[]>(`${URL}/${idUsuario}`)
  }
}
