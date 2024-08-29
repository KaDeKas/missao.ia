function submitQuiz() {
    const form = document.getElementById('quizForm');
    const result = document.getElementById('result');

    const correctAnswers = {
        q1: 'b',
        q2: 'c',
        q3: 'b'
    };

    let score = 0;
    let feedback = '<h2>Resultados:</h2>';
    
    const formData = new FormData(form);
    
    for (const [name, value] of formData.entries()) {
        if (correctAnswers[name] === value) {
            score++;
        } else {
            feedback += `<p>Pergunta ${name.charAt(1)}: Resposta incorreta. Resposta correta: ${getCorrectAnswerText(name)}</p>`;
        }
    }

    feedback += `<p>Você acertou ${score} de 3 perguntas.</p>`;
    result.innerHTML = feedback;
    result.classList.remove('hidden');
}

function getCorrectAnswerText(question) {
    const answers = {
        q1: {
            b: "Diferenças econômicas",
            a: "A falta de educação",
            c: "Diferenças culturais"
        },
        q2: {
            c: "Melhoria na educação e acesso a serviços sociais",
            a: "Redução de impostos",
            b: "Aumento de salários mínimos"
        },
        q3: {
            b: "Igualdade de oportunidades para todos",
            a: "Exclusão de grupos minoritários",
            c: "Incentivo ao individualismo"
        }
    };
    return answers[question][correctAnswers[question]];
}
