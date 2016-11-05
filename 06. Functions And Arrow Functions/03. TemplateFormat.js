function drawTemplate(questionsAndAnswers) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<quiz>');

    for (let i = 0; i < questionsAndAnswers.length; i += 2) {
        let question = questionsAndAnswers[i];
        let answer = questionsAndAnswers[i + 1];

        drawQuestion(question);
        drawAnswer(answer);
    }

    console.log('</quiz>');

    function drawQuestion(question) {
        console.log('    <question>');
        console.log('      ' + question);

        console.log('    </question>');
    }

    function drawAnswer(answer) {
        console.log('    <answer>');
        console.log('      ' + answer);
        console.log('    </answer>');
    }
}

drawTemplate(['Who was the forty-second preside of the U.S.A?', 'William Jefferson Clinton', 'Who was the forty-second preside of the U.S.A?', 'William Jefferson Clinton']);