import { create } from "zustand";
import { persist } from "zustand/middleware";

export const todosStore = create( 
    persist((set)=>({
        todoList: [],
            addTodos : (todo,content)=>set((state=>({
                todoList : [...state.todoList, {
                    id: Date.now(),
                    title : todo ,
                    content,
                    isDone : false
                }]
            }))),
            deleteTodos:(id)=>set((state)=>({
                todoList: state.todoList.filter((item)=>item.id !== id)
            })),
            completeTodos : (id)=>set((state)=>({
                todoList : state.todoList.map((item)=>{
                return   item.id === id ? {...item,isDone:!item.isDone} : item
                })
            })),
        
    }),{
        name : "todo-storage"
    })   
)