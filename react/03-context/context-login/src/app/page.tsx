"use client"

import { Header } from "@/components/Header";
import { LoginContext } from "@/contexts/LoginContext";


export default function Home() {
  
  return (
    <LoginContext>
      <main>
        <Header />
      </main>
    </LoginContext>
  );
}
