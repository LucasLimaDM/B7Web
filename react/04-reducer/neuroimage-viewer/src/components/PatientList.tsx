import { usePage } from "@/contexts/pageContext";
import { Patient } from "@/types/Patient";

export function PatientList(){
  const {patientList} = usePage()

  return (
    <div className="min-h-[calc(100%-6rem)] container m-auto">
      {patientList.map(patient => (
        <PatientCard patient={patient}/>
      ))}
    </div>
  );
}

export const PatientCard = ({patient}: {patient:Patient}) =>(
  <div className="flex justify-between items-center py-4 pl-4">
    <div>
      <h3 className="text-xl">Nome: {patient.name}</h3>
      <p>Descrição: {patient.description}</p>
      <p>idade: {patient.age} anos</p>
      <p>condições: {patient.conditions?.join(',')}</p>
      <button>Ver histórico</button>
    </div>

    <button className="px-20">
      <img src="/images/options.svg" alt="" />
    </button>
  </div>
)

