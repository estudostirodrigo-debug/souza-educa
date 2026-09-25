class Aluno {
  constructor(
    nome,
    genero,
    dataNascimento,
    cpf,
    fone,
    email,
    cep,
    logradouro,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  ) {
    this.nome = nome;
    this.genero = genero;
    this.dataNascimento = dataNascimento;
    this.cpf = cpf;
    this.fone = fone;
    this.email = email;
    this.cep = cep;
    this.logradouro = logradouro;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }
}
function cadastrarAluno(aluno) {
console.log(aluno);
}
export { Aluno, cadastrarAluno };