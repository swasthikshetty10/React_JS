import React , {useState} from 'react'
import './TodoForm.css'
function TodoForm(props) {



    const [enteredTodo , setTodo] = useState("")
    const todoChangeHandler = (event) => {
        setTodo(event.target.value)
    };
    const [enteredDate , dateTodo] = useState("")
    const dateChangeHandler = (event) => {
        dateTodo(event.target.value)
    };
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSaveTodoData(TodoData) // communicating upwords from child to parent component 
        // console.log(event)
        event.target[0].value = ""
    }
    const TodoData = { 
    title : enteredTodo,
    date : new Date(enteredDate)
    }
    
    return (
        <div className  = "TodoForm">
            <form onSubmit = {submitHandler}>
                <div class = "add_text">
                    <label>Todo : </label>
                    <input type = "text" placeholder = "what you want to add?" onChange = {todoChangeHandler}></input>

                </div>
                <div class = "add_text">
                    <label>Date Deadline : </label>
                    <input type = "date" onChange = {dateChangeHandler}></input>

                </div>
                <div class = "add_button">
                    <button type = 'submit'>submit</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm
