export class Produto{

  idProduto: number | undefined;
  produto: String | undefined;
  valor: number | undefined;
  descricao: String | undefined;
  disponibilidade: String | undefined;
  imagem1: String | undefined;
  imagem2: String | undefined;
  imagem3: String | undefined;
  idUsuario: number | undefined;

  constructor( idProduto ?: number, produto ?: String, valor ?: number,
               descricao ?: String, disponibilidade ?: String, imagem1 ?: String,
               imagem2 ?: String, imagem3 ?: String, idUsuario ?: number) {

                this.idProduto = idProduto;
                this.produto = produto;
                this.valor = valor;
                this.descricao = descricao;
                this.disponibilidade = disponibilidade;
                this.imagem1 = imagem1;
                this.imagem2 = imagem2;
                this.imagem3 = imagem3;
                this.idUsuario = idUsuario;
  }

}
