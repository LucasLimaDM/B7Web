"use client"

import { Header } from "@/components/Header";
import { PatientList } from "@/components/PatientList";
import { PageContext } from "@/contexts/pageContext";

export default function Home() {
  return (
    <main>
      <PageContext>

        <Header />

        <PatientList />
        
      </PageContext>
    
    </main>
  );
}
