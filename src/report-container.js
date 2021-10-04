import React from 'react'
import ParticipentTable from './participents-table'
import DisplayCharts from './chart'

const ReportContainer=(props)=>{
    const {data}=props
    const onlyHost=data.filter(ele=> ele.Guest=='No')
    
    const handleDuration=()=>{
      const hour=  onlyHost[0]['Total Duration (Minutes)']/60
      const min=onlyHost[0]['Total Duration (Minutes)'] % 60
      return `${onlyHost[0]['Total Duration (Minutes)']}(${Math.floor(hour)} hour ${min} minutes)`
    }
    
    return (
        <div>
         {
            data.length > 0 && (
                <div>
                    <b>Host - {onlyHost[0]['Name (Original Name)']}</b><br/>
                    <b>Total participent-{data.length}</b><br/>
                    <b>Duration-{handleDuration()}</b>
                    <ParticipentTable data={data}/>
                    <DisplayCharts data={data}/>
                </div>
            ) 
         }
        </div>
    )
}
export default ReportContainer