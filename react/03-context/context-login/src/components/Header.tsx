import { loginApi } from "@/api/loginApi";
import { loginContext } from "@/contexts/LoginContext";
import { typeUser } from "@/types/typeUser";
import { useContext } from "react";


export function Header(){
  const {username, setUsername, message, setMessage} = useContext(loginContext);

  const isLogged = Boolean(username)

  function strPrompt(text: string){
    const resPrompt = prompt(text)
    return resPrompt===null?'':resPrompt
  }


  function userLogin(){
    const email = strPrompt('Digite seu email: ')
    const password = strPrompt('Digite sua senha')

    const resLogin = loginApi.login(email, password)

    setUsername(resLogin.username)
    setMessage(resLogin.message)
  }
  
  return (
    <header className="p-4">
      <h1 className="pb-3 text-2xl">Olá {isLogged ? username : 'Visitante'}</h1>

        <div>
          {isLogged &&
            <button
            className="p-3 text-red-400 mb-4"
            onClick={()=>{setUsername(''),setMessage('')}}
  
            >
              Sair
            </button>
          }

          {!isLogged && 
            <button
            className="px-4 py-1 mb-4 bg-blue-500 text-white"
            onClick={userLogin}
            >
              Login
            </button>
          }

          <p>{message ? message : 'Faça login para ver sua mensagem!'}</p>
        </div>

    </header>
  );
}