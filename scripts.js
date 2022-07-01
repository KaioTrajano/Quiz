let perguntas = document.getElementById("pergunta")
let resposta1 = document.getElementById("resposta1")
let resposta2 = document.getElementById("resposta2")
let resposta3 = document.getElementById("resposta3")
let resposta4 = document.getElementById("resposta4")
let respostas = document.getElementsByName("res")
let finish = document.getElementById("finish")
let jogardenovo = document.getElementById("jogardenovo")
let pontos = document.getElementById("pts")
let quadrodeperguntas = document.getElementById("quadrodeperguntas")
let npergunta = document.getElementById("npergunta")
let nivel = document.getElementById("nivel")
let playername = document.getElementById("playername")
let playernameinp = document.getElementById("playernameinput")
let começar = document.getElementById("começar")
let nameplayer = document.getElementById("name")
let bar = document.getElementById("bar")
let bardiv = document.getElementById("bardiv")
let porcentagem = document.getElementById("porcentagem")
let quadrodequizes = document.getElementById("quadrodequizes")
let medicinebutton = document.getElementById("medicine")
let conhecimentobutton = document.getElementById("conhecimento")
let medicinecheckbox = document.getElementById("medicinecheckbox")
let conhecimentocheckbox = document.getElementById("conhecimentocheckbox")
let matematicacheckbox = document.getElementById("matematicacheckbox")
let matematicabutton = document.getElementById("matematicabutton")
let inicio = document.getElementById("voltarinicio")
let titulo = document.getElementById("titulo")


quadrodeperguntas.style.display = "none"

playernameinp.focus()
playernameinp.click()

jogardenovo.addEventListener("click", jogarnovamente)

inicio.addEventListener("click", () =>{
    
    escolherquiz()

})

let programingcheckbox = document.getElementById("programingcheckbox")
let programingbutton = document.getElementById("programingbutton")

programingbutton.addEventListener("click", () =>{
    programingcheckbox.checked = true
    jogarnovamente()
})

medicinebutton.addEventListener("click", () =>{
    medicinecheckbox.checked = true
    jogarnovamente()
})

conhecimentobutton.addEventListener("click", () =>{
    conhecimentocheckbox.checked = true
    jogarnovamente()
})

matematicabutton.addEventListener("click", () =>{
    matematicacheckbox.checked = true
    jogarnovamente()
})

começar.addEventListener("click", escolherquiz)

function createtamplate(){

let alternativespan4 = document.createElement("span")
alternativespan4.textContent = "D"
alternativespan4.classList.add("alternative4")
resposta4.appendChild(alternativespan4)    

let alternativespan3 = document.createElement("span")
alternativespan3.textContent = "C"
alternativespan3.classList.add("alternative3")
resposta3.appendChild(alternativespan3)   

let alternativespan2 = document.createElement("span")
alternativespan2.textContent = "B"
alternativespan2.classList.add("alternative2")
resposta2.appendChild(alternativespan2)


let alternativespan = document.createElement("span")
alternativespan.textContent = "A"
alternativespan.classList.add("alternative")
resposta1.appendChild(alternativespan)

}

let quizes = [

{
    pergunta: "Que órgão tem uma camada muscular que permite que ele se contraia?",
    primeiraresposta: "O pulmão",
    segundaresposta: "O pâncreas",
    terceiraresposta: "O estômago",
    quartaresposta: "A fíbula", 
    respostacerta: "O estômago", 
          
},

{
    pergunta: "Todas as doenças hereditárias são genéticas, mas nem todas as doenças genéticas são hereditárias. Deu um nó no cérebro? Então seleciona a única opção que mostra apenas doenças genéticas:",
    primeiraresposta: "Obesidade e fibrose cística",
    segundaresposta: "Síndrome de Down e albinismo",
    terceiraresposta: "Diabetes e polidactilia",
    quartaresposta: "Hipertensão e Alzheimer",
    respostacerta: "Síndrome de Down e albinismo"


},

{
    pergunta: "O ciclo menstrual ocorre mensalmente, por todo o tempo em que uma mulher é fértil. Todo esse processo envolve hormônios, que vão preparar o corpo para uma possível fecundação. Um desses hormônios se eleva para iniciar a fase ovulatória do ciclo. Qual?",
    primeiraresposta: "Progesterona",
    segundaresposta: "Estrogênio",
    terceiraresposta: "FSH",
    quartaresposta: "LH", 
    respostacerta: "LH", 
          
},

{
    pergunta: "O hemograma é o nome técnico – e mais bonito – para o rotineiro exame de sangue. Ele detecta doenças que podem afetar o sangue, como leucemia, anemia, alergias e infecções. Na hora da análise, são verificados três componentes. Selecione a opção que não é analisada em um exame de sangue:",
    primeiraresposta: "Plaquetas",
    segundaresposta: "Bactérias",
    terceiraresposta: "Hemácias",
    quartaresposta: "Leucócitos", 
    respostacerta: "Bactérias", 
          
},

{
    pergunta: "Qual é o comprimento do intestino delgado?",
    primeiraresposta: "Entre 1 e 2 metros",
    segundaresposta: "Entre 6 e 7 metros",
    terceiraresposta: "Entre 10 e 15 metros",
    quartaresposta: "Entre 15 e 20 metros", 
    respostacerta: "Entre 6 e 7 metros", 
          
},

{
    pergunta: "O Transtorno do Pânico está diretamente ligado ao cérebro. Quando uma pessoa sofre com o quadro, ela pode experienciar sintomas como medo intenso, taquicardia, sudorese e sensação de sufocamento. No momento da crise, o cérebro capta os sinais na amígdala cerebral. Onde ela está localizada?",
    primeiraresposta: "No lobo temporal",
    segundaresposta: "No lobo frontal",
    terceiraresposta: "No lobo occipital",
    quartaresposta: "No lobo parietal", 
    respostacerta: "No lobo temporal", 
          
},

{
    pergunta: "Qualquer pessoa pode ter hemorroidas algum dia. Essa doença é muito comum, mas é um incômodo muito grande para quem sofre com o quadro. Ela também já foi alvo de muitas fake news por aí. Será que você sabe o que é verdade e o que é mentira?",
    primeiraresposta: "Fatores genéticos",
    segundaresposta: "Consumo exagerado de pimenta",
    terceiraresposta: "Gravidez",
    quartaresposta: "Prisão de ventre", 
    respostacerta: "Consumo exagerado de pimenta", 
          
},

{
    pergunta: "Qual o primeiro órgão a se formar na gestação?",
    primeiraresposta: "Coração",
    segundaresposta: "Cérebro",
    terceiraresposta: "Pulmão",
    quartaresposta: "Figado", 
    respostacerta: "Coração", 
          
},

{
    pergunta: "Quantos sistemas orgânicos tem o corpo humano?",
    primeiraresposta: "5",
    segundaresposta: "7",
    terceiraresposta: "11",
    quartaresposta: "15", 
    respostacerta: "11", 
          
},

{
    pergunta: "Quem criou esse quiz?",
    primeiraresposta: "fulaninho",
    segundaresposta: "Algum programador ai",
    terceiraresposta: "Kaio Trajano",
    quartaresposta: "Hugo", 
    respostacerta: "Kaio Trajano", 
          
},

]

let quizesdeprogramaçao = [
   
{
    pergunta: "Quando trabalhamos com menus, além de formatar os links, é necessário posicioná-los. Com isso em mente, marque a alternativa que representa os valores que a propriedade ‘position’ pode receber.?",
    primeiraresposta: "static,relative,absolute,fixed",
    segundaresposta: "default,relative,absolute,variable",
    terceiraresposta: "top,bottom,left,right",
    quartaresposta: "public,private,default,static", 
    respostacerta: "static,relative,absolute,fixed", 
          
},

{
    pergunta: "Para exibir valores no corpo da página, é preciso usar a função ______________.",
    primeiraresposta: "alert()",
    segundaresposta: "Windows.open()",
    terceiraresposta: "document.write()",
    quartaresposta: "nenhuma das anteriores",
    respostacerta: "document.write()"


},

{
    pergunta: "Qual é a sintaxe correta para se referir a um script externo chamado meucodigo.js?",
    primeiraresposta: `<script src="meucodigo.js">`,
    segundaresposta: `script href="meucodigo.js"`,
    terceiraresposta: `<script name="meucodigo.js">`,
    quartaresposta: `<script link="meucodigo.js">`, 
    respostacerta: `<script src="meucodigo.js">`,
          
},

{
    pergunta: "Como escrever uma instrução IF em JavaScript?",
    primeiraresposta: "if(i == 5)",
    segundaresposta: "if i = 5 then",
    terceiraresposta: "if i = 5",
    quartaresposta: "if i == 5 then", 
    respostacerta: "if(i == 5)", 
          
},

{
    pergunta: "Como um loop WHILE é iniciado?",
    primeiraresposta: "while (i <= 10; 1++)",
    segundaresposta: "while (i <= 10)",
    terceiraresposta: "while i = 1 to 10",
    quartaresposta: "nenhuma das anteriores", 
    respostacerta: "while (i <= 10)", 
          
},

{
    pergunta: "Qual é a sintaxe CSS correta?",
    primeiraresposta: "{body;color:black}",
    segundaresposta: "{body:color=black}",
    terceiraresposta: "body:color=black",
    quartaresposta: "body{color: black;}", 
    respostacerta: "body{color: black;}", 
          
},

{
    pergunta: "Qual objeto literal abaixo está correto?",
    primeiraresposta: `var obj = nome => 'Meu nome'`,
    segundaresposta: `var obj = { nome : 'meu nome'}`,
    terceiraresposta: `var obj = { nome = 'meu nome'}`,
    quartaresposta: `var obj = { nome ; 'meu nome'}`, 
    respostacerta: `var obj = { nome : 'meu nome'}`, 
          
},

{
    pergunta: "Para finalizar o loop atual e prosseguir para a próxima iteração, usamos:",
    primeiraresposta: "Break",
    segundaresposta: "Continue",
    terceiraresposta: "Exit",
    quartaresposta: "não tem como finalizar um loop", 
    respostacerta: "Continue", 
          
},

{
    pergunta: "Para requisitar uma informação usando o protocolo GET, podemos usar:",
    primeiraresposta: "fetch('url')",
    segundaresposta: "request_url('url');",
    terceiraresposta: "get('url');",
    quartaresposta: "get_request('url');", 
    respostacerta: "fetch('url')", 
          
},

{
    pergunta: "Para acessarmos um elemento através de seu ID, usamos:",
    primeiraresposta: `document.getelementbyid('id_do_elemento');`,
    segundaresposta: `getElementbyid('id_do_elemento');`,
    terceiraresposta: `document.getElementById('id_do_elemento');`,
    quartaresposta: `document.getIdElement('id_do_elemento');`, 
    respostacerta: "document.getElementById('id_do_elemento');", 
          
},
]

let quizesconhecimentosgerais = [
   
{
    pergunta: `De quem é a famosa frase “Penso, logo existo”?`,
    primeiraresposta: "Platão",
    segundaresposta: "Galileu Galilei",
    terceiraresposta: "Descartes",
    quartaresposta: "Sócrates", 
    respostacerta: "Descartes", 
          
},

{
    pergunta: "Quais o menor e o maior país do mundo?",
    primeiraresposta: "Vaticano e Rússia",
    segundaresposta: "Nauru e China",
    terceiraresposta: " São Marino e Índia",
    quartaresposta: "Malta e Estados Unidos",
    respostacerta: "Vaticano e Rússia"


},

{
    pergunta: " Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
    primeiraresposta: `Jânio Quadros`,
    segundaresposta: `Jacinto Anjos`,
    terceiraresposta: `João Goulart`,
    quartaresposta: `João Figueiredo`, 
    respostacerta: `João Goulart`,
          
},

{
    pergunta: "Qual o grupo em que todas as palavras foram escritas corretamente?",
    primeiraresposta: "Asterístico, beneficiente, meteorologia",
    segundaresposta: "Asterisco, beneficente, meteorologia",
    terceiraresposta: "Asterisco, beneficente, metereologia",
    quartaresposta: "Asterístico, beneficiente, metereologia", 
    respostacerta: "Asterisco, beneficente, meteorologia", 
          
},

{
    pergunta: "Qual o livro mais vendido no mundo a seguir à Bíblia?",
    primeiraresposta: "Harry Potter",
    segundaresposta: "O Senhor dos Anéis",
    terceiraresposta: "O Pequeno Príncipe",
    quartaresposta: "Dom Quixote", 
    respostacerta: "Dom Quixote", 
          
},

{
    pergunta: "Atualmente, quantos elementos químicos a tabela periódica possui?",
    primeiraresposta: "113",
    segundaresposta: "109",
    terceiraresposta: "108",
    quartaresposta: "118", 
    respostacerta: "118", 
          
},

{
    pergunta: "Qual o número mínimo de jogadores numa partida de futebol?",
    primeiraresposta: `8`,
    segundaresposta: `10`,
    terceiraresposta: `9`,
    quartaresposta: `7`, 
    respostacerta: `7`, 
          
},

{
    pergunta: "Quanto tempo a luz do Sol demora para chegar à Terra?",
    primeiraresposta: "12 minutos",
    segundaresposta: "1 dia",
    terceiraresposta: "12 horas",
    quartaresposta: "8 minutos", 
    respostacerta: "8 minutos", 
          
},

{
    pergunta: "Em que período da pré-história o fogo foi descoberto?",
    primeiraresposta: "Neolítico",
    segundaresposta: "Paleolítico",
    terceiraresposta: "Idade dos Metais",
    quartaresposta: "Período da Pedra Polida", 
    respostacerta: "Paleolítico", 
          
},

{
    pergunta: "Qual a velocidade da luz?",
    primeiraresposta: `200 000 000 metros por segundo (m/s)`,
    segundaresposta: `150 000 000 metros por segundo (m/s)`,
    terceiraresposta: `299 792 458 metros por segundo (m/s)`,
    quartaresposta: `199 792 458 metros por segundo (m/s)`, 
    respostacerta: "299 792 458 metros por segundo (m/s)", 
          
},
]

let quizesmatematica = [
   
{
    pergunta: `Viviane mora 6km ao norte do aeroporto, Glauco mora 15 km ao sul de Viviane e Genilda mora 23 km ao norte de Glauco. A distância, em km, de Genilda ao aeroporto é?`,
    primeiraresposta: "11km",
    segundaresposta: "12km",
    terceiraresposta: "13km",
    quartaresposta: "14km", 
    respostacerta: "14km", 
          
},

{
    pergunta: "A capacidade de uma caixa d´água é de 8,5 m3 . Essa capacidade em litros é de?",
    primeiraresposta: "85",
    segundaresposta: "850",
    terceiraresposta: "8,5",
    quartaresposta: "8500",
    respostacerta: "8500"


},

{
    pergunta: "O valor de 0,3 x 0,03 é igual a:",
    primeiraresposta: `9`,
    segundaresposta: `0,09`,
    terceiraresposta: `0,009`,
    quartaresposta: `0,0009`, 
    respostacerta: `0,009`,
          
},

{
    pergunta: "Considerando os cinco primeiros números primos e escolhendo dois deles ao acaso, a probabilidade da soma entre os dois números escolhidos ser um número ímpar é:",
    primeiraresposta: "40%",
    segundaresposta: "50%",
    terceiraresposta: "60%",
    quartaresposta: "80%", 
    respostacerta: "40%", 
          
},

{
    pergunta: "Em uma creche comunitária, Paula realiza um projeto de contação de histórias infantis para crianças em uma sala de aula retangular de 3m de comprimento por 2,5m de largura. Nessa situação, a área, em metros quadrados, dessa sala é igual a:",
    primeiraresposta: "6,2",
    segundaresposta: "7,5",
    terceiraresposta: "8,4",
    quartaresposta: "9,3", 
    respostacerta: "7,5", 
          
},

{
    pergunta: "O governo gastou 465 milhões de reais na compra de 15 milhões de doses de vacina contra a HPV. Com essas vacinas ele conseguiu imunizar 5 milhões de jovens. Para a imunização de cada uma dessas jovens, o governo gastou:",
    primeiraresposta: "R$ 87,00",
    segundaresposta: "R$ 97,00",
    terceiraresposta: "R$ 93,00",
    quartaresposta: "R$ 103,00", 
    respostacerta: "R$ 93,00", 
          
},

{
    pergunta: "Na sequência: 32, 64, 48, 96, 72, 144, 108, …, o primeiro termo que é um número ímpar é o",
    primeiraresposta: `10° termo`,
    segundaresposta: `11° termo`,
    terceiraresposta: `9° termo`,
    quartaresposta: `12° termo`, 
    respostacerta: `11° termo`, 
          
},

{
    pergunta: "O preço inicial de um determinado produto é R$ 120,00. Após aumento de 12%, seu preço passou a ser:",
    primeiraresposta: "R$ 134,40",
    segundaresposta: "R$ 127,60",
    terceiraresposta: "R$ 128,00",
    quartaresposta: "R$ 132,00", 
    respostacerta: " 134,40", 
          
},

{
    pergunta: "Durante uma viagem choveu 5 vezes. A chuva caia pela manhã ou à tarde, nunca o dia todo. Houve 6 manhãs e 3 tardes sem chuvas. Quantos dias durou a viagem?",
    primeiraresposta: "7",
    segundaresposta: "8",
    terceiraresposta: "8",
    quartaresposta: "9", 
    respostacerta: "7", 
          
},

{
    pergunta: "Uma rede social está aumentando muito rápido o número de usuários e, recentemente, resolveu melhorar a segurança, protegendo os perfis de seus usuários. Até então, para criar uma conta era necessária uma senha com seis dígitos, utilizando os algarismos de 0 a 9 sem repetição. Agora, é preciso cadastrar no lugar do primeiro dígito, uma letra do alfabeto, incluindo y, w e k. A única restrição é que esta letra deve ser o primeiro dígito da senha.",
    primeiraresposta: `937 440`,
    segundaresposta: `21 600 000`,
    terceiraresposta: `635 040`,
    quartaresposta: `21`, 
    respostacerta: "635 040", 
          
},
]
    
let i = 0
let progresso = 0

function verificarresposta(resposta, letra){

quadrodeperguntas.style.pointerEvents = "none"

if(resposta.textContent == quizes[i].respostacerta + `${letra}` || 
resposta.textContent == quizesconhecimentosgerais[i].respostacerta + `${letra}` || 
resposta.textContent == quizesdeprogramaçao[i].respostacerta + `${letra}` ||
resposta.textContent == quizesmatematica[i].respostacerta + `${letra}` ){
        
    resposta.setAttribute("style", "background-Color: greenyellow")
    quadrodeperguntas.classList.add("reset")

       setTimeout(() => {
       acertou()
}, "2000")

   }else{
       resposta.style.backgroundColor = "rgb(243, 82, 82)"
       quadrodeperguntas.classList.add("shakeerror")
        setTimeout(() => {
        errou()
        }, "2000")
        }
}


resposta1.addEventListener("click", () =>{

verificarresposta(resposta1, "A")

})

resposta2.addEventListener("click", () =>{

    verificarresposta(resposta2, "B")
})

resposta3.addEventListener("click", () =>{

    verificarresposta(resposta3, "C")
})

resposta4.addEventListener("click", () =>{

    verificarresposta(resposta4, "D")

})

function escolherquiz(){

    if(playernameinp.value ==""){
        playernameinp.classList.add("your-class")
          playernameinp.placeholder = "Digite um nome"
         
            playernameinp.setAttribute("style", "animation: arrowanimation .2s ease ")
            setTimeout(() =>{
                playernameinp.removeAttribute("style", "animation: arrowanimation")
            },500)
    return
}

    bardiv.style.visibility = "hidden"
    porcentagem.style.visibility = "hidden"

    titulo.style.display = "block"
    titulo.innerHTML = `Escolha o quiz de sua<br> preferência, ${playernameinp.value} &#128516`
   

    finish.classList.add("finishoff")

    finish.classList.remove("finishon")

    quadrodequizes.style.visibility = "visible"
    quadrodequizes.classList.add("quadrodequizesanimado")
    quadrodequizes.style.display = "grid"
   

    playername.classList.add("playernameoff")

   
}


function jogarnovamente(){


quadrodequizes.classList.remove("quadrodequizesanimado")
quadrodequizes.classList.add("playernameoff")
quadrodequizes.style.visibility = "hidden"

bar.setAttribute("style", "width: 0%")
progresso = 0

if(playernameinp.value ==""){
    playernameinp.placehoder = ""
    return
}

porcentagem.style.visibility = "visible"
bardiv.style.visibility = "visible"

playername.classList.add("playernameoff")

setTimeout(() => {
    quadrodeperguntas.style.display = ""
    playername.classList.remove("finishon")

  }, "500")


  finish.classList.add("finishoff")

  finish.classList.remove("finishon")

pts = 0
 i = 0
 resetgame()
 createtamplate()

 resposta1.classList.remove("resposta11")
 resposta2.classList.remove("resposta11")
 resposta3.classList.remove("resposta11")
 resposta4.classList.remove("resposta11")


}


let pts = 0


function acertou(){

progresso += 10

bar.style.animation = ""
  
resetgame()


i++
pts += 1

if(i == quizes.length){

   finishevent()
}



resetgame()
createtamplate()

}


function errou(){

progresso += 10

resetgame() 
   
i++


if(i == quizes.length){

    finishevent()
    
}

resetgame()
createtamplate()


}

function resetgame(){

setTimeout(() =>{
    porcentagem.style.display = "block"
},480)

window.scrollTo(0, 0)

function animateValue(obj, start, end, duration) {
    
  let startTimestamp = null;

  const step = (timestamp) => {

    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start) + "% Completo";
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

animateValue(porcentagem, progresso - 10, progresso, 500);


if(medicinecheckbox.checked){
pergunta.innerHTML = `<h1>${quizes[i].pergunta}</h1>`
resposta1.innerText = quizes[i].primeiraresposta
resposta2.innerHTML = quizes[i].segundaresposta
resposta3.innerText = quizes[i].terceiraresposta
resposta4.innerText = quizes[i].quartaresposta
}
else if(programingcheckbox.checked){
pergunta.innerHTML = `<h1>${quizesdeprogramaçao[i].pergunta}</h1>`
resposta1.innerText = quizesdeprogramaçao[i].primeiraresposta
resposta2.innerHTML = quizesdeprogramaçao[i].segundaresposta
resposta3.innerText = quizesdeprogramaçao[i].terceiraresposta
resposta4.innerText = quizesdeprogramaçao[i].quartaresposta
}

else if(conhecimentocheckbox.checked){
pergunta.innerHTML = `<h1>${quizesconhecimentosgerais[i].pergunta}</h1>`
resposta1.innerText = quizesconhecimentosgerais[i].primeiraresposta
resposta2.innerHTML = quizesconhecimentosgerais[i].segundaresposta
resposta3.innerText = quizesconhecimentosgerais[i].terceiraresposta
resposta4.innerText = quizesconhecimentosgerais[i].quartaresposta
}

else if(matematicacheckbox.checked){
pergunta.innerHTML = `<h1>${quizesmatematica[i].pergunta}</h1>`
resposta1.innerText = quizesmatematica[i].primeiraresposta
resposta2.innerHTML = quizesmatematica[i].segundaresposta
resposta3.innerText = quizesmatematica[i].terceiraresposta
resposta4.innerText = quizesmatematica[i].quartaresposta
}


bar.setAttribute("style", "width:" + progresso + "%")
resposta1.style.backgroundColor = ""
resposta2.style.backgroundColor = ""
resposta3.style.backgroundColor = ""
resposta4.style.backgroundColor = ""
quadrodeperguntas.style.pointerEvents = ""
titulo.style.display = "none"
quadrodeperguntas.classList.remove("shakeerror")
quadrodeperguntas.classList.remove("reset")
npergunta.innerText = i+1


}

function finishevent(){


if(pts <= 4){

nivel.innerHTML = "Precisa estudar mais &#128549"

}else if(pts >4 & pts <= 6){

nivel.innerHTML = "Você está quase lá &#128533"

}else if(pts >6 & pts <= 9){

nivel.innerHTML = "Um bom desempenho, passou de ano &#128513"

}else if(pts == 10){

nivel.innerHTML = `Uau, você está com os estudos em dia &#x1F62F`

}

nameplayer.innerText = playernameinp.value

quadrodeperguntas.style.display = "none"

finish.classList.remove("finishoff")
finish.classList.add("finishon")
pontos.innerText = `${pts}/10`

nivel.innerText += 

resetgame()

}
