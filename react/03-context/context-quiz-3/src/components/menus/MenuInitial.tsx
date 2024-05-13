import { pageContext } from "@/contexts/PageContext";
import { useContext } from "react";


export function MenuInitialBody(){
  
  return (

    <div>

      <p>Você pode criar seu quiz, ou responder às perguntas já configuradas, o que deseja fazer?</p>

      

    </div>
  );
}

export function MenuInitialFooter(){
  const {setActiveMenuName} = useContext(pageContext);

  return(
    <div>
      <button
      className="w-28 text-blue-400 font-semibold border-2 border-blue-400 py-2"
      onClick={setActiveMenuName('creation')}
      >
        Criar meu quiz/
      </button>

      <button
      className="w-28 bg-blue-400 font-semibold border-2 border-blue-400 py-2 text-white"
      onClick={setActiveMenuName('questions')}
      >
        Fazer quiz
      </button>
    </div>
  );
}