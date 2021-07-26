import { ITodo } from "../pages/Lista"

type TodoListProps = {
    todos: ITodo[];
    // onToggle: (id: number) => void;
    onRemove: (id: number) => void;
  };
 


export const ListaNormal =({todos,onRemove}:TodoListProps)=>{
    const removeHandler = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
    
        onRemove(id);
      };
    return(
        <div>
            {todos.map(todo=><div>{todo.title}<button onClick={(e) => removeHandler( e, todo.id)}>Usun</button></div>)}
        </div>
    )
}