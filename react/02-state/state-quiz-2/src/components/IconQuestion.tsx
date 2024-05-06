import { convert } from "@/api/convert"
import { Answer } from "@/types/Answer"

type Props ={
  option: number,
  state: boolean | null,
  onClick: Function,
}

export function IconQuestion({option, state, onClick}: Props){

  const optionConvert: {[key: number]: string} = {
    0: '-',
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e'
  }

  function getIconStyle(state: boolean | null){
    if(state) return ' bg-green-300 '
    if(state===null) return ' '
    return ' bg-red-300 '
    
  }
  

  return (
    <div 
    className={getIconStyle(state) + ' h-10 w-10 border-2 rounded-full flex justify-center items-center cursor-pointer'}
    onClick={()=>onClick()}
    >
      
      {convert.con(option).toUpperCase()}

    </div>
  );
}