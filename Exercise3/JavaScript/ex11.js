/* JS-Document
 *****************/

/* 
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