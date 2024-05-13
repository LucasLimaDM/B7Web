import { quest } from "@/api/quest"
import { pageContext } from "@/contexts/PageContext";
import { useContext } from "react";

type Props = {
  value: string,
  state: boolean|null,
  option: number,
}

export function Option({value, state, option}: Props){
  const {answers, activeQuestionId, questions, setActiveQuestionId, setAnswers} = useContext(pageContext);

  function getOptionStyles(){
    if(state && answers[activeQuestionId].option === option) return ' bg-green-200 hover:bg-green-300 '
    if(state === null || answers[activeQuestionId].option !== option) return ' bg-slate-50 hover:bg-slate-100 '
    if(answers[activeQuestionId].option === option) return ' bg-red-200 hover:bg-red-300 '

  }

  function clickOption(){
    if(state !== null) return;

    const newAnswers = [...answers]
    newAnswers[activeQuestionId].state = quest.validate(option, activeQuestionId);
    newAnswers[activeQuestionId].option = option;
    setAnswers(newAnswers);


    
  }

  return (
    <div
    className={getOptionStyles() + ' w-52 p-4 cursor-pointer'}
    onClick={()=>clickOption()}
    >
      {value}
    </div>
  );
}