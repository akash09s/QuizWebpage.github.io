const quizDB = [
  {
    question: "Q1: Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?",
    a: "DML(Data Manipulation Language)",
    b: "Query",
    c: "Relational Schema",
    d: "DDL(Data Definition Language)",
    ans: "ans4"
  },
  {
    question: "Q2: Which one of the following given statements possibly contains the error?",
    a: "select * from emp where empid = 10003;",
    b: "select empid from emp where empid = 10006;",
    c: "select empid from emp;",
    d: "select empid where empid = 1009 and Lastname = 'GELLER';",
    ans: "ans4"
  },
  {
    question: "Q3: What do you mean by one to many relationships?",
    a: "One class may have many teachers",
    b: "One teacher can have many classes",
    c: "Many classes may have many teachers",
    d: "Many teachers may have many classes",
    ans: "ans2"
  },
  {
    question: "Q4: Which of the following command is a type of Data Definition language command?",
    a: "Create",
    b: "Update",
    c: "Delete",
    d: "Merge",
    ans: "ans1"
  },
  {
    question: "Q5: The term SQL stands for",
    a: "Standard query language",
    b: "Sequential query language",
    c: "Structured query language",
    d: "Server-side query language",
    ans: "ans3"
  }

];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore')

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
      answer = curAnsElem.id;
    }
  });
  return answer;


};

const deselectAll = () => {
  answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () =>{
  const CheckedAnswer = getCheckAnswer();
  console.log(CheckedAnswer);
  if(CheckedAnswer === quizDB[questionCount].ans) {
    score++;
  };
  questionCount++;
  deselectAll();
  if(questionCount < quizDB.length){
    loadQuestion();
  }
  else {
    showScore.classList.remove('scoreArea');
    alert("You Scored "+score);
  }


});
