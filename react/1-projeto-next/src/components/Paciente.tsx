import { ReactNode } from "react";

type Props = {
    nome: string,
    cpf: number,
    idade: number, 
    condicao?: string,
    endereco?: string 
}

export function Paciente({nome = 'não identificado', cpf, idade, condicao, endereco, }: Props){
    return (
        <div className="p-5">
            <h2 className="text-3xl pb-3 ">Paciente {nome}</h2>

            <p>O(a) paciente {nome}, portador(a) do cpf: {cpf}, tem {idade} anos{endereco && <span>, e mora em {endereco}</span>} {condicao && <span>e apresenta {condicao.toLowerCase()}</span> };</p>
        </div>

    );
}