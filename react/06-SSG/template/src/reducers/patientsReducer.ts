import { Patient } from "@/types/Patient";

export type PatientListActions = 
  { type: 'add', payload: Patient } | 
  { type: 'remove', payload: {cpf: string} } | 
  { type: 'update', payload: Patient}

export function patientListReducer(patientList: Patient[], action: PatientListActions) : Patient[]{
  switch (action.type){
    case 'add': 
      const newPatient = action.payload
      return [...patientList, newPatient];
    case 'remove': 
      return patientList.filter(p=>p.cpf!==action.payload.cpf);
    case 'update': 
      const patientIndex = patientList.findIndex(patient => patient.cpf === action.payload.cpf)

      if(patientIndex === -1) return patientList;

      const updatedPatient = {...patientList[patientIndex], ...action.payload}

      const updatedList = [...patientList]
      updatedList[patientIndex] = updatedPatient

      return updatedList
    default: 
      return patientList
    }
}