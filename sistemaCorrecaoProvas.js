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
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    let resultado = 0
    for (const acertou of prova.questoes) {
        acertou.resposta === acertou.correta ? resultado++ : ''
    }
    let total = resultado * 2
    console.log(`
    O aluno(a) ${prova.aluno} acertou ${resultado} questões e obteve nota ${total}
    `);
}

corrigirProva(prova)
