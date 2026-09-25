import { criarToolbar } from "../js/toolbar.js";
import { Aluno, cadastrarAluno } from "../js/alunos.js";
criarToolbar();
const formulario = document.querySelector("#formCadastroAluno");
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  
  const nome = document.querySelector("#nome");
  const genero = document.querySelector("#genero");
  const dataNascimento = document.querySelector("#dataNascimento");
  const cpf = document.querySelector("#cpf");
  const fone = document.querySelector("#fone");
  const email = document.querySelector("#email");

  const cep = document.querySelector("#cep");
  const logradouro = document.querySelector("#logradouro");
  const numero = document.querySelector("#numero");
  const complemento = document.querySelector("#complemento");
  const bairro = document.querySelector("#bairro");
  const cidade = document.querySelector("#cidade");
  const estado = document.querySelector("#estado");
  const aluno = new Aluno(
    nome.value, 
    genero.value, 
    dataNascimento.value, 
    cpf.value, 
    fone.value, 
    email.value, 
    cep.value, 
    logradouro.value, 
    numero.value, 
    complemento.value, 
    bairro.value, 
    cidade.value, 
    estado.value);
    cadastrarAluno(aluno);

  console.log(aluno);
  console.log("Cadastro Enviado");
});
