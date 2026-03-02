//Exercicio 1 - Olá, Mundo!
function exercicio1() {
    alert(`Olá, Mundo!!`)
}
exercicio1()

//Exercicio 2 - Nome e Sobrenome
function exercicio2() {
    const nome = prompt("Digite seu Nome:")
    const sobrenome = prompt("Digite seu Sobrenome:")

    const completo = ('Olá ' + " " + nome + " " + sobrenome + "!");

    alert(`${completo}`);
}
exercicio2()
//Exercicio 3 - Soma de Dois Números
function exercicio3() {
    const N1 = parseFloat(prompt("Digite um Número:"))
    const N2 = parseFloat(prompt("Digite outro Número:"))

    alert(`O resultado é: ${N1 + N2}`);
}
exercicio3()

//Exercicio 4 - Calculadora de Média
function exercicio4() {
    const Nota1 = parseFloat(prompt("Digite sua primeira nota:"))
    const Nota2 = parseFloat(prompt("Digite sua primeira nota:"))
    const Nota3 = parseFloat(prompt("Digite sua primeira nota:"))

    alert(`A sua média é: ${(Nota1 + Nota2 + Nota3) / 3}`)
}

exercicio4()
//Exercicio 5 - Sucessor e Antecessor
function exercicio5() {

    const n = Number(prompt("Digite o numero: "))
    const Suce = n + 1
    const Ante = n - 1

    alert(`O sucessor é  + ${Suce} + . O antecessor é  + ${Ante}`)

}
exercicio5()

//Exercicio 6 - Aumento Salarial
function exercicio6() {

    const salario = Number(prompt(`Digite o salário`));
    const novoSalario = salario * 1.15;

    alert(`Novo Salário: R$ ${novoSalario} Sálario antigo: R$ ${salario}`);
    alert(`Novo salário: R$ ${novoSalario}`);
}
exercicio6()

//Exercicio 7 - Conversor de Moedas

function exercicio7() {
    const valor = Number(prompt("Digite o valor a ser convertido."))
    const dolar = 5.20
    const valor_convertido = valor / dolar

    alert(`O valor de R$ ${valor} convertido ao dolar, que atualmente está no valor  ${dolar.toFixed(2)} USD  é  ${valor_convertido.toFixed(2)} USD`)
}
exercicio7()

//Exercicio 8 - Par ou Ímpar?

function exercicio8() {
    const number = Number(prompt("Digite um número"))

    if (number % 2 === 0) {
        alert("O número " + number + " É par");
    } else {
        alert("O número " + number + " É impar");
    }
}
exercicio8()

//Exercicio 9 - Maior de Idade

function exercicio9() {
    const idade = parseFloat(prompt("Digite sua idade"))

    if (idade >= 18) {
        alert("Você é maior de idade")
    } else {
        alert("Você é menor de idade")
    }
}
exercicio9()

//Exercicio 10 - Qual é maior?
function exercicio10() {

    alert("Descubra o maior número entre dois valores informados")

    const number1 = Number(prompt("Digite o 1º número"))
    const number2 = Number(prompt("Digite o 2º número"))

    if (number1 > number2) {
        alert(`O maior número é ${number1}`)
    } else {
        alert(`O maior número é ${number2}`)
    }
}

exercicio10()
//Exercicio 11 - Aprovado ou Reprovado?

function exercicio11() {

    const nota1 = Number(prompt("digite a primeira nota"))
    const nota2 = Number(prompt("digite a segunda nota"))
    const nota3 = Number(prompt("digite a nota 3"))

    const resultado = (nota1 + nota2 + nota3) / 3

    // condicional
    if (resultado >= 7) {
        alert("aprovado, a sua média é " + resultado)
    } else {
        alert("reprovado a sua nota é " + resultado)
    }
}
exercicio11()

//Exercicio 12 - Positivo, Negativo ou Zero?

function exercicio12() {
    const Numero = Number(prompt("Digite um número: "))

    if (Numero > 0) {
        alert("O número é positivo.")
    } else if (Numero < 0) {
        alert("O número é negativo.")
    } else {
        alert("O número é zero.")
    }
}
exercicio12()

//Exercicio 13 - Categoria de Nadador
function exercicio13() {
    const categoria = Number(prompt("Digite sua idade: "))

    if (categoria < 5) {
        alert("idade insuficiente para competir.")
    } else if (categoria <= 7) {
        alert("Classificação: Infantil A")
    } else if (categoria <= 11) {
        alert("Classificação: Infantil B")
    } else if (categoria <= 13) {
        alert("Classificação: Juvenil A")
    } else if (categoria <= 17) {
        alert("Classificação: Juvenil B")
    } else {
        alert("Classificação: Adulto")
    }
}
exercicio13()

//Exercicio 14 - Login Simples
function exercicio14() {

    const usuario = prompt("Digite um usuario")
    const senha = prompt("Digite sua senha")

    if (usuario === "admin" && senha === "1234") {
        alert("Você esta autenticado")
    } else {
        alert("Usuario ou senha incorreta")
    }
}
exercicio14()

//Exercicio 15 - Calculadora de IMC

function exercicio15() {

    const peso = Number(prompt("Digite seu peso em kg"));
    const altura = Number(prompt("Digite sua altura em metros"));

    const imc = peso / (altura * altura)
    let classificacao = ""

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III (mórbida)";
    }

    alert(`Seu IMC é ${imc.toFixed(2)} e sua classificação é ${classificacao}`);
}
exercicio15()
