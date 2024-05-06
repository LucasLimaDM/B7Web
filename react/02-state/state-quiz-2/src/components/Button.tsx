
import {ReactNode } from "react";

type Props = {
  submit: Function,
  answers: any,
  children: ReactNode
}



export function Button({submit, answers, children}: Props){
  return (
    <button
    className="bg-blue-500 text-white font-semibold rounded-md px-9 py-1"
    onClick={() => submit(answers)}
    >
      {children}
    </button>
  );
}