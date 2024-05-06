import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  title: string,

}

export function Menu({children, title}: Props){
  return (
    <div
    className="absolute top-1/4 bg-white w-96 p-3 z-10 rounded-md border"
    style={{width: '30rem'}}
    >
      <div>{title}</div>
      {children}
    </div>
  );
}