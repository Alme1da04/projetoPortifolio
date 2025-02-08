function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const image = document.querySelector("#profile img")
  //se tiver light mode colocar a imagem light
  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/Avatar-joao-light.png")
  } else {
    image.setAttribute("src", "./assets/Avatar.png")
  } //se tiver sem liht mode manter a imagem dark
}
