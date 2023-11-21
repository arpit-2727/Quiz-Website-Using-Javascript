document.addEventListener('DOMContentLoaded', (event) => {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-button');
    let currentQuestionIndex = 0;
  
    const questions = [
        {
            question: " 1 . Javascript is an ____ Language",
            options: ["object-oriented", "object-based", "procedural", "NOTA"],
            answer: "object-oriented"
        },
        {
            question: " 2 . Which of the following keywords is used to define a variable in JS ?",
            options : [" var " , " let " , " Both" , " NOTA "],
            answer : " Both "
        },
        
        {
            question:"4.What is use of <noscript> tag in JS?",
            options:["contents are displayed by non js based browsers","clears all the cookies and cache","both","NOTA"],
            answer:"contents are displayed by non js based browsers"
        },
        {
            question:"5.The process in which an object or data structure is translated into a format suitable for transferral over a network ,or storage called?",
            options:["object serialization","object encapsulation","object inheritance","NOTA"],
            ansser:"object serialization"
        }
        
    ];
  
    function loadQuestion(questionIndex) {
        const question = questions[questionIndex];
        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('btn', 'btn-option');
            button.onclick = () => selectOption(option);
            optionsElement.appendChild(button);
        });
    }
  
    function selectOption(selected) {
        const question = questions[currentQuestionIndex];
        if (selected === question.answer) {
            alert('Correct!');
        } else {
            alert('Wrong!');
        }
    }
  
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            alert('Quiz completed!');
            currentQuestionIndex = 0;
        }
        loadQuestion(currentQuestionIndex);
    });
  
    // Load the first question
    loadQuestion(currentQuestionIndex);
  });
  