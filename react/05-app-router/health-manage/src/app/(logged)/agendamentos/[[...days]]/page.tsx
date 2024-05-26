export default function Page({params}: { params: {days: string[]}}){

  if(!params.days){
    return <h1> Agendamentos do Mês</h1>
  }

  return (
    <div>
      <h2>Agendamentos</h2>
      {params.days?.map(day => <div>{' Agendamentos dia ' + day}</div>)}
    </div>
  );
}