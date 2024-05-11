
import { Message } from "@/types/Message";
import { ReactNode, createContext, useState } from "react";
//criação do type do context
type PageContextType = {
  prompt: string,
  setPrompt: Function,
  history: Message[],
  setHistory: Function,
}

//criação do context
export const pageContext = createContext<PageContextType>({
  prompt: '',
  setPrompt: ()=>{},
  history: [],
  setHistory: ()=>{},
})

export function PageContext({children}: {children: ReactNode}){

  //States
  const [prompt, setPrompt] = useState('');
  const [history, setHistory] = useState<Message[]>([]);


  //Agrupamento dos dados para o contexto
  const pageContextData = {
    prompt,
    setPrompt,
    history,
    setHistory,
  }

  // definição do Provider com value contendo os dados do contexto já criados e formatados
  return(
    <pageContext.Provider value={pageContextData}>
      {children}
    </pageContext.Provider>
  );
}