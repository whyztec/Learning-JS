/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.

*/

function NumeroDivisivel(numero) {
    //Variáveis 
    let Situation;
    // Obtendo Valor da nota inserida no input
    numero = document.getElementById('input-answer').value;
    if ((numero % 3) === 0) {
        Situation = true;

    } else {
        Situation = false;
    }
    document.getElementById('question-answer').innerHTML = Situation;

}