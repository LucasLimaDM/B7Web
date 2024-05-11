"use client"
import { ChatHistory } from "@/components/ChatHistory";
import { Prompt } from "@/components/Prompt";
import { PageContext } from "@/contexts/PageContext";



export default function Home() {

  return (
    <PageContext>
      <main
      className="bg-meu-azul min-h-screen flex flex-col items-center"
      style={{backgroundImage: 'url(/fundo.png)'}}
      
      
      >
        <header
        className="w-full h-40 flex justify-start items-center"
        >
          <img src="/ai-icon.png" alt="ai-icon" className="px-6 h-28" />
          
        </header>

        <div className="relative">
          <img src="/toby-ai.png" alt="toby" className="h-96" />
          
          <p className="bg-white absolute w-52 p-5 rounded-2xl top-2 -right-28">Olá eu sou Toby, o seu assistente de direito do consumidor particular!</p>
          
        </div>

        <Prompt />

        <ChatHistory />
      </main>
    </PageContext>
  );
}
