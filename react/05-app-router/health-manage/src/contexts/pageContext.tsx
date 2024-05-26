"use client"
import { PatientListActions, patientListReducer } from "@/reducers/patientsReducer";
import { Patient } from "@/types/Patient"
import { Dispatch, ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react"

export function createId<T extends {id?: string}>(list: T[]){
  const symbols = 'abcdef0123456789';

  let newId;

  do { newId = symbols[Math.random() * (symbols.length-1)] } 
  while (haveId(list, newId))

  return newId;
}

export function haveId<T extends {id?: string}>(list: T[], id:string){
  let hasNewId;
  list.map(item => { if(item.id === id) hasNewId = true })
  return hasNewId
}

type PageContextType = {
  activeMenu: string,
  setActiveMenu:Function,
  patientList: Patient[],
  dispatchPatient: Dispatch<PatientListActions>;
}

const pageContext = createContext<PageContextType>({
  activeMenu: '',
  setActiveMenu:Function,
  patientList:[],
  dispatchPatient: ()=>{},
})

export const usePage = () => {
  return useContext(pageContext);
}

export const PageContext = ({children}:{children:ReactNode}) => {

  const pacientStorageKey = 'pageContext'

  const [activeMenu, setActiveMenu] = useState('patients');

  const [isMounted, setIsMounted] = useState(false);

  const [patientList, dispatchPatient] = useReducer(
    patientListReducer, 
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("posts") || "[]")
      : []
  );

  useEffect(()=>{
    const localPatients: Patient[] = JSON.parse(localStorage.getItem(pacientStorageKey) || '[]')

    localPatients.map(patient => {
      dispatchPatient({type: 'add', payload: {...patient}})
    })
  },[])
  
  //ao alterar a lista de pacientes, atualiza o localStorage com os novos dados
  useEffect(()=>{
    setIsMounted(true)
    localStorage.setItem(pacientStorageKey, JSON.stringify(patientList))

  }, [patientList])


  if(!isMounted) return null


  return (
    <pageContext.Provider 
    value={{activeMenu,setActiveMenu,patientList, dispatchPatient}}>

      {children}

    </pageContext.Provider>
  );
}