import { getEmptyAnswers } from "@/contexts/PageContext";
import { pageContext } from "@/contexts/PageContext";
import { useContext } from "react";
import { changeMenuList } from "./MenuQuestions";

export function MenuSubmitBody(){
  const {answers, activeQuestionId, questions, setActiveQuestionId, setAnswers} = useContext(pageContext);
  const numRightAnswers = answers.filter(a=>a.state).length
  
  return (
    <div>
      <div className="h-64 overflow-y-scroll">
        {answers.map((answer, index) => {
          return (
            <div
            className={(answer.option !== null ? answer.state ? 'bg-green-200': 'bg-red-200' : 'bg-slate-50') + ' p-2 cursor-default'}
            >
              <p>{questions[index].title}</p>

              <p
              className={''}
              >{ answer.option !== null ? questions[index].options[answer.option] : '-'}</p>
            </div>
          );
        })}
      </div>

      <p>Você acertou {numRightAnswers} questões de {questions.length}. {numRightAnswers/questions.length > 0.5 ? 'Parabéns!' : 'Você ainda pode melhorar'}</p>
    </div>
  );
}

export function MenuSubmitFooter(){
  const {questions, setActiveQuestionId, setAnswers, setActiveMenuName, menuList, setMenuList} = useContext(pageContext);

  function tryAgain() {
    setActiveMenuName('questions')
    setAnswers(getEmptyAnswers(questions))
    setActiveQuestionId(0)
    changeMenuList({questionId:0, menuList: menuList, setMenuList: setMenuList, questions:questions})
  }
  
  return (
    <div>

      <button className="w-40 py-1 bg-blue-500 rounded m-2 text-white text-md"
      onClick={tryAgain}
      >
        Tentar novamente
      </button>

    </div>
  );
}