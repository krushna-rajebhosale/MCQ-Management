const quizData = [
  {
    question: "What makes up a quality circle team?",
    options: [
      "Only upper management",
      "External consultants",
      "A group of workers from the same or different department",
      "A group of customers"
    ],
    answer: 2
  },
  {
    question: "A quality circle is primarily used for?",
    options: [
      "Production planning",
      "Continuous improvement",
      "Product design",
      "Strategic planning"
    ],
    answer: 1
  },
  {
    question: "Identify the best suitable Kaizen approach for problem-solving.",
    options: [
      "Top-down decision-making",
      "Reactive, only addressing problems after they occur",
      "Proactive, focusing on constant, small improvements",
      "Ignoring employee feedback in decision-making"
    ],
    answer: 2
  },
  {
    question: "The main goal of Six Sigma methodology is?",
    options: [
      "To eliminate defects and improve quality",
      "Increase production speed",
      "To reduce the number of employees",
      "To lower operational costs without considering quality"
    ],
    answer: 0
  },
  {
    question: "In a Kanban system, what does a Kanban card typically represent?",
    options: [
      "A detailed list of orders",
      "A request for more raw materials",
      "A visual signal for replenishing inventory",
      "A work schedule for employees"
    ],
    answer: 2
  }
];

const quizContainer = document.getElementById("quiz-container");
const scoreElement = document.getElementById("score");
let score = 0;

function loadQuiz() {
  quizData.forEach((item, qIndex) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const questionEl = document.createElement("div");
    questionEl.className = "question";
    questionEl.textContent = `${qIndex + 1}. ${item.question}`;

    const optionsEl = document.createElement("div");
    optionsEl.className = "options";

    const resultEl = document.createElement("div");
    resultEl.className = "result";

    item.options.forEach((option, oIndex) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = option;

      btn.addEventListener("click", () => {
        const allButtons = optionsEl.querySelectorAll(".option-btn");

        allButtons.forEach((b, index) => {
          b.disabled = true;

          if (index === item.answer) {
            b.classList.add("correct");
          }
        });

        if (oIndex === item.answer) {
          btn.classList.add("correct");
          resultEl.textContent = "Correct";
          resultEl.style.color = "green";
          score++;
          scoreElement.textContent = score;
        } else {
          btn.classList.add("wrong");
          resultEl.textContent = "Wrong";
          resultEl.style.color = "red";
        }
      });

      optionsEl.appendChild(btn);
    });

    card.appendChild(questionEl);
    card.appendChild(optionsEl);
    card.appendChild(resultEl);
    quizContainer.appendChild(card);
  });
}

loadQuiz();
