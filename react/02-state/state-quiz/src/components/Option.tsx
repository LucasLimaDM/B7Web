import { Question } from "@/types/Question";
import { questions } from "@/data/questions";

type Props ={
    optNum: number,
    activeQuestion: number,
    setAnswerTry: Function,
    answerTry: number
    setActiveQuestion: Function,
}

export function Option({optNum , activeQuestion, setAnswerTry, answerTry, setActiveQuestion} : Props){
    return(
        <div className="p-3">
            <div 
            className={
                `${answerTry === optNum ? (questions[activeQuestion].answer === optNum ? 'bg-green-200 hover:bg-green-300' : 'bg-red-200 hover:bg-red-300') : ''}
                    
                    p-3 border w-56 hover:bg-blue-200 cursor-pointer`
                    } 
                    onClick={e => {
                        setAnswerTry(optNum);
                        console.log(questions.length, activeQuestion)
                        
                        }}>{questions[activeQuestion].options[optNum]}</div>
        </div>
    )
}