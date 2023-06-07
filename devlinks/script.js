function toggeMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  html.classList.toggle("light")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Jorge Luis sorrindo, cavanhaque, camiseta verde e rosa da estação primeira de mangueira com uma paria muito bonita de fundo."
    )
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Jorge Luis sorrindo, cavanhaque, terno preto e gravata vermelha, fundo claro com um quadro de flores ao fundo."
    )
  }
}
