// https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple
import { Quiz } from "./quiz.js";
import {Question} from "./question.js"
export let finalData
export let quiz;
// ^ ---> Elements
let categoryMenu = document.getElementById('categoryMenu')
let difficultyOptions = document.getElementById('difficultyOptions')
let questionsNumber = document.getElementById('questionsNumber')
let startQuiz = document.getElementById('startQuiz')
const quizForm = document.getElementById('quizOptions')
export const questionCont = document.querySelector('.questions-container')


// ^ ---> Events
startQuiz.addEventListener('click',async () =>{
    let category = categoryMenu.value
    let difficulty = difficultyOptions.value
    let amount = questionsNumber.value


    quiz = new Quiz(amount,category,difficulty)
    finalData = await quiz.getQuestions()

    const question = new Question(0)


    quizForm.classList.replace('d-flex','d-none')

    question.displayQuestion();
})


