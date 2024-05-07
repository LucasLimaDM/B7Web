import { Menu } from "@/types/Menu";
import { Question } from "@/types/Question";
import { pageContext } from "@/contexts/PageContext";
import { useContext } from "react";
import { Option } from "../Option";
import { Button } from "../Button";

export function MenuQuestionsBody(){
  const {answers, activeQuestionId, questions, setActiveQuestionId, setAnswers} = useContext(pageContext);
  

  return(
    <div>
      {questions[activeQuestionId].options.map((option, index) => {
        return (
          <div className="my-4">
            <Option
            state={answers[activeQuestionId].state}
            value={questions[activeQuestionId].options[index]}
            option={index}
            key={index}
            />
          </div>
        );
      })}
    </div>
  );
}

type PropChangeMenu = {
  questionId: number, 
  menuList: Menu[], 
  questions: Question[], 
  setMenuList: Function
}

export function changeMenuList({questionId, menuList, setMenuList, questions}: PropChangeMenu){
  const newMenuList = [...menuList]
  newMenuList.filter(menu=>menu.name === 'questions')[0].title = questions[questionId].title;
  setMenuList(newMenuList)
}

export function MenuQuestionsFooter(){
  const {answers, activeQuestionId, questions, setActiveQuestionId, setActiveMenuName, setMenuList, menuList, activeMenuName } = useContext(pageContext);



  function nextQuestion(){
    if((activeQuestionId+1) < questions.length) {
      setActiveQuestionId(activeQuestionId+1)
      changeMenuList({questionId: (activeQuestionId+1), menuList: menuList, setMenuList: setMenuList, questions:questions})
    }

  }
  function prevQuestion() {
    if(activeQuestionId > 0) {
      setActiveQuestionId(activeQuestionId-1)
      changeMenuList({questionId: (activeQuestionId-1), menuList: menuList, setMenuList: setMenuList, questions:questions})
  }
  }

  return (
    <div className="h-full flex justify-between items-end">
      <div>
        <p>Questão {activeQuestionId + 1} de {questions.length}</p>

        <button
        onClick={()=> {setActiveMenuName('confirm')}}
        className="w-28 py-1 bg-blue-500 rounded m-2 text-white font-semibold"
        >
          Enviar
        </button>
      </div>

      <div></div>

      <div className="flex items-center justify-between gap-2">
        <button
        onClick={prevQuestion}
        >
          <img className="h-8 rotate-180" src="/assets/next.svg" alt="previous" />
        </button>

        <button
        onClick={nextQuestion}
        >
          <img className="h-8 " src="/assets/next.svg" alt="previous" />
        </button>
      </div>
    </div>
  );
}

