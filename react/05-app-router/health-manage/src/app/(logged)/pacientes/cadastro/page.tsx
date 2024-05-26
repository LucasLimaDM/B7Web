"use client"
import { Input } from "@/components/Input";
import { usePage } from "@/contexts/pageContext";
import { useState } from "react";


export default function PatientAdd(){

  const {dispatchPatient} = usePage()
  const [showSuccess, setShowSuccess] = useState(false);

  //typing
  const [typingName, setTypingName] = useState('');
  const [typingDesc, setTypingDesc] = useState('');
  const [typingAge, setTypingAge] = useState('');
  const [typingCond, setTypingCond] = useState('');
  const [typingCpf, setTypingCpf] = useState('');

  const cleanFields = ()=>{
    setTypingName('');
    setTypingDesc('');
    setTypingAge('');
    setTypingCond('');
    setTypingCpf('');
  }


  return (
    <div className=" top-36 w-full h-screen flex flex-col items-center justify-start">

      <div className="container p-10 mt-12 border rounded-lg lg:max-w-4xl bg-white relative">
        <h2 className="text-2xl font-semibold">Novo Paciente</h2>

        <div className="w-full flex flex-col items-center gap-3 mt-6">
          <Input id="cpf" value={typingCpf} setValue={setTypingCpf} label={'CPF do Paciente:'} className="w-full"/>

          <Input id="name" value={typingName} setValue={setTypingName} label={'Nome do Paciente:'} className="w-full"/>
          
          <Input id="conditions" value={typingCond} setValue={setTypingCond} label={'Condições do Paciente:'} className="w-full"/>

          <Input id="age" type="number" value={typingAge} setValue={setTypingAge} label={'Idade do Paciente:'} className="w-full"/>

          <Input id="desc" value={typingDesc} setValue={setTypingDesc} label={'Descrição do Paciente:'} className="w-full" type="textarea"/>

          <footer className="w-full flex justify-end px-5 mt-6 gap-6">

            <button className="bg-white text-cyan-800 w-28 h-10 rounded-md font-semibold" onClick={() => window.location.href = window.location.href.slice(0, -9)}>
              Ver Pacientes
            </button>

            <button className="bg-blue-600 text-white w-28 h-10 rounded-md font-semibold" onClick={()=>{
              
              dispatchPatient({
                type: 'add', 
                payload: { 
                  name:typingName, 
                  age: Number(typingAge),
                  description: typingDesc, 
                  conditions:typingCond.split(','), 
                  cpf: typingCpf, 
                }
              })
              cleanFields()
              setShowSuccess(true);
            }}>
              Cadastrar
            </button>

            {showSuccess && 
              <p className=" text-xl bg-green-500 font-bold text-white px-6 py-6 max-w-[50%] absolute top-0 right-0 rounded-se-lg">Usuário cadastrado com sucesso!</p>
            }

          </footer>
        </div>
      </div>

    </div>
  );
}