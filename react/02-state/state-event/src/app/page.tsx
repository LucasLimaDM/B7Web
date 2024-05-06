"use client"

import { useState } from "react";

function Page(){
    const [showMenu, setShowMenu] = useState(false);

    const [name, setName] = useState('');
    

    function handlePlusButton(){
        setShowMenu(!showMenu);
        console.log(maskName(name));
    }

    function maskName(name: string){
        return name.replace(/[^A-Za-z\s]/g, '');
    }
    
    

    return (
        <div className="flex justify-center items-center flex-col">

            <button className="bg-sky-600 text-white p-2 leading-1" onClick={handlePlusButton}>Menu</button>


            {showMenu && 
                
                <div>

                    <input 
                        type="text"
                        className="text-xl bg-slate-100 p-2 mt-4 border border-slate-200"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={e => setName(maskName(e.target.value))}
                    />

                    <p>Seu nome é: {name}</p>

                </div>

                
            }


        </div>
    )
}

export default Page;