"use client"

import { questApi } from "@/api/questApi";

type Props = {
  text: string,
  optNum: number,
  activeQuestionId: number
  activeAnswer: {
    option: number,
    state: number
  },
  setActiveAnswer: Function,
}


export function Option({text, optNum, activeQuestionId, activeAnswer, setActiveAnswer}: Props){

  function optionClick(){
    //optNum -1 pois a option 0 representa nenhuma option, enquanto nas respostas 0 já é a primeira opção
    const isAnswerRight = questApi.validateAnswer(activeQuestionId, (optNum - 1));
    const numAnswer = isAnswerRight ? 2 : 1
    setActiveAnswer({option: optNum, state: numAnswer})
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