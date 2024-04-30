"use client"

import { Answer } from "@/types/Answer";
import { Option } from "./Option";

type Props = {
  activeQuestionId: number,
  options: string[],
  setAnswers : Function,
  answers: Answer[],
}

export function OptionList({activeQuestionId, options, setAnswers, answers}: Props){
  return (
    options.map((option, key) => {
      return(
        <Option
          text={option}
          optNum={key + 1}
          activeQuestionId={activeQuestionId}
          setAnswers={setAnswers}
          answers={answers}
        />
      );
    
  })
  );
}