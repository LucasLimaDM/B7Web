type Props = {
  id:string, 
  type?:string,
  value:string,
  setValue:Function,
  label?: string,
  className?: string,
}

export const Input = ({id, type, value, setValue, label, className}: Props)=>{
  if(!type) type = 'text'
  return(
    <div className={' flex flex-col max-w-2xl w-full px-4 ' + className}>
      <label htmlFor={'input-' + id} className="text-md"> 

        {label??id} 

      </label>

      { type === 'text' && 
        <input 
        className="border-b outline-none px-2 pt-2"
        id={'input-' + id} 
        type={'text'} 
        value={value} 
        onChange={e=>setValue(e.target.value)}/>
      }
      { type === 'textarea' &&
        <textarea 
        className="border-b outline-none px-2 pt-2 resize-none"
        id={'input-' + id} 
        value={value} 
        onChange={e=>setValue(e.target.value)}
        />
      }
      { type === 'number' && 
        <input 
        type="text" 
        className="border-b outline-none px-2 pt-2 resize-none"
        id={'input-' + id} 
        value={value} 
        onChange={
          event => {
            if(/^\d+$/.test(event.target.value) || event.target.value === ''){
              setValue(event.target.value)
            }}}
        />

      }
    </div>
  );
}