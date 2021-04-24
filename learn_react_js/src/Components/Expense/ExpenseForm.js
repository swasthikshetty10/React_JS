import React , {useState} from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    
    const [enteredExpense , setExpense] = useState("")
    const ExpenseChangeHandler = (event) => {
        setExpense(event.target.value)
    };
    const [enteredDate , setExpenseDate] = useState("")
    const dateChangeHandler = (event) => {
        setExpenseDate(event.target.value)
    };
    const [enteredAmount , setExpenseAmmount] = useState("")
    const amountChangeHandler = (event) => {
        setExpenseAmmount(event.target.value)
    };

   // sending upwords from child to parent component
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event)
        if(enteredExpense != "" && enteredAmount != ""){
            if (enteredDate === ""){
                props.onSaveExpenseData( {...ExpenseData, date : new Date()})
            }else(
                props.onSaveExpenseData(ExpenseData)  
            )
            
            event.target[0].value = ""
            event.target[1].value = ""
            event.target[2].value = ""
        }
        else{
            alert("Please Fill the Form before submiting")
        }
       
        // console.log(event)
        
    }
    const ExpenseData = { 
    title : enteredExpense,
    amount : enteredAmount,
    key : Math.random().toString(),
    date : new Date(enteredDate),
    }
    
    return (
        <div className  = "ExpenseForm">
            <h2>Add Your Expense</h2>
            <form onSubmit = {submitHandler}>
                <div className = "add_text">
                    <label>Title: </label>
                    <input type = "text" placeholder = "add your expense here" onChange = {ExpenseChangeHandler}></input>

                </div>
                <div className = "add_text">
                    <label>Date : </label>
                    <input type = "date" onChange = {dateChangeHandler}></input>

                </div>
                <div className = "add_text">
                    <label>amount : </label>
                    <input type = "number" placeholder = "Enter Amount " min = "0"onChange = {amountChangeHandler}></input>

                </div>
                <div className = "add_button">
                    <button type = 'submit'>submit</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm


