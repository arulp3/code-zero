import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'


function Forms() {

    const count = useSelector((state) => state.formoverall.formArray)   
    
    

    return (
        <div>
            <h1>All forms goes here</h1>
           {count.map((item)=>{
               return(
                   <div key={item.formId}>
                       <h1><Link to={`/forms/${item.formId}`}>{item.formName}</Link></h1>
                   </div>
               )
           })}
        </div>
    )
}

export default Forms
