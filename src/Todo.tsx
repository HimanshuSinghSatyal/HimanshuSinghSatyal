import React,{FC} from "react";
import Input from "./Input"
import Button from "./Button"
import { TiDeleteOutline } from "react-icons/ti"

type TodoProps = {
todo:{checked:boolean; value:string}; 
  
onClick:(todo:{checked:boolean; value:string}) => void;
deleteTodo:()=>void; 
}

const Todo:FC<TodoProps>=({
  todo,
  onClick,
  deleteTodo,
  }) => {

  function handleCheckboxClick(event:{checked:boolean; value:string}) {
    const newTodo={checked:event.target.checked,value:todo.value}
    onClick(newTodo)
    }

  

  return (
    <div>
    <div className="flex space-x-10 items-center">
      <div className="flex items-center space-x-2">
      <Input 
        type="checkbox"
        checked={todo.checked}
        onClick={handleCheckboxClick}
        className="hover:border-green-500 "/>
      {!todo.checked && <h1 className="text-lg text-red-500 mb-2" >{todo.value}</h1>  }
      {todo.checked==true && <h1 className="text-lg text-green-500 mb-2">{todo.value}</h1>  }
</div>
      <Button className="text-red-700 text-3xl border-none" onClick={ deleteTodo} ><TiDeleteOutline/></Button>
    </div>
  </div>
    )
}

export default Todo;