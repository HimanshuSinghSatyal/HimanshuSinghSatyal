import React,{FC, ButtonHTMLAttributes,Children} from "react";

type ButtonProps = {onClick: () => void} & ButtonHTMLAttributes<HTMLButtonElement>

const  Button:FC<ButtonProps>=({children, onClick}) => {
  return(
    <div>
      <button   
      onClick= {onClick}
        className="text-black text-xl px-4 py-1 rounded-md bg-yellow-400 m-2">{children}
    
      </button>
    
    </div>
  )
}
 export default Button;