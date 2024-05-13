"use client"

import { useState } from "react";
import { Input } from "../Input";

export const PatientAdd= () => {

  //typing
  const [typingName, setTypingName] = useState('');
  const [typingDesc, setTypingDesc] = useState('');
  const [typingImage, setTypingImage] = useState('');



  return (
    <section>
      <h1>Novo Paciente:</h1>

      <Input id="name" value={typingName} setValue={setTypingName} label={'Nome do Paciente'}/>
      <Input id="name" value={typingName} setValue={setTypingName} label={'Descrição do Paciente'}/>
      <Input id="name" value={typingName} setValue={setTypingName} label={'Link de uma foto do Paciente'}/>

    </section>
  );
}