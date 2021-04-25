import React from 'react'
import Chart from './Charts/Chart'
function ExpenseChart({ data }) {
    
    let ChartDataPoint = [
        {label: 'Jan' , value : 0},
        {label: 'Feb' , value : 0},
        {label: 'Mar' , value : 0},
        {label: 'Apr' , value : 0},
        {label: 'May' , value : 0},
        {label: 'Jun' , value : 0},
        {label: 'Jul' , value : 0},
        {label: 'Aug' , value : 0},
        {label: 'Sep' , value : 0},
        {label: 'Oct' , value : 0},
        {label: 'Nov' , value : 0},
        {label: 'Dec' , value : 0},
    ]
    
    data.forEach(element => {
        const expenseMonth =  element.date.getMonth();
        ChartDataPoint[expenseMonth].value += Number(element.amount);

        
    });
    console.log(ChartDataPoint)
        // console.log(data)
    return (
        <div>
             <Chart dataPoints = {ChartDataPoint} /> 
        </div>
    )
}

export default ExpenseChart
