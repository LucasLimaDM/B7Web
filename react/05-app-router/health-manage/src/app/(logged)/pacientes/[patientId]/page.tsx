"use client"
import { usePage } from "@/contexts/pageContext";
import { ReactNode, useState } from "react";

type Props = {
  params: {
    patientId: string,
  }
}

export default function Page({params} : Props){
  const {patientList} = usePage();
  const {patientId} = params;
  const patIndex = patientList.findIndex(patient=>patient.cpf===patientId)

  if(patIndex === -1){
    const [errorMessage, setErrorMessage] = useState<ReactNode>();

    setTimeout(()=>{

      setErrorMessage( <div>Não foi possível encontrar esse paciente na base de dados, cadastre-o ou atualize a página</div> );

    },1000)

    return errorMessage
  }
  
  const patient = patientList[patIndex];
  
  



  return (
    <div>
      <h1 className="text-2xl">Paciente {patient.name?? 'sem nome confirmado'}</h1>

      <p>Idade: {patient.age}</p>
      <p>Descrição: {patient.description}</p>
      <p>Condições: {patient.conditions?.join(', ')}</p>
    </div>
  );
}