import { Answer } from "@/types/Answer"

type Props ={
  answers: Answer[],
  activeQuestionId: number
}

export function IconQuestion({answers, activeQuestionId}: Props){
  const optionConvert: {[key: number]: string} = {
    0: '-',
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e'
  }

  function clickIconQuestion() {
    
  }

  function getIconStyle(state: number){
    if(state === 1) return ' bg-red-300 '
    if(state === 2) return ' bg-green-300 '
    return ' '
  }

  const option = answers[activeQuestionId].option;
  const state = answers[activeQuestionId].state;
  

  return (
    <div 
    className={getIconStyle(state) + ' h-10 w-10 border-2 rounded-full flex justify-center items-center cursor-pointer '}
    onClick={clickIconQuestion}
    >
      
      {optionConvert[option]}

    </div>
  );
}