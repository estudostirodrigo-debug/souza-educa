import { login } from "../auth.js";

const formulario = document.querySelector("#formulario");

const email = document.querySelector("#email");

const senha = document.querySelector("#senha");

const submit = document.querySelector("#acessar");

const resetSenha = document.querySelector("#resetarSenha");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const usuario = email.value;

  const senhaDigitada = senha.value;

  login(usuario, senhaDigitada)
    
  .then((usuarioLogado) => {
      sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
    })

    .catch((erro) => {
      console.log(erro);
    });
});

