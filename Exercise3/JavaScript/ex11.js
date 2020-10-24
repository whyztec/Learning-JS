/* JS-Document
 *****************/

/* 11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
 *****************/

function YearsBissexto(Years) {
    // Variáveis
    const FourYears = 4; // = Bissexto
    const OneHundredYears = 100; // = Não Bissexto
    const FourHundredYears = 400; // = Bissexto
    let Situation;
    // Obtendo valor do input
    Years = document.getElementById('years-id').value;
    // Calculos
    if ((Years % FourYears) == 0) {
        Situation = true;
    }
    if ((Years % OneHundredYears) == 0) {
        Situation = false;
    }
    if ((Years % FourHundredYears) == 0) {
        Situation = true;
    }


    document.getElementById('question-answer').innerHTML = Situation;

}