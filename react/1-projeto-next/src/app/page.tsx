import { Paciente } from "@/components/Paciente";

function Page(){
    const pacientes = [
        {
            cpf: 111,
            nome: 'Ana',
            idade: 20,
            endereco: 'Magé'
        }, 

        {
            cpf: 222,
            nome: 'Lucas',
            idade: 18,
            condicao: 'Burrice'
        }, 

        {
            cpf: 333,
            nome: 'Eliane',
            idade: 60,
            condicao: 'Agitada'
        }, 
    ] 


    const listaPacientesHTML = pacientes.map(paciente => (
        <Paciente 
            nome={paciente.nome}
            cpf={paciente.cpf}
            idade={paciente.idade}
            condicao={paciente.condicao}
            endereco={paciente.endereco}
        />
    ));

    return (
        
    <div>
        {listaPacientesHTML}
        
    </div>

    );
        
}

export default Page;