// Faq Section

const questionClick = document.querySelectorAll(".faq");
for (let i = 0; i < questionClick.length; i++) {
    questionClick[i].addEventListener("click", questionClicked);
}

// cette fonction est appelée lorsque la question est cliqué
function questionClicked() {
    let clickedElement = this;
    multipleAnswers(clickedElement);
}

function multipleAnswers(clickedElement) {
    // Répétez sur chaque élément de document en vérifiant une classe "active-question"
    let allQuestions = document.querySelectorAll(".faq");
    for (let i = 0; i < allQuestions.length; i++) {
        if (
            allQuestions[i]
            .querySelector(".question")
            .classList.toString()
            .includes("active-question") &&
            allQuestions[i].querySelector(".question").classList !==
            clickedElement.querySelector(".question").classList
        ) {
            toggleQuestion(allQuestions[i]);
        }
    }
    toggleQuestion(clickedElement);

}

function displayAnswer(clickedElement) {
    toggleQuestion(clickedElement);
}

// Cette fonction fait apparaître la réponse
function toggleQuestion(clickedElement) {
    clickedElement.querySelector(".question").classList.toggle("active-question");

    let answer = clickedElement.querySelector(".answer");

    // Animation
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
    }

}
