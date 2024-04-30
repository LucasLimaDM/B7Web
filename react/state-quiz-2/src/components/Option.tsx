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
    const isAnswerRight = questApi.validateAnswer(activeQuestionId, (optNum - 1));

    const stateNum = isAnswerRight ? 2 : 1

    const newAnswers = [...answers]
    newAnswers[activeQuestionId].option = optNum;
    newAnswers[activeQuestionId].state = stateNum
    setAnswers(newAnswers)
  }

  function getOptionStyles(){
    
    if(activeAnswer.option === optNum){
      if(activeAnswer.state === 2){
        return ' bg-green-300 hover:bg-green-400 '
      } else if(activeAnswer.state === 1){
        return ' bg-red-300 hover:bg-red-400 '
      } else {
        return ''
      }
    } else {
      return 'hover:bg-slate-300'
    }
  }

  return (
    <div
      className={getOptionStyles() + ' w-40 p-3 m-4 border cursor-pointer '}
      onClick={optionClick}
    >

      {text}
    </div>
  );
}