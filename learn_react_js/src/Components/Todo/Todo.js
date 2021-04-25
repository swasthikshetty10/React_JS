import React from 'react'
import './Todo.css'
import Todolist from './Todolist'
import TodoForm from "./TodoForm"
function Todo() {

    const SaveTodoDataHandller = (enteredTodoData) => {  //eventlistner from child componet it will be triggerd whenever child calls this function  
        const TodoData = {
            ...enteredTodoData,
            id: Math.random.toString()
        };
        console.log(TodoData);
        
    }

    return (
        <>
        <div className = "TodoHeading">
            <h2> Todo List </h2>
        </div>

        <div className = "TodoForm">
        <TodoForm onSaveTodoData = {SaveTodoDataHandller}/> 
        </div>

        <div className = "TodoItems">
        <Todolist text = "wowow"/>
        <Todolist text = "2"/>
        </div>
        
        
         </>
    )
}

export default Todo
