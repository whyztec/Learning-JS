/* Enunciado
12) Faça um algoritmo que calcule o fatorial de um número.
*****************/

function Factorial(number) {
    // Variáveis
    let PreviousResult = 0;
    let Factorial = 0;

    // Obtendo o valor do input
    number = document.getElementById('factorial-id').value;
    // Algoritmo 
    if (number % 1 !== 0 || number < 0) {
        Factorial = "Informe um número inteiro e positivo!"
    } else {
        if (number == 0 || number == 1) {
            Factorial = 1
        } else {
            for (var i = 1; i < number; i++) {
                if (i == 1) {
                    Factorial = number * (number - i);
                } else {
                    PreviousResult = Factorial;
                    Factorial = PreviousResult * (number - i);
                }
            }
        }
    }
    //Escrevendo na tela
    document.getElementById('question-answer').innerHTML = Factorial;
}