import { create } from "zustand";

export const todosStore = create((set)=>({

    todoList: [],
    addTodos : (todo)=>set((state=>({
        todoList : [...state.todoList, {
            id: Date.now(),
            title : todo ,
            content : "",
            isDone : false
        }]
    })))


}))