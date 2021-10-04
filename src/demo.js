import React, {  useState } from 'react'
import Papa from 'papaparse'
const FileContainer = (props) => {

    const [ fileData, setFileData ] = useState('')
    const [ data, setData ] = useState([])

    // for handling input type file 
    const handleFile = (e) => {
        const file = e.target.files[0]
        setFileData(file)
    }

    // for handling form data after submit
    const handleSubmit = (e) => {
        e.preventDefault()
        // papaparse helps to convert csv data to 2d array
        Papa.parse(fileData, {
            complete : function(result) {
                setData(result.data)
                console.log(result.data)
            }
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
           
        </div>
    )
}
export default FileContainer
