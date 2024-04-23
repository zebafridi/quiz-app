// Define quiz questions and answers
const quizData = [
    {
      question: 
      "When do we pray Fajr?",
      choices: ["night", "morning", "evening", "afternoon"],
      correctAnswer: "night"
    },
    {
        question: "What are the companions of the Prophet called?",
        choices: ["sathi", "sahaba", "dost", "frineds"],
        correctAnswer: "sahaba"
      },

      {
        question: "How many pillars of Islam are there?",
        choices: ["3", "5", "4", "6"],
        correctAnswer: "5"
      },



    {
      question: "What does Prophet Musa's stick turn into?",
      choices: ["montain", "stone", "bird", "snaks"],
      correctAnswer: "snaks"
    },
    {
        question: "What is the first month of the Islamic calendar",
        choices: ["ramazan", "moharram", "zai hajja", "zaiqaida"],
        correctAnswer: "moharram"
      },
    // Add more questions here
  ];
  
  // Initialize variables
  let currentQuestion = 0;
  let score = 0;
  
  // Function to load question
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    
    questionElement.textContent = quizData[currentQuestion].question;
    choicesElement.innerHTML = "";
  
    quizData[currentQuestion].choices.forEach(choice => {
      const choiceElement = document.createElement("button");
      choiceElement.textContent = choice;
      choiceElement.addEventListener("click", () => checkAnswer(choice));
      choicesElement.appendChild(choiceElement);
    });
  }
  
  // Function to check answer
  function checkAnswer(choice) {
    if (choice === quizData[currentQuestion].correctAnswer) {
      score++;
    //   document.getElementById("result").textContent = "Correct!";
    } else {
    //   document.getElementById("result").textContent = "Incorrect!";
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      // Display final score
      document.getElementById("question").textContent = "Quiz completed!";
      document.getElementById("choices").innerHTML = "";
      document.getElementById("submit").style.display = "none";
      document.getElementById("result").textContent = `Your score: ${score}/${quizData.length}`;
  
      // Save score to local storage
      localStorage.setItem("quizScore", score);
    }
  }
  
  // Event listener for submit button
  document.getElementById("submit").addEventListener("click", loadQuestion);
  
  // Load first question
  loadQuestion();
  