import { ReactNode, createContext, useState } from "react";
//criação do type do context
type LoginContextType = {
  username: string,
  setUsername: Function,
  message: string,
  setMessage: Function,
}

//criação do context
export const loginContext = createContext<LoginContextType>({
  username: '',
  setUsername: ()=>{},
  message: '',
  setMessage: ()=>{},
})

export function LoginContext({children}: {children: ReactNode}){

  //States
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  


  //Agrupamento dos dados para o contexto
  const loginContextData = {
    username,
    setUsername,
    message, 
    setMessage,
  }

  // definição do Provider com value contendo os dados do contexto já criados e formatados
  return(
    <loginContext.Provider value={loginContextData}>
      {children}
    </loginContext.Provider>
  );
}