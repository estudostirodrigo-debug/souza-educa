function criarToolbar () {

    const usuarioLogado = JSON.parse(
    sessionStorage.getItem("usuarioLogado")
);
const cabecalho = document.createElement("header");
cabecalho.classList.add("toolbar");
const logoMarcaDagua = document.createElement("img");
const nomeDoUsuarioLogado = document.createElement("span");
nomeDoUsuarioLogado.textContent = usuarioLogado.nome;
logoMarcaDagua.src = "../assets/img/logo-marca-d'agua.png";
cabecalho.appendChild(logoMarcaDagua);
cabecalho.appendChild(nomeDoUsuarioLogado);
document.body.prepend(cabecalho);

}

export { criarToolbar };