import React, { useRef, useState } from "react"


export interface TodoFormProps {
    onAdd(title: string): void;
  }
  

export const FormList =({onAdd}:TodoFormProps)=>{
    const ref = useRef<HTMLInputElement>(null);
    

    const keyDownHandler = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
          //   console.log(title);
          //   setTitle("");
          onAdd(ref.current!.value);
          ref.current!.value = "";
        }
      };
    return(
        <div>
            <label htmlFor='addList'>Add List</label>
            <input type='text' name='addlist' ref={ref} onKeyDown={keyDownHandler}/>
            <button>Dodaj</button>
        </div>
    )
}