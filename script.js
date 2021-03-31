var carta01 = {
    nome: "Harry Potter",
    imagem: "https://i.pinimg.com/originals/eb/a3/d5/eba3d5f7ae3f2187028a8583d6eec17b.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var carta02 = {
    nome: "Rony Weasley",
    imagem: "https://i.pinimg.com/originals/62/f8/ca/62f8ca6d85429db664a7fdd948207fb2.jpg",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var carta03 = {
    nome: "Lorde Voldemort",
    imagem: "https://i.ytimg.com/vi/y2zqDEANKVM/maxresdefault.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var carta04 = {
    nome: "Hermione",
    imagem: "https://static.wikia.nocookie.net/harry-potter-movies/images/e/e4/Hermione_Granger_Deathly_Hallows_Textless.jpg",
    atributos: {
        ataque: 60,
        defesa: 80,
        magia: 70
    }
}

var carta05 = {
    nome: "Dumbledore",
    imagem: "https://wallpapercave.com/wp/wp2291385.jpg",
    atributos: {
        ataque: 78,
        defesa: 80,
        magia: 95
    }
}

var carta06 = {
    nome: "Bellatrix Lestrange",
    imagem: "https://static.wikia.nocookie.net/villains/images/4/45/Bellatrix.jpg",
    atributos: {
        ataque: 50,
        defesa: 80,
        magia: 70
    }
}

var carta07 = {
    nome: "Draco Malfoy",
    imagem: "https://static.wikia.nocookie.net/harry-potter-movies/images/0/06/Malfoy_Poster_Promo.jpg",
    atributos: {
        ataque: 50,
        defesa: 30,
        magia: 60
    }
}

var carta07 = {
    nome: "Minerva McGonagall",
    imagem: "https://www.media2.hw-static.com/media/2015/12/harry-potter-and-the-deathly-hallows-part-2-maggie-smith-warner-bros-122315-1276x850.jpg",
    atributos: {
        ataque: 75,
        defesa: 90,
        magia: 80
    }
}

var carta08 = {
    nome: "Neville Longbottom",
    imagem: "https://upload.wikimedia.org/wikipedia/tr/b/b6/Neville_Longbottom.jpg",
    atributos: {
        ataque: 60,
        defesa: 50,
        magia: 40
    }
}

var carta09 = {
    nome: "Gina Weasley",
    imagem: "https://i.pinimg.com/originals/d7/51/88/d751883d4518a9abb401117e689b0225.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 60
    }
}

var carta10 = {
    nome: "Fred & George Weasley",
    imagem: "https://idigitalcitizen.files.wordpress.com/2011/07/fred-george-weasley-iphone4-960x640.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 60
    }
}


var cartaMaquina
var cartaJogador
var cartas = [carta01, carta02, carta03, carta04, carta05, carta06, carta07, carta08, carta09, carta10]


function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    console.log(cartas.length)
    // Math.floor(Math.random() * (max - min + 1)) + min
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length)
    }
    cartaJogador = cartas[numeroCartaJogador]
    

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    
  exibeCartaJogador()
}

function exibeCartaJogador(){
  var divCartaJogador = document.getElementById('carta-jogador')
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
   
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p>`
  
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
  var html = "<div id = 'opcoes' class = 'carta-status'>"
  divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
  
}


function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById('resultado')
    

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class = "resultado-final"> Parabéns! Você Venceu! 🏆 </p'
       
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = '<p class = "resultado-final"> Não foi dessa vez... Você Perdeu! ❌ </p'
    } else {
      htmlResultado = '<p class = "resultado-final"> Empatou! Ainda tem chance! ⚔</p'
    }
   
  divResultado.innerHTML = htmlResultado
  exibeCartaMaquina()
}

function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById('carta-maquina')
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
   
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var nome = `<p class = "carta-subtitle">${cartaMaquina.nome}</p>`
  
  var opcoesTexto = ""
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }
  var html = "<div id = 'opcoes' class = 'carta-status'>"
  divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'

}
