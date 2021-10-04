import React from 'react'

const ParticipentTable=(props)=>{
    const {data}=props
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      data.map((ele,i)=>{
                          return (
                              <tr key={i}>
                                  <td>{ele['Name (Original Name)']}</td>
                                  <td>{ele['User Email']}</td>
                                  <td>{ele['Total Duration (Minutes)']}</td>
                              </tr>
                          )
                      })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ParticipentTable