import { usePage } from "@/contexts/pageContext";
import { useState } from "react"


export const Header = ()=>{
  const pgCtx = usePage();

  const [showMenu, setShowMenu] = useState(false);

  const headerTitles: {[key: string]: string} = {
    home: 'Gestão Pacientes',
    patients: 'Health Manage',
    
  }


  function toggleMenu(){
    setShowMenu(!showMenu)
  }
  
  console.log(pgCtx.setActiveMenu)
  return (
    <header className="h-24 bg-sky-700 flex justify-between items-center pl-12 relative">
      
      <div className="flex align-center gap-4">
        <button onClick={toggleMenu}>
          <img src="/images/menu.svg" alt="menu" />
        </button>

        <h1 className="text-4xl text-white capitalize font-semibold flex items-center">
        {headerTitles[pgCtx.activeMenu]}
        </h1>

      </div>

      {showMenu && 
        <aside className="h-[calc(100vh-6rem)] bg-red-500 w-16 absolute bottom-0 left-0">
          <ul className="">
            <li>'olá, ldkmwrlfjknwrlgwkjnefçlwekfmwlrmk'</li>
            <li>'olá, ldkmwrlfjknwrlgwkjnefçlwekfmwlrmk'</li>
            <li>'olá, ldkmwrlfjknwrlgwkjnefçlwekfmwlrmk'</li>
            <li>'olá, ldkmwrlfjknwrlgwkjnefçlwekfmwlrmk'</li>
            <li>'olá, ldkmwrlfjknwrlgwkjnefçlwekfmwlrmk'</li>
          </ul>
        </aside>
      }
    </header>

    
  );
}