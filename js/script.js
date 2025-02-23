let num1, num2, operator, correctAnswer;

function newQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    let operators = ['+', '-', '*'];
    operator = operators[Math.floor(Math.random() * operators.length)];

    correctAnswer = eval(`${num1} ${operator} ${num2}`);
    document.getElementById('question').innerText = `${num1} ${operator} ${num2} = ?`;
    document.getElementById('result').innerText = "";
    document.getElementById('answer').value = "";
}

function checkAnswer() {
    let userAnswer = document.getElementById('answer').value;
    if (parseInt(userAnswer) === correctAnswer) {
        document.getElementById('result').innerText = "Correto!";
    } else {
        document.getElementById('result').innerText = "Errado! Tente novamente.";
    }
}

newQuestion();
