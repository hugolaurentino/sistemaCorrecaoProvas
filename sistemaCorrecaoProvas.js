const prova = {
    aluno: "Victor",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "a",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let resultadoAcertado = 0
    for (const acertou of prova.questoes) {
        acertou.resposta === acertou.correta ? resultadoAcertado++ : ''
    }
    let valorQuestao = prova.valor / prova.questoes.length
    let totalAcertado = resultadoAcertado * valorQuestao

    resultadoAcertado < 1 ?
        console.log(`
    O aluno(a) ${prova.aluno} acertou ${resultadoAcertado} de ${prova.questoes.length} questão e obteve nota ${totalAcertado} TEM QUE ESTUDAR MAIS !!
    `) :
        resultadoAcertado === 1 ?
            console.log(`
    O aluno(a) ${prova.aluno} acertou ${resultadoAcertado} de ${prova.questoes.length} questão e obteve nota ${totalAcertado} PRECISA SE ESFORÇA !!
    `) :
            resultadoAcertado === prova.questoes.length ?
                console.log(`
    O aluno(a) ${prova.aluno} acertou ${resultadoAcertado} de ${prova.questoes.length} questões e obteve nota ${totalAcertado} PARABÉNS !!
    `) :
                console.log(`
    O aluno(a) ${prova.aluno} acertou ${resultadoAcertado} de ${prova.questoes.length} questões e obteve nota ${totalAcertado} VOCÊ CONSEGUE !!
    `)
}

corrigirProva(prova)
