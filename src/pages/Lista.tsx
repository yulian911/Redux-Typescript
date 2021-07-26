import { useEffect, useState } from "react"
import { FormList } from "../components/FormList"
import { ListaNormal } from "../components/ListaNormal"

export interface ITodo{
    title:string,
    id:number
}

export const Lista =()=>{
    const [todos, setToDo] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
        setToDo(saved);
      }, []);
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);
    const addHandler = (title: string) => {
        const newTodo = {
          title: title,
          id: Date.now(),
          completed: false,
        };
        setToDo((prev) => [newTodo, ...prev]);
      };
      const removeHandler = (id: number) => {
        const shoundRemove = window.confirm(
          "jestes pewien , że chcesz usunąc ten element"
        );
    
        if (shoundRemove) {
          setToDo((prev) => prev.filter((todo) => todo.id !== id));
        }
      };
    

    return(
        <div><FormList onAdd={addHandler}/>
        <ListaNormal todos={todos} onRemove={removeHandler}/>
        </div>
    )
}