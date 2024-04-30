"use client"

import { questApi } from "@/api/questApi";
import { Answer } from "@/types/Answer";

type Props = {
  text: string,
  optNum: number,
  activeQuestionId: number,
  setAnswers: Function,
  answers: Answer[]
}


export function Option({text, optNum, activeQuestionId, setAnswers, answers}: Props){

  const activeAnswer = answers[activeQuestionId]

  function optionClick(){
    //optNum -1 pois a option 0 representa nenhuma option, enquanto nas respostas 0 já é a primeira opção

    if(answers[activeQuestionId].option === 0){

      const isAnswerRight = questApi.validateAnswer(activeQuestionId, (optNum - 1));

      const stateNum = isAnswerRight ? 2 : 1

      const newAnswers = [...answers]
      newAnswers[activeQuestionId].option = optNum;
      newAnswers[activeQuestionId].state = stateNum
      setAnswers(newAnswers)

    }

    
  }

  function getOptionStyles(){
    
    if(activeAnswer.option === optNum){
      if(activeAnswer.state === 2){
        return ' bg-green-300 cursor-default'
      } else if(activeAnswer.state === 1){
        return ' bg-red-300 cursor-default'
      } else {
        return ''
      }
    } else if(activeAnswer.option !== 0) {
      return ''
    } else {
      return 'hover:bg-slate-300 cursor-pointer'
    }
  }

  return (
    <div
      className={getOptionStyles() + ' w-40 p-3 m-4 border '}
      onClick={optionClick}
    >

      {text}
    </div>
  );
}