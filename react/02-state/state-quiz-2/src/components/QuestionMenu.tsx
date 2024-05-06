import { Answer } from "@/types/Answer"
import { IconQuestion } from "./IconQuestion";

type Props = {
  answers: Answer[],
  setActiveAnswerId: Function,
  setShowAnsMenu: Function,
  showAnsMenu: boolean,
}

export function QuestionMenu({answers, setActiveAnswerId, setShowAnsMenu, showAnsMenu}: Props){

  return (

    <div
    className="absolute top-1/3 bg-white w-96 h-64 flex gap-5 p-3 flex-wrap "
    >
      {answers.map((answer, key) => (
        <IconQuestion 
        option={answer.option}
        state={answer.state}
        onClick={()=>{setShowAnsMenu(!showAnsMenu);setActiveAnswerId(key)}}
        key={key}
        
        /> 
      ))}
    </div>
  );
}