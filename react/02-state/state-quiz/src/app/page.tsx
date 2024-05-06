"use client"
import { useState } from "react";
import { questions } from "@/data/questions";
import { Option } from "@/components/Option";


export default function Home() {
    const [activeQuestion, setActiveQuestion] = useState<number>(0)
    const [answerTry, setAnswerTry] = useState<number>(0);

    function nextQuestion() {
        
    }
    
    return (
        <main className="flex justify-center items-center h-screen ">

            <div className="w-96 bg-slate-50" >
                <div className="border-b p-3">
                    <h1 className="text-2xl">{questions[activeQuestion].title}</h1>
                </div>

                    <div className="border-b">
                        <Option
                            optNum={1}
                            activeQuestion={activeQuestion}
                            setAnswerTry={setAnswerTry}
                            answerTry={answerTry}
                            setActiveQuestion={setActiveQuestion}
                        ></Option>
                        <Option
                            optNum={2}
                            activeQuestion={activeQuestion}
                            setAnswerTry={setAnswerTry}
                            answerTry={answerTry}
                            setActiveQuestion={setActiveQuestion}
                        ></Option>
                        <Option
                            optNum={3}
                            activeQuestion={activeQuestion}
                            setAnswerTry={setAnswerTry}
                            answerTry={answerTry}
                            setActiveQuestion={setActiveQuestion}
                        ></Option>
                        <Option
                            optNum={4}
                            activeQuestion={activeQuestion}
                            setAnswerTry={setAnswerTry}
                            answerTry={answerTry}
                            setActiveQuestion={setActiveQuestion}
                        ></Option>
                    </div>

                    <div className="flex justify-between">
                        <p className="p-2">Questão {activeQuestion+1} de {questions.length}</p>
                        <div className="flex h-full items-center justify-center p-2 gap-1">
                            <button> <img src="/assets/next.svg" alt="next" className="w-6 rotate-180" onClick={() => {if(activeQuestion >= 1) setActiveQuestion(activeQuestion - 1)}}/></button>
                            <button> <img src="/assets/next.svg" alt="preview" className="w-6"  onClick={() => {if(activeQuestion < (questions.length -1)){
                                setActiveQuestion(activeQuestion + 1)
                            }}}/></button>
                        </div>
                    </div>

            </div>

        </main>
    );
}
