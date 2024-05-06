"use client"

import { convert } from "@/api/convert";
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

      const newAnswers = [...answers]
      newAnswers[activeQuestionId].option = optNum;
      newAnswers[activeQuestionId].state = questApi.validateAnswer(activeQuestionId, (optNum - 1));
      setAnswers(newAnswers)

    }

    
  }

  function getOptionStyles(){
    
    if(activeAnswer.option === optNum){
      if(activeAnswer.state){
        return ' bg-green-300 cursor-default'
      } else if(activeAnswer.state === null){
        return ''
      } else {
        return ' bg-red-300 cursor-default'
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

      {convert.con(optNum).toUpperCase()} - {text}
    </div>
  );
}