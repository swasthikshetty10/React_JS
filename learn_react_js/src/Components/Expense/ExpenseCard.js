import React from 'react'
import "./ExpenseCard.css"
function ExpenseCard(props) {
    console.log(props);
    try {
        return (
            <div className = {"ExpenseCard " + props.data.key}>
                <div className = "ExpenseDate">
                    <p>{props.data.date.getMonth().toString()}/</p>
                    <p>{props.data.date.getDate().toString()}/</p>
                    <p>{props.data.date.getFullYear().toString()}</p>
                    
                </div>
                    
                <div className = "ExpenseTitle" >
                    <p>{props.data.title}</p>
                </div>
                <div className = "ExpenseTitle" >
                    <p>{props.data.amount}</p>
                </div>
            </div>
        )
    } catch (error) {
        console.log(error);
        return (
            <div ClassName = "ExpenseCard">
                {/* <div className = "ExpenseDate">
                    <p>{props.data.date}</p>
                    <p>{props.data.date}</p>
                </div>
                    
                <div className = "ExpenseTitle" >
    
                </div> */}
                
            </div>
        )
    }
    
}

export default ExpenseCard
