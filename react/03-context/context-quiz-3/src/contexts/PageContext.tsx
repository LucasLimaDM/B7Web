import { ReactNode, createContext, useState } from "react";
import { Answer } from "@/types/Answer";
import { Menu } from "@/types/Menu";
import { Question } from "@/types/Question";
import { quest } from "@/api/quest";
import { MenuQuestionsBody, MenuQuestionsFooter } from "@/components/menus/MenuQuestions";
import { MenuConfirmBody, MenuConfirmFooter } from "@/components/menus/MenuConfirm";
import { MenuSubmitBody, MenuSubmitFooter } from "@/components/menus/MenuSubmit";
import { MenuInitialBody, MenuInitialFooter } from "@/components/menus/MenuInitial";

export type PageContextType = {
  questions: Question[],
  answers: Answer[],
  setAnswers: Function,
  activeQuestionId: number,
  setActiveQuestionId: Function,
  activeMenuName: string,
  setActiveMenuName: Function,
  setMenuList: Function,
  menuList: Menu[],
}

export const pageContext = createContext<PageContextType>({
  answers: [],
  questions: [],
  activeQuestionId: 0,
  setActiveQuestionId: ()=> {},
  setAnswers: ()=>{},
  setActiveMenuName: ()=>{},
  setMenuList: ()=>{},
  menuList: [],
  activeMenuName: '',
});

export function getEmptyAnswers(questions: Question[]){
  return questions.map((question, index) => {
    return {question: index, option: null, state: null}
  })
}

export function PageContext({children}: {children: ReactNode}){

  const questions = quest.get();
  const [answers, setAnswers] = useState(getEmptyAnswers(questions));
  const [activeQuestionId, setActiveQuestionId] = useState(0);
  const [menuList, setMenuList] = useState<Menu[]>([
    {
      name:'initial',
      title:'Auto Quiz React',
      body:<MenuInitialBody />,
      footer: <MenuInitialFooter />
  
    },
      
      
      {
      name: 'questions',
      title: questions[activeQuestionId].title,
      body: <MenuQuestionsBody/>,
      footer: <MenuQuestionsFooter />
    }, 
  
    {
      name: 'confirm',
      title: 'Enviar respostas para o formulário?',
      body: <MenuConfirmBody/>,
      footer: <MenuConfirmFooter />,
    },
  
    {
      name: 'submit',
      title: 'Resultado:',
      body: <MenuSubmitBody />,
      footer: <MenuSubmitFooter />,
    }
  
  
    ])
  
    const [activeMenuName, setActiveMenuName] = useState('questions')

  const pageContextData = {
    questions: questions,
    answers: answers,
    setAnswers: setAnswers,
    activeQuestionId: activeQuestionId,
    setActiveQuestionId: setActiveQuestionId,
    setActiveMenuName: setActiveMenuName,
    activeMenuName: activeMenuName,
    setMenuList: setMenuList,
    menuList: menuList,
  }

  return (
    <pageContext.Provider value={pageContextData}>
      {children}
    </pageContext.Provider>
  );
}