export class Pedido{

  idPedido: number;
  idProduto: number;
  idUsuario: number;
  nivelAcesso: number;
  descricaoPedido: String;
  dataEntrega: String;
  rua: String;
  numero: number;
  bairro: String;
  cidade: String;
  valor: number;

  constructor( idPedido ?: number, idProduto ?: number, idUsuario ?: number, nivelAcesso ?: number,
               descricaoPedido ?: number, dataEntrega ?: String, rua ?: String, numero ?: number,
               bairro ?: String, cidade ?: String, valor ?: number){

                this.idPedido = idPedido;
                this.idProduto = idProduto;
                this.idUsuario = idUsuario;
                this.nivelAcesso = nivelAcesso;
                this.descricaoPedido = descricaoPedido;
                this.dataEntrega = dataEntrega;
                this.rua = rua;
                this.numero = numero;
                this.bairro = bairro;
                this.cidade = cidade;
                this.valor = valor;

  }

}
