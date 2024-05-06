

type Props = {
  submit: Function,
  answers: any,
  value: string,
}



export function Button({submit, answers, value}: Props){
  return (
    <button
    className="bg-blue-500 text-white font-semibold rounded-md px-9 py-1"
    onClick={() => submit(answers)}
    >
      {value}
    </button>
  );
}