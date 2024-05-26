"use client"

import { Input } from "@/components/Input";
import { usePage } from "@/contexts/pageContext";
import { Patient } from "@/types/Patient";
import { useEffect, useState } from "react";

export default function Page(){
  const {setActiveMenu, patientList, dispatchPatient} = usePage()
  useEffect(()=>{ setActiveMenu('patients') },[])

  return (
    <div>

      <div className="min-h-[calc(100%-6rem)] container m-auto">
        {patientList.map(patient => (
          <PatientCard patient={patient} onClick={()=>{location.href = location.href + '/' + patient.cpf}}/>
        ))}
      </div>

      <button 
        className=" absolute text-6xl border-2 border-sky-700 h-16 w-16 flex justify-center items-center rounded-full bottom-6 right-6"
        onClick={()=>window.location.href = window.location.href + '/cadastro'}
        >
          <img src="/images/plus.svg" alt="adicionar paciente" className="w-10 " />
      </button>
      
    </div>
  );
}


export function PatientCard({ patient, onClick }: { patient: Patient, onClick: ()=>void }) {
  const {dispatchPatient} = usePage();
  const [showOptions, setShowOptions] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  return (


    <div className="relative">
      <div 
      className="flex justify-between items-center py-4 pl-4 relative cursor-pointer hover:bg-slate-100"
      onClick={onClick}
      >
        <div>
          <h3 className="text-xl">Nome: {patient.name}</h3>
          <p>Descrição: {patient.description}</p>
          <p>idade: {patient.age} anos</p>
          <p>condições: {patient.conditions?.join(',')}</p>
          {/* <button>Ver histórico</button> */}
        </div>

          { showConfirmDelete &&
            <div className=" absolute z-10 bg-slate-200 p-4 rounded-lg flex flex-col gap-8 ">
              <p className="text-2xl">Deseja mesmo remover o paciente {patient.name} de cpf {patient.cpf}?</p>

              <div className="flex justify-end gap-4">
                <button 
                className="p-3 text-red-700 font-semibold"
                onClick={()=>{ 
                  dispatchPatient({type:'remove', payload:{cpf: patient.cpf}}); 
                  setShowConfirmDelete(false);
                }}
                >Remover Paciente</button>
                <button className="p-3 text-gray-700 font-semibold">Cancelar</button>
              </div>
            </div>
          }

      </div>

      <button className="mx-20 absolute top-12 right-4" 
      onBlur={()=>{ setShowOptions(false) } } 
      onClick={()=> { setShowOptions(!showOptions) } } 
      >

      <img src="/images/options.svg" alt="opções do paciente" />

      {showOptions && 
        <div className="absolute w-32 h-20 right-6 top-3 bg-slate-100 " 
        >

          <div className="p-1 hover:bg-slate-200">Editar</div>
          <div className="p-1 hover:bg-slate-200" onClick={ ()=>setShowConfirmDelete(true)}>Remover</div>

        </div>
      }
      </button>
    </div>
  );
}
