import { questionsAnswers } from "@/data/questionsAnswers"

export const questApi = {
  validateAnswer(questionId: number, answer: number){
    console.log(questionId, questionsAnswers, questionsAnswers[questionId])
    return questionsAnswers[questionId].answer === answer
  },

  requestQuestions(){
    return questionsAnswers.map(question => {return{title: question.title, options: question.options}})
  }

}