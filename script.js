function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir imagem
  if (html.classList.contains("light")) {
    // se tiver light mode adicionar imagem light
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    // se não tiver em light mode manter imagem
    img.setAttribute("src", "./assets/avatar.png")
  }
}
//  if(html.classList.contains('light')) {
//    html.classList.remove('light')
//  }else {
//    html.classList.add('light')
//  }
