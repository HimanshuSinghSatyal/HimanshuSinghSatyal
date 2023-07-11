import React,{FC, InputHTMLAttributes} from "react";

type InputProps= {
  value?: String;
  rest?: String;
  }& InputHTMLAttributes<HTMLInputElement>

const Input:FC <InputProps> =({
                value,
                className,
                onChange,
                ...rest
              
      
               }) => {
  return(
    <div>
    <input 
      onChange={onChange}
       value= {value} 
      className={"border-2 border-gray-500 hover:border-green-500 p-2 self-start rounded-sm focus:outline-none focus:ring" + className} 
      {...rest}  
/>
    </div>
  )
}

export default Input;