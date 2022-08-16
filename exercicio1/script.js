//# Exercício 1

let nun = prompt("Você deseja comer mais coxinhas?")
const s = 2.50
let valor = 0
while(nun !== "n"){
    valor += s
    alert ("ok, mada mais")
           //soma = soma + num
    nun = prompt ("Você deseja comer mais coxinhas?")
} 
alert (`A conta deu: ${valor} R$`) 
