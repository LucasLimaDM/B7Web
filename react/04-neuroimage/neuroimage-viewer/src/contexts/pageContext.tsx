"use client"
import { createContext, useState } from "react"

type PageContextType = {
  activeMenu: string,
  setActiveMenu:Function,
  activeHeader: string,
  setActiveHeader: Function
  patientList: Patient[],
  setPatientList: Function,
}

export const pageContext = createContext<PageContextType>({
  activeMenu: '',
  setActiveMenu:Function,
  activeHeader:'',
  setActiveHeader:Function,
  patientList:[],
  setPatientList:Function
})

export const PageContext = ()=>{
  const [activeMenu, setActiveMenu] = useState('home');


  const pageData = {
    activeMenu: '',
    setActiveMenu:Function,
    activeHeader:'',
    setActiveHeader:Function,
    patientList:[],
    setPatientList:Function
  }

  <pageContext.Provider value={}>

  </pageContext.Provider>
}