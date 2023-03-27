let valor1 = Number(prompt("Nota do Primeiro Bimestre!"))
let valor2 = Number(prompt("Nota do Segundo Bimestre!"))
let valor3 = Number(prompt("Nota do Terceiro Bimestre!"))
let valor4 = Number(prompt("Nota do Quarto Bimestre!"))
let soma = (valor1 + valor2 + valor3 + valor4) /4

alert("A média das notas dos bimestres é: " + soma)

if(soma >= 7){
    alert("Por incrivel que pareça você passou")
    
}else{
    alert("Boa sorte na proxima KKKK")
}

if(soma == 6.5){
    alert("Reprovar por meio ponto é foda :/")
}