export default function Page({params}:{params:{days?:string[]}}){

  if(!params.days){
    return <div>Todos os agendamentos estão ótimos</div>
  }

  return (
    <div>
      {
        params.days.map(day=>(
          <div>Agendamento dia {day}</div>
        ))
      }
    </div>
  );

}