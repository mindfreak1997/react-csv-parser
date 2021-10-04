import React from 'react'
import Chart from 'react-google-charts'

const DisplayCharts=(props)=>{
    const {data}=props
    const chartData=[
        ['name','Duration']
    ]
    data.forEach(ele=>{
        chartData.push([ele['Name (Original Name)'],parseInt(ele['Total Duration (Minutes)'])])
    })
    console.log(chartData)
    return (
        <div style={{ display: 'flex', maxWidth: 450 }}>
            <Chart
            width={400}
            height={300}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={chartData}
            options={{
                title: '',
                chartArea: { width: '30%' },
                hAxis: {
                  title: 'Student Names',
                  minValue: 0,
                },
                vAxis: {
                  title: 'minutes attended',
                },
              }}
              legendToggle
            
            />
          
        </div>
    )
}
export default DisplayCharts