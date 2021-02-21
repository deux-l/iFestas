import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Avaliacao } from './../model/avaliacao';
import { Produto } from '../model/produto';

const URL = 'http://localhost:3007/imagem';
const URL2 = 'http://localhost:3007/avaliacoes';

@Injectable({
  providedIn: 'root'
})
export class ImagemService {

  constructor(private http: HttpClient) { }

public buscarImagens(idProduto : any){
  return this.http.get<Produto[]>(`${URL}/${idProduto}`)
  }

public buscarAvaliacoes(idProduto : String){
    return this.http.get<Avaliacao[]>(`${URL2}/${idProduto}`)
  }

public salvarAvaliacao(avaliacao: Avaliacao): Observable<Avaliacao>{
  return this.http.post<Avaliacao>(`${URL2}`, avaliacao)
}

public upload(files: Set<File>, idProduto: any) {

  const formData = new FormData();
  files.forEach(file => formData.append('file', file, file.name));

    // const request = new HttpRequest('POST', url, formData);
    // return this.http.request(request);
  console.log(`${URL}`);
  return this.http.put(`${URL}/${idProduto}`, formData, {
    observe: 'events',
    reportProgress: true
    });
  }
}
