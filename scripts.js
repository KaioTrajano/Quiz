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




quadrodeperguntas.style.display = "none"


jogardenovo.addEventListener("click", jogarnovamente)
começar.addEventListener("click", jogarnovamente)



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
    terceiraresposta: "Diabetes e polidactilia;",
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
          
}





]





let i = 0


function finishevent(){

    if(pts <= 4){
    
    nivel.innerHTML = "Guilherme Machado"
    
    }else if(pts >4 & pts <= 6){

    nivel.innerHTML = "joga de neeko sem bolinha"

    }else if(pts >6 & pts <= 9){

nivel.innerHTML = "Faz medicina na UFRGS"

}else if(pts == 10){

nivel.innerText = " O nome começa com Kaio e termina com Trajano"



}

nameplayer.innerText = playernameinp.value


quadrodeperguntas.style.display = "none"

finish.classList.remove("finishoff")
finish.classList.add("finishon")
pontos.innerText = `${pts}/10`

nivel.innerText += 

resetgame()

}



pergunta.innerHTML = `<h1>${quizes[i].pergunta}</h1>`
resposta1.innerHTML += quizes[i].primeiraresposta
resposta2.innerHTML += quizes[i].segundaresposta
resposta3.innerHTML += quizes[i].terceiraresposta
resposta4.innerHTML += quizes[i].quartaresposta






resposta1.addEventListener("click", () =>{

    quadrodeperguntas.style.pointerEvents = "none"


    if(resposta1.textContent == quizes[i].respostacerta + "A"){
        

     resposta1.style.backgroundColor = "greenyellow"

        setTimeout(() => {
        acertou()
}, "2000")

    }else{
        resposta1.style.backgroundColor = "rgb(243, 82, 82)"
        
        

setTimeout(() => {
errou()
}, "2000")
    }


})

resposta2.addEventListener("click", () =>{

    quadrodeperguntas.style.pointerEvents = "none"

    if(resposta2.textContent == quizes[i].respostacerta + "B"){
        

     resposta2.style.backgroundColor = "greenyellow"

        setTimeout(() => {
        acertou()
}, "2000")

    }else{
        resposta2.style.backgroundColor = "rgb(243, 82, 82)"

    setTimeout(() => {
    errou()
}, "2000")
    }


})

resposta3.addEventListener("click", () =>{

    quadrodeperguntas.style.pointerEvents = "none"

    if(resposta3.textContent == quizes[i].respostacerta + "C"){
        

     resposta3.style.backgroundColor = "greenyellow"

        setTimeout(() => {
        acertou()
}, "2000")

    }else{
        resposta3.style.backgroundColor = "rgb(243, 82, 82)"
       

setTimeout(() => {
errou()
}, "2000")
    }


})

resposta4.addEventListener("click", () =>{


    quadrodeperguntas.style.pointerEvents = "none"

    if(resposta4.textContent ==  quizes[i].respostacerta + "D"){
        

     resposta4.style.backgroundColor = "greenyellow"

        setTimeout(() => {
        acertou()
}, "2000")

    }else{
        resposta4.style.backgroundColor = "rgb(243, 82, 82)"

setTimeout(() => {
errou()
}, "2000")
    }


})

function jogarnovamente(){

if(playernameinp.value ==""){
    return
}

quadrodeperguntas.style.display = ""

finish.classList.add("finishoff")
playername.classList.remove("finishon")
finish.classList.remove("finishon")
playername.classList.add("playernameoff")
pts = 0
 i = 0
 resetgame()
 createtamplate()


}


let pts = 0


function acertou(){

  
resetgame()


i++
pts += 1

if(i == quizes.length){

   finishevent()
}


pergunta.innerHTML = `<h1>${quizes[i].pergunta}</h1>`
resposta1.innerHTML += quizes[i].primeiraresposta
resposta2.innerHTML += quizes[i].segundaresposta
resposta3.innerHTML += quizes[i].terceiraresposta
resposta4.innerHTML += quizes[i].quartaresposta
resetgame()
createtamplate()

}


function errou(){

    
    
resetgame() 
   
i++


if(i == quizes.length){

    finishevent()
    
}


pergunta.innerHTML = `<h1>${quizes[i].pergunta}</h1>`
resposta1.textContent = quizes[i].primeiraresposta
resposta2.textContent = quizes[i].segundaresposta
resposta3.textContent = quizes[i].terceiraresposta
resposta4.textContent = quizes[i].quartaresposta
resetgame()
createtamplate()


}

function resetgame(){
pergunta.innerHTML = `<h1>${quizes[i].pergunta}</h1>`
resposta1.innerText = quizes[i].primeiraresposta
resposta2.innerHTML = `<span>${quizes[i].segundaresposta}<span>`
resposta3.innerText = quizes[i].terceiraresposta
resposta4.innerText = quizes[i].quartaresposta
resposta1.style.backgroundColor = ""
resposta2.style.backgroundColor = ""
resposta3.style.backgroundColor = ""
resposta4.style.backgroundColor = ""
quadrodeperguntas.style.pointerEvents = ""
npergunta.innerText = i+1

}



createtamplate()

npergunta.innerText = i+1
