import { Answer } from "@/types/Answer";
import { Button } from "./Button";
import { Menu } from "./Menu";

type Props = {
  answers: Answer[],
  hasEmptyAnswer: boolean,
  setShowConfirmMenu: Function,
  setShowResult: Function,
}

export function ConfirmMenu({answers, hasEmptyAnswer, setShowConfirmMenu, setShowResult}: Props){
  return (
    <Menu
    title={'Você deseja enviar as respostas submeidas? ' + hasEmptyAnswer && 'Ainda existem questões não respondidas'}
    >

      <div className="h-96">
        <Button
        answers={answers}
        submit={()=>{setShowConfirmMenu(false);setShowResult(true)}}
        >
          Enviar
        </Button>
      </div>

      <div className="h-10">
        
      </div>

    </Menu>



    
  );
}