import { gemini } from "@/api/api";
import { pageContext } from "@/contexts/PageContext";
import { FormEvent, useContext, useEffect, useRef } from "react";

export function Prompt(){
  const {prompt, setPrompt, history, setHistory} = useContext(pageContext)

  // function debounce(func:any, wait:any) {
  //   let timeout:any;
  //   return function executedFunction(...args:any[]) {
  //     const later = () => {
  //       clearTimeout(timeout);
  //       func(...args);
  //     };
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //   };
  // };

  // window.addEventListener('keyup', debounce((e:any) => {
  //   console.log(e);
  //   if (e.key === 'Enter' && !e.repeat) {
  //     askToby();
  //   }
  // }, 500)); // Ajuste o 'delay' conforme necessário

  

  function addHistory(author: string, message: string){
    setHistory([...history, {author, message}]);


  }

  async function keepCoding(){
    const response = await gemini(prompt);
    addHistory('model', response)
  }

  useEffect(() => {
    if(
      history.length > 0 &&
      history.at(-1)?.author === 'user'
    ) keepCoding();
  }, [history]);

  async function askToby(e: FormEvent){
    e.preventDefault()
    addHistory('user',  prompt)
    console.log(history)
    setPrompt('')
  }


  return (
    <form className="fixed bottom-3 w-full flex flex-col justify-start items-center gap-12 " onSubmit={(e) => askToby(e)}>



        <div className="flex items-center justify-center " style={{width: '80%'}}>



          <input
          type="text"
          placeholder="Digite sua dúvida sobre os direitos do consumidor!"
          className="h-12 px-3 rounded-full border-meu-azul-claro outline-none max-w-2xl w-full"
          style={{ borderWidth: '3px'}}
          value={prompt}
          onChange={e=>setPrompt(e.target.value)}
          />

          <button
          className=" rounded-full -ml-12 h-10 w-10 z-10 flex justify-center items-center"
          // onClick={askToby}
          type="submit"
          >

            <img src="/search.svg" alt="enviar" className="h-7"/>

          </button>

        </div>

    </form>
  );
}