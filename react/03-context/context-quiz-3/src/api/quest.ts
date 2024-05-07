import { questionsAnswers } from "@/data/questionsAnswers"
"resumidor de emails!!"
export const quest = {
  get(){
    return questionsAnswers.map((question, index) => {
      return {title: question.title, options: question.options}
    });
  },

  validate(option: number, questionId:number){
    return questionsAnswers[questionId].answer === option
  }
}