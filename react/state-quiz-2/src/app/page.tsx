"use client"

import { useState } from "react";
import { questApi } from "@/api/questApi";
import { OptionList } from "@/components/OptionList";
import { IconQuestion } from "@/components/IconQuestion";

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

  const questions = questApi.requestQuestions()

  const emptyAnswers = questions.map((question, key) => {
    return {question: key, option: 0, state: 0}
  });

  const [answers, setAnswers] = useState(emptyAnswers);
  console.log('answers :', answers[0]);

  const [activeQuestionId, setActiveQuestionId] = useState(0);
  //option 0 = nenhuma option, state{0 = null, 1 = false, 2 = true}
  const activeAnswer = answers[activeQuestionId];
  
  const activeQuestion = questions[activeQuestionId];
  const questionsLength = questions.length;


  return (
    <main className="flex justify-center items-center h-screen bg-gray-50">

      <div className=" bg-white border rounded-md">
        <h1 className="text-xl p-3 w-96 border-b">{activeQuestion.title}</h1>
        <div className="h-80 w-96">

          <OptionList
            activeQuestionId={activeQuestionId}
            options={activeQuestion.options}
            setAnswers={setAnswers}
            answers={answers}
          />

          
        </div>

        <div className="flex justify-between p-3">

          <p>Questão {activeQuestionId+1} de {questionsLength}</p>

          <IconQuestion
            answers={answers}
            activeQuestionId={activeQuestionId}
          />

          <div>
            <button onClick={prevQuestion}>
              <img src="/assets/next.svg" alt="prev" className="h-5 rotate-180"/>
            </button>
            <button onClick={nextQuestion}>
            <img src="/assets/next.svg" alt="next" className="h-5"/>
            </button>
          </div>

        </div>

        
          
        
      </div>

    </main>
  );
}
