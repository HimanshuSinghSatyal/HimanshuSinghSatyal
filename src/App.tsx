import React, { ChangeEvent, MouseEvent, FC, useState, FormEvent } from "react";
import Button from "./Button";
import Input from "./Input";
import Todo from "./Todo";


export default function App() {


  type Todo = {
    checked: boolean;
    value: string
  }[]
  
  const [todos, setTodos] = useState<Todo>([]);
  const [inputValue, setInputValue] = useState('');
  const [click, setClick] = useState(false);

  
  const handleInputChangeValue = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const addToDo = (event: FormEvent<HTMLFormElement>) => {

    setInputValue("");
    event.preventDefault();
    setTodos([...todos, { checked: false, value: inputValue }])
  

  } 


  const openForm = () => {
    setClick(true);
    setInputValue("");
  }


  const closeForm = () => {
    setClick(false);
    setInputValue("");
  }

  const onCheckboxClick = ((todo:{checked:boolean; value:string}) => {
    const filteredTodo =
      todos.filter((t) => t.value !== todo.value)
    console.log(filteredTodo)

    setTodos([...filteredTodo, todo])

    console.log("todos is", todos)
  })

  const doneTodos = todos.filter((t) => {

    return t.checked !== false;
  })
  console.log("done todos")


  const deleteTodo = (index:any) => {
    const newTodo = todos
    newTodo.splice(index,1)

    setTodos([...newTodo]);
  }
  
  return (
    <div >
      <div className="shadow-lg p-3">
        <h1 className="text-3xl font-serif font-bold text-gray-700">ToDo</h1>
      </div>

      <div className="m-5">

        <h1 className="text-3xl font-mono font-bold text-yellow-400 my-4">Things to get done</h1>

        {todos.length > 0 ? <h1 className="text-xl font-serif font-bold text-blue-500 my-3">Things to Do</h1> : <h1 className="text-xl font-serif font-bold text-gray-700">No todos here!</h1>}

        {todos.filter((t) => {
          return t.checked !== true;
        }).map((item, index) => {
          return (

            <Todo
              key={item.value}
              todo={item}
              onClick={onCheckboxClick}
              deleteTodo={() => deleteTodo(index)}

            />

          )
        })}

        {click && <form onSubmit={addToDo} className="shadow-xl  rounded-md w-full space-y-4 p-3 my-4">
          <h1 className="text-xl text-gray-600 ">Create a ToDo</h1>
          <div className="flex flex-col space-y-4">
            <Input
              type="text"
              value={inputValue}
              className="self-start px-5 rounded-lg"
              placeholder="Add an todo "
              onChange={handleInputChangeValue} />
            <div className="flex space-x-10">
              <Button className="self-start my-4 bg-green-500" type="submit">Save</Button>

              <Button
                type="button"
                className="my-4 hover:bg-red-700 "
                onClick={closeForm}>Cancel</Button>
            </div>
          </div>
        </form>}

        {!click && <Button type="button" onClick={openForm}> Add ToDo + </Button>}


        {todos.length > 0 && <h1 className="text-xl font-serif font-bold text-gray-700 my-3">Things Done</h1>}

        {doneTodos.map((item, index) => {
          return (<s className="text-red-500"><Todo
            key={item.value}
            todo={item}
            onClick={onCheckboxClick}
            deleteTodo={() => deleteTodo(index)}
          />
        </s>
          )
        })}



        {todos.length == 0 && <h1 className="text-xl font-serif font-bold text-gray-700 my-3">No todos here!</h1>}
      </div>
    </div>
  );
}



