import React from 'react'
import ModalPage from './ModalPage';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


function CreatePage() {
    
    const count = useSelector((state) => state.formoverall.formArray)
    
   const [title, settitle] = React.useState("");
   const [modalState, setmodalState] = React.useState(false)

   const getTitle = ()=>{
       console.log(title)
       setmodalState(true)
   }

    return (
        <div>
             <h1>Number of forms : {count.length}</h1>
             
            <input type="text" onChange={(e)=>{settitle(e.target.value)}} placeholder='Enter the title of your form'/>
            <button onClick={getTitle}>Create a form</button>
            <ModalPage ariaHideApp={false} showness={modalState} title={title}/>
            <h2><Link to={'/forms'}>Forms</Link></h2>
        </div>
    )
}

export default CreatePage
