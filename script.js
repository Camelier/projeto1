// toogle já altera a classe em classList
function toggleMode() {
  //const ou var são "apelidos"
  const html = document.documentElement
  html.classList.toggle("light")

  //Pegar a tag img
  const img = document.querySelector("#profile img")

  //Se tiver em "light" mode, substituir o link da img pela img light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light1.png")
  } else {
    img.setAttribute("src", "./assets/avatar1.png")
  }
}
