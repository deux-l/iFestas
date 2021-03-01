export class Pedido{

  idPedido: number | undefined;
  idProduto: number | undefined;
  idUsuario: number | undefined;
  nomeUsuario: String | undefined;
  nomeProduto: String | undefined;
  tipoNegocio: String | undefined;
  descricao: String | undefined
  nivelAcesso: number | undefined;
  dataEntrega:  Date = new Date();
  dataDevolucao:  Date = new Date();
  email: String | undefined;
  rua: String | undefined;
  numero: number | undefined;
  bairro: String | undefined;
  cidade: String | undefined;
  celular: String | undefined;
  valor: number | undefined;
  tipoCartao: String | undefined;
  nomeCartao: String | undefined;
  numeroCartao: String | undefined;
  validade: String | undefined;
  codigoSeguranca: number | undefined;
  idFornecedor: number | undefined;
  nomeVendedor: String | undefined;

  constructor(idPedido ?: number, idProduto ?: number, idUsuario ?: number, nomeUsuario ?: String, nomeProduto ?: String,
              tipoNegocio ?: String, descricao ?: String, nivelAcesso ?: number, email ?: String, rua ?: String, numero ?: number, bairro ?: String,
              cidade ?: String, celular ?: String, valor ?: number, dataEntrega ?: String, dataDevolucao ?: String, tipoCartao ?: String,
              nomeCartao ?: String, validade ?: String, codigoSeguranca ?: number, idFornecedor ?: number, nomeVendedor ?: String){

                this.idPedido = idPedido;
                this.idProduto = idProduto;
                this.idUsuario = idUsuario;
                this.nomeUsuario = nomeUsuario;
                this.nomeProduto = nomeProduto;
                this.tipoNegocio = tipoNegocio;
                this.descricao = descricao;
                this.nivelAcesso = nivelAcesso;
                //this.dataEntrega = dataEntrega;
                //this.dataDevolucao = dataDevolucao;
                this.email = email;
                this.rua = rua;
                this.numero = numero;
                this.bairro = bairro;
                this.cidade = cidade;
                this.celular = celular;
                this.valor = valor;
                this.tipoCartao = tipoCartao;
                this.nomeCartao = nomeCartao;
                this.validade = validade;
                this.codigoSeguranca = codigoSeguranca;
                this.idFornecedor = idFornecedor;
                this.nomeVendedor = nomeVendedor;


  }

}
