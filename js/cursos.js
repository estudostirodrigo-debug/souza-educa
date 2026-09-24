import { curso } from "../dados/listagem-cursos.js";
function listarCursos(usuario) {
  const cursosDoUsuario = curso.filter((item) => {
    return usuario.email === item.emailProfessor;
  });
  return cursosDoUsuario;
}

export { listarCursos };
