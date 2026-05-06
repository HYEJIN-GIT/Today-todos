import { create } from "zustand";

export const todosStore = create((set)=>({

    todoList: [{
        id: Date.now(),
        title : "밥먹기" ,
        content : "자ㅅ세히",
        isDone : false
    },
    {
        id: Date.now(),
        title : "공부하기" ,
        content : "자ㅅ세히",
        isDone : false
    },{
        id: Date.now(),
        title : "c청소하기" ,
        content : "자ㅅ세히",
        isDone : false
    }],
    addTodos : (todo)=>set((state=>({
        todoList : [...state.todoList, {
            id: Date.now(),
            title : todo ,
            content : "",
            isDone : false
        }]
    })))


}))