import { create } from "zustand";

export const todosStore = create((set)=>({

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
    }))


}))