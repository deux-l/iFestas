export class Produto{

  idProduto: number | undefined;
  nomeProduto: String | undefined;
  valor: number = 0;
  descricao: String | undefined;
  tipoNegocio: String| undefined
 //disponibilidade: String | undefined;
  categoria: String | undefined;
  imagem1: String | undefined;
  imagem2: String | undefined;
  imagem3: String | undefined;
  idUsuario: number | undefined;

  constructor(idProduto ?: number, nomeProduto ?: String, valor ?: number, descricao ?: String,
              tipoNegocio ?: String, categoria ?: String, imagem1 ?: String, imagem2 ?: String,
               imagem3 ?: String, idUsuario ?: number) {

                this.idProduto = idProduto;
                this.nomeProduto = nomeProduto;
                //this.valor = valor;
                this.descricao = descricao;
                this.tipoNegocio = tipoNegocio;
                //this.disponibilidade = disponibilidade;
                this.categoria = categoria;
                this.imagem1 = imagem1;
                this.imagem2 = imagem2;
                this.imagem3 = imagem3;
                this.idUsuario = idUsuario;
  }

}
