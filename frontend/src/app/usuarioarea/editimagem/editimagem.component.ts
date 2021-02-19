import { Produto } from 'src/app/model/produto';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ImagemService } from 'src/app/services/imagem.service';

@Component({
  selector: 'app-editimagem',
  templateUrl: './editimagem.component.html',
  styleUrls: ['./editimagem.component.css']
})
export class EditimagemComponent implements OnInit {

  inscricao: Subscription = new Subscription;
  produto: Produto;
  id: number = 0;
  files: Set<File> | undefined;
  progress = 0;

  constructor(private imagemService: ImagemService,
              private route: ActivatedRoute) {
    this.produto = new Produto();
               }

  ngOnInit(): void {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        console.log(this.id)
      })

    this.buscarImagens();
  }

  public buscarImagens(){


    this.imagemService.buscarImagens(this.id).subscribe(res => {
      this.produto = res[0];
    })
  }

  onChange(event : any) {
    console.log(event);

    const selectedFiles = <FileList>event.srcElement.files;
    // document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;

    const fileNames = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }

    if (fileNames.length > 3) {

      alert('número máximo de foto permitidas são 3')
      this.files = undefined;
    } else {

      document.getElementById('customFileLabel')!.innerHTML = fileNames.join(', ');

      this.progress = 0;

    }


  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.imagemService.upload(this.files, this.id)
        .subscribe(response => console.log('Upload Concluído'));
    }
  }

}
