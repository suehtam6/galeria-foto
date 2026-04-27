'use strict'

const getFotos =  async function (raca) {
    let url = `https://dog.ceo/api/breed/${raca}/images`
    let response = await fetch(url)
    let data = await response.json()
    
    return data.message
}

const criarFoto = function(urlFoto){
    let foto = document.createElement('img')
    foto.src = urlFoto
    foto.className = 'moldeFoto'

    return foto

}

const preencherGaleria = async function () {
    let raca = document.getElementById('raca').value
    let galeria = document.getElementById('container-galeria')
    let urlFotos = await getFotos(raca)

    let fotos = urlFotos.map(criarFoto)

    galeria.replaceChildren(...fotos)
}

const handlekeyup = function(evento){
    if(evento.key == 'Enter') preencherGaleria()
}

document.getElementById('pesquisar').addEventListener('click', preencherGaleria)
document.getElementById('raca').addEventListener('keyup', handlekeyup)