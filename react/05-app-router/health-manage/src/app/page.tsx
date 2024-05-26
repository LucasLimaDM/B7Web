"use client"

export default function Home() {
  return (
    <main>
      <header className="p-6 bg-sky-700">
        
        <h1 className="font-semibold text-4xl text-white ">Health Manage</h1>

      </header>

      <div className="p-6 flex flex-col gap-4">
          
        <h2 className="text-2xl">O único sistema de saúde que você vai precisar!</h2>

        <p className="text-xl">Escolha o seu objetivo: </p>

      </div>
        

        <div className="flex justify-center items-center gap-12 mt-12">
          <button className="w-36 h-16 bg-slate-100" onClick={()=>location.href = location.href+'/pacientes'}>
            Pacientes
          </button>

          <button onClick={()=>location.href = location.href+'/agendamentos'}>
            Agendamentos
          </button>
        </div>
    </main>
  );
}
