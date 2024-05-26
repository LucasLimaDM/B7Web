"use client"
import { Header } from "@/components/Header";
import { PageContext } from "@/contexts/pageContext";
import { Metadata } from "next";
import { ReactNode } from "react";

/*

- Analisar dados para ter insights sobre a saúde do paciente 
- Detectar interações medicamentosas
- Analisar dados de histórico médico, exames, estilo de vida, e identificar possíveis causas e doenças possíveis


- Ajudar o Paciente no dia a dia com Chat Bot de acordo com o tratamento dele que pode instruir o que pode ou não ser feito, dar apoio com medicação einstruir se é necessário chamar novamente a equipe médica
- Simular cenários e mostrar como o paciente pode se sentir ao seguir o tratamento


- Agendamento via prompt( marque uma consulta com o paciente andré para dia 29 às 16:00)


*/
export default function Page({children}:{children:ReactNode}){

  return (
    <PageContext>
      <Header />
      
      <main>
        {children}
      </main>
    </PageContext>
  );
}