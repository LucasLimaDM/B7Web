import { pageContext } from "@/contexts/PageContext";
import { useContext, useState } from "react";
import { Message } from "./Message";

export function ChatHistory(){
  const { history,} = useContext(pageContext)
  
  return (
    <div
    className="flex flex-col gap-6 items-center overflow-x-hidden w-full pb-24 pt-12"
    >
      {history.map(message=>{
        return <Message key={message.message} author={message.author} message={message.message}/>
      })}
    </div>
  );
}