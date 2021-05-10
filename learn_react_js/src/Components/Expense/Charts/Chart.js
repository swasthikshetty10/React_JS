import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'
import Chart from "react-apexcharts";
function BarChart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const dataPointLabels = props.dataPoints.map(dataPoint => dataPoint.label);
    // const totalMaximum = Math.max(...dataPointValues);
    const state = {
        options: {
            theme: {
                monochrome: {
                  enabled: true,
                  color: '#255aee',
                  shadeTo: 'light',
                  shadeIntensity: 0.65
                }
              },
            responsive: [
                {
                  breakpoint: 500,
                  options: {
                    plotOptions: {
                      bar: {
                        width : '300',
                        height : 'auto'
                      },
                      line : {
                        width : '300',
                        height : 'auto'
                      }
                    }
                  }
                }
            ],
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: dataPointLabels
          }
        },
        series: [
          {
            name: "series-1",
            data: dataPointValues
          }
        ]
      };
  
  
   
      return (
          <>
             <div className="Chart">

          
            
              <Chart
                options={state.options}
                series={state.series}
                type="bar"
                height= "auto"
                width= "100%"
              />
               </div>
            <div className="Chart">
              <Chart
                options={state.options}
                series={state.series}
                type="line"
                height= "auto"
                width= "100%"
              />
            </div>
            
       
        </>
      );

  
}
export default BarChart


