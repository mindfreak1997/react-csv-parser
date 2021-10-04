import React,{useState} from 'react'
import Papa from 'papaparse'
import ReportContainer from './report-container'

const CsvParseContainer=(props)=>{
    const [file,setFile]=useState('')
    const [data,setData]=useState([])
    const handleFile=(e)=>{
        setFile(e.target.files[0])
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        Papa.parse(file,{
            complete:function(result){
                setData(result.data)
                console.log(result.data)
            },
            header:true,
            skipEmptyLines:true,
        })
    }
    return(
        <div>
            <h1>File Upload + CSV parser</h1>
            <form onSubmit={handleSubmit}>
                <input type='file' onChange={handleFile} /> <br/>
                <input type='submit' />
            </form>
            <hr/>
            <ReportContainer data={data}/>
        </div>
    )
   /*  const assembleData=(data)=>{
        const onlyParticipents=data.filter(ele=>{
            return !ele.includes('Guest')&& !ele.includes('')
            
        })
        const  keys = ['name','email','duration','guest']
        const newArray= onlyParticipents.map(ele=>{
        return    ele.reduce(function(result, value, index) {
            result[keys[index]] = value;
            return result
          }, {})

        })
        setData(newArray)
        
    }
   
    
    return (
        <div>
            <b>File Upload  + CSV parser</b><br/>
            <CSVReader onFileLoaded={(data, fileInfo) =>{
               assembleData(data) 
               
                
            } } /><button>Upload</button>
            <hr/>
            <ReportContainer data={data}/>
            
        </div>
    )*/
} 
export default CsvParseContainer