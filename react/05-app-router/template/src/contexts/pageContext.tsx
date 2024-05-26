"use client"
import { PatientListActions, patientListReducer } from "@/reducers/patientsReducer";
import { Patient } from "@/types/Patient"
import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react"

// Type do contexto, com todos os dados disponíveis nele e seu tipos
type PageContextType = {
  patientList: Patient[],
  dispatchPatient: Dispatch<PatientListActions>;
}

// Init do contexto com valores vazios configurados
const pageContext = createContext<PageContextType>({
  patientList:[],
  dispatchPatient: ()=>{},
})

// export de atalho usePage para criar acesso ao contexto mais rápido
export const usePage = () =>{
  return useContext(pageContext)
}

// Provider do contexto com set dos valores e criação do component
export const PageContext = ({children}:{children:ReactNode}) => {

  const [patientList, dispatchPatient] = useReducer(patientListReducer, []);


  return (
    <pageContext.Provider 
    value={{patientList, dispatchPatient}}>

      {children}

    </pageContext.Provider>
  );
}