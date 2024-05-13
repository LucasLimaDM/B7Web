import { pageContext } from "@/contexts/PageContext";
import { useContext } from "react";

export function PageArea(){
  const {activeMenuName, menuList, } = useContext(pageContext);

  const activeMenu = menuList.filter(m=>m.name===activeMenuName)[0];

  return(
    <div className="absolute m-auto top-1/4 border" style={{width: '28rem'}}>
      <h1 className="h-10 p-3 text-xl">{activeMenu.title}</h1>
      <div className="h-80 p-3">{activeMenu.body}</div>
      <div className="h-20 p-3">{activeMenu.footer}</div>
    </div>
  );
}