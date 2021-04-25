import React , {useState} from 'react'
import ExpenseCard from './ExpenseCard'
import './ExpenseList.css'
import ExpenseChart from './ExpenseChart'
function ExpenseItems(props) {
    
    const [total , setTotal] = useState(0)
    const [toFilter , setFilter] = useState("0")
    
    const FilterdComponent = ( ) => {
        if(toFilter === "0"){
            let totalsum = 0
            props.data.forEach(element => {
                totalsum += parseInt(element.amount)
            });
            setTotal(totalsum)
            return <>
            {props.data.map(items => <ExpenseCard data = {items}/>)} 
            </>
        }
        else {
            
            let totalsum = 0
            props.data.forEach(element => {
                
                if( new Intl.DateTimeFormat('en', { year: 'numeric' }).format(element.date) == toFilter){
                    totalsum += parseInt(element.amount)
                }
            });
            setTotal(totalsum)
            return <>
            {props.data.map(items => new Intl.DateTimeFormat('en', { year: 'numeric' }).format(items.date) == toFilter && <ExpenseCard data = {items}/>)} 
            </>
        }
        
    }
    
    return (
        <div className  = "ExpenseCards">
            <h2>Your Expenses</h2>
            <div className = "Selector">
            <select onChange = {(event) => {setFilter(event.target.value)}} id="filterout" name="carlist" form="carform">
                <option value="0">All</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2018">2017</option>
                
            </select>
            </div>
            <FilterdComponent/>
            {total === 0 &&<h3 style = {{textAlign : 'center' , color : 'red'}}>No Expense Found</h3>}
            <div className = "Total">
                <p>Total =  {total} RS</p>
            </div>
            {/* <ExpenseChart data = {props.data}/> */}
        </div>
    )
}

export default ExpenseItems
