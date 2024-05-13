import { pageContext } from "@/contexts/PageContext";
import { useContext } from "react";


export function MenuConfirmBody(){
  const {answers, activeQuestionId, questions, setActiveQuestionId, setAnswers} = useContext(pageContext);
  return (
    <div>
      Após isso você não poderá alterar suas respostas
    </div>
  );
}

export function MenuConfirmFooter(){
  const {answers, activeQuestionId, questions, setActiveQuestionId, setAnswers, setActiveMenuName} = useContext(pageContext);

  function submitAnswers(){
    setActiveMenuName('submit')
  }

  function backToQuestions(){
    setActiveMenuName('questions')
  }

  return (
    <div>
      <button
      className="w-24 py-1 bg-blue-500 rounded m-2 text-white"
      onClick={submitAnswers}
      >Enviar</button>
      <button
      className="w-24 py-1 bg-red-500 rounded m-2 text-white"
      onClick={backToQuestions}
      >Cancelar</button>
    </div>
  );
}