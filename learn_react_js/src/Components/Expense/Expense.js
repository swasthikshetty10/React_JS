import React , {useState}from 'react'
import ExpenseForm from "./ExpenseForm"
import ExpenseItems from "./ExpenseItems" 
function Expense() {
    const [allExpense , setAllExpense] = useState([])
    const SaveExpenseData =  (ExpenseData) =>{
        console.log(ExpenseData)
        setAllExpense(prevExpenses => {return [ExpenseData, ...allExpense ]})
    }

    return (
        <div>
            <ExpenseForm onSaveExpenseData = {SaveExpenseData}/>
            <ExpenseItems data = {allExpense} />
        </div>
    )
}

export default Expense
