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
    imagem: "https://static.wikia.nocookie.net/harrypotterfanon/images/8/88/Dumbledore.jpg",
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

var carta08 = {
    nome: "Neville Longbottom",
    imagem: "https://static1.srcdn.com/wordpress/wp-content/uploads/2017/01/0.Neville.jpg",
    atributos: {
        ataque: 60,
        defesa: 50,
        magia: 40
    }
}

var carta09 = {
    nome: "Gina Weasley",
    imagem: "https://i.skyrock.net/1375/79401375/pics/3078976219_1_3_CbtdBf5n.jpg",
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

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeCartas()

function atualizaQuantidadeCartas(){
  var divQuantidadeCartas = document.getElementById('quantidade-cartas');
  
  var html = "Quantidade de Cartas no Jogo: " + cartas.length;
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = `<h3>` + "Jogador " + pontosJogador + " x " + pontosMaquina + " Maquina" + `</h3>`
 divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
   
    document.getElementById('btnJogar').disabled = false
    
  exibeCartaJogador()
  atualizaQuantidadeCartas()
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
    console.log(atributoSelecionado)
    var divResultado = document.getElementById('resultado')
    
    if(atributoSelecionado != undefined){
        if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
            htmlResultado = '<p class = "resultado-final"> Parabéns! Você Venceu! 🏆 </p'
            pontosJogador++
             
          } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
            htmlResultado = '<p class = "resultado-final"> Não foi dessa vez... Você Perdeu! ❌ </p'
            pontosMaquina++
          } else {
            htmlResultado = '<p class = "resultado-final"> Empatou! Ainda tem chance! ⚔</p'
          }

          if(cartas.length == 0){
            alert("Game Over")
            if(pontosJogador > pontosMaquina){
              htmlResultado = '<p class="resultado-final"> Parabéns! Você é o Vencedor 🏆🏆 ! </p>'
            }else if(pontosJogador > pontosMaquina){
              htmlResultado = '<p class="resultado-final"> Você Perdeu! ❌❌ </p>'
            }else{
              htmlResultado = '<p class="resultado-final"> Você e a máquina empataram! ⚔⚔</p>'
            }
            
          }else{
            //Habilita o botão da próxima rodada
            document.getElementById('btnProximaRodada').disabled = false
          }

          divResultado.innerHTML = htmlResultado
  exibeCartaMaquina()
  atualizaPlacar()
  atualizaQuantidadeCartas()
  
  document.getElementById('btnJogar').disabled = true
    }else{
        alert("Por favor selecione um atributo!")
    }

   
   
  
  
  
  
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

function proximaRodada(){
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div>
                         <div id="carta-maquina" class="carta"></div>`
  
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}