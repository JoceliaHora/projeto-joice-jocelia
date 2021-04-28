let nome = window.prompt("Qual seu nome?") 
window.alert(`É um prazer te conhecer, ${nome}`)

let continuar =  window.prompt("Deseja continuar o quis?\n 1.Sim \n 2. Não")


if (continuar == "2"){
window.alert("Foi um prazer ter você aqui!")}
else if (continuar == "1"){
let res1 = window.prompt("Qual o resultado da soma 100+30")
if (res1== "130"){
    document.getElementById("respostascertas").innerHtml = "Resposta 1"
}
else if (res1!= "130") {
    document.getElementById("respostaserradas").document.write("Resposta 1")
}

}
let res2= window.prompt("Qual o resultado da soma 50+5")
if (res2=="55"){
    document.getElementById ("respostascertas").innerHtml = "Resposta 2".document.write("Resposta 2")
}
else if (res2!="55") {
    document.getElementById("respostaserradas").document.write("Resposta 2")
}

let res3= window.prompt("Qual resultado da soma 5+5")
if (res3=="10"){
    document.getElementById ("respostascertas").document.write("Resposta 3")
}
else if(res3!="10"){
    document.getElementById ("respostaserradas").document.write("Resposta 3")
}


































































































