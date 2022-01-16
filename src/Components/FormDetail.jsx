import React from 'react'
import { useParams , Link} from 'react-router-dom'
import { useSelector } from 'react-redux';



function FormDetail() {
 
    const {id} = useParams()
    const count = useSelector((state) => state.formoverall.formArray) 
    const detail = count.find((item)=> item.formId === id)
   
    React.useEffect(() => {
        console.log(detail)
    }, []);
    
    return (
        <div>
            <h1>{detail.formName}</h1>
            <h2>{detail.question}</h2>
            <label for="">{detail.option1}</label>
            <input type={detail.optionType} name="" id="" />
            <label for="">{detail.option2}</label>
            <input type={detail.optionType}name="" id="" />
            <label for="">{detail.option3}</label>
            <input type={detail.optionType} name="" id="" />
            <label for="">{detail.option4}</label>
            <input type={detail.optionType} name="" id="" />
            <Link to={'/'}><button>Submit</button></Link>
        </div>
    )
}

export default FormDetail
