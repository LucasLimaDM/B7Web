'use client'

import { useState } from "react";

const Header = () => {
  const pageTopics = [
    {
      name: 'Agenda',
      
    },

    {
      name: 'Pacientes'
    },
    {
      name: 'Exames'
    }

  ];

  return (
    <header className="w-full bg-dark-blue text-white h-24">
      <div className="container m-auto flex justify-between items-center h-full">
        <h1 className="text-4xl">Clinget</h1>

        {/* ! mudar md para lg */}
        <nav className=" hidden md:flex justify-center gap-12">

          <Search />

          <ul className="flex items-center gap-12">
            
            {pageTopics.map(topic => (

              <li>{topic.name}</li>

            ))}

          </ul>

          <Profile />
        </nav>
      </div>
    </header>
  )
}



export const Profile = () => {
  return (
    <div className="flex ">
      <img src="/assets/search.svg" 
      alt="foto do profissional de saúde logado"
      className="h-12 w-16 "
      />
      <p className="h-4">Nome do médico</p>
    </div>
  )
}




export const Search = () => {
  const [showLabel, setShowLabel] = useState(true);
  const [typingSearch, setTypingSearch] = useState('');

  return (
    <label className="border border-gray-300 relative w-52 h-10 flex items-center justify-center px-1 cursor-text rounded-lg overflow-hidden" 
    //onClick={()=>{searchInput.current?.focus()}}
    htmlFor="header-search-input"
    >
      <input type="text" 
      id="header-search-input" 
      className="absolute pl-12 w-full h-full bg-dark-blue outline-none" 
      value={typingSearch} 
      onChange={e=>setTypingSearch(e.target.value)} 
      onFocus={()=>setShowLabel(false)} 
      onBlur={()=>{if(typingSearch.trim() === ''){setShowLabel(true)}}}/>

      <img src="/assets/search.svg" alt="icon-busca" className="h-8 absolute left-2" />

      {showLabel && 

        <label htmlFor="header-search-input" className="absolute left-12 cursor-text">Buscar paciente</label>

      }
    </label>
  )
}



export default Header
