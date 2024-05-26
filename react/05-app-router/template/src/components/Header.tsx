'use client'

import { useState } from "react"


type DropdownProps = {
  title: string,
  items: {
    title: string, 
    url: string,
    icon: string,
  }[]
}



export function Header(){
  const dropdowns = {
    servicos: [
      {
        title: 'Serviços', 
        items: [
          {
            title: 'Inteligência artificial',
            url: '#',
            icon: 'chip'
          }
        ]
      },
  
      {
        title: 'Mercados', 
        items: [
          {
            title: 'Manufatura',
            url: '#',
            icon: 'robot-arm'
          }
        ]
      },
  
      {
        title: 'Insights', 
        items: [
          {
            title: 'Inteligência artificial',
            url: '#',
            icon: 'chip'
          }
        ]
      },
  
      {
        title: 'Como fazemos', 
        items: [
          {
            title: 'Inteligência artificial',
            url: '#',
            icon: 'chip'
          }
        ]
      },
  
      {
        title: 'O Venturus', 
        items: [
          {
            title: 'Inteligência artificial',
            url: '#',
            icon: 'chip'
          }
        ]
      },
  
    ],
    idioma: [{
        title: 'Idioma', 
        items: [
          {
            title: 'Português',
            url: '#',
            icon: 'chip'
          },
          {
            title: 'Inglês',
            url: '',
            icon: 'chip'
          },
        ]
      },]
  }


  return (
    <header className="bg-white h-16 ">
      <div className="flex items-center gap-6 justify-between h-full w-full m-auto px-6 md:px-12 max-w-[1400px]">
        


        
        <nav className="xl:flex justify-between gap-10 hidden">

          <ul className="flex 
          gap-12 items-center justify-between">
            {dropdowns.servicos.map(dropdown => <Dropdown title={dropdown.title} items={dropdown.items}/>)}
          </ul>
        </nav>

        <ul className="flex gap-3 items-center">
          <li className="hidden xl-block"><Dropdown title={dropdowns.idioma[0].title} items={dropdowns.idioma[0].items}/></li>

          <li className="flex items-center">
            <img src="/assets/search.svg" alt="search" className="h-10 cursor-pointer" />
          </li>

          <li className="hidden xl:block">
            <button>Fale conosco</button>
          </li>

          <li className="xl:hidden flex items-center">
            <button>
              <img src="/assets/menu.svg" alt="menu" className="h-12"/>
            </button>
          </li>
        </ul>
      </div>

    </header>
  );
}


export const Dropdown = ({title, items}: DropdownProps) =>{
  const [showDrop, setShowDrop] = useState(false)
  
  return (


    <div 
    className="cursor-pointer relative"
    onMouseEnter={()=>setShowDrop(true)}
    onMouseLeave={()=>setShowDrop(false)}
    onClick={()=>{setShowDrop(!showDrop)}}
    >
      <div className="flex items-center gap-3 font-bold ">
        {title} 

        <img src="assets/open.svg" alt="open" className="h-4 -rotate-90" />
      </div>

      {showDrop && 
        <div className="absolute bg-white border animate-appear top-10">
          {items.map(item => 
          
            <div
            onClick={()=>location.href = location.origin + item.url}
            className="h-10 cursor-pointer flex items-center gap-2 w-48 "
            >
              <img src={'/assets/' + item.icon + '.svg'} alt={item.icon} className="h-8"/>
              {item.title}

            </div>
          )}
        </div>
      }
    </div>
  );
}