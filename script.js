function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector("#profile img")


    if(html.classList.contains("light")) {
        img.setAttribute('src','./assets/perfil2.png')
    } else {
       img.setAttribute('src', './assets/perfil1.png') 
    }

    if(html.classList.contains('light')){
        Text.setAttribute('alt', 'Foto desenhada de João Victor de camisa branca, fundo branco e com alguns respingos de tinta. Versão 1')
    } else {
        Text.setAttribute('alt', 'Foto desenhada de João Victor de camisa branca, fundo branco e com alguns respingos de tinta. Versão 2')
    }

   // pegar a tag img

   // se tiver light mode, adicionar a imagem light
   // se tiver sem light mode, manter a imagem normal
   // substituir a imagem
}