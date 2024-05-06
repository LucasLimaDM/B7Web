"use client"

import { useState } from "react";
import { questApi } from "@/api/questApi";
import { OptionList } from "@/components/OptionList";
import { IconQuestion } from "@/components/IconQuestion";
import { QuestionMenu } from "@/components/QuestionMenu";
import { Answer } from "@/types/Answer";
import { ConfirmMenu } from "@/components/ConfirmMenu";
import { Button } from "@/components/Button";

export default function Home() {
  
  function prevQuestion(){
    if((activeQuestionId+1) > 1){
      setActiveQuestionId(activeQuestionId-1)
    }
    
    
  }
  
  function nextQuestion(){
    if(activeQuestionId < (questionsLength - 1)){
      setActiveQuestionId(activeQuestionId+1)
    }
  }

  function hasEmptyAnswer(answers: Answer[]): boolean {
    let res = false;
    answers.map(answer => {
      if(answer.option == 0) {res = true;};
    });
    return res;
  }

  function clickSubmit(){
    setShowConfirmMenu(true);
  }
  const [showAnsMenu, setShowAnsMenu] = useState(false);
  const [activeQuestionId, setActiveQuestionId] = useState(0);
  const [showConfirmMenu, setShowConfirmMenu] = useState(false);
  const [showResult, setShowResult] = useState(false);
  
  const questions = questApi.requestQuestions()
  
  const emptyAnswers = questions.map((q, key) => {
    return {question: key, option: 0, state: null}
  });
  
  const [answers, setAnswers] = useState(emptyAnswers);
  
  //option 0 = nenhuma option, state{0}
  const activeAnswer = answers[activeQuestionId];
  const activeQuestion = questions[activeQuestionId];
  const questionsLength = questions.length;

  console.log(hasEmptyAnswer(answers))
  


  return (
    <main className="flex justify-center items-center h-screen bg-gray-50">

      <div className=" bg-white border rounded-md">
        <h1 className="text-xl p-3 w-full border-b">{showResult ? 'Resultado:' : activeQuestion.title}</h1>
        <div className="h-80" style={{width: '30rem'}} >

          { !showResult && 
            <OptionList
            activeQuestionId={activeQuestionId}
            options={activeQuestion.options}
            setAnswers={setAnswers}
            answers={answers}
            />
          }
          
          {showAnsMenu && 
            <QuestionMenu 
            answers={answers}
            setActiveAnswerId={setActiveQuestionId}
            setShowAnsMenu={setShowAnsMenu}
            showAnsMenu={showAnsMenu}
            />
          }
        </div>


        {showConfirmMenu && 
          <ConfirmMenu
            answers={answers}
            hasEmptyAnswer={hasEmptyAnswer(answers)}
            setShowConfirmMenu={setShowConfirmMenu}
            setShowResult={setShowResult}
          />
        }

        

        <div className="flex justify-between p-3">

          <div>
            <p>Questão {activeQuestionId+1} de {questionsLength}</p>
            <Button 
            answers={answers}
            submit={()=> {if(!showConfirmMenu)setShowConfirmMenu(true)}}
            key={0}
            >
              Enviar
            </Button>
          </div>

          <IconQuestion
            option={activeAnswer.option}
            state={activeAnswer.state}
            onClick={()=>{setShowAnsMenu(!showAnsMenu)}}
          />

          <div className="pt-1">
            <button onClick={prevQuestion}>
              <img src="/assets/next.svg" alt="prev" className="h-6 rotate-180"/>
            </button>
            <button onClick={nextQuestion}>
            <img src="/assets/next.svg" alt="next" className="h-6"/>
            </button>
          </div>

        </div>

        
          
        
      </div>

    </main>
  );
}
