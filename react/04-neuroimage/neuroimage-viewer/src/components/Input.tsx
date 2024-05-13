type Props = {
  id:string, 
  type?:string,
  value:string,
  setValue:Function,
  label?: string,
}

export const Input = ({id, type, value, setValue, label}: Props)=>{
  return(
    <div className="flex flex-col">
      <label htmlFor={'input-' + id}> 

        {label??id} 

      </label>

      <input 
      className=""
      id={'input-' + id} 
      type={type??'text'} 
      value={value} 
      onChange={e=>setValue(e.target.value)}/>
    </div>
  );
}