/*
09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

/* Nota:

 Se a nota >
    menos um multiplo de 5 maior que a nota, obter um resultado menor que 3: Nota arredondada para esse multiplo.
 Se a nota >
    for menor que 38 não sera arredondada: Reprovação
 Se a nota >
    for igual a 38, sera arredondada para o multiplo de 5 mais perto da nota.
 Se a nota >
    maior ou igual a 40: Aprovado
*/

function Arredonda_Nota() {

    // Variáveis
    var MultiploD5 = 0;
    var Nota = 0;
    // Obtendo Valor da nota inserida no input
    Nota = document.getElementById('cod1').value;

    // Obtendo Multiplo Maior que a nota
    if (Nota > MultiploD5) {
        while (MultiploD5 < Nota) {
            MultiploD5 = MultiploD5 + 5;
        }
    }
    // Verificando se a subtração dos dois obtêm resultado menor que 3
    if ((MultiploD5 - Nota) < 3) {
        Nota = MultiploD5
    }
    // Verificando se a nota é suficiente para aprovação
    if (Nota <= 38) {
        Situacao = "Reprovou."
    } else {
        Situacao = "Passou!"
    }

    document.getElementById('result1').innerHTML = Situacao;

}