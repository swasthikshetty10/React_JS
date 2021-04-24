import React from 'react'
import ExpenseCard from './ExpenseCard'
import './ExpenseList.css'
function ExpenseItems(props) {
    const total = 0
    props.data.forEach(element => {
        console.log(element)
    });
    return (
        <div className  = "ExpenseCards">
            <h2>Your Expenses</h2>
            {  props.data.map(items => <ExpenseCard data = {items}/>) }
            <div className = "Total">
                <p>Total =  {total} RS</p>
            </div>
          
        </div>
    )
}

export default ExpenseItems
