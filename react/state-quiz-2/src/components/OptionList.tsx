"use client"

import { Option } from "./Option";

type Props = {
  activeQuestionId: number,
  options: string[],
  activeAnswer: {
    option: number,
    state: number,
  },
  setActiveAnswer : Function,
}

export function OptionList({activeQuestionId, options, activeAnswer, setActiveAnswer}: Props){
  console.log(options)
  return (
    options.map((option, key) => {
      return(
        <Option
          text={option}
          optNum={key + 1}
          activeQuestionId={activeQuestionId}
          activeAnswer={activeAnswer}
          setActiveAnswer={setActiveAnswer}
        />
      );
    
  })
  );
}